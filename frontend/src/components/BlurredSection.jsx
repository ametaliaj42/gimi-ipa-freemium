export default function BlurredSection({ unlocked, onUnlockClick, children, title }) {
  return (
    <div className="blurred-section-wrap">
      {!unlocked && (
        <div className="blurred-section-overlay">
          <div className="blurred-overlay-card">
            <div className="blurred-lock-icon">🔒</div>
            <h3>Unlock Full Report</h3>
            <p>Access your detailed {title} results, drivers, enablers, barriers, and personalised training path.</p>
            <button className="btn-unlock" onClick={onUnlockClick}>Unlock for $50 →</button>
          </div>
        </div>
      )}
      <div className={unlocked ? '' : 'blurred-content'}>{children}</div>
    </div>
  );
}
