import Image from "next/image";
import Link from "next/link";
import type { BlogPost, Program, TeamMember } from "@/lib/types";
import { siteImages } from "@/lib/site-images";

const COMMON_CBO_STATEMENT = "Perur Rays of Hope CBO";

// Fallback images for blog posts when no featured image is available
const blogFallbackImages = [
  siteImages.gallery[0],
  siteImages.gallery[1],
  siteImages.gallery[2],
  siteImages.gallery[3],
  siteImages.gallery[4],
  siteImages.gallery[5]
];

function getBlogFallbackImage(post: BlogPost, index: number) {
  const category = (post.category || "").toLowerCase();
  const title = post.title.toLowerCase();

  if (category.includes("women") || title.includes("women") || title.includes("girls")) {
    return siteImages.blog.women;
  }

  if (category.includes("environment") || title.includes("climate") || title.includes("soil") || title.includes("tree")) {
    return siteImages.blog.environment;
  }

  if (
    category.includes("child") ||
    category.includes("education") ||
    category.includes("youth") ||
    title.includes("child") ||
    title.includes("school") ||
    title.includes("youth")
  ) {
    return siteImages.blog.child;
  }

  return blogFallbackImages[index % blogFallbackImages.length];
}

export function ProgramCard({ program, index = 0 }: { program: Program; index?: number }) {
  const fallbackImage = blogFallbackImages[index % blogFallbackImages.length];
  
  return (
    <article className="overflow-hidden rounded-xl2 bg-white shadow-soft transition-transform duration-300 hover:-translate-y-1">
      <div className="relative aspect-[3/4] w-full bg-softGray">
        <Image
          src={program.image?.asset?.url || fallbackImage}
          alt={program.image?.alt || program.title}
          fill
          className="object-cover object-center"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-brandBlue">{program.title}</h3>
        <p className="mt-3 text-sm text-slate-600">{COMMON_CBO_STATEMENT}</p>
        <Link href={`/programs/${program.slug.current}`} className="mt-4 inline-block text-sm font-semibold text-brandGreen">
          Learn more
        </Link>
      </div>
    </article>
  );
}

export function BlogCard({ post, index = 0, imageOverride }: { post: BlogPost; index?: number; imageOverride?: string }) {
  const fallbackImage = getBlogFallbackImage(post, index);
  const articleHref = post.sourceUrl || `/blog/${post.slug.current}`;
  const isExternalArticle = /^(https?:)?\/\//.test(articleHref);
  
  return (
    <article className="overflow-hidden rounded-xl2 bg-white shadow-soft">
      <div className="relative h-48 w-full bg-softGray">
        <Image
          src={imageOverride || post.featuredImage?.asset?.url || fallbackImage}
          alt={post.title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>
      <div className="p-5">
        <p className="text-xs font-medium uppercase tracking-wide text-brandGreen">{post.category || "News"}</p>
        <h3 className="mt-2 text-lg font-semibold text-brandBlue">{post.title}</h3>
        <p className="mt-3 text-sm text-slate-600">{post.excerpt || COMMON_CBO_STATEMENT}</p>
        {isExternalArticle ? (
          <a href={articleHref} target="_blank" rel="noopener noreferrer" className="mt-4 inline-block text-sm font-semibold text-brandBlue">
            Read article
          </a>
        ) : (
          <Link href={articleHref} className="mt-4 inline-block text-sm font-semibold text-brandBlue">
            Read article
          </Link>
        )}
      </div>
    </article>
  );
}

export function TeamCard({ member }: { member: TeamMember }) {
  return (
    <article className="rounded-xl2 bg-white p-6 shadow-soft">
      {member.image?.asset?.url && (
        <div className="relative mb-4 h-20 w-20 overflow-hidden rounded-full">
          <Image src={member.image.asset.url} alt={member.image.alt || member.name} fill className="object-cover" sizes="80px" />
        </div>
      )}
      <h3 className="text-lg font-semibold text-brandBlue">{member.name}</h3>
      <p className="mt-1 text-sm font-medium text-brandGreen">{member.role}</p>
      <p className="mt-3 text-sm text-slate-600">{member.bio}</p>
    </article>
  );
}
