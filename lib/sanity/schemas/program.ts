const programSchema = {
  name: "program",
  type: "document",
  title: "Program",
  fields: [
    { name: "title", type: "string", title: "Title", validation: (rule: { required: () => unknown }) => rule.required() },
    { name: "slug", type: "slug", title: "Slug", options: { source: "title", maxLength: 96 }, validation: (rule: { required: () => unknown }) => rule.required() },
    { name: "description", type: "text", title: "Description" },
    { name: "activities", type: "array", of: [{ type: "string" }], title: "Activities" },
    {
      name: "impactStats",
      type: "array",
      title: "Impact Metrics",
      of: [{ type: "object", fields: [{ name: "label", type: "string" }, { name: "value", type: "string" }] }]
    },
    {
      name: "fundingGoal",
      type: "number",
      title: "Funding Goal ($)",
      description: "Target amount to raise for this program",
    },
    {
      name: "amountRaised",
      type: "number",
      title: "Amount Raised ($)",
      description: "Current amount raised for this program",
      initialValue: 0,
    },
    { name: "image", type: "image", title: "Program Image", options: { hotspot: true } }
  ]
};

export default programSchema;
