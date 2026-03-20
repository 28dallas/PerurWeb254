// Curated selection of diverse images from both folders
const selectedNewImages = [
  "/images/new/photo_1_2026-03-03_11-10-37.jpg",
  "/images/new/photo_5_2026-03-03_11-10-37.jpg",
  "/images/new/photo_8_2026-03-03_11-10-37.jpg",
  "/images/new/photo_12_2026-03-03_11-10-37.jpg",
  "/images/new/photo_15_2026-03-03_11-10-37.jpg",
  "/images/new/photo_22_2026-03-03_11-10-37.jpg",
  "/images/new/photo_25_2026-03-03_11-10-37.jpg",
  "/images/new/photo_30_2026-03-03_11-10-37.jpg",
  "/images/new/photo_35_2026-03-03_11-10-37.jpg",
  "/images/new/photo_45_2026-03-03_11-10-37.jpg",
  "/images/new/photo_70_2026-03-03_11-10-37.jpg",
  "/images/new/photo_80_2026-03-03_11-10-37.jpg"
];

// Curated selection from lux folder (Not used in Gallery to focus on original impact)
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
  logo: "/icons/logo.jpg",
  hero: "/images/og-default.jpg",
  cta: "/images/og-default.jpg",
  programs: {
    women: "/images/new/photo_1_2026-03-03_11-10-37.jpg",
    youth: "/images/new/photo_5_2026-03-03_11-10-37.jpg",
    child: "/images/new/photo_8_2026-03-03_11-10-37.jpg",
    education: "/images/new/photo_12_2026-03-03_11-10-37.jpg",
    environment: "/images/new/photo_15_2026-03-03_11-10-37.jpg"
  },
  team: {
    director: "/images/og-default.jpg",
    manager: "/images/og-default.jpg",
    finance: "/images/og-default.jpg"
  },
  blog: {
    child: "/images/lux/pexels-rdne-6646944.jpg",
    women: "/images/lux/pexels-yelenaodintsova-10204173.jpg",
    environment: "/images/lux/pexels-markusspiske-2990617.jpg"
  },
  events: {
    forum: "/images/new/photo_35_2026-03-03_11-10-37.jpg",
    youth: "/images/new/photo_80_2026-03-03_11-10-37.jpg"
  },
  gallery: [
    // Focused on original photos showing real impact
    ...selectedNewImages
  ]
} as const;
