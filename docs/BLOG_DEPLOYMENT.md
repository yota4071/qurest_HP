# QURESTブログ デプロイメントガイド

このドキュメントでは、QURESTブログの自動デプロイメント設定と使用方法について説明します。

## 🚀 デプロイメント概要

### アーキテクチャ
```
GitHub Repository → GitHub Actions → Vercel → 本番環境
```

### 自動化レベル
- ✅ **完全自動化**: ブログ記事をコミットするだけで自動デプロイ
- ✅ **品質チェック**: ESLint、TypeScript、ブログ検証
- ✅ **プレビュー**: プルリクエスト毎にプレビュー環境
- ✅ **簡単記事作成**: GitHub Issue から自動記事生成

## 📝 ブログ記事の投稿方法

### 方法1: GitHub Issueから自動作成 ⭐️推奨
1. GitHubリポジトリで「New Issue」をクリック
2. 「📝 ブログ記事の作成」テンプレートを選択
3. フォームに記事情報を入力
4. Issue作成 → 自動でPR生成 → レビュー → マージ → 公開

### 方法2: 直接ファイル作成
1. `content/blog/YYYY-MM-DD-slug.md` ファイルを作成
2. フロントマターとコンテンツを記述
3. プルリクエスト作成
4. レビュー → マージ → 公開

## 🔧 初期セットアップ

### 1. Vercel連携設定
以下の環境変数をGitHubリポジトリのSecretsに設定：

```
VERCEL_TOKEN=your_vercel_token
VERCEL_ORG_ID=your_org_id  
VERCEL_PROJECT_ID=your_project_id
```

