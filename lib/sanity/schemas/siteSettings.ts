const siteSettingsSchema = {
  name: "siteSettings",
  type: "document",
  title: "Site Settings",
  fields: [
    { name: "organizationName", type: "string", title: "Organization Name" },
    { name: "email", type: "string", title: "Email" },
    { name: "phone", type: "string", title: "Phone" },
    { name: "address", type: "string", title: "Address" },
    {
      name: "socialLinks",
      type: "object",
      title: "Social Links",
      fields: [
        { name: "facebook", type: "url", title: "Facebook" },
        { name: "instagram", type: "url", title: "Instagram" },
        { name: "linkedin", type: "url", title: "LinkedIn" },
        { name: "x", type: "url", title: "X / Twitter" }
      ]
    }
  ]
};

export default siteSettingsSchema;
