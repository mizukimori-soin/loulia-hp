# LOULIA 採用ページ制作 — VSCode 引き継ぎプロンプト

## 概要

filonnail（https://filonnail.com/recruit）の採用ページを参考に、**LOULIA**ブランド専用の採用ランディングページを新規作成してください。単なるコピーではなく、LOULIAのブランドトーンに合わせてゼロから設計したHTMLページです。

---

## 技術スタック・制約

- **構成**: 単一HTMLファイル（`index.html`）＋ CSSファイル（`style.css`）＋ 任意JSファイル（`main.js`）
- **フレームワーク不使用**（Vanilla HTML/CSS/JS のみ）
- **デプロイ先**: Vercel（静的サイト）
- **フォント**: Google Fonts から読み込む（下記指定あり）
- **画像**: `/images/` フォルダに格納（プレースホルダー対応）
- **外部依存**: なし（CDN不可、全部ローカル or Google Fonts のみ）

---

## ディレクトリ構成

```
loulia-recruit/
├── index.html
├── style.css
├── main.js
├── images/
│   ├── hero-1.jpg        ← LOULIAサロン内装（差し替え用プレースホルダー）
│   ├── nail-1.jpg        ← ネイルデザイン写真①
│   ├── nail-2.jpg        ← ネイルデザイン写真②
│   ├── nail-3.jpg        ← ネイルデザイン写真③
│   └── logo.svg          ← LOULIAロゴ（差し替え用）
├── vercel.json
└── README.md
```

---

## LOULIAブランドの方向性

LOULIAはsoin株式会社が運営するネイルサロンブランド。filonnailが"ニュアンスネイル・洗練・チーム"を打ち出すのに対し、**LOULIAはよりラグジュアリー・フェミニン・上質な大人の女性向け**のポジショニング。

### ブランドトーン
- **キーワード**: 上質 / 繊細 / 女性らしさ / 洗練 / プロフェッショナル
- **カラーパレット（CSS変数として定義）**:
  ```css
  --color-bg: #FAF7F4;          /* オフホワイト・クリーム */
  --color-primary: #C4A882;     /* ゴールドベージュ */
  --color-accent: #8C6E52;      /* ウォームブラウン */
  --color-text: #2C2420;        /* ダークブラウン */
  --color-text-light: #7A6358;  /* ライトブラウン */
  --color-surface: #F2EDE8;     /* カードベース */
  --color-line: #D9CEBF;        /* ボーダー */
  ```
- **フォント**:
  ```html
  <!-- Google Fonts -->
  <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300&family=Noto+Serif+JP:wght@300;400&display=swap" rel="stylesheet">
  ```
  - 英語見出し: `Cormorant Garamond` (300〜400)
  - 日本語本文: `Noto Serif JP` (300〜400)

---

## ページ構成（セクション詳細）

### 1. ヘッダー（固定）
```
[LOULIA ロゴ]                    [採用情報 | ブランドについて | 応募する]
```
- 背景: 透明 → スクロールで `--color-bg` に変化
- ロゴは `images/logo.svg`
- SP対応: ハンバーガーメニュー

---

### 2. ヒーローセクション
```
[左: テキストエリア]                [右: 画像グリッド]
RECRUIT                            hero-1.jpg（大）
                                   nail-1.jpg（小）
LOULIAで、あなたの                  nail-2.jpg（小）
技術と感性を輝かせてください。

[LINEで応募する →]
```
- 画像は右寄せ・縦長グリッド（CSS Grid）
- テキストはフェードインアニメーション（CSS animation）
- 背景: `--color-bg`

---

### 3. キャッチコピーセクション
```
（中央揃え・大きな見出し）

店舗拡大につき、積極採用中。
上質なネイルを愛する方、大歓迎。
LOULIAで、自分らしいキャリアを。
```
- フォントサイズ大（Cormorant Garamondでの英語 or Noto Serif JPで日本語）
- 薄いラインで区切る
- 下に `✦ どんな夢もLOULIAが全力でサポートします ✦` のサブテキスト

---

### 4. 4つのPoint（filonnailのPoint.01〜04 をLOULIA版に書き換え）

| ポイント | タイトル | 本文（LOULIAブランドに書き換え） |
|---|---|---|
| Point.01 | お客様もスタッフも"なりたい自分"へ。 | LOULIAは、お客様とネイリスト双方が美しさを通じて「なりたい自分」へ近づけるサロンを目指しています。スタッフが輝いてこそ、最高のサービスが生まれると考え、働く環境・キャリアステップを丁寧に整えています。 |
| Point.02 | 上質なデザイン力と、徹底したスキルアップ体制。 | 繊細で品のあるデザインを得意とするLOULIA。月次の技術勉強会や店舗横断の交流会、専任講師によるレッスンなど、あなたの感性と技術を磨き続ける環境が整っています。 |
| Point.03 | 少数精鋭で、ひとりひとりが主役。 | 1店舗あたり少人数のチームで、丁寧な接客と深い絆を大切にしています。同じ価値観を持つ仲間とともに、プロフェッショナルとして成長できる場所です。 |
| Point.04 | 業界水準を超える給与と、充実した福利厚生。 | 休日希望の柔軟対応、透明な賃金制度、各種手当を完備。安心して長く働けるサロンを、日々アップデートし続けています。 |

