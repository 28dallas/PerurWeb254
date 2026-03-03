import { PageHero } from "@/components/layout/PageHero";
import { ValidatedForm } from "@/components/forms/ValidatedForm";
import { Section } from "@/components/ui/Section";
import { siteImages } from "@/lib/site-images";
import InteractiveGallery from "@/components/ui/InteractiveGallery";

export default function GetInvolvedPage() {
  return (
    <>
      <PageHero title="Get Involved" description="Volunteer, partner, or intern with PRoH to strengthen community impact." />
      <Section>
        <div className="grid gap-6 lg:grid-cols-3">
          <ValidatedForm title="Volunteer Form" formType="volunteer" />
          <ValidatedForm title="Partnership Form" formType="partnership" />
          <ValidatedForm title="Internship Interest Form" formType="internship" />
        </div>
      </Section>

      <Section>
        <h3 className="mb-4 text-xl font-semibold text-brandBlue">Get Involved Gallery</h3>
        <InteractiveGallery
          images={siteImages.gallery.filter((p) => p.includes("/images/new/")).slice(0, 6)}
        />
      </Section>
    </>
  );
}
