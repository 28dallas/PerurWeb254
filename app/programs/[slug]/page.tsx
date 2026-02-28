import { notFound } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { getProgramBySlug } from "@/lib/sanity/fetchers";
import Image from "next/image";

interface ProgramDetailPageProps {
  params: { slug: string };
}

export default async function ProgramDetailPage({ params }: ProgramDetailPageProps) {
  const program = await getProgramBySlug(params.slug);
  if (!program) notFound();

  return (
    <Section>
      <article className="mx-auto max-w-4xl rounded-xl2 bg-white p-8 shadow-soft">
        {program.image?.asset?.url && (
          <div className="relative mb-6 h-80 w-full overflow-hidden rounded-xl2 bg-softGray">
            <Image src={program.image.asset.url} alt={program.image.alt || program.title} fill className="object-cover" sizes="100vw" />
          </div>
        )}
        <h1 className="text-3xl font-bold text-brandBlue">{program.title}</h1>
        <p className="mt-4 text-slate-700">{program.description}</p>

        {program.activities && (
          <div className="mt-6">
            <h2 className="text-sm font-semibold uppercase tracking-wide text-brandGreen">Activities</h2>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-600">
              {program.activities.map((activity) => (
                <li key={activity}>{activity}</li>
              ))}
            </ul>
          </div>
        )}

        {program.impactStats && (
          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {program.impactStats.map((item) => (
              <div key={item.label} className="rounded-xl2 bg-softGray p-4">
                <p className="text-xl font-bold text-brandBlue">{item.value}</p>
                <p className="text-sm text-slate-600">{item.label}</p>
              </div>
            ))}
          </div>
        )}

        <div className="mt-8 flex flex-wrap gap-3">
          <Button href="/donate" variant="secondary">
            Donate to this program
          </Button>
          <Button href="/get-involved" variant="ghost">
            Volunteer or Partner
          </Button>
        </div>
      </article>
    </Section>
  );
}
