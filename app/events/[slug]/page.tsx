import { notFound } from "next/navigation";
import { Section } from "@/components/ui/Section";
import { getEventBySlug } from "@/lib/sanity/fetchers";
import { formatDate } from "@/lib/utils";
import Image from "next/image";

interface EventPageProps {
  params: { slug: string };
}

export default async function EventDetailPage({ params }: EventPageProps) {
  const event = await getEventBySlug(params.slug);
  if (!event) notFound();

  return (
    <Section>
      <article className="mx-auto max-w-3xl rounded-xl2 bg-white p-8 shadow-soft">
        {event.image?.asset?.url && (
          <div className="relative mb-6 h-72 w-full overflow-hidden rounded-xl2 bg-softGray">
            <Image src={event.image.asset.url} alt={event.image.alt || event.title} fill className="object-cover" sizes="100vw" />
          </div>
        )}
        <h1 className="text-3xl font-bold text-brandBlue">{event.title}</h1>
        <p className="mt-3 text-sm text-brandGreen">{formatDate(event.date)}</p>
        <p className="mt-1 text-sm text-slate-600">{event.location}</p>
        <p className="mt-6 text-slate-700">{event.description}</p>
      </article>
    </Section>
  );
}