- レイアウト: 縦積み（モバイル）/ 2カラム（デスクトップ）
- 各カードに薄いボーダーと余白で上質感を演出
- ナンバリングは `01 / 02 / 03 / 04`（Cormorant Garamond・細め）

---

### 5. LINEで応募CTAセクション
```
[中央揃え・薄いベージュ背景]

まずは、気軽にご連絡ください。
LINEで応募（簡単登録1分）

[LINE公式アカウントで応募する →]（グリーン系ボタン）
```

---

### 6. 募集要項セクション

#### ネイリストの方
| 項目 | 内容 |
|---|---|
| 雇用形態 | 正社員・業務委託 |
| 勤務地 | LOULIA各店舗（応相談） |
| 給与 | 月給25万円〜（経験・スキルにより優遇） |
| 勤務時間 | 10:00〜20:00（シフト制） |
| 休日 | 月9〜10日（希望制） |
| 福利厚生 | 社会保険完備・交通費支給・技術手当・指名手当 など |
| 応募資格 | ネイル経験1年以上（JNA資格歓迎） |

#### サロン未経験の方
| 項目 | 内容 |
|---|---|
| 雇用形態 | 正社員（研修期間あり） |
| 給与 | 研修中：月給22万円〜 |
| 応募資格 | ネイルスクール卒業または在校中の方歓迎 |

- テーブルは `border-collapse` / ベージュ系ボーダー
- タブ切り替え（「ネイリストの方」「未経験の方」）を JS で実装

---

### 7. 応募フローセクション
```
Step 1: LINEを友だち追加
  ↓
Step 2: 簡単なフォームに記入（5項目）
  ↓
Step 3: 担当者より日程調整のご連絡
  ↓
Step 4: 面接（サロンまたはオンライン）
  ↓
Step 5: 内定・入社日決定
```
- 矢印は CSS で描画
- ステップはアイコン（Unicode文字で代替可）

---

### 8. フッター
```
LOULIA
運営：soin株式会社

[Instagram] [LINE]

© 2025 soin Co., Ltd. All rights reserved.
```

---

## アニメーション仕様

```css
/* フェードインアップ（全セクション共通） */
@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(24px); }
  to   { opacity: 1; transform: translateY(0); }
}

/* Intersection Observer で .is-visible クラスを付与してトリガー */
.reveal { opacity: 0; }
.reveal.is-visible { animation: fadeInUp 0.8s ease forwards; }
```

`main.js` 内で `IntersectionObserver` を使ってスクロール連動のフェードインを実装してください。

---

## vercel.json

```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ],
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        { "key": "X-Content-Type-Options", "value": "nosniff" },
        { "key": "X-Frame-Options", "value": "DENY" }
      ]
    }
  ]
}
```

---

## README.md（プロジェクト内に含めること）

```markdown
# LOULIA 採用ページ

soin株式会社 LOULIAブランドの採用ランディングページ。

## ローカル開発

\`\`\`bash
# npx serve でローカル確認
npx serve .
\`\`\`

## Vercelデプロイ

\`\`\`bash
# Vercel CLIを使う場合
npx vercel --prod

# または GitHub連携でauto-deploy
\`\`\`

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

`index.html` 内の `LINE_RECRUIT_URL` を実際のLINE公式アカウントURLに変更：

\`\`\`html
<!-- 変更箇所（index.html 内 2箇所） -->
<a href="https://lin.ee/XXXXXXX" class="btn-line">LINEで応募する</a>
\`\`\`
```

---

## 実装上の注意事項

1. **プレースホルダー画像**: `images/` フォルダが空でも壊れないよう、CSS の `background-color` でフォールバックを設定してください
2. **モバイル対応**: SP（375px〜）/ Tablet（768px〜）/ Desktop（1200px〜）の3ブレークポイント
3. **LINEリンク**: `LINE_RECRUIT_URL` という定数を `main.js` 冒頭に定義し、全CTAボタンから参照
4. **アクセシビリティ**: `alt` 属性、`aria-label`、`lang="ja"` を適切に設定
5. **OGP**: `<meta property="og:*">` タグを `index.html` の `<head>` に含める

```html
<meta property="og:title" content="LOULIA 採用情報">
<meta property="og:description" content="上質なネイルを愛する方、LOULIAで一緒に働きませんか。">
<meta property="og:image" content="https://[デプロイURL]/images/hero-1.jpg">
<meta property="og:url" content="https://[デプロイURL]">
```

---

## 参考ページ（構造の参考のみ・コピー不可）

- **filonnail採用ページ**: https://filonnail.com/recruit
- ページ構成・セクション順・Point設計を参考にしつつ、テキスト・デザインはLOULIA独自のものにしてください

---

## 納品物チェックリスト

- [ ] `index.html` — 完全なHTMLページ（全セクション実装）
- [ ] `style.css` — CSS変数・レスポンシブ対応
- [ ] `main.js` — スクロールアニメーション・タブ切り替え・LINE URL定数
- [ ] `vercel.json` — デプロイ設定
- [ ] `images/` フォルダ — プレースホルダー（空でも可）
- [ ] `README.md` — 差し替え手順・デプロイ手順

---

*作成: soin株式会社 / みずき*  
*参照日: 2026-04-04*
