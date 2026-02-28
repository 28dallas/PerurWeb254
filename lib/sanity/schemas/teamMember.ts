const teamMemberSchema = {
  name: "teamMember",
  type: "document",
  title: "Team Member",
  fields: [
    { name: "name", type: "string", title: "Name", validation: (rule: { required: () => unknown }) => rule.required() },
    { name: "role", type: "string", title: "Role", validation: (rule: { required: () => unknown }) => rule.required() },
    { name: "bio", type: "text", title: "Bio" },
    { name: "order", type: "number", title: "Display Order" },
    { name: "image", type: "image", title: "Image", options: { hotspot: true } }
  ]
};

export default teamMemberSchema;
