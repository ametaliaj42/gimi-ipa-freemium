import { useState } from 'react';

export default function StripeModal({ onSuccess, onClose }) {
  const [card, setCard] = useState({ number: '', expiry: '', cvc: '' });
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);

  const set = (k, v) => setCard(p => ({ ...p, [k]: v }));

  const pay = async () => {
    setLoading(true);
    await new Promise(r => setTimeout(r, 1800));
    setDone(true);
    setTimeout(() => onSuccess(), 900);
  };

  if (done) return (
    <div className="modal-bg">
      <div className="modal success-modal">
        <span className="success-check">✅</span>
        <h2 className="success-h">Payment Successful!</h2>
        <p className="success-p">Unlocking your full Innovation Report…</p>
      </div>
    </div>
  );

  return (
    <div className="modal-bg" onClick={onClose}>
      <div className="modal" onClick={e => e.stopPropagation()} style={{ maxWidth: 420 }}>
        <button className="modal-x" onClick={onClose}>✕</button>

        <div className="stripe-header">
          <h3>Complete Payment</h3>
          <span className="stripe-amount">$50.00</span>
        </div>

        <div className="stripe-fields">
          <div className="stripe-field">
            <label>Card Number</label>
            <input type="text" placeholder="4242 4242 4242 4242" maxLength={19}
              value={card.number} onChange={e => set('number', e.target.value)} />
          </div>
          <div className="stripe-row">
            <div className="stripe-field">
              <label>Expiry</label>
              <input type="text" placeholder="MM / YY" maxLength={7}
                value={card.expiry} onChange={e => set('expiry', e.target.value)} />
            </div>
            <div className="stripe-field">
              <label>CVC</label>
              <input type="text" placeholder="123" maxLength={4}
                value={card.cvc} onChange={e => set('cvc', e.target.value)} />
            </div>
          </div>

          <div className="stripe-demo-note">
            ⚡ Demo mode — any values will unlock the report. Real Stripe integration is ready to activate.
          </div>

          <button className="btn btn-primary btn-full" style={{ height: 52 }}
            onClick={pay} disabled={loading}>
            {loading
              ? <span className="btn-loading"><span className="btn-ring" /> Processing…</span>
              : 'Pay $50 →'}
          </button>
        </div>
        <p className="stripe-secure">🔒 Secured by Stripe · SSL Encrypted · No subscription</p>
      </div>
    </div>
  );
}
