export default function UnlockModal({ onPay, onClose }) {
  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-card" onClick={e=>e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>✕</button>
        <div className="modal-header">
          <div className="modal-icon">🔓</div>
          <h2>Unlock Your Full Innovation Report</h2>
          <p className="modal-price">$50 · One-time · Instant access</p>
        </div>
        <ul className="modal-benefits">
          {['Detailed Innovation Mindset breakdown (Growth Mindset, Grit, Creative Collaboration, Flexible Execution)','Detailed Knowledge & Tools breakdown (Intent, Concepts, Resources, Make it Real)','Drivers, Enablers and Barriers for each dimension','Your full Innovation Profile characterisation','Personalised suggestions and GIMI training journey map','Recommended GIMI Certification level for your profile'].map((b,i)=>(
            <li key={i}><span className="modal-check">✓</span>{b}</li>
          ))}
        </ul>
        <button className="btn-primary btn-full btn-xl" onClick={onPay}>Pay $50 & Unlock Report →</button>
        <p className="modal-secure">🔒 Secure payment · Instant access · No subscription</p>
      </div>
    </div>
  );
}
