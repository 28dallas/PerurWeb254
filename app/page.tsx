import { PageHero } from "@/components/layout/PageHero";
import { BlogCard, ProgramCard } from "@/components/ui/Cards";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { HeroSection } from "@/components/sections/HeroSection";
import { ImpactStats } from "@/components/sections/ImpactStats";
import { Newsletter } from "@/components/sections/Newsletter";
import { TestimonialCarousel } from "@/components/sections/TestimonialCarousel";
import { getBlogPosts, getPrograms, getTestimonials } from "@/lib/sanity/fetchers";

export default async function HomePage() {
  const [programs, posts, testimonials] = await Promise.all([getPrograms(), getBlogPosts(), getTestimonials()]);

  return (
    <>
      <HeroSection />

      <Section title="Vision & Mission" subtitle="A Resilient and Empowered Community.">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-xl2 bg-softGray p-6">
            <h3 className="text-xl font-semibold text-brandBlue">Mission</h3>
            <p className="mt-2 text-slate-700">
              To protect children and provide quality education by empowering youth and young women through skills, resilient livelihoods, and
              environmental conservation.
            </p>
          </div>
          <div className="rounded-xl2 bg-softGray p-6">
            <h3 className="text-xl font-semibold text-brandBlue">Vision</h3>
            <p className="mt-2 text-slate-700">
              A resilient and empowered community led by skilled women and youth, committed to safeguarding children and preserving the environment
              for sustainable development.
            </p>
          </div>
        </div>
      </Section>

      <Section title="Our Programs" subtitle="Integrated programs designed for lasting impact.">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {programs.slice(0, 3).map((program) => (
            <ProgramCard key={program._id} program={program} />
          ))}
        </div>
        <div className="mt-8">
          <Button href="/programs" variant="ghost">
            View all programs
          </Button>
        </div>
      </Section>

      <Section className="bg-softGray" title="Impact at a Glance">
        <ImpactStats />
      </Section>

      <Section title="Stories of Change" subtitle="Voices from communities we serve.">
        <TestimonialCarousel testimonials={testimonials} />
      </Section>

      <PageHero
        title="Join us in building resilient livelihoods"
        description="Your support helps children thrive, youth gain skills, women grow enterprises, and communities adapt to climate risks."
      >
        <div className="flex flex-wrap gap-3">
          <Button href="/donate" variant="secondary">
            Donate Now
          </Button>
          <Button href="/get-involved" variant="ghost" className="bg-white/10 text-white ring-white/30 hover:bg-white hover:text-brandBlue">
            Become a Partner
          </Button>
        </div>
      </PageHero>

      <Section title="Latest Blog Posts">
        <div className="grid gap-6 lg:grid-cols-3">
          {posts.slice(0, 3).map((post) => (
            <BlogCard key={post._id} post={post} />
          ))}
        </div>
      </Section>

      <Section>
        <Newsletter />
      </Section>

      <Section title="Strategic Partners">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {["ActionAid Kenya", "Somo", "Rafiki wa Maendeleo Trust", "BOMA Project"].map((partner) => (
            <article key={partner} className="rounded-xl2 border border-slate-200 bg-white p-5 text-center text-sm font-semibold text-brandBlue">
              {partner}
            </article>
          ))}
        </div>
      </Section>
    </>
  );
}
