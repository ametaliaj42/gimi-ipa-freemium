export default function Header({ step, onReset }) {
  return (
    <header className="header">
      <div className="header-inner">
        <div className="header-brand" onClick={step !== 'welcome' ? onReset : undefined} style={step !== 'welcome' ? {cursor:'pointer'} : {}}>
          <div className="gimi-monogram">GI</div>
          <span className="gimi-name">GIMI-IAOIP</span>
        </div>
        <span className="header-tag">Innovation Potential Assessment</span>
      </div>
    </header>
  );
}
