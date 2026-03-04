import { PageHero } from "@/components/layout/PageHero";
import { BlogCard } from "@/components/ui/Cards";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { HeroSection } from "@/components/sections/HeroSection";
import { ImpactStats } from "@/components/sections/ImpactStats";
import { Newsletter } from "@/components/sections/Newsletter";
import { TestimonialCarousel } from "@/components/sections/TestimonialCarousel";
import { getBlogPosts, getTestimonials } from "@/lib/sanity/fetchers";
import Image from "next/image";

const partners = [
  { name: "World Vision", logo: "/images/partners/wv.png" },
  { name: "Global Give Back Circle", logo: "/images/partners/gb.png" },
  { name: "Microsoft", logo: "/images/partners/microsoft.svg" }
];

const homeBlogCardImages = [
  "/images/new/photo_85_2026-03-03_11-10-37.jpg",
  "/images/new/photo_70_2026-03-03_11-10-37.jpg",
  "/images/new/photo_22_2026-03-03_11-10-37.jpg"
];

export default async function HomePage() {
  const [posts, testimonials] = await Promise.all([getBlogPosts(), getTestimonials()]);

  return (
    <>
      <HeroSection />

      <Section title="Vision & Mission" subtitle="Founded in 2014 .">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-xl2 bg-softGray p-6">
            <h3 className="text-xl font-semibold text-brandBlue"></h3>
            <p className="mt-2 text-slate-700">
             A resilient and empowered community 
            </p>
          </div>
          <div className="rounded-xl2 bg-softGray p-6">
            <h3 className="text-xl font-semibold text-brandBlue"></h3>
            <p className="mt-2 text-slate-700">
              Safe Guarding children, empowering youths and women, and conserving the environment for resilient livelihoods.
             
            </p>
          </div>
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
          {posts.slice(0, 3).map((post, index) => (
            <BlogCard key={post._id} post={post} index={index} imageOverride={homeBlogCardImages[index]} />
          ))}
        </div>
      </Section>

      <Section>
        <Newsletter />
      </Section>

      <Section title="Strategic Partners">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {partners.map((partner) => (
            <article key={partner.name} className="rounded-xl2 border border-slate-200 bg-white p-5 text-center shadow-soft">
              <div className="relative mx-auto h-16 w-full max-w-[180px]">
                <Image src={partner.logo} alt={`${partner.name} logo`} fill className="object-contain" />
              </div>
              <p className="mt-3 text-sm font-semibold text-brandBlue">{partner.name}</p>
            </article>
          ))}
        </div>
      </Section>
    </>
  );
}
