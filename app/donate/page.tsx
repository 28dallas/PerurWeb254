import { PageHero } from "@/components/layout/PageHero";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";

const impact = [
  { amount: "$20", effect: "Provides learning materials for one child for a month" },
  { amount: "$50", effect: "Supports youth vocational skilling sessions" },
  { amount: "$100", effect: "Funds women-led microenterprise coaching" }
];

export default function DonatePage() {
  return (
    <>
      <PageHero
        title="Donate"
        description="Support secure, accountable, and transparent impact across child protection, youth and women empowerment, and climate resilience."
      />

      <Section title="Give with Confidence">
        <div className="grid gap-6 lg:grid-cols-2">
          <article className="rounded-xl2 bg-white p-7 shadow-soft">
            <h2 className="text-xl font-semibold text-brandBlue">One-time & Recurring Donations</h2>
            <p className="mt-3 text-sm text-slate-600">
              Payment gateway integration placeholder: Stripe / Paystack. Donations can be configured for one-time and recurring contributions.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button variant="secondary">Donate Once</Button>
              <Button variant="primary">Give Monthly</Button>
            </div>
            <p className="mt-5 text-xs text-slate-500">
              Data Protection Notice: Donor data is processed securely and never sold to third parties.
            </p>
          </article>

          <article className="rounded-xl2 bg-softGray p-7">
            <h3 className="text-xl font-semibold text-brandBlue">Your impact</h3>
            <ul className="mt-4 space-y-3">
              {impact.map((item) => (
                <li key={item.amount} className="rounded-xl2 bg-white p-4 shadow-soft">
                  <p className="text-sm font-semibold text-brandGreen">{item.amount}</p>
                  <p className="text-sm text-slate-600">{item.effect}</p>
                </li>
              ))}
            </ul>
          </article>
        </div>
      </Section>

      <Section title="Trust Indicators">
        <div className="grid gap-5 md:grid-cols-3">
          <div className="rounded-xl2 border border-slate-200 p-5 text-sm text-slate-600">Transparent financial reporting and annual updates.</div>
          <div className="rounded-xl2 border border-slate-200 p-5 text-sm text-slate-600">Community-led programming with measurable outcomes.</div>
          <div className="rounded-xl2 border border-slate-200 p-5 text-sm text-slate-600">Governance and safeguarding standards in every program.</div>
        </div>
      </Section>
    </>
  );
}
