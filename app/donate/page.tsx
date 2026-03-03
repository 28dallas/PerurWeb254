"use client";

import { useState } from "react";
import { PageHero } from "@/components/layout/PageHero";
import { Section } from "@/components/ui/Section";

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
        title="Donate"
        description="Support secure, accountable, and transparent impact across child protection, youth and women empowerment, and climate resilience."
      />

      <Section title="Give with Confidence">
        <div className="grid gap-6 lg:grid-cols-2">
          <article className="rounded-xl2 bg-white p-7 shadow-soft">
            <h2 className="text-xl font-semibold text-brandBlue">Donate Now</h2>
            <p className="mt-3 text-sm text-slate-600">Choose your preferred secure donation channel.</p>

            <form onSubmit={handleDonate} className="mt-6 flex flex-col gap-5">
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">Amount (USD)</label>
                <div className="flex flex-wrap gap-2">
                  {[20, 50, 100, 250].map((preset) => (
                    <button
                      key={preset}
                      type="button"
                      onClick={() => setAmount(preset)}
                      className={`rounded-lg border px-4 py-2 text-sm font-semibold transition-colors ${amount === preset
                          ? "border-brandBlue bg-brandBlue text-white"
                          : "border-slate-300 bg-white text-slate-700 hover:border-brandBlue hover:text-brandBlue"
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
                    className="w-24 rounded-lg border border-slate-300 px-3 py-2 text-sm focus:border-brandBlue focus:outline-none focus:ring-1 focus:ring-brandBlue"
                    placeholder="Custom"
                  />
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">Payment Method</label>
                <div className="flex gap-4">
                  <label className="flex items-center gap-2 text-sm cursor-pointer">
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
                  <label className="flex items-center gap-2 text-sm cursor-pointer">
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
                  <label htmlFor="phone" className="mb-2 block text-sm font-medium text-slate-700">
                    M-Pesa Phone Number
                  </label>
                  <input
                    id="phone"
                    type="text"
                    required={method === "mpesa"}
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="2547XXXXXXXX"
                    className="w-full rounded-lg border border-slate-300 p-3 text-sm focus:border-brandGreen focus:outline-none focus:ring-1 focus:ring-brandGreen"
                  />
                </div>
              )}

              {error && <p className="text-sm text-red-600">{error}</p>}
              {message && <p className="text-sm text-brandGreen font-medium">{message}</p>}

              <button
                type="submit"
                disabled={loading}
                className={`w-full rounded-xl2 bg-brandBlue py-3 text-sm font-bold text-white transition-colors hover:bg-brandGreen ${loading ? "opacity-70 cursor-not-allowed" : ""
                  }`}
              >
                {loading ? "Processing..." : `Donate $${amount}`}
              </button>
            </form>

            <p className="mt-5 text-xs text-slate-500">
              Data Protection Notice: Donor data is processed securely via Stripe or Safaricom M-Pesa integrations and never sold to third parties.
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
