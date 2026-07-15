/**
 * 店舗データ定義(morning burger業態)
 * 新しい店舗を追加するときは、この配列に store オブジェクトを追加するだけ。
 * Eleventy が自動で /{region}/{slug}/index.html を生成します。
 *
 * 地図キーは maps_embed / maps_link（他業態と統一）。
 * maps_embed は <iframe> の src= の中身（URL文字列）のみを入れること。
 *
 * has_interior_photos: true にすると /assets/{slug}/hero-1.jpg, hero-2.jpg を
 * ヒーローの背景に使う。false の間は共通のフォールバック画像を使う。
 * 東銀座・お初天神は撮影済みなので true。京都駅はまだ撮影前のため false。
 * → 写真が届いたら src/assets/{slug}/ に hero-1.jpg, hero-2.jpg を追加し、true に変更するだけ。
 *
 * ※ Googleレビュー欄・Tripadvisor実績欄は今回の業態では非表示にしています
 *   （store.njk 側で該当セクションを削除済み）。
 */
module.exports = {
  brand: {
    // TODO: 実際のドメインが決まったら差し替えてください（暫定案）
    domain: "morning.halal-food-wagyu.com",
    // TODO: この業態専用のGA4測定IDに差し替えてください（暫定でXにしています）
    ga4_id: "G-XXXXXXXXXX",
    brand_name: "Halal Wagyu Morning Burger",
    brand_slug: "morning"
  },
  stores: [
    {
      // ===== URL/識別 =====
      region: "tokyo",
      slug: "higashi-ginza",
      // ===== 店名 =====
      name_full_en: "Halal Wagyu Morning Burger · Higashi-Ginza",
      name_cn: "",
      hero_place: "Tokyo's Ginza",
      // ===== 立地(steak業態の東銀座店と同住所を想定。違う場合は差し替えてください) =====
      city: "Ginza, Tokyo",
      station_en: "Higashi-ginza Station",
      address_en: "3-12-16 Ginza, Chuo-ku, Tokyo",
      address_postal: "104-0061",
      // ===== 連絡先 =====
      tel_display: "03-6278-7139",
      tel_raw: "+81362787139",
      // ===== 営業(モーニング業態なので朝〜昼の時間帯に変更) =====
      hours: "7:00 – 11:30",
      hours_note: "Morning & Brunch · L.O. 11:00",
      // ===== 予約・地図 =====
      tablecheck_url: "https://www.tablecheck.com/shops/halal-wagyu-ginza-5w-tokyo/reserve",
      maps_link: "https://maps.app.goo.gl/4EfmHFrLB2qsBVn88",
      maps_embed: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7956332.37488466!2d132.3809798!3d35.1867375!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188b8a1b1f7ca7%3A0x8d81bba28006abf!2zSmFwYW5lc2UgRm9vZCBXYWd5dSBCZWVmIChIYWxhbCkgUmFtZW4gSGFtYnVyZ2VyIEdpbnphIFJlc3RhdXJhbnQgNVctVG9reW8gKOS4nOS6rOWSjOeJm-aLiem6uik!5e1!3m2!1sja!2sjp!4v1780407684524!5m2!1sja!2sjp",
      // ===== 撮影状況 =====
      has_interior_photos: true
    },
    {
      // ===== URL/識別 =====
      region: "osaka",
      slug: "ohatsu-tenjin",
      // ===== 店名 =====
      name_full_en: "Halal Wagyu Morning Burger · Ohatsu-Tenjin",
      name_cn: "",
      hero_place: "Osaka's Umeda",
      // ===== 立地(steak業態のお初天神店と同住所を想定。違う場合は差し替えてください) =====
      city: "Umeda, Osaka",
      station_en: "Higashi-Umeda Station",
      address_en: "MK Sonezaki Bldg. 1F, 2-14-5 Sonezaki, Kita-ku, Osaka",
      address_postal: "530-0057",
      // ===== 連絡先 =====
      tel_display: "090-2411-0668",
      tel_raw: "+819024110668",
      // ===== 営業(モーニング業態なので朝〜昼の時間帯に変更) =====
      hours: "7:00 – 11:30",
      hours_note: "Morning & Brunch · L.O. 11:00",
      // ===== 予約・地図 =====
      tablecheck_url: "https://www.tablecheck.com/shops/halal-wagyu-ohatsutennjin/reserve",
      maps_link: "https://maps.app.goo.gl/nGkUcbYJDwVXLnSJ8",
      maps_embed: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d244.25082538630375!2d135.501323!3d34.7009307!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6000e737d3d79fad%3A0x34aa836911c15bd3!2sWagyu%20Steak%20%26%20Hamburger%20(Halal%20Gluten%20Free)%20Osaka%20Station%20Restaurant!5e1!3m2!1sja!2sjp!4v1780407564711!5m2!1sja!2sjp",
      // ===== 撮影状況 =====
      has_interior_photos: true
    },
    {
      // ===== URL/識別 =====
      region: "kyoto",
      slug: "kyoto-eki",
      // ===== 店名 =====
      name_full_en: "Halal Wagyu Morning Burger · Kyoto Station",
      name_cn: "",
      hero_place: "Kyoto Station",
      // ===== 立地 ===== ※ TODO: 情報が届いたら差し替えてください(現在は仮情報)
      city: "Kyoto Station, Kyoto",
      station_en: "Kyoto Station",
      address_en: "",   // TODO: 住所を追加
      address_postal: "",
      // ===== 連絡先 =====
      tel_display: "",  // TODO: 電話番号を追加
      tel_raw: "",
      // ===== 営業 =====
      hours: "7:00 – 11:30",
      hours_note: "Morning & Brunch · L.O. 11:00",
      // ===== 予約・地図 ===== ※ TODO: 情報が届いたら差し替えてください
      tablecheck_url: "",
      maps_link: "",
      maps_embed: "",
      // ===== 撮影状況(まだ内観写真なし) =====
      has_interior_photos: false
    }
  ]
};
