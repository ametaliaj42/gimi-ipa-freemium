// ─────────────────────────────────────────────────────────────────────────────
// PAYMENT SERVICE — currently mock
// To enable real Stripe: set STRIPE_SECRET_KEY in .env and set ENABLE_STRIPE=true
// ─────────────────────────────────────────────────────────────────────────────

// import Stripe from 'stripe';
// const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

const ENABLED = process.env.ENABLE_STRIPE === 'true';

// In-memory payment store (replace with DB when ready)
const payments = new Map();

export async function createPaymentIntent(assessmentId, amount = 5000) {
  if (!ENABLED) return mockCreateIntent(assessmentId, amount);

  // ── REAL STRIPE INTEGRATION ──────────────────────────────────────────────
  // const intent = await stripe.paymentIntents.create({
  //   amount,
  //   currency: 'usd',
  //   metadata: { assessmentId },
  // });
  // return { clientSecret: intent.client_secret, paymentIntentId: intent.id };
}

export async function confirmPayment(assessmentId) {
  payments.set(assessmentId, { status: 'paid', paidAt: new Date().toISOString() });
  return { success: true };
}

export function isPaymentConfirmed(assessmentId) {
  return payments.get(assessmentId)?.status === 'paid';
}

// ── MOCK ─────────────────────────────────────────────────────────────────────
function mockCreateIntent(assessmentId, amount) {
  return {
    clientSecret: `mock_secret_${assessmentId}_${Date.now()}`,
    paymentIntentId: `mock_pi_${Date.now()}`,
    amount,
    currency: 'usd',
    mock: true,
  };
}

// ── STRIPE WEBHOOK HANDLER (uncomment when real Stripe enabled) ───────────────
// export async function handleWebhook(rawBody, signature) {
//   const event = stripe.webhooks.constructEvent(
//     rawBody, signature, process.env.STRIPE_WEBHOOK_SECRET
//   );
//   if (event.type === 'payment_intent.succeeded') {
//     const { metadata } = event.data.object;
//     await confirmPayment(metadata.assessmentId);
//   }
//   return { received: true };
// }
