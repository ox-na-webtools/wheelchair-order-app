# src/lib とプロジェクト内ファイルの役割・重複メモ

## ブラウザで実際に使われているファイル（index.html / app.js から）

| ファイル | 役割 | 読み込み方 |
|----------|------|------------|
| **index.html** | エントリー。Tailwind / React / Babel / pdf.js / カタログ・価格マスターを script で読み込み、最後に app.js を module で読み込み | 直接 |
| **app.js** | メインアプリ（state・UI・他モジュールの呼び出し）。import で src/lib 以下を参照 | type="text/babel" data-type="module" |
| **catalog.js** | オーダー用カタログ（CATALOG 等のグローバル変数） | script |
| **catalog-kids.js** | キッズ用カタログ（CATALOG_KIDS 等） | script |
| **price_master_2025.js** | 価格マスター（PRICE_MASTER） | script |
| **data_ui.js** | UI用データ（PAINT_PLANS 等） | script |
| **pdf.js** | PDF生成（window.buildPdf 等） | script |
| **NotoSansJP-Regular.js** | 日本語フォント | script |
| **src/lib/pricing.js** | 合計・内訳計算（calcPrice）。UI非依存の価格ロジック | app.js が import |
| **src/lib/option_rules.js** | 専用オプションの「機種条件」（getArmrestConfig, filterOptionsForSpecialSection） | app.js が import |
| **src/lib/option_selectors.js** | 専用オプションの「選択処理」（toggleItem, upsertArmrestOption, computeArmrestOption, キッズ用 createSet*） | app.js が import |
| **src/lib/sections/special_options.js** | 「4. 専用オプション」の React UI（createElement で記述） | app.js が import |

※ catalog.js と catalog-kids.js は「オーダー用 / キッズ用」で別データのため、**重複ではない**。

---

## ブラウザでは読み込まれていないファイル

| ファイル | 役割 | 注意 |
|----------|------|------|
| **calc.js** | 価格取得（getPrice / itemPrice）を window.calcGetPrice, window.calcItemPrice として提供 | **index.html に未記載**。app.js は「あれば calc を優先、なければ PRICE_MASTER にフォールバック」なので、現状は未ロードで動作。必要なら index.html に script 追加 |
| **merge.js** | Node 用。app_head.js と source.txt を結合して app.js を**上書き生成** | 実行すると現在の app.js（import や手編集）が消える可能性あり。**現在の app.js を手で編集しているなら merge.js は実行しない** |
| **app_head.js** | merge.js 用の「app.js の先頭部分」（React, Icon など。import なし） | **app.js の先頭と内容が重複**。merge 用のテンプレートであり、ブラウザは直接読まない |
| **source.txt** | merge.js が「本体」として app.js に結合する元テキスト | merge ワークフロー用。中身が古いと merge 実行時に app.js が古い形に戻る |

---

## 重複・注意点のまとめ

1. **app_head.js と app.js の先頭**
   - Icon 定義や React フックなどが **app_head.js と app.js で二重に存在**。
   - 意図: merge.js で app.js を「ヘッダ＋source.txt」から組み立てる用。
   - リスク: 今の app.js は import 付きで手編集されているため、**merge.js を実行すると import や専用オプション分離が消える**。

2. **calc.js**
   - 価格ロジックの「本命」として app.js のコメントで参照されているが、**HTML から読み込まれておらず未使用**。必要なら index.html に `<script src="./calc.js"></script>` を追加する必要あり。

3. **catalog.js / catalog-kids.js**
   - 重複ではなく、**オーダー用とキッズ用で役割が分かれている**。

4. **src/lib 内（pricing / option_rules / option_selectors / sections/special_options）**
   - それぞれ役割が分かれており、**互いに重複なし**。app.js が import で参照している。

---

## 運用の提案

- **通常の開発**: app.js と src/lib をそのまま編集。**merge.js は実行しない**。
- **merge.js を使うワークフローに戻す場合**: app.js を「app_head.js + source.txt で生成」する形に戻し、import や分離したコンポーネントをそのワークフローに組み込む必要あり。
- **calc.js を使いたい場合**: index.html で pdf.js の前後などに `<script src="./calc.js"></script>` を追加。
