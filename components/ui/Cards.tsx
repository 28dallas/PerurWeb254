import Image from "next/image";
import Link from "next/link";
import type { BlogPost, Program, TeamMember } from "@/lib/types";
import { formatDate } from "@/lib/utils";

export function ProgramCard({ program }: { program: Program }) {
  return (
    <article className="overflow-hidden rounded-xl2 bg-white shadow-soft transition-transform duration-300 hover:-translate-y-1">
      <div className="relative h-44 w-full bg-softGray">
        <Image
          src={program.image?.asset?.url || "/images/placeholder-blog.svg"}
          alt={program.image?.alt || program.title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-brandBlue">{program.title}</h3>
        <p className="mt-3 text-sm text-slate-600">{program.description}</p>
        <Link href={`/programs/${program.slug.current}`} className="mt-4 inline-block text-sm font-semibold text-brandGreen">
          Learn more
        </Link>
      </div>
    </article>
  );
}

export function BlogCard({ post }: { post: BlogPost }) {
  return (
    <article className="overflow-hidden rounded-xl2 bg-white shadow-soft">
      <div className="relative h-48 w-full bg-softGray">
        <Image
          src={post.featuredImage?.asset?.url || "/images/placeholder-blog.svg"}
          alt={post.title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>
      <div className="p-5">
        <p className="text-xs font-medium uppercase tracking-wide text-brandGreen">{post.category || "News"}</p>
        <h3 className="mt-2 text-lg font-semibold text-brandBlue">{post.title}</h3>
        {post.publishedAt && <p className="mt-2 text-xs text-slate-500">{formatDate(post.publishedAt)}</p>}
        <p className="mt-3 text-sm text-slate-600">{post.excerpt}</p>
        <Link href={`/blog/${post.slug.current}`} className="mt-4 inline-block text-sm font-semibold text-brandBlue">
          Read article
        </Link>
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
