import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { Section } from "@/components/ui/Section";
import InteractiveGallery from "@/components/ui/InteractiveGallery";
import { getGalleryImages, getRayImages } from "@/lib/gallery-images";

export const metadata: Metadata = {
  title: "Gallery",
  description: "Photos from Perur Rays of Hope programs, partners, and community work."
};

export default function GalleryPage() {
  const rayImages = getRayImages();
  const galleryImages = getGalleryImages();

  return (
    <>
      <PageHero
        eyebrow="In pictures"
        title="The work. The joy. The people." 
        description="Moments from programmes, training, community action and everyday resilience across West Pokot County."
        imageSrc="/images/new/photo_60_2026-03-03_11-10-37.jpg"
      />

      <section className="bg-[#f4f1e9] py-16 sm:py-20"><div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[.7fr_1.3fr] lg:px-8"><p className="text-sm font-bold uppercase tracking-[.2em] text-brandGreen">Perur Rays in action</p><p className="font-serif text-3xl leading-tight text-brandBlue sm:text-4xl">These photographs carry the energy, learning and leadership of a community moving forward together.</p></div></section>
      <Section className="bg-white" title="Moments that matter">
        {rayImages.length === 0 ? (
          <div className="mb-6 rounded-xl2 border border-brandOrange/30 bg-brandOrange/10 p-5 text-sm text-slate-700">
            The public/images/rays folder is ready, but it does not contain image files in this workspace yet.
          </div>
        ) : null}
        <InteractiveGallery images={galleryImages} />
      </Section>
    </>
  );
}
