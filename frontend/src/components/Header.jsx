export default function Header({ step, onReset }) {
  return (
    <header className="header">
      <div className="header-inner">
        <div
          onClick={step && step !== 'welcome' ? onReset : undefined}
          style={{ cursor: step && step !== 'welcome' ? 'pointer' : 'default', display: 'flex', alignItems: 'center' }}
        >
          <img
            src="/gimi-logo.png"
            alt="GIMI"
            className="header-logo-img"
            onError={e => {
              e.target.style.display = 'none';
              e.target.nextSibling.style.display = 'flex';
            }}
          />
          <div style={{ display: 'none', alignItems: 'center', gap: 10 }}>
            <div style={{
              width: 30, height: 30, borderRadius: 6,
              background: '#00ACC1', display: 'flex', alignItems: 'center',
              justifyContent: 'center', fontSize: 11, fontWeight: 800, color: '#fff',
              fontFamily: 'Outfit,system-ui',
            }}>GI</div>
            <span style={{ color: '#fff', fontSize: 15, fontWeight: 700 }}>GIMI-IAOIP</span>
          </div>
        </div>
        <span className="header-tag">Innovation Potential Assessment</span>
      </div>
    </header>
  );
}