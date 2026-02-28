import type { ReactNode } from "react";
import Image from "next/image";
import { siteImages } from "@/lib/site-images";

interface PageHeroProps {
  title: string;
  description: string;
  children?: ReactNode;
  imageSrc?: string;
}

export function PageHero({ title, description, children, imageSrc = siteImages.cta }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden py-20 text-white">
      <div className="absolute inset-0" aria-hidden>
        <Image src={imageSrc} alt="" fill className="object-cover" sizes="100vw" />
        <div className="absolute inset-0 bg-brandBlue/75" />
        <div className="absolute inset-0 bg-gradient-to-r from-brandBlue/85 via-brandGreen/65 to-brandBlue/80" />
      </div>
      <div className="relative mx-auto max-w-7xl container-padding">
        <h1 className="max-w-3xl text-4xl font-bold leading-tight sm:text-5xl">{title}</h1>
        <p className="mt-4 max-w-2xl text-base text-slate-100 sm:text-lg">{description}</p>
        {children && <div className="mt-8">{children}</div>}
      </div>
    </section>
  );
}
