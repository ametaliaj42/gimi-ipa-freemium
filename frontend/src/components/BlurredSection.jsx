export default function BlurredSection({ unlocked, onUnlock, title, children }) {
  return (
    <div className="gated-section">
      {!unlocked && (
        <div className="gated-overlay">
          <div className="gated-cta-card">
            <div className="gated-cta-icon">🔒</div>
            <h3 className="gated-cta-h">Unlock {title}</h3>
            <p className="gated-cta-p">
              Access your detailed breakdown, drivers, enablers, barriers, and personalised GIMI training path.
            </p>
            <button className="btn btn-navy btn-full" onClick={onUnlock}>
              Unlock Full Report — $50 →
            </button>
          </div>
        </div>
      )}
      <div className={`gated-inner${unlocked ? '' : ' blurred'}`}>
        {children}
      </div>
    </div>
  );
}
