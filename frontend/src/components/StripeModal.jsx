import { useState } from 'react';

// ─── REAL STRIPE INTEGRATION ──────────────────────────────────────────────────
// import { loadStripe } from '@stripe/js';
// import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
// const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_KEY);
// ─────────────────────────────────────────────────────────────────────────────

export default function StripeModal({ onSuccess, onClose }) {
  const [processing, setProcessing] = useState(false);
  const [done, setDone] = useState(false);
  // Mock card state
  const [card, setCard] = useState({ number:'', expiry:'', cvc:'' });

  const handlePay = async () => {
    setProcessing(true);
    // ── REAL STRIPE: replace setTimeout with stripe.confirmCardPayment() ──────
    await new Promise(r => setTimeout(r, 1800));
    setDone(true);
    setTimeout(() => onSuccess(), 1000);
  };

  if (done) return (
    <div className="modal-backdrop">
      <div className="modal-card modal-success">
        <div className="success-checkmark">✓</div>
        <h2>Payment Successful!</h2>
        <p>Unlocking your full Innovation Report…</p>
      </div>
    </div>
  );

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-card stripe-modal" onClick={e=>e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>✕</button>
        <div className="stripe-modal-header">
          <h3>Complete Payment</h3>
          <div className="stripe-amount">$50.00 USD</div>
        </div>

        <div className="stripe-form">
          {/* ── REAL STRIPE: replace this mock form with <CardElement/> ──────── */}
          <div className="stripe-field">
            <label>Card Number</label>
            <input type="text" placeholder="4242 4242 4242 4242" maxLength="19"
              value={card.number} onChange={e=>setCard(p=>({...p,number:e.target.value}))}/>
          </div>
          <div className="stripe-row">
            <div className="stripe-field">
              <label>Expiry</label>
              <input type="text" placeholder="MM/YY" maxLength="5"
                value={card.expiry} onChange={e=>setCard(p=>({...p,expiry:e.target.value}))}/>
            </div>
            <div className="stripe-field">
              <label>CVC</label>
              <input type="text" placeholder="123" maxLength="4"
                value={card.cvc} onChange={e=>setCard(p=>({...p,cvc:e.target.value}))}/>
            </div>
          </div>

          <div className="stripe-mock-note">
            ⚡ Demo mode — any values unlock the report. Real Stripe integration ready to activate.
          </div>

          <button className="btn-primary btn-full" onClick={handlePay} disabled={processing}>
            {processing ? <span className="btn-spinner">Processing…</span> : 'Pay $50 →'}
          </button>
        </div>
        <div className="stripe-security">🔒 Secured by Stripe · SSL Encrypted</div>
      </div>
    </div>
  );
}
