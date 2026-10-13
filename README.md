# NOAH CENTER 日本語ホームページ

キリスト教精神を土台とした総合教育センターの**公開準備用サンプルサイト**です。GitHub Pagesで公開できる静的サイトです。

## ファイル

- `index.html`: 内容、ナビゲーション、講座カード、FAQ
- `styles.css`: 配色とレスポンシブデザイン
- `script.js`: モバイルメニュー、講座カテゴリー検索、講座詳細ダイアログ

## 自分のパソコンで確認
`index.html` をブラウザで開いてください。外部ライブラリ不要です。

## GitHub Pagesで公開

1. GitHubで `noah-center-site` というPublicリポジトリを作成します。
2. このフォルダの**中にある3ファイルとREADME**をリポジトリのルートにアップロードします（フォルダごと追加しない）。
3. GitHubの `Settings → Pages → Build and deployment` を開きます。
4. `Source: Deploy from a branch`、`Branch: main`、`Folder: / (root)` を選んで保存します。
5. `https://ユーザー名.github.io/noah-center-site/` で閲覧します（反映には多少時間がかかることがあります）。

## 公開前の確認事項

- 講座は**すべて企画例**で、開講・講師・日時・料金は未確定。正式情報に差し替えてください。
- 問い合わせのメール先が未設定のため**問い合わせボタンは意図的に無効**。`index.html` の `#contact-link` を正式なURLやメール先に変更し、`aria-disabled` を外し、`script.js` の `contactLink?.addEventListener(...)` を削除して有効化してください。
- センター住所、アクセス、運営者、プライバシーポリシーを公開する必要がある場合は内容を確認し、追加してください。
- 講座の詳細は `script.js` の `courses` 配列から編集できます。ただし講座カードの表記は `index.html` にもあるため、双方を整合させてください。

問い合わせの自動送信、決済、会員ログイン、申し込みのデータベース保存は未実装です。GitHub Pages単体ではサーバー機能は提供されません。
