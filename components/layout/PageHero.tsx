import type { ReactNode } from "react";
import Image from "next/image";
import { siteImages } from "@/lib/site-images";

interface PageHeroProps {
  title: string;
  description: string;
  children?: ReactNode;
  imageSrc?: string;
  eyebrow?: string;
}

export function PageHero({ title, description, children, imageSrc = siteImages.cta, eyebrow = "Perur Rays of Hope" }: PageHeroProps) {
  return (
    <section className="relative isolate overflow-hidden bg-brandBlue py-24 text-white sm:py-32">
      <Image src={imageSrc} alt="" fill className="-z-20 object-cover" sizes="100vw" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#052a46]/95 via-[#073658]/80 to-[#073658]/45" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.22em] text-amber-300"><span className="h-px w-9 bg-amber-300" />{eyebrow}</p>
        <h1 className="mt-6 max-w-4xl font-serif text-5xl leading-[.98] tracking-tight sm:text-6xl">{title}</h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/85 sm:text-xl">{description}</p>
        {children && <div className="mt-9">{children}</div>}
      </div>
    </section>
  );
}
