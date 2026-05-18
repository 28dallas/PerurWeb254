import { PageHero } from "@/components/layout/PageHero";
import { BlogCard } from "@/components/ui/Cards";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { HeroSection } from "@/components/sections/HeroSection";
import { ImpactStats } from "@/components/sections/ImpactStats";
import { Newsletter } from "@/components/sections/Newsletter";
import { TestimonialCarousel } from "@/components/sections/TestimonialCarousel";
import { getBlogPosts, getHomepageData, getTestimonials } from "@/lib/sanity/fetchers";
import { urlFor } from "@/lib/sanity/client";
import Image from "next/image";

const partners = [
  { name: "Global Give Back Circle (GGBC)", logo: "/images/logo/gb.png" },
  { name: "Mastercard Foundation", logo: "/images/logo/images.jpeg" },
  { name: "Circle Group Limited (CGL)", logo: "/images/logo/CIRCLE GROUP (CGL) Logo copy.pdf" },
  { name: "International Tree Foundation (ITF)", logo: "/images/logo/itf.jpg" },
  { name: "Mekuno Project", logo: "/images/logo/ms.png" }
];

const homeBlogCardImages = [
  "/images/new/photo_85_2026-03-03_11-10-37.jpg",
  "/images/new/photo_70_2026-03-03_11-10-37.jpg",
  "/images/new/photo_22_2026-03-03_11-10-37.jpg"
];

export default async function HomePage() {
  const [posts, testimonials, homepage] = await Promise.all([getBlogPosts(), getTestimonials(), getHomepageData()]);
  const heroImageSrc = homepage.heroImage?.asset?._ref
    ? urlFor(homepage.heroImage).width(1600).height(1000).url()
    : homepage.heroImage?.asset?.url;
  const ctaImageSrc = homepage.ctaImage?.asset?._ref
    ? urlFor(homepage.ctaImage).width(1600).height(900).url()
    : homepage.ctaImage?.asset?.url;

  return (
    <>
      <HeroSection
        eyebrow={homepage.heroEyebrow}
        title={homepage.heroTitle || "Perur Rays of Hope"}
        subtitle={homepage.heroSubtitle || ""}
        imageSrc={heroImageSrc}
      />

      <Section title="Vision & Mission" subtitle="Founded in 2014.">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-xl2 bg-softGray p-6">
            <h3 className="text-xl font-semibold text-brandBlue">{homepage.visionTitle}</h3>
            <p className="mt-2 text-slate-700">
              {homepage.visionText}
            </p>
          </div>
          <div className="rounded-xl2 bg-softGray p-6">
            <h3 className="text-xl font-semibold text-brandBlue">{homepage.missionTitle}</h3>
            <p className="mt-2 text-slate-700">
              {homepage.missionText}
            </p>
          </div>
        </div>
      </Section>

      <Section className="bg-softGray" title={homepage.impactTitle} subtitle={homepage.impactSubtitle}>
        <ImpactStats stats={homepage.impactStats} />
      </Section>

      <Section
        title={homepage.storiesTitle || "Stories of Change"}
        subtitle={homepage.storiesSubtitle || homepage.successStory}
      >
        <TestimonialCarousel testimonials={testimonials} />
      </Section>

      <PageHero
        title={homepage.ctaTitle || "Join us in building resilient livelihoods"}
        description={homepage.ctaText || ""}
        imageSrc={ctaImageSrc}
      >
        <div className="flex flex-wrap gap-3">
          <Button href={homepage.ctaPrimaryHref || "/donate"} variant="secondary">
            {homepage.ctaPrimaryLabel || "Donate Now"}
          </Button>
          <Button
            href={homepage.ctaSecondaryHref || "/get-involved"}
            variant="ghost"
            className="bg-white/10 text-white ring-white/30 hover:bg-white hover:text-brandBlue"
          >
            {homepage.ctaSecondaryLabel || "Become a Partner"}
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
