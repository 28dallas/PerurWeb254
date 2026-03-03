import { NextResponse } from "next/server";
import { z } from "zod";

const mpesaSchema = z.object({
    phoneNumber: z.string().regex(/^254[0-9]{9}$/, "Must be a valid Kenyan format: 254XXXXXXXXX"),
    amount: z.number().min(1),
    program: z.string().optional(),
});

// A simplified helper to get the M-Pesa access token
async function getMpesaToken(consumerKey: string, consumerSecret: string, env: string) {
    const url =
        env === "sandbox"
            ? "https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials"
            : "https://api.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials";

    const auth = Buffer.from(`${consumerKey}:${consumerSecret}`).toString("base64");
    const response = await fetch(url, {
        headers: { Authorization: `Basic ${auth}` },
        cache: "no-store",
    });

    if (!response.ok) throw new Error("Failed to get M-Pesa token");
    const data = await response.json();
    return data.access_token;
}

export async function POST(req: Request) {
    try {
        const json = await req.json();
        const body = mpesaSchema.parse(json);

        // M-Pesa Logic - normally this comes from env vars
        const env = process.env.MPESA_ENVIRONMENT || "sandbox";
        const shortCode = process.env.MPESA_SHORTCODE;
        const passkey = process.env.MPESA_PASSKEY;
        const consumerKey = process.env.MPESA_CONSUMER_KEY;
        const consumerSecret = process.env.MPESA_CONSUMER_SECRET;
        const callbackUrl = `${process.env.NEXT_PUBLIC_SITE_URL}/api/donate/mpesa/webhook`;

        if (!shortCode || !passkey || !consumerKey || !consumerSecret) {
            return NextResponse.json({ error: "M-Pesa configuration missing" }, { status: 500 });
        }

        const token = await getMpesaToken(consumerKey, consumerSecret, env);
        const url =
            env === "sandbox"
                ? "https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest"
                : "https://api.safaricom.co.ke/mpesa/stkpush/v1/processrequest";

        const timestamp = new Date()
            .toISOString()
            .replace(/[^0-9]/g, "")
            .slice(0, 14);
        const password = Buffer.from(`${shortCode}${passkey}${timestamp}`).toString("base64");

        const payload = {
            BusinessShortCode: shortCode,
            Password: password,
            Timestamp: timestamp,
            TransactionType: "CustomerPayBillOnline",
            Amount: body.amount,
            PartyA: body.phoneNumber,
            PartyB: shortCode,
            PhoneNumber: body.phoneNumber,
            CallBackURL: callbackUrl,
            AccountReference: body.program || "General Donation",
            TransactionDesc: `Donation to PRoH for ${body.program || "General Funds"}`,
        };

        const response = await fetch(url, {
            method: "POST",
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify(payload),
        });

        const mpesaResponse = await response.json();

        if (!response.ok) {
            throw new Error(mpesaResponse.errorMessage || "M-Pesa STK push failed");
        }

        return NextResponse.json({
            success: true,
            message: "Please enter your M-Pesa PIN",
            checkoutRequestID: mpesaResponse.CheckoutRequestID,
        });
    } catch (err: unknown) {
        console.error("M-Pesa Push Error:", err);
        if (err instanceof z.ZodError) {
            return NextResponse.json({ error: "Invalid request payload", details: err.errors }, { status: 400 });
        }
        const errorMessage = err instanceof Error ? err.message : "Internal Server Error";
        return NextResponse.json({ error: errorMessage }, { status: 500 });
    }
}
