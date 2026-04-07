const homepageSchema = {
  name: "homepage",
  type: "document",
  title: "Homepage",
  fields: [
    { name: "heroEyebrow", type: "string", title: "Hero Eyebrow" },
    { name: "heroTitle", type: "string", title: "Hero Title" },
    { name: "heroSubtitle", type: "text", title: "Hero Subtitle" },
    { name: "heroImage", type: "image", title: "Hero Image", options: { hotspot: true } },
    { name: "visionTitle", type: "string", title: "Vision Card Title" },
    { name: "visionText", type: "text", title: "Vision Card Text" },
    { name: "missionTitle", type: "string", title: "Mission Card Title" },
    { name: "missionText", type: "text", title: "Mission Card Text" },
    { name: "impactTitle", type: "string", title: "Impact Section Title" },
    { name: "impactSubtitle", type: "text", title: "Impact Section Subtitle" },
    {
      name: "impactStats",
      type: "array",
      title: "Impact Stats",
      of: [{ type: "object", fields: [{ name: "label", type: "string" }, { name: "value", type: "string" }] }]
    },
    { name: "successStory", type: "text", title: "Stories Intro" },
    { name: "storiesTitle", type: "string", title: "Stories Section Title" },
    { name: "storiesSubtitle", type: "text", title: "Stories Section Subtitle" },
    { name: "ctaTitle", type: "string", title: "CTA Title" },
    { name: "ctaText", type: "text", title: "CTA Text" }
    ,
    { name: "ctaPrimaryLabel", type: "string", title: "CTA Primary Button Label" },
    { name: "ctaPrimaryHref", type: "string", title: "CTA Primary Button Link" },
    { name: "ctaSecondaryLabel", type: "string", title: "CTA Secondary Button Label" },
    { name: "ctaSecondaryHref", type: "string", title: "CTA Secondary Button Link" },
    { name: "ctaImage", type: "image", title: "CTA Background Image", options: { hotspot: true } }
  ]
};

export default homepageSchema;
