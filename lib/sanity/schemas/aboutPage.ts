const aboutPageSchema = {
  name: "aboutPage",
  type: "document",
  title: "About Page",
  fields: [
    { name: "story", type: "array", of: [{ type: "block" }], title: "Organization Story" },
    { name: "vision", type: "string", title: "Vision" },
    { name: "mission", type: "text", title: "Mission" },
    {
      name: "coreValues",
      type: "array",
      title: "Core Values",
      of: [{ type: "object", fields: [{ name: "title", type: "string" }, { name: "description", type: "text" }] }]
    },
    { name: "governance", type: "array", of: [{ type: "block" }], title: "Governance & Transparency" }
  ]
};

export default aboutPageSchema;
