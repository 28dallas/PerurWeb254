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
  const featuredPost = posts[0];
  const featuredHref = featuredPost?.sourceUrl || (featuredPost ? `/blog/${featuredPost.slug.current}` : "");
  const isExternalFeatured = /^(https?:)?\/\//.test(featuredHref);

  return (
    <>
      <PageHero eyebrow="From the field" title="Stories that move with the community." description="Updates, insight and moments of progress from across West Pokot." imageSrc="/images/new/photo_70_2026-03-03_11-10-37.jpg" />

      {featuredPost ? (
        <Section className="bg-[#f4f1e9]" title="Featured story" subtitle="A closer look at the people and ideas shaping local progress.">
          <article className="border-l-4 border-brandGreen bg-white p-7 shadow-soft lg:grid lg:grid-cols-[1.2fr_.8fr] lg:gap-12 lg:p-10">
            <div className="lg:pr-8">
              <p className="text-sm font-semibold uppercase tracking-wide text-brandGreen">{featuredPost.category || "News"}</p>
              <h2 className="mt-4 font-serif text-4xl leading-tight text-brandBlue">{featuredPost.title}</h2>
              <p className="mt-5 text-lg leading-relaxed text-slate-600">{featuredPost.excerpt}</p>
            </div>
            <div className="mt-8 flex flex-col justify-end gap-6 border-t border-slate-200 pt-6 lg:mt-0 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
              <p className="text-sm text-slate-500">By {featuredPost.author?.name || "PRoH Team"}</p>
              <a
                href={featuredHref}
                target={isExternalFeatured ? "_blank" : undefined}
                rel={isExternalFeatured ? "noopener noreferrer" : undefined}
                className="inline-flex w-fit rounded-full bg-brandBlue px-5 py-3 text-sm font-bold text-white hover:bg-brandGreen"
              >
                Read story
              </a>
            </div>
          </article>
        </Section>
      ) : null}

      <Section title="Focus areas" subtitle="Follow the work happening across the community.">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {["Child Protection", "Women Empowerment", "Youth Skills", "Environment"].map((item) => (
            <article key={item} className="border-t-2 border-brandGreen bg-[#f4f1e9] p-6">
              <h2 className="font-serif text-2xl text-brandBlue">{item}</h2>
              <p className="mt-2 text-sm text-slate-600">Stories, lessons, and field updates from this area of work.</p>
            </article>
          ))}
        </div>
      </Section>

      <Section className="bg-[#f4f1e9]" title="Latest news & insights">
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
