import { createPaymentIntent, confirmPayment } from '../services/paymentService.js';

export async function createIntent(req, res) {
  try {
    const { assessmentId } = req.body;
    if (!assessmentId) return res.status(400).json({ error: 'assessmentId required.' });
    const intent = await createPaymentIntent(assessmentId);
    res.json(intent);
  } catch (err) {
    console.error('Payment error:', err);
    res.status(500).json({ error: 'Payment initiation failed.' });
  }
}

// Mock confirm — remove when using real Stripe webhooks
export async function mockConfirm(req, res) {
  try {
    const { assessmentId } = req.body;
    await confirmPayment(assessmentId);
    res.json({ success: true, message: 'Payment confirmed (mock).' });
  } catch (err) {
    res.status(500).json({ error: 'Confirmation failed.' });
  }
}
