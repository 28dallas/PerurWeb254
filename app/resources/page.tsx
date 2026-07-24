import { PageHero } from "@/components/layout/PageHero";
import { Section } from "@/components/ui/Section";
import { getResources } from "@/lib/sanity/fetchers";
import Link from "next/link";
import Image from "next/image";

interface ResourcesPageProps {
  searchParams?: {
    category?: string;
  };
}

export default async function ResourcesPage({ searchParams }: ResourcesPageProps) {
  const resources = await getResources();
  const categories = Array.from(new Set(resources.map((resource) => resource.category))).sort((a, b) => a.localeCompare(b));
  const selectedCategory = searchParams?.category || "All";
  const filteredResources =
    selectedCategory === "All" ? resources : resources.filter((resource) => resource.category === selectedCategory);
  const availableResources = resources.filter((resource) => resource.fileUrl && resource.fileUrl !== "#").length;

  return (
    <>
      <PageHero eyebrow="Knowledge hub" title="Resources for informed action." description="Reports, policies, practical guidance and current opportunities from Perur Rays of Hope." imageSrc="/images/rays/photo_2026-05-19_13-57-49.jpg" />

      <section className="bg-[#f4f1e9] py-16 sm:py-20"><div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[.72fr_1.28fr] lg:px-8"><p className="text-sm font-bold uppercase tracking-[.2em] text-brandGreen">Resource library</p><p className="font-serif text-3xl leading-tight text-brandBlue sm:text-4xl">Tools, documents and learning materials to help communities and partners move forward together.</p></div></section>
      <Section className="bg-white" title="Browse the library" subtitle="Find key documents, policies, guidelines, and current career downloads in one place.">
        <div className="mb-8 grid gap-4 md:grid-cols-3">
          {[
            ["Documents listed", String(resources.length)],
            ["Ready to download", String(availableResources)],
            ["Coming soon", String(resources.length - availableResources)]
          ].map(([title, description]) => (
            <article key={title} className="border-t-2 border-brandGreen bg-[#f4f1e9] p-6">
              <h2 className="text-sm font-semibold text-brandBlue">{title}</h2>
              <p className="mt-2 font-serif text-4xl text-brandGreen">{description}</p>
            </article>
          ))}
        </div>

        <div className="mb-6 flex flex-wrap gap-2">
          {["All", ...categories].map((category) => {
            const active = selectedCategory === category;
            const href = category === "All" ? "/resources" : `/resources?category=${encodeURIComponent(category)}`;
            return (
              <Link
                key={category}
                href={href}
                className={`rounded-full border px-4 py-2 text-sm ${
                  active
                    ? "border-brandBlue bg-brandBlue text-white"
                    : "border-slate-300 bg-white text-slate-700 hover:border-brandBlue hover:text-brandBlue"
                }`}
              >
                {category}
              </Link>
            );
          })}
        </div>
        <div className="space-y-4">
          {filteredResources.map((resource) => (
            <article key={resource._id} className="flex flex-col items-start justify-between gap-3 border-l-4 border-brandGreen bg-[#f4f1e9] p-5 sm:flex-row sm:items-center">
              <div>
                <h2 className="text-base font-semibold text-brandBlue">{resource.title}</h2>
                <p className="text-sm text-slate-500">{resource.category}</p>
              </div>
              {resource.fileUrl && resource.fileUrl !== "#" ? (
                <a
                  href={resource.fileUrl}
                  className="rounded-full bg-brandBlue px-5 py-2.5 text-sm font-bold text-white hover:bg-brandGreen"
                  download
                >
                  Download PDF
                </a>
              ) : (
                <span className="rounded-xl2 bg-slate-200 px-4 py-2 text-sm font-medium text-slate-500">Coming soon</span>
              )}
            </article>
          ))}
        </div>
      </Section>
      <section className="bg-brandBlue py-16 text-white sm:py-20"><div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[.85fr_1.15fr] lg:px-8"><div><p className="text-sm font-bold uppercase tracking-[.2em] text-amber-300">Learning in action</p><h2 className="mt-4 font-serif text-4xl leading-tight sm:text-5xl">Resources are only useful when they reach the people doing the work.</h2></div><div className="grid grid-cols-2 gap-3"><div className="relative min-h-48 overflow-hidden"><Image src="/images/new/photo_30_2026-03-03_11-10-37.jpg" alt="Community learning session" fill className="object-cover" /></div><div className="relative mt-8 min-h-48 overflow-hidden"><Image src="/images/rays/photo_2026-05-19_13-57-59.jpg" alt="PRoH community activity" fill className="object-cover" /></div></div></div></section>
    </>
  );
}
