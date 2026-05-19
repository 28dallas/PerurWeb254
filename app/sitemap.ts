import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/constants";
import { getBlogPosts } from "@/lib/sanity/fetchers";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await getBlogPosts();

  const staticRoutes = ["", "/about", "/donate", "/blog", "/careers", "/gallery", "/resources", "/get-involved", "/contact", "/policies"].map(
    (route) => ({
      url: `${SITE_URL}${route}`,
      lastModified: new Date()
    })
  );

  const blogRoutes = posts.map((post) => ({
    url: `${SITE_URL}/blog/${post.slug.current}`,
    lastModified: post.publishedAt ? new Date(post.publishedAt) : new Date()
  }));

  return [...staticRoutes, ...blogRoutes];
}
