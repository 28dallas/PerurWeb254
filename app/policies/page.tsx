import { PageHero } from "@/components/layout/PageHero";
import { Section } from "@/components/ui/Section";

export default function PoliciesPage() {
  return (
    <>
      <PageHero title="Policies" description="Privacy, cookies, and data protection policies." />

      <Section title="Privacy Policy">
        <article className="rounded-xl2 bg-white p-6 shadow-soft">
          <p className="text-sm text-slate-700">
            We collect only necessary personal data, use secure storage and processing, and respect data subject rights in line with applicable standards.
          </p>
        </article>
      </Section>

      <Section title="Cookie Policy">
        <article className="rounded-xl2 bg-white p-6 shadow-soft">
          <p className="text-sm text-slate-700">
            Cookies are used for essential site functionality and analytics. Users can manage cookie preferences from their browser settings.
          </p>
        </article>
      </Section>

      <Section title="Data Protection Notice">
        <article className="rounded-xl2 bg-white p-6 shadow-soft">
          <p className="text-sm text-slate-700">
            PRoH applies confidentiality controls, access management, and retention limits to protect personal information shared through this website.
          </p>
        </article>
      </Section>
    </>
  );
}
