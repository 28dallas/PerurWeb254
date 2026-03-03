const newImages = Array.from({ length: 90 }, (_, i) => `/images/new/photo_${i + 1}_2026-03-03_11-10-37.jpg`);

export const siteImages = {
  logo: "/images/logo2.png",
  hero: "/images/lux/photo_2026-02-28_05-48-03.jpg",
  cta: "/images/lux/photo_2026-02-28_05-48-04.jpg",
  programs: {
    women: "/images/lux/photo_2026-02-28_05-47-58.jpg",
    youth: "/images/new/photo_3_2026-03-03_11-10-37.jpg",
    child: "/images/new/photo_27_2026-03-03_11-10-37.jpg",
    education: "/images/lux/pexels-finix-photographer-826467311-30874118.jpg",
    environment: "/images/lux/photo_2026-02-28_05-48-02.jpg"
  },
  team: {
    director: "/images/lux/photo_2026-02-28_05-47-53.jpg",
    manager: "/images/lux/photo_2026-02-28_05-47-54.jpg",
    finance: "/images/lux/photo_2026-02-28_05-47-55.jpg"
  },
  blog: {
    child: "/images/new/photo_85_2026-03-03_11-10-37.jpg",
    women: "/images/new/photo_71_2026-03-03_11-10-37.jpg",
    environment: "/images/lux/photo_2026-02-28_05-47-51.jpg"
  },
  events: {
    forum: "/images/lux/photo_2026-02-28_05-47-59.jpg",
    youth: "/images/new/photo_80_2026-03-03_11-10-37.jpg"
  },
  gallery: [
    "/images/lux/1.jpg",
    "/images/lux/photo_2026-02-28_05-47-48.jpg",
    "/images/lux/photo_2026-02-28_05-47-49.jpg",
    "/images/lux/photo_2026-02-28_05-47-50.jpg",
    "/images/lux/photo_2026-02-28_05-47-51.jpg",
    "/images/lux/photo_2026-02-28_05-47-52.jpg",
    "/images/lux/photo_2026-02-28_05-47-53.jpg",
    "/images/lux/photo_2026-02-28_05-47-54.jpg",
    "/images/lux/photo_2026-02-28_05-47-55.jpg",
    "/images/lux/photo_2026-02-28_05-47-56.jpg",
    "/images/lux/photo_2026-02-28_05-47-57.jpg",
    "/images/lux/photo_2026-02-28_05-47-58.jpg",
    "/images/lux/photo_2026-02-28_05-47-59.jpg",
    "/images/lux/photo_2026-02-28_05-48-00.jpg",
    "/images/lux/photo_2026-02-28_05-48-01.jpg",
    "/images/lux/photo_2026-02-28_05-48-02.jpg",
    "/images/lux/photo_2026-02-28_05-48-03.jpg",
    "/images/lux/photo_2026-02-28_05-48-04.jpg",
    // Add newly uploaded images for non-background usage (gallery, inline images)
    ...newImages
  ]
} as const;
