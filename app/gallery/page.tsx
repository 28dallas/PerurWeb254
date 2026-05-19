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
        title="Gallery"
        description="Moments from our programs, trainings, community engagement, and partner work across West Pokot County."
      />

      <Section
        title="Perur Rays in action"
        subtitle="Images added to public/images/rays appear here automatically, followed by the existing project gallery."
      >
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
