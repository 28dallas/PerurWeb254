const resourceSchema = {
  name: "resource",
  type: "document",
  title: "Resource",
  fields: [
    { name: "title", type: "string", title: "Title", validation: (rule: { required: () => unknown }) => rule.required() },
    {
      name: "fileUpload",
      type: "file",
      title: "Document",
      options: { accept: ".pdf,.doc,.docx" },
      validation: (rule: { required: () => unknown }) => rule.required()
    },
    { name: "category", type: "string", title: "Category", validation: (rule: { required: () => unknown }) => rule.required() }
  ]
};

export default resourceSchema;
