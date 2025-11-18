# 本管理アプリ (Book Management App)

Next.js 16 (App Router) とTypeScriptで構築された、シンプルな本管理アプリケーションです。

## 機能

- ✅ 本の一覧表示
- ✅ 本の追加
- ✅ 本の編集
- ✅ 本の削除
- ✅ レスポンシブデザイン（Tailwind CSS）

## 技術スタック

- **Next.js 16** - React フレームワーク (App Router)
- **React 19** - UI ライブラリ
- **TypeScript** - 型安全な開発
- **Tailwind CSS** - スタイリング
- **REST API** - Next.js Route Handlers

## セットアップ

1. 依存関係のインストール:
```bash
npm install
```

2. 開発サーバーの起動:
```bash
npm run dev
```

3. ブラウザで http://localhost:3000 を開く

## ビルド

本番環境用にビルド:
```bash
npm run build
```

ビルドされたアプリケーションの実行:
```bash
npm start
```

## プロジェクト構造

```
book-management-app/
├── app/
│   ├── api/
│   │   └── books/         # REST API エンドポイント
│   ├── layout.tsx         # ルートレイアウト
│   └── page.tsx          # メインページ
├── components/
│   ├── BookCard.tsx      # 本カードコンポーネント
│   └── BookForm.tsx      # 本フォームコンポーネント
├── lib/
│   └── bookStore.ts      # インメモリデータストア
└── types/
    └── book.ts           # 型定義
```

## データモデル

```typescript
interface Book {
  id: string;
  title: string;
  author: string;
  isbn?: string;
  publishedYear?: number;
  description?: string;
  createdAt: Date;
  updatedAt: Date;
}
```

## API エンドポイント

- `GET /api/books` - 全ての本を取得
- `POST /api/books` - 新しい本を追加
- `GET /api/books/[id]` - 特定の本を取得
- `PUT /api/books/[id]` - 本を更新
- `DELETE /api/books/[id]` - 本を削除

## 注意事項

現在のバージョンでは、データはインメモリに保存されるため、サーバーを再起動するとデータが失われます。本番環境では、データベース（PostgreSQL、MongoDB等）への接続を実装することを推奨します。
