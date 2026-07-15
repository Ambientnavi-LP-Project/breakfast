# Halal Wagyu Morning Burger LP

業態: **Halal Wagyu Morning Burger**(モーニング・ブランチ業態)
ドメイン: `morning.halal-food-wagyu.com` ← ⚠️ 暫定案です。正式ドメインが決まったら `vercel.json` と `src/_data/stores.js` の `brand.domain` を差し替えてください。
GA4測定ID: `G-XXXXXXXXXX` ← ⚠️ 暫定値です。専用のGA4プロパティを作成したら `src/_data/stores.js` の `brand.ga4_id` と、`src/store.njk` 内のGTMコンテナID(`GTM-XXXXXXX`、2箇所)を差し替えてください。

Eleventy(11ty)製の静的サイト。1つのテンプレ + 店舗データから、全店舗ページを自動生成する。steak業態(`halal-wagyu-steak`)と同じ構造です。

## この業態でsteak業態から変更した点

- **デザインを刷新**:黒×ゴールドの高級ステーキハウス調から、朝食・ブランチ需要向けの明るく爽やかなデザインに変更(クリーム地 + 卵黄イエロー + セージグリーン + サンライズコーラル、見出しは`Fraunces`、本文は`DM Sans`、差し色の手書き風に`Caveat`)。
- **Googleレビュー欄・Tripadvisor実績欄を削除**:steak業態にあった「Trusted by Travelers」(Google評価・口コミ画像)と「Tripadvisor No.1」セクションは、この業態ではまだ実績データがないため削除しています。将来的に実績ができた場合は`store.njk`に同様のセクションを追加してください。
- **店舗を3店舗に絞り込み**:東銀座・お初天神・京都駅。京都駅店は情報未確定のため、`stores.js`内に`TODO`コメント付きの仮データを入れています。
- **営業時間をモーニング仕様に変更**:`7:00 – 11:30`(例)。実際の時間に合わせて`stores.js`を編集してください。

## ⚠️ 重要: 画像フォルダ名は `assets/`(他業態は `image/`)

この業態だけ、画像配置先は `src/assets/` です。テンプレ内も全部 `/assets/...` を参照しています。

## ディレクトリ

```
.
├── .eleventy.js              ← Eleventy設定
├── package.json
├── vercel.json               ← Vercel設定
├── src/
│   ├── _data/stores.js       ← 業態設定と店舗データ
│   ├── store.njk             ← 全店舗共通のページテンプレ
│   └── assets/               ← 画像・動画(配信)
│       ├── higashi-ginza/    ← 東銀座店の内観ヒーロー画像を入れる場所(hero-1.jpg, hero-2.jpg)
│       ├── ohatsu-tenjin/    ← お初天神店の内観ヒーロー画像を入れる場所
│       └── kyoto-eki/        ← 京都駅店の内観ヒーロー画像を入れる場所(まだ空。撮影後に追加)
└── _site/                    ← ビルド成果物
```

## ローカルで動かす

```bash
npm install
npm run dev
# → http://localhost:8080/tokyo/higashi-ginza/
```

## 店舗を追加・編集する手順

`src/_data/stores.js` の `stores` 配列を編集するだけ。

### 京都駅店について

住所・電話番号・地図・予約リンクがまだ未入力です(`TODO`コメントの箇所)。情報が届いたら、そのまま該当フィールドを埋めてください。空欄のままでもページは壊れず、「coming soon」の表示に自動でフォールバックします。

### 内観写真について

東銀座店・お初天神店は`has_interior_photos: true`にしてあるので、以下のパスに写真を配置するとヒーロー背景に反映されます(2枚まで、自動でフェード切替):

```
src/assets/higashi-ginza/hero-1.jpg
src/assets/higashi-ginza/hero-2.jpg
src/assets/ohatsu-tenjin/hero-1.jpg
src/assets/ohatsu-tenjin/hero-2.jpg
```

京都駅店はまだ内観写真がないため`has_interior_photos: false`にしてあり、共通のフォールバック画像(`/assets/family02.jpg`)がヒーロー背景に使われます。撮影後は上記と同様に`src/assets/kyoto-eki/`に画像を追加し、`has_interior_photos: true`に変更してください。

## GA4の計測内容

すべてのイベントに `store_name`, `store_area`, `brand` を付与している。

### カスタムイベント
- `reserve_click`(Reserveボタン): hero, access, footer
- `call_click`(電話予約ボタン・TableCheckがない店舗向け): hero, access, footer
- `directions_click`(Get Directionsボタン): hero, access, footer

## UTM付きURL

**Googleマップのプロフィール用:**
```
https://morning.halal-food-wagyu.com/tokyo/higashi-ginza/?utm_source=google-maps-hp&utm_medium=organic&utm_campaign=profile
```

**Google広告のウェブサイトボタン用:**
```
https://morning.halal-food-wagyu.com/tokyo/higashi-ginza/?utm_source=google-ads-website&utm_medium=cpc&utm_campaign=store
```
