import { groq } from "next-sanity";

export const siteSettingsQuery = groq`*[_type == "siteSettings"][0]`;

export const homepageQuery = groq`*[_type == "homepage"][0]{
  heroTitle,
  heroSubtitle,
  heroImage,
  impactStats,
  successStory,
  ctaTitle,
  ctaText
}`;

export const aboutPageQuery = groq`*[_type == "aboutPage"][0]{
  story,
  governance,
  vision,
  mission,
  coreValues
}`;

export const programsQuery = groq`*[_type == "program"] | order(title asc){
  _id,
  title,
  slug,
  description,
  activities,
  impactStats,
  image
}`;

export const programBySlugQuery = groq`*[_type == "program" && slug.current == $slug][0]{
  _id,
  title,
  slug,
  description,
  activities,
  impactStats,
  image
}`;

export const teamMembersQuery = groq`*[_type == "teamMember"] | order(order asc){
  _id,
  name,
  role,
  bio,
  image
}`;

export const blogPostsQuery = groq`*[_type == "blogPost"] | order(publishedAt desc){
  _id,
  title,
  slug,
  excerpt,
  publishedAt,
  category,
  featuredImage,
  "author": author->{name}
}`;

export const blogPostBySlugQuery = groq`*[_type == "blogPost" && slug.current == $slug][0]{
  _id,
  title,
  slug,
  excerpt,
  body,
  publishedAt,
  seoTitle,
  seoDescription,
  category,
  featuredImage,
  "author": author->{name}
}`;

export const eventsQuery = groq`*[_type == "event"] | order(date asc){
  _id,
  title,
  slug,
  date,
  location,
  description,
  image
}`;

export const eventBySlugQuery = groq`*[_type == "event" && slug.current == $slug][0]{
  _id,
  title,
  slug,
  date,
  location,
  description,
  image
}`;

export const resourcesQuery = groq`*[_type == "resource"] | order(category asc, title asc){
  _id,
  title,
  category,
  "fileUrl": fileUpload.asset->url
}`;

export const testimonialsQuery = groq`*[_type == "testimonial"] | order(_createdAt desc){
  _id,
  name,
  role,
  quote
}`;
