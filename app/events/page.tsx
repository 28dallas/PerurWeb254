import { PageHero } from "@/components/layout/PageHero";
import { Section } from "@/components/ui/Section";
import { getEvents } from "@/lib/sanity/fetchers";
import { formatDate } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const eventCardImages = [
  "/images/new/photo_35_2026-03-03_11-10-37.jpg",
  "/images/new/photo_80_2026-03-03_11-10-37.jpg"
];

interface EventsPageProps {
  searchParams?: {
    month?: string;
  };
}

function resolveCalendarMonth(monthParam?: string) {
  if (monthParam && /^\d{4}-\d{2}$/.test(monthParam)) {
    const [yearText, monthText] = monthParam.split("-");
    const year = Number(yearText);
    const month = Number(monthText) - 1;
    if (Number.isInteger(year) && Number.isInteger(month) && month >= 0 && month <= 11) {
      return { year, month };
    }
  }

  const now = new Date();
  return { year: now.getUTCFullYear(), month: now.getUTCMonth() };
}

export default async function EventsPage({ searchParams }: EventsPageProps) {
  const events = await getEvents();
  const selected = resolveCalendarMonth(searchParams?.month);
  const currentMonth = selected.month;
  const currentYear = selected.year;
  const firstDay = new Date(Date.UTC(currentYear, currentMonth, 1));
  const firstWeekDay = firstDay.getUTCDay();
  const daysInMonth = new Date(Date.UTC(currentYear, currentMonth + 1, 0)).getUTCDate();
  const prevMonthDate = new Date(Date.UTC(currentYear, currentMonth - 1, 1));
  const nextMonthDate = new Date(Date.UTC(currentYear, currentMonth + 1, 1));
  const prevParam = `${prevMonthDate.getUTCFullYear()}-${String(prevMonthDate.getUTCMonth() + 1).padStart(2, "0")}`;
  const nextParam = `${nextMonthDate.getUTCFullYear()}-${String(nextMonthDate.getUTCMonth() + 1).padStart(2, "0")}`;
  const monthLabel = firstDay.toLocaleString("en-US", { month: "long", year: "numeric", timeZone: "UTC" });

  const eventsByDay = new Map<number, string[]>();
  for (const event of events) {
    const eventDate = new Date(event.date);
    if (eventDate.getUTCMonth() !== currentMonth || eventDate.getUTCFullYear() !== currentYear) continue;
    const day = eventDate.getUTCDate();
    const existing = eventsByDay.get(day) || [];
    existing.push(event.title);
    eventsByDay.set(day, existing);
  }

  const calendarCells: Array<{ day?: number; titles?: string[] }> = [];
  for (let i = 0; i < firstWeekDay; i += 1) {
    calendarCells.push({});
  }
  for (let day = 1; day <= daysInMonth; day += 1) {
    calendarCells.push({ day, titles: eventsByDay.get(day) || [] });
  }
  while (calendarCells.length % 7 !== 0) {
    calendarCells.push({});
  }

  return (
    <>
      <PageHero title="Events" description="Community events, learning forums, and collaboration opportunities." />
      <Section>
        <article className="mb-10 rounded-xl2 bg-softGray p-6">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <h2 className="text-xl font-semibold text-brandBlue">{monthLabel} Calendar</h2>
            <div className="flex items-center gap-2">
              <Link
                href={`/events?month=${prevParam}`}
                className="rounded-md border border-slate-300 bg-white px-3 py-1 text-sm text-slate-700 hover:border-brandBlue hover:text-brandBlue"
              >
                Previous
              </Link>
              <Link
                href={`/events?month=${nextParam}`}
                className="rounded-md border border-slate-300 bg-white px-3 py-1 text-sm text-slate-700 hover:border-brandBlue hover:text-brandBlue"
              >
                Next
              </Link>
            </div>
          </div>
          <p className="mt-2 text-sm text-slate-600">Dates with events are highlighted. All dates are shown in UTC.</p>
          <div className="mt-4 grid grid-cols-7 gap-2 text-center text-xs font-semibold uppercase tracking-wide text-slate-500">
            {weekDays.map((day) => (
              <div key={day}>{day}</div>
            ))}
          </div>
          <div className="mt-2 grid grid-cols-7 gap-2">
            {calendarCells.map((cell, index) => (
              <div
                key={`${cell.day || "empty"}-${index}`}
                className={`min-h-16 rounded-lg border p-2 text-xs ${
                  cell.day
                    ? cell.titles && cell.titles.length > 0
                      ? "border-brandGreen bg-brandGreen/10 text-brandBlue"
                      : "border-slate-200 bg-white text-slate-700"
                    : "border-transparent"
                }`}
                title={cell.titles?.join(" | ")}
              >
                {cell.day && (
                  <>
                    <p className="font-semibold">{cell.day}</p>
                    {cell.titles && cell.titles.length > 0 && (
                      <p className="mt-1 text-[11px] text-brandGreen">{cell.titles[0]}</p>
                    )}
                  </>
                )}
              </div>
            ))}
          </div>
        </article>

        <div className="grid gap-6 lg:grid-cols-2">
          {events.map((event, index) => {
            const cardImage = eventCardImages[index] || event.image?.asset?.url;

            return (
            <article key={event._id} className="overflow-hidden rounded-xl2 bg-white shadow-soft">
              {cardImage && (
                <div className="relative h-48 w-full bg-softGray">
                  <Image
                    src={cardImage}
                    alt={event.image?.alt || event.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              )}
              <div className="p-6">
                <p className="text-sm font-medium text-brandGreen">{formatDate(event.date)}</p>
                <h2 className="mt-2 text-xl font-semibold text-brandBlue">{event.title}</h2>
                <p className="mt-2 text-sm text-slate-600">{event.location}</p>
                <p className="mt-3 text-sm text-slate-700">{event.description}</p>
                <Link href={`/events/${event.slug.current}`} className="mt-4 inline-block text-sm font-semibold text-brandBlue">
                  View details
                </Link>
              </div>
            </article>
            );
          })}
        </div>
      </Section>
    </>
  );
}
