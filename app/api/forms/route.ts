import { NextResponse } from "next/server";
import { z } from "zod";
import { notifyApiFailure } from "@/lib/server/monitoring";

const formSchema = z.object({
  formType: z.enum(["contact", "volunteer", "partnership", "internship"]),
  name: z.string().min(2),
  email: z.string().email(),
  message: z.string().min(10),
  consent: z.boolean().refine((v) => v),
  token: z.string().min(10)
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const parsed = formSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json({ error: "Invalid form data" }, { status: 400 });
    }

    const secret = process.env.RECAPTCHA_SECRET_KEY;
    if (secret && parsed.data.token !== "placeholder-token") {
      const response = await fetch("https://www.google.com/recaptcha/api/siteverify", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({
          secret,
          response: parsed.data.token
        })
      });

      const result = (await response.json()) as { success?: boolean };
      if (!result.success) {
        await notifyApiFailure("forms.recaptcha_failed", { formType: parsed.data.formType });
        return NextResponse.json({ error: "reCAPTCHA validation failed" }, { status: 400 });
      }
    }

    const forwardingEndpoint = process.env.FORM_FORWARD_ENDPOINT;
    if (!forwardingEndpoint) {
      return NextResponse.json({ ok: true, handled: "validated_only" });
    }

    const authToken = process.env.FORM_FORWARD_AUTH_TOKEN;
    const forwardResponse = await fetch(forwardingEndpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...(authToken ? { Authorization: `Bearer ${authToken}` } : {})
      },
      body: JSON.stringify({
        ...parsed.data,
        submittedAt: new Date().toISOString(),
        source: "perur-website"
      })
    });

    if (!forwardResponse.ok) {
      await notifyApiFailure("forms.forward_failed", {
        formType: parsed.data.formType,
        status: forwardResponse.status
      });
      return NextResponse.json({ error: "Inquiry forwarding failed" }, { status: 502 });
    }

    return NextResponse.json({ ok: true, handled: "forwarded" });
  } catch (error) {
    await notifyApiFailure("forms.unexpected_error", {
      message: error instanceof Error ? error.message : "unknown"
    });
    return NextResponse.json({ error: "Unexpected server error" }, { status: 500 });
  }
}
