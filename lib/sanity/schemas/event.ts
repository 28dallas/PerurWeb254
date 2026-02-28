const eventSchema = {
  name: "event",
  type: "document",
  title: "Event",
  fields: [
    { name: "title", type: "string", title: "Title", validation: (rule: { required: () => unknown }) => rule.required() },
    { name: "slug", type: "slug", title: "Slug", options: { source: "title", maxLength: 96 }, validation: (rule: { required: () => unknown }) => rule.required() },
    { name: "date", type: "datetime", title: "Date", validation: (rule: { required: () => unknown }) => rule.required() },
    { name: "location", type: "string", title: "Location" },
    { name: "description", type: "text", title: "Description" },
    { name: "image", type: "image", title: "Image", options: { hotspot: true } }
  ]
};

export default eventSchema;
