import { PageHero } from "@/components/layout/PageHero";
import { ValidatedForm } from "@/components/forms/ValidatedForm";
import { Section } from "@/components/ui/Section";

export default function ContactPage() {
  return (
    <>
      <PageHero title="Contact" description="Reach out for partnerships, field coordination, and donor engagement." />

      <Section>
        <div className="grid gap-6 lg:grid-cols-2">
          <ValidatedForm title="Contact Form" formType="contact" />

          <aside className="space-y-6 rounded-xl2 bg-softGray p-6">
            <div>
              <h2 className="text-lg font-semibold text-brandBlue">Contact Details</h2>
              <p className="mt-2 text-sm text-slate-600">Email: info@perurraysofhope.org</p>
<p className="text-sm text-slate-600">Phone: +254 724 578225</p>
              <p className="text-sm text-slate-600">Address: P.O. Box 0-30600</p>
              <p className="text-sm text-slate-600">Kapenguria, West Pokot County, Kenya</p>
            </div>
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wide text-brandGreen">Map</h3>
              <div className="mt-2 overflow-hidden rounded-xl2 border border-slate-200 bg-white">
                <iframe
                  title="Perur Rays of Hope location map"
                  src="https://www.google.com/maps?q=Kapenguria%2C%20West%20Pokot%20County%2C%20Kenya&output=embed"
                  className="h-56 w-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </aside>
        </div>
      </Section>
    </>
  );
}
