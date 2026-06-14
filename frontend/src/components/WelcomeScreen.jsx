export default function WelcomeScreen({ onStart }) {
  const profiles = [
    { emoji: '👑', name: 'Rule Maker' },
    { emoji: '⚡', name: 'Rule Breaker' },
    { emoji: '🚀', name: 'Rule Challenger' },
    { emoji: '💎', name: 'Diamond in the Rough' },
    { emoji: '⚙️', name: 'Optimistic Executor' },
    { emoji: '📋', name: 'Rule Executor' },
    { emoji: '📌', name: 'Rule Follower' },
  ];

  return (
    <div className="welcome">
      {/* Hero */}
      <div className="welcome-hero">
        <div className="welcome-eyebrow">
          <span className="welcome-eyebrow-dot" />
          Free Individual Assessment
        </div>
        <h1 className="welcome-h1">
          What is your<br /><em>Innovation Profile?</em>
        </h1>
        <p className="welcome-sub">
          The IPA measures your Innovation Mindset and Knowledge & Tools maturity to identify which of 7 Innovation Profiles you are — and the exact path to become a better innovator.
        </p>
        <div className="welcome-ctas">
          <button className="btn btn-primary btn-lg" onClick={onStart}>
            Start Free Assessment →
          </button>
          <a href="https://www.giminstitute.org/product/innovation-potential-assessment/"
             target="_blank" rel="noreferrer" className="btn btn-outline btn-lg">
            Learn More
          </a>
        </div>
        <p className="welcome-micro">16 questions · 5 minutes · No account required</p>
      </div>

      {/* Trust bar */}
      <div className="welcome-trust">
        {[
          { num: '18,000+', label: 'Certified professionals' },
          { num: '60+',     label: 'Countries active' },
          { num: '140+',    label: 'University partners' },
          { num: '1,200+',  label: 'Corporations certified' },
        ].map(s => (
          <div key={s.label} className="trust-stat">
            <div className="trust-num">{s.num}</div>
            <div className="trust-label">{s.label}</div>
          </div>
        ))}
      </div>

      {/* 7 Profiles */}
      <div className="welcome-profiles">
        <p className="welcome-profiles-title">The 7 Innovation Profiles</p>
        <div className="profiles-grid">
          {profiles.map(p => (
            <div key={p.name} className="profile-chip">
              <span className="profile-chip-emoji">{p.emoji}</span>
              <span className="profile-chip-name">{p.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Features */}
      <div className="welcome-features">
        {[
          {
            num: '01', icon: '🧠',
            h: 'Innovation Mindset Results',
            p: 'Scores across Growth Mindset, Grit, Creative Collaboration, and Flexible Execution — with drivers, enablers, and barriers explained.',
          },
          {
            num: '02', icon: '🔧',
            h: 'Knowledge & Tools Results',
            p: 'Proficiency across Intent, Concepts, Resources, and Make it Real — the four pillars of innovation execution in practice.',
          },
          {
            num: '03', icon: '🗺️',
            h: 'Personalised Journey Map',
            p: 'Your Innovation Profile, core strengths, recommended actions, and the exact GIMI certification path to reach your next level.',
          },
        ].map(f => (
          <div key={f.h} className="feature-card">
            <div className="feature-num">{f.num}</div>
            <div className="feature-icon">{f.icon}</div>
            <h3 className="feature-h">{f.h}</h3>
            <p className="feature-p">{f.p}</p>
          </div>
        ))}
      </div>

      {/* Bottom CTA */}
      <div className="welcome-bottom">
        <h2 className="welcome-bottom-h">Ready to assess your Innovation Potential?</h2>
        <p className="welcome-bottom-p">
          Take the free individual assessment in 5 minutes, or book a call to assess your whole organisation.
        </p>
        <div className="welcome-ctas">
          <button className="btn btn-primary btn-lg" onClick={onStart}>
            Start Free Assessment →
          </button>
          <a href="https://calendly.com/erila-haska/30min" target="_blank" rel="noreferrer"
             className="btn btn-outline btn-lg" style={{ borderColor: 'rgba(255,255,255,.4)', color: 'rgba(255,255,255,.8)' }}>
            Assess My Organisation
          </a>
        </div>
      </div>
    </div>
  );
}
