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
      <section className="bg-[#f4f1e9] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 max-w-2xl">
            <p className="mb-3 text-sm font-bold uppercase tracking-[.2em] text-brandGreen">Watch and explore</p>
            <h2 className="font-serif text-3xl text-brandBlue sm:text-4xl">Stories in motion</h2>
            <p className="mt-3 text-slate-600">Watch moments from HER Lab and learn more about the work from our partners and the press.</p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            <article className="overflow-hidden rounded-2xl bg-white shadow-sm">
              <div className="aspect-video bg-black">
                <iframe
                  className="h-full w-full"
                  src="https://www.youtube-nocookie.com/embed/I2kn2TllIJ0"
                  title="Perur Rays of Hope and HER Lab video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </div>
              <div className="p-5"><h3 className="font-semibold text-brandBlue">HER Lab in West Pokot</h3><p className="mt-1 text-sm text-slate-600">Watch the story on YouTube.</p></div>
            </article>

            <article className="overflow-hidden rounded-2xl bg-white shadow-sm">
              <div className="aspect-video bg-black">
                <iframe
                  className="h-full w-full"
                  src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7473388235059224576"
                  title="HER Lab Economic Empowerment 4 HER video on LinkedIn"
                  allow="autoplay; encrypted-media; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <div className="p-5"><h3 className="font-semibold text-brandBlue">Economic Empowerment 4 HER</h3><p className="mt-1 text-sm text-slate-600">Watch the original post from HER Lab on LinkedIn.</p></div>
            </article>
          </div>

          <div className="mt-12 border-t border-brandBlue/10 pt-8">
            <h3 className="font-serif text-2xl text-brandBlue">HER Lab in the news</h3>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <a className="rounded-xl bg-white p-5 transition hover:shadow-md" href="https://www.ipsnews.net/2026/05/breaking-cultural-barriers-to-equip-marginalised-kenyan-girls-with-entrepreneurial-skills/" target="_blank" rel="noreferrer">
                <span className="text-xs font-bold uppercase tracking-wider text-brandGreen">Inter Press Service</span>
                <span className="mt-2 block font-semibold text-brandBlue">Breaking cultural barriers to equip marginalised Kenyan girls with entrepreneurial skills</span>
                <span className="mt-3 block text-sm text-slate-600">Read the story ↗</span>
              </a>
              <a className="rounded-xl bg-white p-5 transition hover:shadow-md" href="https://www.lebow.drexel.edu/news/her-lab-returns-empowering-female-entrepreneurship-kenya" target="_blank" rel="noreferrer">
                <span className="text-xs font-bold uppercase tracking-wider text-brandGreen">Drexel University</span>
                <span className="mt-2 block font-semibold text-brandBlue">HER Lab returns: Empowering female entrepreneurship in Kenya</span>
                <span className="mt-3 block text-sm text-slate-600">Read the story ↗</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
