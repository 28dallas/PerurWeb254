import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { BlogCard } from "@/components/ui/Cards";
import { Section } from "@/components/ui/Section";
import { getBlogPosts } from "@/lib/sanity/fetchers";

export const metadata: Metadata = {
  title: "Blog & News",
  description: "Latest stories, field updates, and program insights from Perur Rays of Hope."
};

export default async function BlogPage() {
  const posts = await getBlogPosts();

  return (
    <>
      <PageHero title="Blog & News" description="Stories, updates, and insights from our programs and partners." />
      <Section>
        <div className="mb-6 rounded-xl2 bg-softGray p-4 text-sm text-slate-600">
          Categories: Child Protection, Women Empowerment, Youth Empowerment, Education, Environment.
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <BlogCard key={post._id} post={post} />
          ))}
        </div>
      </Section>
    </>
  );
}