#### 取得方法:
1. [Vercel Dashboard](https://vercel.com/dashboard)にアクセス
2. **VERCEL_TOKEN**: Settings → Tokens → Create Token
3. **VERCEL_ORG_ID**: Project Settings → General → Project ID
4. **VERCEL_PROJECT_ID**: 同上

### 2. GitHub Actions有効化
- リポジトリの「Actions」タブで有効化
- 必要な権限の付与

## 📋 ワークフロー詳細

### メインワークフロー (`ci-cd.yml`)
```yaml
trigger: push to main/develop, PR to main
jobs:
  1. quality-check    # ESLint, TypeScript
  2. blog-validation  # ブログ記事検証
  3. build-test      # ビルドテスト
  4. deploy          # 本番デプロイ (main only)
```

### プレビューワークフロー (`preview-deploy.yml`)
```yaml
trigger: PR作成/更新
jobs:
  1. preview-deploy  # Vercelプレビューデプロイ
  2. PR コメント     # プレビューURLとブログリンク
```

### ブログ自動作成 (`create-blog-post.yml`)
```yaml
trigger: Issue作成 (blog label)
jobs:
  1. parse-issue     # Issueコンテンツ解析
  2. create-file     # マークダウンファイル生成
  3. create-pr       # プルリクエスト作成
  4. close-issue     # Issue自動クローズ
```

## 📄 ブログ記事フォーマット

### フロントマター
```yaml
---
title: "記事タイトル"                    # 必須
date: "YYYY-MM-DD"                      # 必須 
author: "著者名"                        # 必須
categories: ["カテゴリ1", "カテゴリ2"]   # 必須
tags: ["タグ1", "タグ2", "タグ3"]       # 必須
image: "/blog/images/image.jpg"         # オプション
excerpt: "記事の要約"                   # 必須
---
```

### マークダウン記法
```markdown
# 見出し1
## 見出し2  
### 見出し3

**太字** *斜体*

- リスト項目1
- リスト項目2

1. 番号リスト1
2. 番号リスト2

[リンク](https://example.com)

![画像](path/to/image.jpg)

> 引用文

`インラインコード`

```typescript
// コードブロック
const example = "Hello World";
```

| 表 | の | 例 |
|---|---|---|
| A | B | C |
```

### カスタムコンポーネント
```markdown
<!-- Nom!Nom!テキスト (Bangerフォント適用) -->
<NomNomText />
<!-- または -->
<NomNomText>Nom!Nom!</NomNomText>
```

## 🖼️ 画像の管理

### 画像配置
```
public/blog/images/
├── nom-nom-launch.jpg
├── team-photo.jpg
└── tech-stack.png
```

### 使用方法
```markdown
![画像の説明](/blog/images/filename.jpg)
```

### 最適化
- Next.js Image コンポーネントが自動最適化
- WebP変換、リサイズ、遅延読み込み

## 🧪 テスト・検証

### ローカル開発
```bash
npm run dev
# http://localhost:3000/blog
```

### ビルドテスト
```bash
npm run build
npm run start
```

### ブログ検証スクリプト
```bash
# 記事の検証
node -e "
const { getAllPosts } = require('./src/lib/blog.ts');
console.log(getAllPosts());
"
```

## 🔄 デプロイメントフロー

### 通常フロー
```
1. 記事作成/編集
2. プルリクエスト作成
3. GitHub Actions実行
   - コード品質チェック
   - ブログ記事検証  
   - ビルドテスト
   - プレビューデプロイ
4. レビュー・承認
5. mainブランチにマージ
6. 本番環境自動デプロイ
```

### Issue自動作成フロー
```
1. GitHub Issueでブログ記事テンプレート入力
2. Issue作成
3. GitHub Actions実行
   - マークダウンファイル生成
   - プルリクエスト自動作成
   - Issue自動クローズ
4. PR レビュー・マージ
5. 本番環境デプロイ
```

## ⚠️ トラブルシューティング

### よくある問題

#### 1. ビルドエラー
```bash
# フロントマター形式チェック
# 必須フィールド: title, date, author, categories, excerpt
```

#### 2. 画像が表示されない
```bash
# パスを確認: /blog/images/filename.jpg
# ファイル存在確認: public/blog/images/
```

#### 3. デプロイエラー  
```bash
# Vercel環境変数確認
# GitHub Secrets設定確認
```

#### 4. プレビューデプロイ失敗
```bash
# プルリクエストのActions ログ確認
# Vercel Dashboard でエラー詳細確認
```

### デバッグ方法

#### GitHub Actions ログ
1. リポジトリの「Actions」タブ
2. 失敗したワークフローをクリック
3. ログを確認してエラー箇所を特定

#### Vercel ログ  
1. [Vercel Dashboard](https://vercel.com/dashboard)
2. プロジェクト → Deployments
3. 失敗したデプロイをクリック
4. Build Logs で詳細確認

## 🎯 ベストプラクティス

### 記事作成
- **わかりやすいタイトル**: SEO も考慮
- **適切な要約**: 記事の内容を簡潔に
- **カテゴリ・タグ**: 一貫性のある分類
- **画像**: 記事の内容に関連する適切な画像

### 品質管理
- **プルリクエストレビュー**: チーム内でのレビュー
- **プレビュー確認**: マージ前に必ずプレビューで確認
- **リンクチェック**: 外部リンクの動作確認

### SEO対策
- **メタデータ**: title, description の最適化
- **適切な見出し構造**: h1 → h2 → h3 の順序
- **alt属性**: 画像には適切な説明

## 📈 運用・保守

### 定期メンテナンス
- **依存関係更新**: 月1回程度
- **セキュリティ更新**: 随時
- **パフォーマンス確認**: アクセス解析

### バックアップ
- **Git履歴**: 自動バックアップ
- **画像ファイル**: 定期バックアップ推奨

### 監視
- **Vercel Analytics**: アクセス分析
- **GitHub Actions**: デプロイ状況監視

---

## 🤝 貢献方法

ブログ記事の投稿や改善提案は以下の方法で：

1. **記事投稿**: GitHub Issue → 自動PR生成
2. **バグ報告**: GitHub Issue で報告
3. **機能提案**: GitHub Discussions で議論
4. **コード改善**: プルリクエスト作成

---

**質問・サポート**: [GitHub Discussions](リポジトリURL/discussions) で お気軽にご質問ください！