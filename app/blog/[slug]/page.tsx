import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Section } from "@/components/ui/Section";
import { getBlogPostBySlug } from "@/lib/sanity/fetchers";
import { formatDate } from "@/lib/utils";

interface BlogPostPageProps {
  params: { slug: string };
}

function renderBody(body: unknown, excerpt?: string) {
  if (typeof body === "string" && body.trim()) return body;

  if (Array.isArray(body)) {
    const text = body
      .map((block) => {
        if (typeof block !== "object" || block === null) return "";
        const maybeBlock = block as { children?: Array<{ text?: string }> };
        if (!Array.isArray(maybeBlock.children)) return "";
        return maybeBlock.children.map((child) => child.text || "").join("");
      })
      .filter(Boolean)
      .join("\n\n")
      .trim();

    if (text) return text;
  }

  return excerpt || "Article content will be available soon.";
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
        <p className="mt-6 whitespace-pre-line text-slate-700">{renderBody(post.body, post.excerpt)}</p>
      </article>
    </Section>
  );
}
