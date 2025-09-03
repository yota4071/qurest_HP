# QURESTブログ 記事作成ガイド

このドキュメントでは、QURESTウェブサイトのブログ記事の作成方法について説明します。

## 🚀 現在のシステム概要

### シンプルなワークフロー
```
記事作成 → Git Push → 自動デプロイ → 公開
```

### 特徴
- ✅ **シンプル**: MarkdownファイルをプッシュするだけでOK
- ✅ **高速**: Next.js静的生成による高速表示
- ✅ **自動最適化**: 画像の自動最適化・WebP変換
- ✅ **SEO対応**: メタデータ自動生成

## 📝 ブログ記事の作成方法

### 手順
1. `content/blog/YYYY-MM-DD-記事名.md` ファイルを作成
2. フロントマターとコンテンツを記述
3. 画像は `public/images/` に配置
4. Git add → commit → push
5. 自動的に本番環境にデプロイ・公開

## 📝 記事作成例

### サンプル記事ファイル: `content/blog/2025-09-01-new-feature.md`

```markdown
---
title: "新機能のお知らせ"
date: "2025-09-01"
author: "開発チーム"
categories: ["技術", "お知らせ"]
tags: ["React", "Next.js", "新機能"]
excerpt: "今回のアップデートで追加された新機能について詳しく解説します。"
---

# 新機能のお知らせ

こんにちは、開発チームです。

## 新機能の概要

今回のアップデートでは、以下の機能を追加しました。

### 機能1: ダークモード対応

ユーザビリティの向上のため、ダークモードに対応しました。

![ダークモードのスクリーンショット](/images/darkmode-screenshot.webp)

### 機能2: パフォーマンスの向上

- 初期読み込み時間を30%短縮
- 画像の遅延読み込み実装
- キャッシュ戦略の最適化

## 技術詳細

使用した技術スタック:

```typescript
// 新しいコンポーネントの例
interface FeatureProps {
  title: string;
  description: string;
}

