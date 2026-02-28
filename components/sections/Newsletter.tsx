"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();

    setStatus("loading");
    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email })
      });

      if (!response.ok) throw new Error();
      setStatus("success");
      setEmail("");
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className="rounded-xl2 bg-brandBlue p-8 text-white shadow-soft">
      <h3 className="text-2xl font-bold">Stay informed on impact updates</h3>
      <p className="mt-2 text-sm text-slate-100">Receive stories, reports, and opportunities to support our mission.</p>
      <form onSubmit={onSubmit} className="mt-5 flex flex-col gap-3 sm:flex-row" aria-label="Newsletter signup form">
        <input
          aria-label="Email address"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@example.com"
          className="w-full rounded-xl2 border border-white/30 bg-white/10 px-4 py-3 text-white placeholder:text-slate-200 focus:outline-none focus:ring-2 focus:ring-brandOrange"
        />
        <Button type="submit" variant="secondary" className="whitespace-nowrap">
          {status === "loading" ? "Subscribing..." : "Subscribe"}
        </Button>
      </form>
      {status === "success" && <p className="mt-3 text-sm text-brandOrange">Subscription received.</p>}
      {status === "error" && <p className="mt-3 text-sm text-red-200">Unable to subscribe right now. Please try again.</p>}
    </div>
  );
}
