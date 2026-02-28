const testimonialSchema = {
  name: "testimonial",
  type: "document",
  title: "Testimonial",
  fields: [
    { name: "name", type: "string", title: "Name", validation: (rule: { required: () => unknown }) => rule.required() },
    { name: "role", type: "string", title: "Role" },
    { name: "quote", type: "text", title: "Quote", validation: (rule: { required: () => unknown }) => rule.required() }
  ]
};

export default testimonialSchema;
