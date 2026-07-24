import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { careerRoles } from "@/lib/careers";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Careers",
  description: "Current career opportunities at Perur Rays of Hope."
};

const applicationEmail = "info@perurraysofhope.org";

export default function CareersPage() {
  return (
    <>
      <PageHero
        eyebrow="Work with purpose"
        title="Bring your talent to work that matters."
        description="Join a team safeguarding children, empowering women and youth, and strengthening community resilience."
        imageSrc="/images/rays/photo_2026-05-19_13-57-30.jpg"
      >
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Button href="#open-roles" variant="secondary" className="rounded-full">View current roles</Button>
          <Button href="/contact" variant="ghost" className="rounded-full bg-white/10 text-white ring-white/40 hover:bg-white hover:text-brandBlue">Contact HR</Button>
        </div>
      </PageHero>

      <Section className="bg-[#f4f1e9]"
        title="Why work with us"
        subtitle="Our roles combine practical field experience, professional growth, and direct community impact."
      >
        <div className="grid gap-5 md:grid-cols-3">
          {[
            ["Purpose", "Every role contributes to safer communities, better livelihoods, and stronger environmental stewardship."],
            ["Growth", "Team members learn through training, mentorship, partner collaboration, and hands-on program delivery."],
            ["Accountability", "We value transparency, safeguarding, respectful storytelling, and responsible use of resources."]
          ].map(([title, description]) => (
            <article key={title} className="border-t-2 border-brandGreen bg-white p-7 shadow-soft">
              <h3 className="font-serif text-2xl text-brandBlue">{title}</h3>
              <p className="mt-3 text-sm text-slate-600">{description}</p>
            </article>
          ))}
        </div>
        <div className="mt-10 grid gap-6 lg:grid-cols-[1.1fr_.9fr] lg:items-center"><div className="relative min-h-[320px] overflow-hidden"><Image src="/images/new/photo_35_2026-03-03_11-10-37.jpg" alt="Community members participating in a PRoH event" fill className="object-cover" /></div><p className="font-serif text-3xl leading-tight text-brandBlue sm:text-4xl">The best work is rooted in relationships—with colleagues, communities and the futures we build together.</p></div>
      </Section>

      <Section className="bg-white"
        id="open-roles"
        title="Current opportunities"
        subtitle="Download each job description PDF for the full terms of reference and application details."
      >
        <div className="mb-8 border-l-4 border-brandGreen bg-[#f4f1e9] p-6 text-sm leading-relaxed text-slate-700">
          If the Apply button does not open your email app, send your CV and documents to{" "}
          <a href={`mailto:${applicationEmail}`} className="font-semibold text-brandBlue hover:text-brandGreen">
            {applicationEmail}
          </a>{" "}
          and use the job title as the email subject.
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {careerRoles.map((role) => (
            <article key={role.title} className={`border-t-4 bg-[#f4f1e9] p-7 shadow-soft ${
              role.expired ? "border-slate-300 opacity-70" : "border-brandGreen"
            }`}>
              {role.expired ? (
                <div className="mb-5 rounded-xl2 border border-red-200 bg-red-50 px-4 py-3 text-sm font-semibold text-red-700">
                  ⛔ This position has closed — deadline passed
                </div>
              ) : role.deadline ? (
                <div className="mb-5 rounded-xl2 border border-brandOrange/30 bg-brandOrange/10 px-4 py-3 text-sm font-semibold text-slate-800">
                  Application deadline: {role.deadline}
                </div>
              ) : null}

              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-wide text-brandGreen">{role.department}</p>
                  <h3 className="mt-2 font-serif text-3xl leading-tight text-brandBlue">{role.title}</h3>
                </div>
                <span className="rounded-full bg-brandBlue/10 px-3 py-1 text-xs font-semibold text-brandBlue">{role.type}</span>
              </div>

              <p className="mt-4 text-sm text-slate-500">{role.location}</p>
              <p className="mt-4 text-slate-700">{role.summary}</p>

              <div className="mt-5 grid gap-5 sm:grid-cols-2">
                <div>
                  <h4 className="text-sm font-semibold text-brandBlue">Responsibilities</h4>
                  <ul className="mt-3 space-y-2 text-sm text-slate-600">
                    {role.responsibilities.map((item) => (
                      <li key={item} className="flex gap-2">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brandGreen" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-brandBlue">Requirements</h4>
                  <ul className="mt-3 space-y-2 text-sm text-slate-600">
                    {role.requirements.map((item) => (
                      <li key={item} className="flex gap-2">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brandOrange" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                {!role.expired && <Button href={role.applyHref}>Apply now</Button>}
                {role.pdf ? (
                  <Button href={role.pdf} variant="ghost">
                    Download job PDF
                  </Button>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </Section>
    </>
  );
}
