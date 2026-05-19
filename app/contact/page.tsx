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
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1207.9036483221757!2d35.268426975777!3d1.3920361405554158!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1782490050b529e1%3A0x9ae3ca3fbfa878d2!2sPerur%20Rays%20of%20Hope!5e0!3m2!1sen!2sus!4v1779190910229!5m2!1sen!2sus"
                  className="h-56 w-full"
                  allowFullScreen
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
