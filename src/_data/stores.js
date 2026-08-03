/**
 * 店舗データ定義(morning burger業態)
 * 新しい店舗を追加するときは、この配列に store オブジェクトを追加するだけ。
 * Eleventy が自動で /{region}/{slug}/index.html を生成します。
 *
 * 地図キーは maps_embed / maps_link（他業態と統一）。
 * maps_embed は <iframe> の src= の中身（URL文字列）のみを入れること。
 *
 * ヒーロー写真は全店舗共通で、スクランブルエッグバーガー×ステーキバーガーの
 * 2枚並びを src/store.njk 側で直接指定しています（店舗ごとの内観写真は使っていません）。
 *
 * ※ Googleレビュー欄・Tripadvisor実績欄は今回の業態では非表示にしています
 *   （store.njk 側で該当セクションを削除済み）。
 */
module.exports = {
  brand: {
    domain: "burger-brunch.halal-food-wagyu.com",
    // GA4への送信はGTMコンテナ(GTM-5DGT9H6L)側で行うため、
    // ここに測定IDは持たない。
    brand_name: "Wagyu Breakfast Burger",
    brand_slug: "burger-brunch"
  },
  stores: [
    {
      // ===== URL/識別 =====
      region: "tokyo",
      slug: "higashi-ginza",
      // ===== 店名 =====
      name_full_en: "Wagyu Breakfast Burger Halal Vegan Ginza Brunch Restaurant 銀座早餐餐厅",
      name_cn: "",
      hero_place: "Tokyo's Ginza",
      // ===== 立地 =====
      city: "Ginza, Tokyo",
      station_en: "Higashi-ginza Station",
      address_en: "3-12-15 Ginza, Chuo-ku, Tokyo",
      address_postal: "104-0061",
      // ===== 連絡先 =====
      tel_display: "090-4129-6646",
      tel_raw: "+819041296646",
      // ===== 営業(モーニング業態なので朝〜昼の時間帯に変更) =====
      hours: "7:00 – 11:30",
      hours_note: "Morning & Brunch · L.O. 11:00",
      // ===== 予約・地図 ===== 地図・オンライン予約リンクなし → 予約ボタンは電話案内になる
      reserve_system: "tablecheck",  // "tablecheck" | "form"。URL未設定のうちは電話予約ボタンになる
      tablecheck_url: "",
      maps_link: "",
      maps_embed: "",
    },
    {
      // ===== URL/識別 =====
      region: "osaka",
      slug: "ohatsu-tenjin",
      // ===== 店名 =====
      name_full_en: "Wagyu Breakfast Burger Halal Vegan Osaka Brunch Restaurant 大阪早餐餐厅",
      name_cn: "",
      hero_place: "Osaka's Umeda",
      // ===== 立地 =====
      city: "Umeda, Osaka",
      station_en: "Higashi-Umeda Station",
      address_en: "2-14-7 Sonezaki, Kita-ku, Osaka",
      address_postal: "530-0057",
      // ===== 連絡先 =====
      tel_display: "080-2071-0159",
      tel_raw: "+818020710159",
      // ===== 営業(モーニング業態なので朝〜昼の時間帯に変更) =====
      hours: "7:00 – 11:30",
      hours_note: "Morning & Brunch · L.O. 11:00",
      // ===== 予約・地図 ===== 地図・オンライン予約リンクなし → 予約ボタンは電話案内になる
      reserve_system: "tablecheck",  // "tablecheck" | "form"。URL未設定のうちは電話予約ボタンになる
      tablecheck_url: "",
      maps_link: "",
      maps_embed: "",
    },
    {
      // ===== URL/識別 =====
      region: "kyoto",
      slug: "kyoto-eki",
      // ===== 店名 =====
      name_full_en: "Wagyu Breakfast Burger Halal Vegan Kyoto Brunch Restaurant 京都早餐餐厅",
      name_cn: "",
      hero_place: "Kyoto Station",
      // ===== 立地 =====
      city: "Higashikujo, Kyoto",
      station_en: "Kyoto Station",
      address_en: "3-5 Higashikujo Kitakarasumacho, Minami-ku, Kyoto",
      address_postal: "601-8017",
      // ===== 連絡先 =====
      tel_display: "080-2227-6466",
      tel_raw: "+818022276466",
      // ===== 営業 =====
      hours: "7:00 – 11:30",
      hours_note: "Morning & Brunch · L.O. 11:00",
      // ===== 予約・地図 ===== 地図・オンライン予約リンクなし → 予約ボタンは電話案内になる
      reserve_system: "tablecheck",  // "tablecheck" | "form"。URL未設定のうちは電話予約ボタンになる
      tablecheck_url: "",
      maps_link: "",
      maps_embed: "",
    }
  ]
};
