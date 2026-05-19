import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { BlogCard } from "@/components/ui/Cards";
import { Section } from "@/components/ui/Section";
import { getBlogPosts } from "@/lib/sanity/fetchers";

export const metadata: Metadata = {
  title: "Blog",
  description: "Latest stories, updates, and program insights from Perur Rays of Hope."
};

export default async function BlogPage() {
  const posts = await getBlogPosts();

  return (
    <>
      <PageHero title="Blog" description="Browse stories, updates, and practical insights from our programs and partners." />

      <Section title="Latest news & insights">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, index) => (
            <BlogCard key={post._id} post={post} index={index} />
          ))}
        </div>
      </Section>
    </>
  );
}
