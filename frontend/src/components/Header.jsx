import gimiLogo from '../assets/gimi-logo.png';

export default function Header({ step, onReset }) {
  return (
    <header className="header">
      <div className="header-inner">
        <div
          onClick={step && step !== 'welcome' ? onReset : undefined}
          style={{ cursor: step && step !== 'welcome' ? 'pointer' : 'default', display: 'flex', alignItems: 'center' }}
        >
          <img src={gimiLogo} alt="GIMI" className="header-logo-img" />
        </div>
        <span className="header-tag">Innovation Potential Assessment</span>
      </div>
    </header>
  );
}
