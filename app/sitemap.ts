import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/constants";
import { getBlogPosts, getEvents, getPrograms } from "@/lib/sanity/fetchers";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [posts, events, programs] = await Promise.all([getBlogPosts(), getEvents(), getPrograms()]);

  const staticRoutes = ["", "/about", "/programs", "/donate", "/blog", "/events", "/resources", "/get-involved", "/contact", "/policies"].map(
    (route) => ({
      url: `${SITE_URL}${route}`,
      lastModified: new Date()
    })
  );

  const blogRoutes = posts.map((post) => ({
    url: `${SITE_URL}/blog/${post.slug.current}`,
    lastModified: post.publishedAt ? new Date(post.publishedAt) : new Date()
  }));

  const eventRoutes = events.map((event) => ({
    url: `${SITE_URL}/events/${event.slug.current}`,
    lastModified: new Date(event.date)
  }));

  const programRoutes = programs.map((program) => ({
    url: `${SITE_URL}/programs/${program.slug.current}`,
    lastModified: new Date()
  }));

  return [...staticRoutes, ...blogRoutes, ...eventRoutes, ...programRoutes];
}
