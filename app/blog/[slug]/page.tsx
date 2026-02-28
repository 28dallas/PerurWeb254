import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Section } from "@/components/ui/Section";
import { getBlogPostBySlug } from "@/lib/sanity/fetchers";
import { formatDate } from "@/lib/utils";

interface BlogPostPageProps {
  params: { slug: string };
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const post = await getBlogPostBySlug(params.slug);
  if (!post) return { title: "Article not found" };

  return {
    title: post.seoTitle || post.title,
    description: post.seoDescription || post.excerpt
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const post = await getBlogPostBySlug(params.slug);
  if (!post) notFound();

  return (
    <Section>
      <article className="mx-auto max-w-3xl rounded-xl2 bg-white p-8 shadow-soft">
        <p className="text-xs font-semibold uppercase tracking-wide text-brandGreen">{post.category}</p>
        <h1 className="mt-2 text-3xl font-bold text-brandBlue">{post.title}</h1>
        <p className="mt-3 text-sm text-slate-500">
          By {post.author?.name || "PRoH Team"}
          {post.publishedAt ? ` • ${formatDate(post.publishedAt)}` : ""}
        </p>
        <p className="mt-6 whitespace-pre-line text-slate-700">
          {post.excerpt ||
            "Body renderer placeholder: add @portabletext/react and map block content for full rich text rendering from Sanity."}
        </p>
      </article>
    </Section>
  );
}
