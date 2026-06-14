export default function UnlockModal({ onPay, onClose }) {
  return (
    <div className="modal-bg" onClick={onClose}>
      <div className="modal" onClick={e => e.stopPropagation()}>
        <button className="modal-x" onClick={onClose}>✕</button>
        <div className="modal-center">
          <div className="modal-icon">🔓</div>
          <h2 className="modal-h">Unlock Your Full Report</h2>
          <p className="modal-price">$50 · One-time</p>
        </div>
        <ul className="modal-perks">
          {[
            'Innovation Mindset breakdown — Growth Mindset, Grit, Creative Collaboration, Flexible Execution',
            'Knowledge & Tools breakdown — Intent, Concepts, Resources, Make it Real',
            'Drivers, Enablers, and Barriers for all 8 dimensions',
            'Complete Innovation Profile characterisation',
            'Personalised actions and GIMI journey map',
            'Recommended GIMI certification level and next cohort date',
          ].map((b, i) => <li key={i}><span className="chk">✓</span>{b}</li>)}
        </ul>
        <button className="btn btn-teal btn-full btn-lg" onClick={onPay}>Pay $50 & Unlock Report →</button>
        <p className="modal-fine">🔒 Secure payment · Instant access · No subscription</p>
      </div>
    </div>
  );
}
