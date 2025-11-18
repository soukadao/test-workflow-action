# Next.js 16 本管理アプリケーション

このリポジトリには、Next.js 16 (App Router) とTypeScriptを使用して構築された本管理Webアプリケーションが含まれています。

## プロジェクトの場所

本管理アプリケーションは `book-management-app/` ディレクトリにあります。

## クイックスタート

```bash
cd book-management-app
npm install
npm run dev
```

その後、ブラウザで http://localhost:3000 にアクセスしてください。

## 主な機能

- 📚 本の一覧表示
- ➕ 本の追加（タイトル、著者、ISBN、出版年、説明）
- ✏️ 本の編集
- 🗑️ 本の削除
- 🎨 レスポンシブデザイン（Tailwind CSS）
- 🌏 日本語UI

## 技術仕様

- **Next.js 16.0.3** with App Router
- **React 19.2.0**
- **TypeScript 5**
- **Tailwind CSS 4**
- **REST API** (Next.js Route Handlers)

## 詳細情報

詳細なドキュメントは [book-management-app/README.md](./book-management-app/README.md) をご覧ください。

## スクリーンショット

アプリケーションのUIは直感的で使いやすく設計されています：

- メインページには登録された本がカード形式で表示されます
- 「新しい本を追加」ボタンから本を追加できます
- 各本カードの「編集」「削除」ボタンで管理が可能です

## 注意事項

現在のバージョンはインメモリストレージを使用しているため、サーバーを再起動するとデータがリセットされます。本番環境では、データベースとの統合を推奨します。
