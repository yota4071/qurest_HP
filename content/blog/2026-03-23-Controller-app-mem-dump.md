---
title: "3000円の謎中華コントローラを買ったら、勝手にPCがTorrentのシードサーバーにされた話"
date: "2026-03-23"
author: "Waka"
categories: ["技術","ネットワーク","解析","セキュリティ"]
tags: ["アプリケーション", "メモリ解析", "セキュリティ", "リーバスエンジニアリング"]
excerpt: "BIGWONの公式アプリの行儀の悪い挙動を解析しました"
---

# 3000円の謎中華コントローラを買ったら、勝手にPCがTorrentのシードサーバーにされた話

バイオハザードRE:2を遊ぼうと思って、ふと「BIGBIG WON」のコントローラのファームウェアを更新したのが運の尽きだった。

私が購入したのは「BIGBIG WON Mojhon Aether」というモデルだ。ホールセンサ仕様のジョイスティックに背面ボタン、極めつけは各種設定を弄れるディスプレイまで搭載していながら、Amazonで3000円台で投げ売りされている。コスパのバグみたいな製品で、ハードウェア自体の使い勝手は悪くない。

問題は、ファームウェアのアップデートを行うためにインストールした公式のユーティリティソフトの方だった。

アップデートを走らせて間もなく、ESET Internet Securityがけたたましく警告を吐き出した。ブロックされた宛先を見ると `http://tracker.zhuqiy.top/announce?info_hash=...` とある。BitTorrentのトラッカーに対するP2Pネットワークへの参加要求（Announce）だ。普段からWiresharkでパケットを眺めたり、低レイヤーの挙動を追ったりしている身としては、単なるデバイス管理アプリが外部に向けてP2P通信を試みている時点で嫌な予感しかしない。

即座にタスクマネージャーからBIGBIG WONの公式アプリを強制終了させた。しかし、ESETの警告は止まらない。詳細タブを開くと、`torrent_client.exe` という身も蓋もない名前のプロセスが、メインUIの裏でしぶとく居座り続けていた。

---

## メモリフォレンジックで丸裸にする

ユーザーに一切の通知もなく常駐し、P2Pネットワークへの接続を強行する。この得体の知れないプロセスの実態を明らかにするため、隔離環境に放り込んでメモリダンプを取得した。

手法はシンプルだ。プロセスのメモリ空間をダンプし、`strings` コマンドで人間が読める文字列を片っ端から抽出する。バイナリの逆アセンブルよりも遥かに手軽だが、コマンドライン引数、通信先URL、ログメッセージ、暗号化ライブラリの識別子、さらにはC++のマングルされたシンボル名まで——プロセスが「何者で、何をしていたか」を語る証拠が大量に釣れる。

抽出された文字列は合計約39万行、ファイルサイズにして数MBに達した。これを分類・横断検索していく。

---

## 隔離環境で暴かれた「手抜き」の正体

ひどく難読化された独自のスパイウェアでも出てくるかと思いきや、中身は驚くほどお粗末だった。

### 証拠1：User-Agent文字列

メモリダンプの中に、以下の文字列がそのまま残っていた。

```
client_test/2.0.11.0
```

これは、libtorrentのUPnPポートマッピングでルーターに送信されるdescription文字列だ。加えて、ネットワーク通信のUser-Agentヘッダには以下が使われていた。

```
libtorrent/2.0.11.0
```

**libtorrent**は、qBittorrentをはじめ世界中のBitTorrentクライアントの基盤として使われている、C++製のオープンソースP2Pライブラリだ。そして `client_test` は、そのリポジトリに含まれるただの**動作確認用CUIサンプルプログラム**である。

### 証拠2：Peer Fingerprint

BitTorrentプロトコルでは、各クライアントがpeer IDの先頭に自らの「指紋」を埋め込む慣習がある。メモリ上には大量のpeer IDが残っており、自機のものは以下の形式だった。

```
-LT20B0-Fl!.sNivC_KE
```

`-LT20B0-` を分解すると、`LT` = **L**ib**T**orrent、`20B0` = バージョン **2.0.11.0** のエンコーディングだ。これはlibtorrentのソースコードで定義されているフィンガープリント生成ロジックと完全に一致する。

### 証拠3：ヘルプ文字列の完全一致

メモリ上に、以下のヘルプメッセージがまるごと残っていた。

