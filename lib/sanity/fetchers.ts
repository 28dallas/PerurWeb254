import type { BlogPost, BlogPostDetail, Event, Program, Resource, SiteSettings, TeamMember, Testimonial } from "@/lib/types";
import { hasSanityConfig, sanityClient } from "./client";
import {
  blogPostBySlugQuery,
  blogPostsQuery,
  eventBySlugQuery,
  eventsQuery,
  homepageQuery,
  programBySlugQuery,
  programsQuery,
  resourcesQuery,
  siteSettingsQuery,
  teamMembersQuery,
  testimonialsQuery
} from "./queries";
import {
  fallbackEvents,
  fallbackPosts,
  fallbackPrograms,
  fallbackResources,
  fallbackSiteSettings,
  fallbackTeam,
  fallbackTestimonials
} from "@/lib/content";

async function safeFetch<T>(query: string, params: Record<string, unknown> = {}, fallback: T): Promise<T> {
  if (!hasSanityConfig) return fallback;

  try {
    return await sanityClient.fetch<T>(query, params);
  } catch {
    return fallback;
  }
}

export async function getPrograms() {
  return safeFetch<Program[]>(programsQuery, {}, fallbackPrograms);
}

export async function getProgramBySlug(slug: string) {
  const fallback = fallbackPrograms.find((item) => item.slug.current === slug) || null;
  return safeFetch<Program | null>(programBySlugQuery, { slug }, fallback);
}

export async function getTeamMembers() {
  return safeFetch<TeamMember[]>(teamMembersQuery, {}, fallbackTeam);
}

export async function getBlogPosts() {
  return safeFetch<BlogPost[]>(blogPostsQuery, {}, fallbackPosts);
}

export async function getBlogPostBySlug(slug: string) {
  const fallback = fallbackPosts.find((item) => item.slug.current === slug) || null;
  return safeFetch<BlogPostDetail | null>(blogPostBySlugQuery, { slug }, fallback);
}

export async function getEvents() {
  return safeFetch<Event[]>(eventsQuery, {}, fallbackEvents);
}

export async function getEventBySlug(slug: string) {
  const fallback = fallbackEvents.find((item) => item.slug.current === slug) || null;
  return safeFetch<Event | null>(eventBySlugQuery, { slug }, fallback);
}

export async function getResources() {
  return safeFetch<Resource[]>(resourcesQuery, {}, fallbackResources);
}

export async function getTestimonials() {
  return safeFetch<Testimonial[]>(testimonialsQuery, {}, fallbackTestimonials);
}

export async function getHomepageData() {
  return safeFetch<Record<string, unknown> | null>(homepageQuery, {}, null);
}

export async function getSiteSettings() {
  return safeFetch<SiteSettings>(siteSettingsQuery, {}, fallbackSiteSettings);
}
