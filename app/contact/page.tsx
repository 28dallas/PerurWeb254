import { PageHero } from "@/components/layout/PageHero";
import { ValidatedForm } from "@/components/forms/ValidatedForm";
import { Section } from "@/components/ui/Section";
import { Mail, MapPin, Phone } from "lucide-react";

export default function ContactPage() {
  return (
    <>
      <PageHero eyebrow="Let’s talk" title="The next conversation could change a community." description="Reach out for partnerships, field coordination, media and donor engagement." imageSrc="/images/rays/photo_2026-05-19_13-57-54.jpg" />

      <section className="bg-[#f4f1e9] py-16 sm:py-20"><div className="mx-auto grid max-w-7xl gap-6 px-4 sm:grid-cols-3 sm:px-6 lg:px-8"><div className="flex gap-3"><Mail className="h-5 w-5 shrink-0 text-brandGreen" /><div><p className="font-bold text-brandBlue">Email us</p><p className="mt-1 text-sm text-slate-600">info@perurraysofhope.org</p></div></div><div className="flex gap-3"><Phone className="h-5 w-5 shrink-0 text-brandGreen" /><div><p className="font-bold text-brandBlue">Call us</p><p className="mt-1 text-sm text-slate-600">+254 724 578225</p></div></div><div className="flex gap-3"><MapPin className="h-5 w-5 shrink-0 text-brandGreen" /><div><p className="font-bold text-brandBlue">Visit us</p><p className="mt-1 text-sm text-slate-600">Kapenguria, West Pokot County</p></div></div></div></section>
      <Section className="bg-white" title="Send a message" subtitle="We will connect you with the right person on our team.">
        <div className="grid gap-8 lg:grid-cols-[.9fr_1.1fr]">
          <ValidatedForm title="Contact Form" formType="contact" />

          <aside className="space-y-7 bg-brandBlue p-7 text-white sm:p-9">
            <div>
              <p className="text-xs font-bold uppercase tracking-[.18em] text-amber-300">Our office</p>
              <h2 className="mt-3 font-serif text-3xl">Come and find us.</h2>
              <p className="mt-5 text-sm leading-relaxed text-white/75">P.O. Box 618-30600<br />Kapenguria, West Pokot County, Kenya</p>
            </div>
            <div>
              <h3 className="text-xs font-bold uppercase tracking-[.18em] text-amber-300">Map</h3>
              <div className="mt-3 overflow-hidden border border-white/20 bg-white">
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
