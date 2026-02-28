import { NextResponse } from "next/server";
import { z } from "zod";
import { notifyApiFailure } from "@/lib/server/monitoring";

const newsletterSchema = z.object({
  email: z.string().email()
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const parsed = newsletterSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json({ error: "Invalid email address" }, { status: 400 });
    }

    const endpoint = process.env.NEWSLETTER_API_ENDPOINT;
    if (!endpoint) {
      return NextResponse.json({ error: "Newsletter endpoint not configured" }, { status: 503 });
    }

    const authToken = process.env.NEWSLETTER_API_AUTH_TOKEN;
    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...(authToken ? { Authorization: `Bearer ${authToken}` } : {})
      },
      body: JSON.stringify({
        email: parsed.data.email,
        source: "perur-website-newsletter",
        subscribedAt: new Date().toISOString()
      })
    });

    if (!response.ok) {
      await notifyApiFailure("newsletter.forward_failed", { status: response.status });
      return NextResponse.json({ error: "Subscription forwarding failed" }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    await notifyApiFailure("newsletter.unexpected_error", {
      message: error instanceof Error ? error.message : "unknown"
    });
    return NextResponse.json({ error: "Unexpected server error" }, { status: 500 });
  }
}
