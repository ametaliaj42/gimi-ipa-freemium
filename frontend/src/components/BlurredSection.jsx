export default function BlurredSection({ unlocked, onUnlock, title, children }) {
  return (
    <div className="gated-wrap">
      {!unlocked && (
        <div className="gated-overlay">
          <div className="gated-cta">
            <div className="gated-cta-icon">🔒</div>
            <h3 className="gated-cta-h">Unlock {title}</h3>
            <p className="gated-cta-p">Access your detailed results with drivers, enablers, barriers, and your personalised GIMI training path.</p>
            <button className="btn btn-navy btn-full" onClick={onUnlock}>Unlock Full Report — $50 →</button>
          </div>
        </div>
      )}
      <div className={`gated-content${unlocked ? '' : ' locked'}`}>{children}</div>
    </div>
  );
}
