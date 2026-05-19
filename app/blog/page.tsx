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
  const categories = Array.from(new Set(posts.map((post) => post.category || "News")));

  return (
    <>
      <PageHero title="Blog" description="Browse stories, updates, and practical insights from our programs and partners." />

      <Section title="Focus areas" subtitle="Explore updates by theme and follow the work happening across the community.">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {["Child Protection", "Women Empowerment", "Youth Skills", "Environment"].map((item) => (
            <article key={item} className="rounded-xl2 border border-slate-200 bg-white p-5 shadow-soft">
              <h2 className="text-base font-semibold text-brandBlue">{item}</h2>
              <p className="mt-2 text-sm text-slate-600">Stories, lessons, and field updates from this area of work.</p>
            </article>
          ))}
        </div>
      </Section>

      <Section title="Latest news & insights">
        <div className="mb-6 flex flex-wrap gap-2">
          {categories.map((category) => (
            <span key={category} className="rounded-full border border-brandBlue/20 bg-brandBlue/5 px-4 py-2 text-sm font-medium text-brandBlue">
              {category}
            </span>
          ))}
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, index) => (
            <BlogCard key={post._id} post={post} index={index} />
          ))}
        </div>
      </Section>
    </>
  );
}
