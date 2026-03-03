import { NextResponse } from "next/server";
import Stripe from "stripe";
import { headers } from "next/headers";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || "", {
    apiVersion: "2024-06-20",
});

const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET || "";

export async function POST(req: Request) {
    const body = await req.text();
    const signature = headers().get("stripe-signature");

    let event: Stripe.Event;

    try {
        if (!signature || !endpointSecret) {
            throw new Error("Missing Stripe signature or webhook secret");
        }
        event = stripe.webhooks.constructEvent(body, signature, endpointSecret);
    } catch (err: unknown) {
        console.error(`⚠️ Webhook signature verification failed.`, err instanceof Error ? err.message : String(err));
        return NextResponse.json({ error: `Webhook Error: ${err instanceof Error ? err.message : 'Unknown error'}` }, { status: 400 });
    }

    try {
        switch (event.type) {
            case "checkout.session.completed":
                const session = event.data.object as Stripe.Checkout.Session;
                // Here you would typically write to your database or CMS.
                // For Sanity, you would update the program's `amountRaised` using `sanity.patch(programId).inc({ amountRaised: session.amount_total }).commit()`
                console.log(`Donation of ${session.amount_total} received for ${session.metadata?.program || "General"}`);
                break;
            // Add more event types here as needed
            default:
                console.log(`Unhandled event type ${event.type}`);
        }

        return NextResponse.json({ received: true });
    } catch (error) {
        console.error("Error processing webhook:", error);
        return NextResponse.json({ error: "Webhook handler failed" }, { status: 500 });
    }
}
