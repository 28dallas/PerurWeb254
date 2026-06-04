const blogPostSchema = {
  name: "blogPost",
  type: "document",
  title: "Blog Post",
  fields: [
    { name: "title", type: "string", title: "Title", validation: (rule: { required: () => unknown }) => rule.required() },
    { name: "slug", type: "slug", title: "Slug", options: { source: "title", maxLength: 96 }, validation: (rule: { required: () => unknown }) => rule.required() },
    { name: "excerpt", type: "text", title: "Excerpt" },
    { name: "body", type: "array", title: "Body", of: [{ type: "block" }] },
    { name: "author", type: "reference", to: [{ type: "teamMember" }], title: "Author" },
    { name: "category", type: "string", title: "Category" },
    { name: "sourceUrl", type: "url", title: "Source URL" },
    { name: "featuredImage", type: "image", title: "Featured Image", options: { hotspot: true } },
    { name: "publishedAt", type: "datetime", title: "Published At" },
    { name: "seoTitle", type: "string", title: "SEO Title" },
    { name: "seoDescription", type: "text", title: "SEO Description" }
  ]
};

export default blogPostSchema;
