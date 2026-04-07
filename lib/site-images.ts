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
