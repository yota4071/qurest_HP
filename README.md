# Qurest Inc. - Corporate Website

**正しい未来を創造する** - AI・IoT・Web技術で社会課題を解決するQurest Inc.の公式コーポレートサイト

![Next.js](https://img.shields.io/badge/Next.js-15.3.4-000000?style=flat-square&logo=next.js&logoColor=white)
![React](https://img.shields.io/badge/React-19.0.0-61DAFB?style=flat-square&logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=flat-square&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.1.11-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-12.23.3-0055FF?style=flat-square&logo=framer&logoColor=white)

## 🚀 概要

このプロジェクトは、Qurest Inc.の公式コーポレートサイトです。最新のWeb技術を使用して、モダンで魅力的なユーザー体験を提供します。

### ✨ 主な機能

- **📱 レスポンシブデザイン** - デスクトップ・タブレット・モバイル対応
- **🎨 モダンUI/UX** - Tailwind CSSとFramer Motionによる美しいデザイン
- **⚡ 高速パフォーマンス** - Next.js 15のApp Routerを活用
- **🎭 アニメーション** - Framer Motionによる滑らかなアニメーション効果
- **♿ アクセシビリティ** - 誰もが使いやすいWebサイト

### 📄 ページ構成

- **🏠 トップページ** (`/`) - 会社概要、サービス紹介、実績数値
- **🏢 会社紹介** (`/about`) - 企業理念、沿革、チーム紹介、会社概要
- **💼 サービス** (`/service`) - 事業内容、実績紹介（タブ切り替え）
- **📰 ニュース** (`/news`) - 最新情報・お知らせ
- **👥 採用情報** (`/recruit`) - 求人情報、募集要項
- **📞 お問い合わせ** (`/contact`) - コンタクトフォーム

## 🛠️ 技術スタック

### フロントエンド
- **[Next.js 15](https://nextjs.org/)** - React フレームワーク（App Router使用）
- **[React 19](https://react.dev/)** - UIライブラリ
- **[TypeScript](https://www.typescriptlang.org/)** - 型安全性の確保
- **[Tailwind CSS 4](https://tailwindcss.com/)** - ユーティリティファーストCSSフレームワーク
- **[Framer Motion](https://www.framer.com/motion/)** - アニメーションライブラリ

### 開発ツール
- **ESLint** - コード品質管理
- **PostCSS & Autoprefixer** - CSS処理
- **Vercel** - デプロイメント・ホスティング

## 🚀 開発環境のセットアップ

### 前提条件
- Node.js 18.x 以上
- npm, yarn, pnpm, または bun

### インストール

```bash
# プロジェクトのクローン
git clone https://github.com/your-org/qurest_hp.git
cd qurest_hp

# 依存関係のインストール
npm install
# または
yarn install
# または
pnpm install
```

### 開発サーバーの起動

```bash
npm run dev
# または
yarn dev
# または
pnpm dev
# または
bun dev
```

[http://localhost:3000](http://localhost:3000) でサイトが表示されます。

### ビルド・デプロイ

```bash
# プロダクションビルド
npm run build

# プロダクションサーバーの起動
npm run start

# コードリンティング
npm run lint
```

## 📁 プロジェクト構造

```
qurest_hp/
├── src/
│   ├── app/                # App Router ページ
│   │   ├── about/         # 会社紹介ページ
│   │   ├── contact/       # お問い合わせページ
│   │   ├── news/          # ニュースページ
│   │   ├── recruit/       # 採用情報ページ
│   │   ├── service/       # サービスページ
│   │   ├── layout.tsx     # 共通レイアウト
│   │   └── page.tsx       # トップページ
│   ├── components/        # 再利用可能コンポーネント
│   │   ├── Header.tsx     # ヘッダーナビゲーション
│   │   ├── Footer.tsx     # フッター
│   │   └── ContactForm.tsx # お問い合わせフォーム
│   ├── sections/          # ページセクション
│   │   ├── Hero.tsx       # ヒーローセクション
│   │   └── Greeting.tsx   # 代表挨拶セクション
│   └── styles/           # グローバルスタイル
│       └── globals.css   # Tailwind CSS設定
├── public/               # 静的ファイル
│   ├── Qurest.png       # ロゴ画像
│   └── hero-bg.jpg      # ヒーロー背景画像
├── tailwind.config.ts   # Tailwind CSS設定
├── tsconfig.json        # TypeScript設定
└── next.config.ts       # Next.js設定
```

## 🎨 デザインシステム

### カラーパレット
- **Primary**: Blue (#2563EB) → Indigo (#4F46E5)
- **Secondary**: Gray (#6B7280) 
- **Success**: Green (#10B981)
- **Warning**: Yellow (#F59E0B)
- **Error**: Red (#EF4444)

### タイポグラフィ
- **見出し**: Inter フォント、各種サイズ（text-3xl〜text-6xl）
- **本文**: Inter フォント、読みやすいline-height設定

### アニメーション
- **ページ遷移**: Framer Motionによる滑らかなフェード・スライド
- **ホバー効果**: ボタン・カードのスケール・シャドウ変化
- **スクロール連動**: whileInViewを活用した段階的表示

## 📝 貢献ガイドライン

1. **ブランチ作成**: `feature/機能名` または `fix/修正内容` 形式
2. **コミットメッセージ**: 日本語可、具体的な変更内容を記載
3. **プルリクエスト**: レビュー必須、テスト実行確認
4. **コードスタイル**: ESLintルールに従う

## 📜 ライセンス

このプロジェクトは Qurest Inc. の所有物です。無断転載・使用を禁じます。

## 📞 お問い合わせ

- **会社**: Qurest Inc.
- **代表**: 
- **Email**: [お問い合わせフォーム](http://localhost:3000/contact)
- **所在地**: 東京都千代田区大手町1-1-1

---

**© 2025 Qurest Inc. All rights reserved.**
