// Curated selection of diverse images from both folders
const selectedNewImages = [
  "/images/new/photo_1_2026-03-03_11-10-37.jpg",
  "/images/new/photo_5_2026-03-03_11-10-37.jpg",
  "/images/new/photo_8_2026-03-03_11-10-37.jpg",
  "/images/new/photo_12_2026-03-03_11-10-37.jpg",
  "/images/new/photo_15_2026-03-03_11-10-37.jpg",
  "/images/new/photo_18_2026-03-03_11-10-37.jpg",
  "/images/new/photo_22_2026-03-03_11-10-37.jpg",
  "/images/new/photo_25_2026-03-03_11-10-37.jpg",
  "/images/new/photo_30_2026-03-03_11-10-37.jpg",
  "/images/new/photo_35_2026-03-03_11-10-37.jpg",
  "/images/new/photo_40_2026-03-03_11-10-37.jpg",
  "/images/new/photo_45_2026-03-03_11-10-37.jpg",
  "/images/new/photo_50_2026-03-03_11-10-37.jpg",
  "/images/new/photo_55_2026-03-03_11-10-37.jpg",
  "/images/new/photo_60_2026-03-03_11-10-37.jpg",
  "/images/new/photo_65_2026-03-03_11-10-37.jpg",
  "/images/new/photo_70_2026-03-03_11-10-37.jpg",
  "/images/new/photo_75_2026-03-03_11-10-37.jpg",
  "/images/new/photo_80_2026-03-03_11-10-37.jpg",
  "/images/new/photo_85_2026-03-03_11-10-37.jpg",
  "/images/new/photo_90_2026-03-03_11-10-37.jpg"
];

// Curated selection from lux folder
const selectedLuxImages = [
  "/images/lux/pexels-lagosfoodbank-6472487.jpg",
  "/images/lux/pexels-lagosfoodbank-9090854.jpg",
  "/images/lux/pexels-lara-jameson-8899031.jpg",
  "/images/lux/pexels-max-fischer-5212318.jpg",
  "/images/lux/pexels-rdne-6257693.jpg",
  "/images/lux/pexels-rdne-6646944.jpg",
  "/images/lux/pexels-rdne-6647112.jpg",
  "/images/lux/pexels-shvetsa-3746309.jpg",
  "/images/lux/pexels-vlada-karpovich-4668360.jpg",
  "/images/lux/pexels-yelenaodintsova-10204173.jpg",
  "/images/lux/pexels-yelenaodintsova-10204176.jpg",
  "/images/lux/pexels-planeteelevene-3848184.jpg",
  "/images/lux/pexels-markusspiske-2990617.jpg",
  "/images/lux/pexels-august-de-richelieu-4427622.jpg",

];

export const siteImages = {
  logo: "/images/logo2.png",
  hero: "/images/og-default.jpg",
  cta: "/images/og-default.jpg",
  programs: {
    women: "/images/og-default.jpg",
    youth: "/images/og-default.jpg",
    child: "/images/og-default.jpg",
    education: "/images/og-default.jpg",
    environment: "/images/og-default.jpg"
  },
  team: {
    director: "/images/og-default.jpg",
    manager: "/images/og-default.jpg",
    finance: "/images/og-default.jpg"
  },
  blog: {
    child: "/images/og-default.jpg",
    women: "/images/og-default.jpg",
    environment: "/images/og-default.jpg"
  },
  events: {
    forum: "/images/og-default.jpg",
    youth: "/images/og-default.jpg"
  },
  gallery: [
    // Mix of both folders for variety
    ...selectedNewImages,
    ...selectedLuxImages
  ]
} as const;
