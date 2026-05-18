import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { BlogCard } from "@/components/ui/Cards";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { getBlogPosts } from "@/lib/sanity/fetchers";

export const metadata: Metadata = {
  title: "Blog & Careers",
  description: "Latest careers updates, stories, and program insights from Perur Rays of Hope."
};

const careerRoles = [
  {
    title: "Program Officer",
    location: "West Pokot, Kenya",
    type: "Full-time",
    description: "Support community programs, manage field teams, and help deliver education, livelihoods, and environmental initiatives."
  },
  {
    title: "Communications Associate",
    location: "Remote / Hybrid",
    type: "Contract",
    description: "Create impact stories, manage social channels, and raise awareness for our programs and partnerships."
  },
  {
    title: "Finance & Grants Officer",
    location: "West Pokot, Kenya",
    type: "Full-time",
    description: "Manage budgets, support donor reporting, and help strengthen financial accountability across programs."
  }
];

export default async function BlogPage() {
  const posts = await getBlogPosts();

  return (
    <>
      <PageHero title="Blog & Careers" description="Discover career opportunities, news, and stories from our mission-driven team." >
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Button href="#open-roles">View current roles</Button>
          <Button href="/contact" variant="secondary">Connect with HR</Button>
        </div>
      </PageHero>

      <Section title="Why join Perur Rays of Hope" subtitle="Grow your career in a purpose-led organisation that values community impact, learning, and inclusion.">
        <div className="grid gap-6 lg:grid-cols-[1.4fr_1fr]">
          <div className="space-y-6">
            <div className="rounded-xl2 bg-white p-8 shadow-soft">
              <h3 className="text-2xl font-semibold text-brandBlue">A workplace with purpose</h3>
              <p className="mt-4 text-slate-700">
                We combine program delivery, community engagement, and sustainable development work in a way that reflects values similar to modern career marketplaces like LinkedIn: clear opportunity, strong culture, and visible impact.
              </p>
              <ul className="mt-6 space-y-3 text-slate-600">
                <li className="flex gap-3">
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-brandOrange" />
                  Meaningful roles across education, youth livelihoods, women empowerment, and environment.
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-brandOrange" />
                  Collaborative teams with practical field experience and strong local leadership.
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-brandOrange" />
                  Growth through training, mentorship, and community-centered learning.
                </li>
              </ul>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl2 bg-brandBlue/5 p-6">
                <p className="text-sm font-semibold uppercase tracking-wide text-brandGreen">Culture</p>
                <p className="mt-3 text-slate-700">Supportive teamwork, respect for local perspectives, and a focus on long-term resilience.</p>
              </div>
              <div className="rounded-xl2 bg-brandBlue/5 p-6">
                <p className="text-sm font-semibold uppercase tracking-wide text-brandGreen">Impact</p>
                <p className="mt-3 text-slate-700">Help build safer communities, better livelihoods, and stronger environmental stewardship.</p>
              </div>
            </div>
          </div>

          <div className="rounded-xl2 bg-brandBlue/5 p-8">
            <h4 className="text-xl font-semibold text-brandBlue">How we work</h4>
            <div className="mt-5 space-y-4 text-slate-700">
              <p>We follow clear role descriptions, open communication, and community-centered planning — just like a professional career page.</p>
              <p>Every position supports our mission to protect children, empower women and youth, and conserve the environment in West Pokot County.</p>
            </div>
          </div>
        </div>
      </Section>

      <Section id="open-roles" title="Current opportunities" subtitle="We’re looking for people who want to make a difference with purpose and professionalism.">
        <div className="grid gap-6 md:grid-cols-2">
          {careerRoles.map((role) => (
            <article key={role.title} className="rounded-xl2 border border-slate-200 bg-white p-6 shadow-soft">
              <h3 className="text-xl font-semibold text-brandBlue">{role.title}</h3>
              <p className="mt-2 text-sm uppercase tracking-wide text-brandGreen">{role.type}</p>
              <p className="mt-4 text-slate-700">{role.description}</p>
              <div className="mt-5 flex flex-wrap gap-3 text-sm text-slate-500">
                <span>{role.location}</span>
              </div>
              <Button href="/contact" className="mt-6">Apply now</Button>
            </article>
          ))}
        </div>
      </Section>

      <Section title="Latest news & insights" subtitle="Browse stories, updates, and practical insights from our programs and partners.">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, index) => (
            <BlogCard key={post._id} post={post} index={index} />
          ))}
        </div>
      </Section>
    </>
  );
}
