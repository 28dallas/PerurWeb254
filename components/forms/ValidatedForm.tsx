"use client";

import { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { z } from "zod";
import { Button } from "@/components/ui/Button";

interface ValidatedFormProps {
  title: string;
  formType: "contact" | "volunteer" | "partnership" | "internship";
}

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  message: z.string().min(10),
  consent: z.boolean().refine((v) => v),
  token: z.string().min(10)
});

export function ValidatedForm({ title, formType }: ValidatedFormProps) {
  const rawRecaptchaSiteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY?.trim();
  const recaptchaSiteKey =
    rawRecaptchaSiteKey &&
    !/^your_recaptcha_site_key$/i.test(rawRecaptchaSiteKey) &&
    !/^placeholder$/i.test(rawRecaptchaSiteKey)
      ? rawRecaptchaSiteKey
      : undefined;
  const recaptchaEnabled = !!recaptchaSiteKey;

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [consent, setConsent] = useState(false);
  const [token, setToken] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();

    const parsed = schema.safeParse({
      name,
      email,
      message,
      consent,
      token: recaptchaEnabled ? token : "placeholder-token"
    });
    if (!parsed.success) {
      setStatus("error");
      return;
    }

    setStatus("loading");
    try {
      const response = await fetch("/api/forms", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...parsed.data, formType })
      });

      if (!response.ok) throw new Error();
      setStatus("success");
      setName("");
      setEmail("");
      setMessage("");
      setConsent(false);
      setToken("");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={onSubmit} className="rounded-xl2 bg-white p-6 shadow-soft" aria-label={`${title} form`}>
      <h3 className="text-lg font-semibold text-brandBlue">{title}</h3>
      <div className="mt-4 grid gap-4">
        <div>
          <label htmlFor={`${formType}-name`} className="mb-1 block text-sm font-medium text-slate-700">
            Full name
          </label>
          <input
            id={`${formType}-name`}
            name="name"
            type="text"
            placeholder="Full name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            autoComplete="name"
            className="w-full rounded-xl2 border border-slate-300 px-4 py-3 text-sm focus:border-brandBlue focus:outline-none focus:ring-2 focus:ring-brandBlue/20"
          />
        </div>
        <div>
          <label htmlFor={`${formType}-email`} className="mb-1 block text-sm font-medium text-slate-700">
            Email address
          </label>
          <input
            id={`${formType}-email`}
            name="email"
            type="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            autoComplete="email"
            className="w-full rounded-xl2 border border-slate-300 px-4 py-3 text-sm focus:border-brandBlue focus:outline-none focus:ring-2 focus:ring-brandBlue/20"
          />
        </div>
        <div>
          <label htmlFor={`${formType}-message`} className="mb-1 block text-sm font-medium text-slate-700">
            Message
          </label>
          <textarea
            id={`${formType}-message`}
            name="message"
            placeholder="Your message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            rows={4}
            className="w-full rounded-xl2 border border-slate-300 px-4 py-3 text-sm focus:border-brandBlue focus:outline-none focus:ring-2 focus:ring-brandBlue/20"
          />
        </div>
        <label className="flex items-start gap-2 text-sm text-slate-600">
          <input
            type="checkbox"
            checked={consent}
            onChange={(e) => setConsent(e.target.checked)}
            required
            className="mt-1"
          />
          I consent to secure processing of my data in line with the Data Protection Notice.
        </label>
        {recaptchaEnabled ? (
          <div className="overflow-x-auto">
            <ReCAPTCHA sitekey={recaptchaSiteKey} onChange={(v: string | null) => setToken(v || "")} />
          </div>
        ) : null}
        <Button type="submit" variant="primary" disabled={status === "loading"}>
          {status === "loading" ? "Submitting..." : "Submit"}
        </Button>
      </div>
      {status === "success" && (
        <p className="mt-3 text-sm text-brandGreen" role="status" aria-live="polite">
          Thank you. We will follow up shortly.
        </p>
      )}
      {status === "error" && (
        <p className="mt-3 text-sm text-red-600" role="alert">
          Please review your details and try again.
        </p>
      )}
    </form>
  );
}