const NewFeature: React.FC<FeatureProps> = ({ title, description }) => {
  return (
    <div className="feature">
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};
```

詳細な実装については、[技術ブログ](/blog/2025-09-01-technical-details)をご覧ください。

## まとめ

今回のアップデートにより、ユーザー体験が大幅に向上しました。
今後も継続的に改善を行ってまいります。

---

**お問い合わせ**: [Contact](/contact)
```

## 📄 記事フォーマット詳細

### 必須フロントマター
```yaml
---
title: "記事タイトル"                    # 必須: SEOにも影響
date: "YYYY-MM-DD"                      # 必須: 記事の公開日
author: "著者名"                        # 必須: 記事の執筆者
categories: ["カテゴリ1", "カテゴリ2"]   # 必須: ブログのカテゴリ分類
tags: ["タグ1", "タグ2", "タグ3"]       # 必須: 記事のタグ
excerpt: "記事の要約文"                 # 必須: 記事一覧で表示される要約
---
```

### 利用可能なカテゴリ
- `"技術"` - 技術関連の記事
- `"プロジェクト"` - プロジェクトの紹介や進捗
- `"お知らせ"` - 重要な告知や更新情報
- `"その他"` - その他の記事

### サポートしているマークダウン記法

#### 基本記法
```markdown
# 大見出し (h1)
## 中見出し (h2)  
### 小見出し (h3)

**太字** *斜体*

- リスト項目1
- リスト項目2

1. 番号付きリスト1
2. 番号付きリスト2

[外部リンク](https://example.com)
[内部リンク](/about)

> 重要な引用文や注意事項

`インラインコード`
```

#### コードブロック
```markdown
```javascript
// JavaScript の例
function greet(name) {
  return `Hello, ${name}!`;
}
```

```typescript  
// TypeScript の例
interface User {
  id: number;
  name: string;
}
```

```python
# Python の例
def calculate_total(items):
    return sum(item.price for item in items)
```

#### 表の作成
```markdown
| 項目 | 説明 | ステータス |
|------|------|-----------|
| 機能A | 基本機能 | ✅ 完了 |
| 機能B | 拡張機能 | 🚧 開発中 |
```

### カスタムコンポーネント
```markdown
<!-- Nom!Nom!専用テキスト (Bangerフォント適用) -->
<NomNomText />
<!-- または -->
<NomNomText>Nom!Nom!</NomNomText>
```

## 🖼️ 画像の使用方法

### 画像ファイルの配置
```
public/images/
├── screenshot1.webp
├── feature-demo.jpg  
└── team-photo.png
```

### 記事内での画像の使用
```markdown
![画像の説明](/images/filename.webp)
```

**重要**: 
- 画像は必ず `public/images/` フォルダに配置
- パスは `/images/` から始める（先頭の`/`を忘れずに）
- WebP形式推奨（ファイルサイズが小さく高品質）

### 自動最適化機能
- Next.js Image コンポーネントによる自動最適化
- WebP変換、リサイズ、遅延読み込み
- レスポンシブ画像生成

## 🧪 ローカル開発・テスト

### 開発サーバーの起動
```bash
# 開発サーバー起動
npm run dev

# ブラウザで確認
# http://localhost:3000/blog
```

### 記事確認方法
1. ローカルサーバー起動
2. `http://localhost:3000/blog` でブログ一覧を確認
3. 新しい記事が表示されているかチェック
4. 記事リンクをクリックして内容を確認

### ビルドテスト（デプロイ前確認）
```bash
# 本番ビルド実行
npm run build

# ビルド成功後、プロダクションサーバー起動
npm run start
```

## 🚀 デプロイの流れ

### 現在のシンプルなデプロイ
```
1. 記事作成・編集
2. Git でコミット・プッシュ
   git add .
   git commit -m "ブログ記事追加: タイトル"
   git push
3. Vercel が自動デプロイ
4. 数分後に本番サイトに反映
```

### デプロイ状況の確認
- [Vercel Dashboard](https://vercel.com) でデプロイ状況確認
- エラーがある場合はビルドログで詳細確認

## ⚠️ よくある問題と解決方法

### 1. 画像が表示されない
**問題**: `404 Not Found` や画像が表示されない

**解決方法**:
```bash
# ✅ 正しい配置場所
public/images/filename.webp

# ✅ 正しいMarkdown記法  
![説明](/images/filename.webp)

# ❌ よくある間違い
![説明](\images\filename.webp)  # バックスラッシュ使用
![説明](images/filename.webp)   # 先頭の / がない
```

### 2. フロントマターエラー
**問題**: ビルド時にフロントマター関連のエラー

**解決方法**:
```yaml
# ✅ 必須フィールドを全て記述
---
title: "タイトル"        # ダブルクォート必須
date: "2025-09-01"      # YYYY-MM-DD 形式
author: "著者名"        # 文字列
categories: ["技術"]    # 配列形式
tags: ["React"]         # 配列形式  
excerpt: "要約文"       # 文字列
---
```

### 3. コードブロックが正しく表示されない
**問題**: シンタックスハイライトが効かない

**解決方法**:
```markdown
# ✅ 正しい書き方
```javascript
const hello = "world";
```

# ❌ 間違った書き方
```js  # 言語名が不正確
const hello = "world";
```

### 4. リンクエラー
**問題**: 内部リンクが 404 になる

**解決方法**:
```markdown
# ✅ 内部リンク（サイト内）
[採用情報](/recruit)
[ブログ一覧](/blog)

# ✅ 外部リンク
[GitHub](https://github.com/example)
```

### 5. デプロイエラーのデバッグ
**Vercel でのエラー確認**:
1. [Vercel Dashboard](https://vercel.com/dashboard) にアクセス
2. プロジェクト → Deployments
3. 失敗したデプロイをクリック
4. "Build Logs" でエラー詳細を確認

## 📝 記事作成のベストプラクティス

### 良い記事を書くためのコツ

#### タイトル
- 具体的で分かりやすく
- SEOを考慮（検索されそうなキーワードを含める）
- 32文字以内推奨

#### 要約（excerpt）
- 記事の内容を2-3行で簡潔に
- 読み手が「読みたい」と思える内容に

#### カテゴリとタグ
- カテゴリ: 大まかな分類（"技術", "プロジェクト"等）
- タグ: 具体的なキーワード（"React", "Next.js"等）

#### 見出し構造
```markdown
# 記事タイトル (h1) - 1つだけ
## 大きな章 (h2)
### 詳細な節 (h3)
#### 細かい項目 (h4)
```

#### 画像の使用
- 記事の内容を補完する画像を適切に配置
- alt属性で画像の説明を記載
- WebP形式を推奨（ファイルサイズが小さい）

### チェックリスト
記事公開前に確認：

- [ ] フロントマターの必須項目が全て記載されている
- [ ] 画像が正しく表示される（`/images/`パス確認）
- [ ] リンクが正しく動作する
- [ ] コードブロックが適切にハイライトされている
- [ ] 誤字脱字がない
- [ ] ローカルで記事が正しく表示される

## 🚀 クイックスタートガイド

### 初めての記事作成（5分で完了）

1. **ファイル作成**
   ```bash
   # content/blog/ フォルダに新しいファイルを作成
   content/blog/2025-09-03-my-first-post.md
   ```

2. **基本テンプレートをコピー**
   ```markdown
   ---
   title: "私の最初の記事"
   date: "2025-09-03"
   author: "あなたの名前"
   categories: ["お知らせ"]
   tags: ["初投稿", "ブログ"]
   excerpt: "QURESTブログへの初投稿です。よろしくお願いします！"
   ---

   # 私の最初の記事

   こんにちは！QURESTチームに新しく加わった○○です。

   ## 自己紹介

   - 名前: ○○
   - 担当: ○○
   - 好きな技術: ○○

   今後ともよろしくお願いします！
   ```

3. **保存・プッシュ・完了**
   ```bash
   git add content/blog/2025-09-03-my-first-post.md
   git commit -m "ブログ記事追加: 私の最初の記事"
   git push
   ```

---

## 💡 質問・サポート

記事作成で困ったときは：

1. **このドキュメント**で基本的な書き方を確認
2. **existing記事**（`content/blog/`内）を参考にする
3. **チームメンバー**に相談
4. **GitHub Issues**でバグ報告や機能要望

---

**Happy Blogging! 🎉**