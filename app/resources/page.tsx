import { PageHero } from "@/components/layout/PageHero";
import { Section } from "@/components/ui/Section";
import { getResources } from "@/lib/sanity/fetchers";

export default async function ResourcesPage() {
  const resources = await getResources();

  return (
    <>
      <PageHero title="Resources" description="Download annual reports, policies, and guidance materials." />
      <Section>
        <div className="mb-6 rounded-xl2 bg-softGray p-4 text-sm text-slate-600">Filter placeholder: Annual Reports | Policies | Guidelines</div>
        <div className="space-y-4">
          {resources.map((resource) => (
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
