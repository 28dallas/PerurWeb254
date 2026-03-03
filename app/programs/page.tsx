import { PageHero } from "@/components/layout/PageHero";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { getPrograms } from "@/lib/sanity/fetchers";
import { siteImages } from "@/lib/site-images";
import InteractiveGallery from "@/components/ui/InteractiveGallery";

export default async function ProgramsPage() {
  const programs = await getPrograms();

  return (
    <>
      <PageHero
        title="Programs"
        description="Women Empowerment, Youth Empowerment, Child Protection, Education, and Environmental Conservation."
      />

      <Section>
        <div className="space-y-8">
          {programs.map((program) => (
            <article
              key={program._id}
              id={program.slug.current}
              className="overflow-hidden rounded-xl2 bg-white shadow-soft md:grid md:grid-cols-[320px_1fr]"
            >
              {program.image?.asset?.url && (
                <div className="relative mx-auto aspect-[3/4] w-full max-w-sm bg-softGray md:mx-0 md:h-full md:max-w-none md:aspect-auto">
                  <Image
                    src={program.image.asset.url}
                    alt={program.image.alt || program.title}
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 768px) 100vw, 320px"
                  />
                </div>
              )}
              <div className="p-7">
                <h2 className="text-2xl font-semibold text-brandBlue">{program.title}</h2>
                <p className="mt-3 text-slate-700">{program.description}</p>

                {program.activities && (
                  <div className="mt-5">
                    <h3 className="text-sm font-semibold uppercase tracking-wide text-brandGreen">Activities</h3>
                    <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-600">
                      {program.activities.map((activity) => (
                        <li key={activity}>{activity}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {program.impactStats && (
                  <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                    {program.impactStats.map((item) => (
                      <div key={item.label} className="rounded-xl2 bg-softGray p-4">
                        <p className="text-xl font-bold text-brandBlue">{item.value}</p>
                        <p className="text-sm text-slate-600">{item.label}</p>
                      </div>
                    ))}
                  </div>
                )}

                {program.fundingGoal && (
                  <div className="mt-6 rounded-xl2 border border-brandBlue/10 bg-white p-5 shadow-soft">
                    <h3 className="mb-3 text-sm font-semibold text-brandBlue">Campaign Progress</h3>
                    <ProgressBar
                      amountRaised={program.amountRaised || 0}
                      fundingGoal={program.fundingGoal}
                    />
                  </div>
                )}

                <div className="mt-6 flex flex-wrap gap-3">
                  <Link href={`/programs/${program.slug.current}`} className="text-sm font-semibold text-brandBlue">
                    Program details
                  </Link>
                  <Button href="/get-involved" variant="ghost">
                    Support this program
                  </Button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section>
        <h3 className="mb-4 text-xl font-semibold text-brandBlue">Program Gallery</h3>
        <InteractiveGallery images={siteImages.gallery.filter((p) => p.includes("/images/new/"))} />
      </Section>
    </>
  );
}
