"use client";

import { useState } from "react";
import { PageHero } from "@/components/layout/PageHero";
import { Section } from "@/components/ui/Section";
import { Heart, LockKeyhole, ShieldCheck, Sparkles } from "lucide-react";

const impact = [
  { amount: "$20", effect: "Provides learning materials for one child for a month" },
  { amount: "$50", effect: "Supports youth vocational skilling sessions" },
  { amount: "$100", effect: "Funds women-led microenterprise coaching" }
];

export default function DonatePage() {
  const [amount, setAmount] = useState<number>(50);
  const [method, setMethod] = useState<"card" | "mpesa">("card");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [message, setMessage] = useState<string | null>(null);

  const handleDonate = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setMessage(null);

    try {
      if (method === "card") {
        const response = await fetch("/api/donate/stripe", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ amount, currency: "usd", program: "General" }),
        });

        const data = await response.json();
        if (data.url) {
          window.location.href = data.url;
        } else {
          throw new Error(data.error || "Failed to initialize Stripe checkout");
        }
      } else {
        // M-Pesa Flow
        if (!/^254[0-9]{9}$/.test(phone)) {
          throw new Error("Phone number must be in format 254XXXXXXXXX");
        }

        const response = await fetch("/api/donate/mpesa", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ amount, phoneNumber: phone, program: "General" }),
        });

        const data = await response.json();
        if (data.success) {
          setMessage(data.message || "Please check your phone for the M-Pesa prompt.");
        } else {
          throw new Error(data.error || "Failed to initialize M-Pesa push");
        }
      }
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "An unexpected error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <PageHero
        eyebrow="Give with purpose"
        title="Invest in possibility."
        description="Your support helps communities protect children, create livelihoods and care for the environment they depend on."
        imageSrc="/images/rays/photo_2026-05-19_13-57-42 (2).jpg"
      />

      <section className="bg-[#f4f1e9] py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-7 px-4 sm:grid-cols-3 sm:px-6 lg:px-8">
          {[["Direct impact", "Your gift supports practical solutions shaped with communities.", Heart], ["Secure giving", "Payments are handled through secure, trusted providers.", LockKeyhole], ["Clear accountability", "We work with transparent reporting and safeguarding standards.", ShieldCheck]].map(([title, text, Icon]) => { const ItemIcon = Icon as typeof Heart; return <div key={title as string} className="flex gap-4"><ItemIcon className="mt-1 h-5 w-5 shrink-0 text-brandGreen" /><div><p className="font-bold text-brandBlue">{title as string}</p><p className="mt-1 text-sm leading-relaxed text-slate-600">{text as string}</p></div></div>; })}
        </div>
      </section>

      <Section className="bg-white" title="Choose the future you want to support" subtitle="Every contribution helps communities build safety, skills and sustainable livelihoods.">
        <div className="grid gap-8 lg:grid-cols-[1.15fr_.85fr]">
          <article className="rounded-[2rem] bg-brandBlue p-7 text-white shadow-soft sm:p-9">
            <div className="flex items-center gap-3"><Sparkles className="h-5 w-5 text-amber-300" /><h2 className="font-serif text-3xl">Make a donation</h2></div>
            <p className="mt-3 text-sm text-white/75">Choose your preferred secure donation channel.</p>

            <form onSubmit={handleDonate} className="mt-6 flex flex-col gap-5">
              <div>
                <label className="mb-2 block text-sm font-medium text-white/90">Amount (USD)</label>
                <div className="flex flex-wrap gap-2">
                  {[20, 50, 100, 250].map((preset) => (
                    <button
                      key={preset}
                      type="button"
                      onClick={() => setAmount(preset)}
                      className={`rounded-lg border px-4 py-2 text-sm font-semibold transition-colors ${amount === preset
                          ? "border-amber-300 bg-amber-300 text-slate-900"
                          : "border-white/30 bg-white/10 text-white hover:border-amber-300 hover:text-amber-300"
                        }`}
                    >
                      ${preset}
                    </button>
                  ))}
                  <input
                    type="number"
                    min="1"
                    value={amount}
                    onChange={(e) => setAmount(Number(e.target.value))}
                    className="w-24 rounded-lg border border-white/30 bg-white px-3 py-2 text-sm text-slate-900 focus:border-amber-300 focus:outline-none focus:ring-1 focus:ring-amber-300"
                    placeholder="Custom"
                  />
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-white/90">Payment Method</label>
                <div className="flex gap-4">
                  <label className="flex cursor-pointer items-center gap-2 text-sm text-white">
                    <input
                      type="radio"
                      name="method"
                      value="card"
                      checked={method === "card"}
                      onChange={() => setMethod("card")}
                      className="text-brandBlue focus:ring-brandBlue"
                    />
                    Credit / Debit Card
                  </label>
                  <label className="flex cursor-pointer items-center gap-2 text-sm text-white">
                    <input
                      type="radio"
                      name="method"
                      value="mpesa"
                      checked={method === "mpesa"}
                      onChange={() => setMethod("mpesa")}
                      className="text-brandGreen focus:ring-brandGreen"
                    />
                    M-Pesa (Kenya)
                  </label>
                </div>
              </div>

              {method === "mpesa" && (
                <div>
                  <label htmlFor="phone" className="mb-2 block text-sm font-medium text-white/90">
                    M-Pesa Phone Number
                  </label>
                  <input
                    id="phone"
                    type="text"
                    required={method === "mpesa"}
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="2547XXXXXXXX"
                    className="w-full rounded-lg border border-white/30 bg-white p-3 text-sm text-slate-900 focus:border-amber-300 focus:outline-none focus:ring-1 focus:ring-amber-300"
                  />
                </div>
              )}

              {error && <p className="text-sm text-red-200">{error}</p>}
              {message && <p className="text-sm font-medium text-amber-300">{message}</p>}

              <button
                type="submit"
                disabled={loading}
                className={`w-full rounded-full bg-brandOrange py-3.5 text-sm font-bold text-slate-900 transition-colors hover:bg-amber-300 ${loading ? "opacity-70 cursor-not-allowed" : ""
                  }`}
              >
                {loading ? "Processing..." : `Donate $${amount}`}
              </button>
            </form>

            <p className="mt-5 text-xs leading-relaxed text-white/60">
              Data Protection Notice: Donor data is processed securely via Stripe or Safaricom M-Pesa integrations and never sold to third parties.
            </p>
          </article>

          <article className="rounded-[2rem] bg-[#f4f1e9] p-7 sm:p-9">
            <p className="text-xs font-bold uppercase tracking-[.18em] text-brandGreen">What your gift can do</p>
            <h3 className="mt-3 font-serif text-3xl text-brandBlue">Your impact, close to home.</h3>
            <ul className="mt-4 space-y-3">
              {impact.map((item) => (
                <li key={item.amount} className="border-b border-brandBlue/10 py-5 last:border-0">
                  <p className="font-serif text-3xl text-brandGreen">{item.amount}</p>
                  <p className="mt-1 text-sm leading-relaxed text-slate-600">{item.effect}</p>
                </li>
              ))}
            </ul>
          </article>
        </div>
      </Section>

      <Section className="bg-white" title="Giving you can stand behind" subtitle="We believe trust is earned through clear, responsible practice.">
        <div className="grid gap-5 md:grid-cols-3">
          <div className="border-t-2 border-brandGreen bg-[#f4f1e9] p-6 text-sm leading-relaxed text-slate-600">Transparent financial reporting and annual updates.</div>
          <div className="border-t-2 border-brandGreen bg-[#f4f1e9] p-6 text-sm leading-relaxed text-slate-600">Community-led programming with measurable outcomes.</div>
          <div className="border-t-2 border-brandGreen bg-[#f4f1e9] p-6 text-sm leading-relaxed text-slate-600">Governance and safeguarding standards in every programme.</div>
        </div>
      </Section>
    </>
  );
}