```
usage: client_test [OPTIONS] [TORRENT|MAGNETURL]
OPTIONS:
CLIENT OPTIONS
  -h                    print this message
  -f <log file>         logs all events to the given file
  -s <path>             sets the save path for downloads. This also determines
                        the resume data save directory. Torrents from the resume
                        directory are automatically added to the session on
                        startup.
  ...
LIBTORRENT SETTINGS
  --<name-of-setting>=<value>
                        set the libtorrent setting <n> to <value>
BITTORRENT OPTIONS
  -T <limit>            sets the max number of connections per torrent
  ...
```

このヘルプテキストは、libtorrentのGitHubリポジトリにある [`client_test.cpp`](https://github.com/arvidn/libtorrent/blob/RC_2_0/examples/client_test.cpp) とバイト単位で一致する。

### 証拠4：C++マングルシンボル

メモリダンプのpart_ab（後半パート）冒頭には、MSVC形式でマングルされたC++シンボル名が数百個並んでいた。

```
.?AV?$_Binder@...@http_tracker_connection@libtorrent@@...
.?AV?$_Binder@...@udp_tracker_connection@libtorrent@@...
.?AU?$handler@Upeer_connection@libtorrent@@...
.?AV?$_Binder@...@session_impl@aux@libtorrent@@...
.?AV?$_Binder@...@dht_tracker@dht@libtorrent@@...
.?AV?$_Binder@...@upnp@libtorrent@@...
.?AV?$_Binder@...@smart_ban_plugin@...@libtorrent@@...
```

`http_tracker_connection`、`udp_tracker_connection`、`peer_connection`、`session_impl`、`dht_tracker`、`upnp`、`smart_ban_plugin`——これらは全てlibtorrentの内部クラス名だ。つまりこのバイナリはlibtorrentを**静的リンク**してコンパイルされたものであり、独自の改造は加えられていない（改造するだけの技術力があれば、そもそもサンプルプログラムをそのまま使ったりしない）。

### 証拠5：ビルド環境の痕跡

OpenSSLのPDBパス情報から、ビルド環境の内部パスまでが丸見えだった。

```
D:\JiFei_ZG\SourceCode\vcpkg\buildtrees\openssl\x86-windows-rel\libcrypto-3.pdb
D:\JiFei_ZG\SourceCode\vcpkg\buildtrees\openssl\x86-windows-rel\libssl-3.pdb
OPENSSLDIR: "D:\JiFei_ZG\SourceCode\vcpkg\packages\openssl_x86-windows"
```

`D:\JiFei_ZG\SourceCode\` ——「JiFei」なる開発者もしくは組織が、Microsoftの `vcpkg` パッケージマネージャーを使い、OpenSSLとlibtorrentをx86（32bit）向けにビルドしていたことが分かる。Release buildでPDBパスをストリップし忘れるあたり、ビルドパイプラインの雑さが窺える。

**結論：BIGBIG WONの開発陣は、自前でまともなアップデーターのコードを書くことすら放棄し、OSSのおまけで付いてきたCUIのテストプログラムをコンパイルし、`torrent_client.exe` にリネームして、バックグラウンドで隠し実行していたのだ。**

---

## コマンドライン引数の完全復元——「2時間の強制労働」と帯域の搾取

メモリダンプから復元された起動時のコマンドライン引数の全貌は以下の通りだ。

```
"C:\Program Files (x86)\BIGBIG WON\torrent_client.exe"
  -s "C:\ProgramData\GamepadAssistant\downloads"
  --announce_to_all_trackers=true
  --announce_to_all_tiers=true
  --out_enc_policy=0
  --in_enc_policy=0
  --seed_time_limit=120
  --share_ratio_limit=30
  --download_rate_limit=500
  --upload_rate_limit=100
  -e 14400
  "C:\ProgramData\GamepadAssistant\BigBigWon_Setup.exe.NoWebSeed.torrent"
```

一つずつ意味と悪質さを読み解く。

### `-e 14400`：2時間の強制常駐

`client_test.cpp` のメインループは `std::this_thread::sleep_for(milliseconds(500))` で1周0.5秒に設定されている。`-e` はそのループ回数の上限を指定する引数だ。つまり 14,400 × 0.5秒 = **7,200秒 = きっちり2時間**。

ユーザーがコントローラの設定を終えてメインアプリを閉じても、裏で動くこのTorrentクライアントは2時間絶対に死なない。

### `--share_ratio_limit=30`：帯域の30倍搾取

シェアレシオ（共有率）の上限を30に設定している。自分がダウンロードしたデータ量の**30倍**——つまり **3000%** に達するまでアップロードを止めない。約42.7MBのインストーラーをダウンロードした場合、最大で約1.28GBをアップロードし続ける計算になる。

### `--announce_to_all_trackers=true` / `--announce_to_all_tiers=true`

通常のBitTorrentクライアントは、トラッカーリストの中から1つのtierに属する1つのトラッカーに順番にannounceする。この2つのフラグは、**全てのtierの全てのトラッカーに対して同時にannounce**を送る設定だ。後述するが、このtorrentファイルには120を超えるトラッカーURLが埋め込まれている。全弾同時発射だ。

### `--out_enc_policy=0` / `--in_enc_policy=0`

libtorrentの暗号化ポリシー設定で、値 `0` は `pe_forced`（Protocol Encryption強制）を意味する。P2P通信を必ずRC4で暗号化し、平文では接続しない。ISPの帯域制御（DPI）やセキュリティソフトの検知を回避する意図と推測される。

### `BigBigWon_Setup.exe.NoWebSeed.torrent`

ファイル名に含まれる **`NoWebSeed`** は極めて示唆的だ。BitTorrentには「Web Seed」という機能があり、通常のHTTPサーバーからもファイルをダウンロードできるフォールバック手段を提供する。これをわざわざ無効化したtorrentファイルを用意しているということは、**HTTP直接ダウンロードというまっとうな手段を意図的に排除し、P2P配布を最優先する設計思想**の表れだ。

### `--download_rate_limit=500` / `--upload_rate_limit=100`

ダウンロードは500KB/s、アップロードは100KB/sに制限されている。一見するとユーザーの帯域を圧迫しないための「配慮」にも見えるが、これは検知を避けるために通信量を抑えているだけだ。2時間×100KB/sなら最大720MBのアップロードになる。

---

## 120超のトラッカーへの絨毯爆撃

メモリダンプからは、このtorrentクライアントが接続を試みた（または実際にannounceを送信した）トラッカーURLが大量に抽出された。`grep` で一意なURLを抽出した結果、**120を超えるパブリックトラッカー**が確認された。以下はその一部だ。

```
http://tracker.zhuqiy.top:80/announce          ← ESETが最初に検知
https://tracker.zhuqiy.top:443/announce
http://bittorrent-tracker.e-n-c-r-y-p-t.net:1337/announce
http://tracker.openbittorrent.com:80/announce
http://tracker.opentrackr.org:1337/announce
udp://tracker.openbittorrent.com:80/announce
udp://tracker.leechers-paradise.org:6969/announce
udp://p4p.arenabg.com:1337/announce
udp://tracker.coppersurfer.tk:6969/announce
http://shubt.net:2710/announce
http://tracker1.bt.moack.co.kr:80/announce
https://t1.hloli.org:443/announce
udp://open.stealth.si:80/announce
udp://exodus.desync.com:6969/announce
udp://tracker.tiny-vps.com:6969/announce
http://tracker810.xyz:11450/announce
...（以下、合計120以上）
```

HTTP、HTTPS、UDPの3プロトコルを使い分け、世界中のパブリックトラッカーに対してannounceを絨毯爆撃している。このトラッカーリストは、有名な「best tracker list」系のGitHubリポジトリからコピーしてきたような顔ぶれだ。

メモリ上には、実際に送信されたHTTPリクエストの全文も残っていた。

```
GET /announce?info_hash=%a7D%9a%08%ec%8a%02%ff%11%e3%f5%b4%90O%0ac%d2%d7%00%18
    &peer_id=-LT20B0-Fl!.sNivC_KE
    &port=6881
    &uploaded=0
    &downloaded=0
    &left=44802168
    &corrupt=0
    &key=2AEAF2BF
    &event=started
    &numwant=200
    &compact=1
    &no_peer_id=1
    &supportcrypto=1
    &redundant=0
HTTP/1.1
```

`left=44802168` バイト、つまり配布対象ファイルのサイズは**約42.7MB**。`event=started`（スウォームへの参加開始通知）、`numwant=200`（一度に200個のピア情報をよこせ）。そして `supportcrypto=1` で、先述の暗号化強制設定を裏付けている。

ESETがこの通信をブロックした回数は、メモリ上の `locked by ESET Security` / `Blocked by ESET Security` の出現頻度から、**少なくとも318回以上**に達していた。1回ブロックされるたびにリトライを繰り返す設計だ。

---

## ルーターに穴を開ける狂気

帯域を勝手に使われるだけでも腹立たしいが、本当に背筋が凍ったのはネットワークへの干渉だ。

メモリダンプから、UPnP（Universal Plug and Play）によるSOAPリクエストの全文が復元された。

```xml
<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/"
  s:encodingStyle="http://schemas.xmlsoap.org/soap/encoding/">
  <s:Body>
    <u:AddPortMapping
      xmlns:u="urn:schemas-upnp-org:service:WANIPConnection:1">
      <NewRemoteHost></NewRemoteHost>
      <NewExternalPort>6881</NewExternalPort>
      <NewProtocol>TCP</NewProtocol>
      <NewInternalPort>6881</NewInternalPort>
      <NewInternalClient>192.168.0.14</NewInternalClient>
      <NewEnabled>1</NewEnabled>
      <NewPortMappingDescription>client_test/2.0.11.0</NewPortMappingDescription>
      <NewLeaseDuration>3600</NewLeaseDuration>
    </u:AddPortMapping>
  </s:Body>
</s:Envelope>
```

「外部からのTCP 6881番ポートへのアクセスを、`192.168.0.14`（このPC）へ直接通してくれ」という命令だ。同じリクエストがUDPに対しても発行されていた。

そして、恐ろしいことにこのリクエストは**成功していた**。メモリ上には以下のレスポンスが記録されている。

```xml
<u:AddPortMappingResponse
  xmlns:u="urn:schemas-upnp-org:service:WANIPConnection:1"/>
```

さらに、PCP（Port Control Protocol）によるマッピングログも残っていた。

```
add-mapping: proto: TCP port: 6881 local-port: 6881 action: add ttl: 0
update-mapping: proto: TCP port: 6881 local-port: 6881 action: add ttl: 0
==> port map [ mapping: 0 action: add transport: PCP proto: TCP
    local: 6881 external: 6881 ttl: 3600 ]
add-mapping: proto: UDP port: 6881 local-port: 6881 action: add ttl: 0
```

そしてルーターから取得された外部IPアドレスもダンプに残っている。

```
got router external IP address 182.20.35.180
```

ルーターのファイアウォールに勝手に穴を開け、C++で書かれた複雑なBitTorrentのネットワークパーサーを、インターネットの海へ無防備に晒している。もしlibtorrentのBencode処理やuTPハンドシェイクに脆弱性があった場合、攻撃者はそこへ向けて細工したパケットを一つ投げ込むだけでいい。バッファオーバーフローによるプロセスのクラッシュ（DoS）や、最悪の場合は任意のコード実行（RCE）の足場にされる。セキュリティを少しでもかじっていれば、頭に的を乗せてスラム街を歩くような暴挙だと分かるはずだ。

---

## 勝手にDHTノードにされる——「他人のダウンロード」まで手伝わされる

BitTorrentには、中央のトラッカーサーバーに依存しないピア発見メカニズムとして **DHT（分散ハッシュテーブル）** が存在する。libtorrentの設定上、DHTはデフォルトで有効だ。

メモリダンプから、DHTのブートストラップノードへの接続記録が見つかった。

```
dht.libtorrent.org:25401
```

そして実際に、DHTネットワーク上で**他のBitTorrentユーザーからの検索リクエストを受信・処理していた**記録がある。

```
[Mar 23 20:49:07] incoming dht get_peers: 1eeab4a58edf0b0f49a699369fa74c9727b1dcd1
[Mar 23 20:48:59] incoming dht get_peers: c890afa5bcca5536594cad94e8d3dcea722e4b8c
[Mar 23 20:47:42] incoming dht get_peers: 0f07b445db2946ff4c952611d5776af0c699ee3e
[Mar 23 20:48:56] incoming dht get_peers: 8929095b92f8afc915b9b18db606f83894a8acd7
[Mar 23 20:48:07] incoming dht get_peers: c289aa6b9bd0719aa1e4cba39f887a8e60ba73c5
...
```

`1eeab4a58edf0b0f49a699369fa74c9727b1dcd1` は今回のBigBigWon_Setup.exeのinfo_hashだが、それ以外のハッシュ——**まったく無関係な他人のファイルのピア検索にまで、自分のPCがDHTルーティングノードとして応答していた**ことを意味する。

つまりユーザーのPCは、BIGBIG WONのインストーラーの配布だけでなく、BitTorrentネットワーク全体のインフラの一部として無断で組み込まれていたのだ。

---

## 世界中のピアとの接続記録

メモリ上のログから、138件以上のピア接続/切断イベントが確認された。接続先のIPv6アドレスから、ピアの大半が日本国内のISPであることが分かる。

```
[Mar 23 20:48:58] BigBigWon_Setup.exe peer
  [ [2409:252:84a0:2b00:3525:1dbf:901b:4478]:6881 client: Unknown ]
  disconnecting (uTP) [sock_bind] [generic]: not supported (reason: 0)

[Mar 23 20:49:00] BigBigWon_Setup.exe peer
  [ [2400:4051:98a3:1400:b8b9:6787:a55:1928]:6881 client: Unknown ]
  disconnecting (uTP) [sock_bind] [generic]: not supported (reason: 0)

[Mar 23 20:49:03] BigBigWon_Setup.exe peer
  [ [240f:61:46fe:1:6207:4441:41fd:8daf]:6881 client: Unknown ]
  disconnecting (uTP) [sock_bind] [generic]: not supported (reason: 0)
```

`2409:`, `240f:`, `2400:`, `240b:`, `240e:`, `2408:` ——これらは日本のISP（NTT、KDDI、ソフトバンク等）に割り当てられたIPv6プレフィックスだ。つまり、**他のBIGBIG WONユーザーのPCもまた同じようにシードノードにされており、日本国内のユーザー同士でP2P網が形成されている**と推測される。

ESETのブロックによりuTPの接続確立は失敗しているが、ESETが入っていなければこれらのピアとの間で自社インストーラーのアップロード/ダウンロードが成立していたことになる。

---

## libtorrent設定値のダンプ

メモリ上からは、libtorrentの内部設定パラメータが網羅的に復元された。特に注目すべき項目を挙げる。

```
listen_interfaces
0.0.0.0:6881,[::]:6881

enable_upnp                     ← UPnP有効
enable_natpmp                   ← NAT-PMP有効（Apple系ルーターにも対応）
enable_lsd                      ← ローカルサービスディスカバリ有効
enable_dht                      ← DHT有効

announce_to_all_trackers        ← 全トラッカー同時announce
announce_to_all_tiers           ← 全tier同時

peer_fingerprint
-LT20B0-

dht_bootstrap_nodes
dht.libtorrent.org:25401

proxy_tracker_connections       ← トラッカー接続もプロキシ経由可能
validate_https_trackers         ← HTTPS証明書の検証
```

`0.0.0.0:6881,[::]:6881` ——IPv4とIPv6の両方で、ポート6881をリッスンしている。NAT-PMP（Apple系ルーターのポートマッピングプロトコル）まで有効化されており、ユーザーが使っているルーターの種類を問わず穴を開けにいく姿勢が見て取れる。

---

## 安さの代償

この `torrent_client.exe` 自体は、個人情報を抜き取るような純粋なマルウェアではない。バイナリの中身はオープンソースのlibtorrent client_testそのものであり、バックドアや独自のテレメトリ送信機構は確認されなかった。

しかし、ユーザーのPCを無断でP2Pのシードノードに仕立て上げ、ルーターのポートをこじ開け、上り帯域を搾取し、DHTネットワーク全体のルーティングインフラとしてまで酷使する、極めてタチの悪いPUA（Potentially Unwanted Application）であることは間違いない。

3000円台という破格の安さの裏には、メーカーのインフラ維持費の代わりに、ユーザーのリソースとセキュリティリスクを差し出すというグロテスクな取引が隠されていた。

---

## もし入れてしまったなら

もしこのソフトをPCに入れてしまったなら、やるべきことは明確だ。

1. **プロセスの停止と無力化**：タスクマネージャーから `torrent_client.exe` を強制終了し、`C:\Program Files (x86)\BIGBIG WON\torrent_client.exe` を削除またはリネームして二度と起動しないようにする。

2. **ルーターのポートマッピングの削除**：ルーターの管理画面（通常 `192.168.0.1` か `192.168.1.1`）にログインし、UPnPまたはポートフォワーディングの設定画面から、6881番ポートの転送ルールを手動で削除する。説明欄に `client_test/2.0.11.0` と表示されているのですぐ見つかるはずだ。

3. **ルーターのUPnP無効化の検討**：今回の件に限らず、UPnPはアプリケーションがルーターの設定を無断で変更できてしまう仕組みだ。ゲームのNAT越えなどに支障がなければ、この機会に無効化しておくことを推奨する。

4. **Torrent関連データの削除**：`C:\ProgramData\GamepadAssistant\downloads\` 以下に残っているtorrentデータとレジューム情報（`.resume` フォルダ）を削除する。

---

*※本記事の解析結果は、隔離環境で取得したメモリダンプの `strings` 解析に基づいています。バイナリの逆アセンブルやデコンパイルは行っていません。また、解析にはClaudeやGemini等のAIを活用しています。(行数が多すぎて.....)*