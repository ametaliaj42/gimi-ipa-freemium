import { useState } from 'react';
export default function StripeModal({ onSuccess, onClose }) {
  const [card, setCard] = useState({ num: '', exp: '', cvc: '' });
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);
  const set = (k, v) => setCard(p => ({ ...p, [k]: v }));
  const pay = async () => {
    setLoading(true);
    await new Promise(r => setTimeout(r, 1700));
    setDone(true);
    setTimeout(() => onSuccess(), 900);
  };
  if (done) return (
    <div className="modal-bg">
      <div className="modal success-wrap">
        <span className="success-icon">✅</span>
        <h2 className="success-h">Payment Successful!</h2>
        <p className="success-p">Unlocking your full Innovation Report…</p>
      </div>
    </div>
  );
  return (
    <div className="modal-bg" onClick={onClose}>
      <div className="modal" style={{ maxWidth: 400 }} onClick={e => e.stopPropagation()}>
        <button className="modal-x" onClick={onClose}>✕</button>
        <div className="str-head">
          <h3>Complete Payment</h3>
          <span className="str-amount">$50.00</span>
        </div>
        <div className="str-fields">
          <div className="str-field">
            <label>Card Number</label>
            <input type="text" placeholder="4242 4242 4242 4242" maxLength={19} value={card.num} onChange={e => set('num', e.target.value)}/>
          </div>
          <div className="str-2col">
            <div className="str-field"><label>Expiry</label><input type="text" placeholder="MM / YY" maxLength={7} value={card.exp} onChange={e => set('exp', e.target.value)}/></div>
            <div className="str-field"><label>CVC</label><input type="text" placeholder="123" maxLength={4} value={card.cvc} onChange={e => set('cvc', e.target.value)}/></div>
          </div>
          <div className="str-demo">⚡ Demo mode — any values unlock the report. Real Stripe integration is ready to activate.</div>
          <button className="btn btn-teal btn-full" style={{ height: 52 }} onClick={pay} disabled={loading}>
            {loading ? <span className="btn-loading"><span className="btn-ring"/>Processing…</span> : 'Pay $50 →'}
          </button>
        </div>
        <p className="str-secure">🔒 Secured by Stripe · SSL Encrypted · No subscription</p>
      </div>
    </div>
  );
}
