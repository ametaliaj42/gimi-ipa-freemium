export default function UnlockModal({ onPay, onClose }) {
  const benefits = [
    'Detailed Innovation Mindset breakdown — Growth Mindset, Grit, Creative Collaboration, Flexible Execution',
    'Detailed Knowledge & Tools breakdown — Intent, Concepts, Resources, Make it Real',
    'Drivers, Enablers, and Barriers for every dimension',
    'Your complete Innovation Profile characterisation',
    'Personalised suggestions and GIMI training journey map',
    'Recommended GIMI Certification level and next cohort date',
  ];
  return (
    <div className="modal-bg" onClick={onClose}>
      <div className="modal" onClick={e => e.stopPropagation()}>
        <button className="modal-x" onClick={onClose}>✕</button>
        <div style={{ textAlign: 'center', marginBottom: 4 }}>
          <div className="modal-icon">🔓</div>
          <h2 className="modal-h">Unlock Your Full Report</h2>
          <p className="modal-price">$50</p>
        </div>
        <ul className="modal-benefits">
          {benefits.map((b, i) => (
            <li key={i}><span className="modal-check">✓</span>{b}</li>
          ))}
        </ul>
        <button className="btn btn-primary btn-full btn-lg" onClick={onPay}>Pay $50 & Unlock →</button>
        <p className="modal-secure">🔒 Secure payment · Instant access · One-time charge</p>
      </div>
    </div>
  );
}
