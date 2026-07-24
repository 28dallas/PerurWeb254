export const SITE_NAME = "Perur Rays of Hope";
export const SITE_SHORT = "PRoH";
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://www.perurraysofhopeke.org";

// Social Media Links
export const SOCIAL_LINKS = {
  facebook: "https://www.facebook.com/share/18huRdaCSr/",
  instagram: "https://www.instagram.com/perurrayofhope?igsh=MWRwc200ZXdrYnB1cQ==",
  x: "https://x.com/PerurRayofHope"
};

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "NGO",
  name: SITE_NAME,
  alternateName: SITE_SHORT,
  url: SITE_URL,
  address: {
    "@type": "PostalAddress",
    addressLocality: "West Pokot County",
    addressCountry: "KE"
  },
  areaServed: "West Pokot County, Kenya",
  foundingDate: "2014",
  slogan: "Empowering Women Through Environment and Education Justice",
  description:
    "Perur Rays of Hope empowers women and youth, safeguards children, advances education, and protects the environment in West Pokot County."
};
