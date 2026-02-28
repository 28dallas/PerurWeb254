export async function notifyApiFailure(context: string, details: Record<string, unknown>) {
  const payload = {
    context,
    details,
    timestamp: new Date().toISOString()
  };

  console.error(`[api-monitor] ${context}`, payload);

  const webhookUrl = process.env.API_ALERT_WEBHOOK_URL;
  if (!webhookUrl) return;

  try {
    await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });
  } catch (error) {
    console.error("[api-monitor] webhook notify failed", error);
  }
}
