import { PageHero } from "@/components/layout/PageHero";
import { Section } from "@/components/ui/Section";
import { getResources } from "@/lib/sanity/fetchers";
import Link from "next/link";

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

  return (
    <>
      <PageHero title="Resources" description="Download annual reports, policies, and guidance materials." />

      <Section title="Resource library" subtitle="Find key documents, policies, guidelines, and current career downloads in one place.">
        <div className="mb-8 grid gap-4 md:grid-cols-3">
          {[
            ["Reports", "Annual updates and public accountability documents."],
            ["Policies", "Safeguarding, protection, and governance materials."],
            ["Careers", "Current job descriptions and application documents."]
          ].map(([title, description]) => (
            <article key={title} className="rounded-xl2 bg-white p-5 shadow-soft">
              <h2 className="text-base font-semibold text-brandBlue">{title}</h2>
              <p className="mt-2 text-sm text-slate-600">{description}</p>
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
            <article key={resource._id} className="flex flex-col items-start justify-between gap-2 rounded-xl2 bg-white p-5 shadow-soft sm:flex-row sm:items-center">
              <div>
                <h2 className="text-base font-semibold text-brandBlue">{resource.title}</h2>
                <p className="text-sm text-slate-500">{resource.category}</p>
              </div>
              {resource.fileUrl ? (
                <a
                  href={resource.fileUrl}
                  className="rounded-xl2 bg-brandBlue px-4 py-2 text-sm font-medium text-white hover:bg-brandGreen"
                  download
                >
                  Download PDF
                </a>
              ) : (
                <span className="rounded-xl2 bg-slate-200 px-4 py-2 text-sm font-medium text-slate-500">File unavailable</span>
              )}
            </article>
          ))}
        </div>
      </Section>
    </>
  );
}
