import { PageHero } from "@/components/layout/PageHero";
import { TeamCard } from "@/components/ui/Cards";
import { Section } from "@/components/ui/Section";
import { getTeamMembers } from "@/lib/sanity/fetchers";

const coreValues = [
  {
    title: "Stewardship",
    description: "Committed to skilling youth 18 years and above for dignified livelihoods."
  },
  { title: "Christian Values", description: "Operating on principles of Christian faith, service, and compassion." },
  { title: "Accountability", description: "Accountable for our actions, decisions, and program outcomes." },
  { title: "Transparency", description: "Transparent in operations, reporting, and financial dealings." },
  {
    title: "Potential of the Child",
    description: "Committed to unlocking child potential through education and safeguarding."
  }
];

const mandate = [
  "Empower women and youth through business skills and employability programs.",
  "Promote quality education and support retention for vulnerable children.",
  "Safeguard children through community-led protection systems.",
  "Strengthen household livelihoods through savings and entrepreneurship support.",
  "Conserve the environment through climate-smart and restoration initiatives."
];

const partners = ["ActionAid Kenya", "Somo", "Rafiki wa Maendeleo Trust", "BOMA Project"];

export default async function AboutPage() {
  const team = await getTeamMembers();

  return (
    <>
      <PageHero
        title="About Perur Rays of Hope"
        description="Founded in 2014 and registered in 2021, PRoH is a community-based organization serving West Pokot County, Kenya."
      />

      <Section title="Our Story">
        <div className="rounded-xl2 bg-white p-7 shadow-soft">
          <p className="text-slate-700">
            Perur Rays of Hope was founded in 2014 and formally registered in 2021 as a women-led, youth-serving and child-focused
            community organization in West Pokot County. We work with communities and partners to build resilience through social justice,
            education, livelihood support, and environmental action.
          </p>
        </div>
      </Section>

      <Section title="Vision & Mission">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-xl2 bg-softGray p-6">
            <h3 className="text-xl font-semibold text-brandBlue">Vision</h3>
            <p className="mt-2 text-slate-700">
              A resilient and empowered community led by skilled women and youth, committed to safeguarding children and preserving the
              environment for sustainable development.
            </p>
          </div>
          <div className="rounded-xl2 bg-softGray p-6">
            <h3 className="text-xl font-semibold text-brandBlue">Mission</h3>
            <p className="mt-2 text-slate-700">
              To protect children and provide quality education by empowering youth and young women through skills, fostering resilient
              livelihoods, and promoting environmental conservation.
            </p>
          </div>
        </div>
      </Section>

      <Section title="Our Mandate">
        <div className="rounded-xl2 bg-white p-7 shadow-soft">
          <ul className="space-y-3 text-slate-700">
            {mandate.map((item) => (
              <li key={item} className="flex gap-2">
                <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-brandGreen" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <Section title="Core Values">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {coreValues.map((value) => (
            <article key={value.title} className="rounded-xl2 bg-white p-6 shadow-soft">
              <h3 className="text-lg font-semibold text-brandBlue">{value.title}</h3>
              <p className="mt-3 text-sm text-slate-600">{value.description}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section className="bg-softGray" title="Team">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {team.map((member) => (
            <TeamCard key={member._id} member={member} />
          ))}
        </div>
      </Section>

      <Section title="Governance & Transparency">
        <div className="rounded-xl2 border border-brandBlue/15 bg-white p-7">
          <p className="text-slate-700">
            PRoH maintains independent oversight, periodic financial reporting, and compliance-oriented governance processes. We share annual impact
            reports, policy documents, and audited updates to reinforce donor and community trust.
          </p>
        </div>
      </Section>

      <Section title="Partners">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {partners.map((partner) => (
            <article key={partner} className="rounded-xl2 border border-slate-200 bg-white p-5 text-center text-sm font-semibold text-brandBlue">
              {partner}
            </article>
          ))}
        </div>
      </Section>
    </>
  );
}
