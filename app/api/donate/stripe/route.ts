import { NextResponse } from "next/server";
import Stripe from "stripe";
import { z } from "zod";
import { SITE_URL } from "@/lib/constants";

// Initialize Stripe ensuring the key exists
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || "", {
  apiVersion: "2023-10-16",
});

const checkoutSchema = z.object({
  amount: z.number().min(1),
  currency: z.string().default("usd"),
  program: z.string().optional(),
});

export async function POST(req: Request) {
  if (!process.env.STRIPE_SECRET_KEY) {
    return NextResponse.json(
      { error: "Stripe configuration missing on the server" },
      { status: 500 }
    );
  }

  try {
    const json = await req.json();
    const body = checkoutSchema.parse(json);

    // Create Checkout Session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: body.currency,
            product_data: {
              name: "Donation to Perur Rays of Hope",
              description: body.program ? `Supporting: ${body.program}` : "General Support",
              images: ["https://perur.org/images/logo.png"], // Update with actual URL or env variable
            },
            unit_amount: body.amount * 100, // Stripe expects amounts in cents
          },
          quantity: 1,
        },
      ],
      metadata: {
        program: body.program || "General",
      },
      mode: "payment",
      success_url: `${SITE_URL}/donate/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${SITE_URL}/donate`,
    });

    return NextResponse.json({ url: session.url });
  } catch (err: unknown) {
    console.error("Stripe Checkout Error:", err);
    if (err instanceof z.ZodError) {
      return NextResponse.json({ error: "Invalid request payload", details: err.errors }, { status: 400 });
    }
    const errorMessage = err instanceof Error ? err.message : "Internal Server Error";
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}
