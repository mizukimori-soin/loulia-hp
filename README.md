# LOULIA 採用ページ

soin株式会社 LOULIAブランドの採用ランディングページ。

## ローカル開発

```bash
# npx serve でローカル確認
npx serve .
```

## Vercelデプロイ

```bash
# Vercel CLIを使う場合
npx vercel --prod

# または GitHub連携でauto-deploy
```

## 画像差し替え

`images/` 以下のファイルを同名で差し替えてください。

| ファイル名 | 推奨サイズ | 内容 |
|---|---|---|
| hero-1.jpg | 800×1200px | サロン内装・メインビジュアル |
| nail-1.jpg | 600×600px | ネイルデザイン① |
| nail-2.jpg | 600×600px | ネイルデザイン② |
| nail-3.jpg | 600×600px | ネイルデザイン③ |
| logo.svg | — | LOULIAロゴ |

## LINE応募リンクの設定

`main.js` 内の `LINE_RECRUIT_URL` を実際のLINE公式アカウントURLに変更：

```js
const LINE_RECRUIT_URL = 'https://lin.ee/XXXXXXX';
```
