const homepageSchema = {
  name: "homepage",
  type: "document",
  title: "Homepage",
  fields: [
    { name: "heroTitle", type: "string", title: "Hero Title" },
    { name: "heroSubtitle", type: "text", title: "Hero Subtitle" },
    { name: "heroImage", type: "image", title: "Hero Image", options: { hotspot: true } },
    {
      name: "impactStats",
      type: "array",
      title: "Impact Stats",
      of: [{ type: "object", fields: [{ name: "label", type: "string" }, { name: "value", type: "string" }] }]
    },
    { name: "successStory", type: "text", title: "Success Story" },
    { name: "ctaTitle", type: "string", title: "CTA Title" },
    { name: "ctaText", type: "text", title: "CTA Text" }
  ]
};

export default homepageSchema;
