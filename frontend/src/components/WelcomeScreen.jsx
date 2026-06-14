export default function WelcomeScreen({ onStart }) {
  return (
    <div className="welcome">
      {/* Hero */}
      <section className="hero">
        <div className="hero-inner">
          <div className="hero-badge"><span className="hero-badge-dot"/>Free Assessment · 5 Minutes</div>
          <h1 className="hero-h1">Know Your<br/><span>Innovation Profile</span></h1>
          <p className="hero-p">16 questions. Instant results. Understand exactly where you stand as an innovator — and the precise path to get better.</p>
          <div className="hero-ctas">
            <button className="btn btn-teal btn-lg" onClick={onStart}>Start Free Assessment →</button>
            <a href="https://calendly.com/erila-haska/30min" target="_blank" rel="noreferrer" className="btn btn-white-outline btn-lg">Assess My Organisation</a>
          </div>
          <p className="hero-micro">No account required · Instant results · Used by 18,000+ professionals</p>
        </div>
      </section>

      {/* Stats */}
      <div className="stats-bar">
        <div className="stats-inner">
          {[{n:'18,000+',l:'Certified professionals'},{n:'60+',l:'Countries active'},{n:'140+',l:'University partners'},{n:'1,200+',l:'Corporations certified'}].map(s=>(
            <div key={s.l} className="stat-item">
              <div className="stat-num">{s.n}</div>
              <div className="stat-label">{s.l}</div>
            </div>
          ))}
        </div>
      </div>

      {/* How it works */}
      <section className="how-section">
        <p className="section-eyebrow">How it works</p>
        <h2 className="section-h">Three steps to your Innovation Profile</h2>
        <div className="steps-grid">
          {[
            {n:'01', icon:'📝', h:'Answer 16 questions', p:'Two sets of questions — 8 on Innovation Mindset, 8 on Knowledge & Tools. Takes about 5 minutes. No login, no email.'},
            {n:'02', icon:'⚡', h:'Get your profile instantly', p:'Your answers are scored across 8 sub-dimensions and mapped to one of 7 Innovation Profiles with a personalised description.'},
            {n:'03', icon:'🗺️', h:'Unlock your full journey map', p:'For $50, access your complete breakdown — drivers, barriers, and the exact GIMI certification path for your profile.'},
          ].map(s=>(
            <div key={s.h} className="step-card" data-num={s.n}>
              <div className="step-icon">{s.icon}</div>
              <h3 className="step-h">{s.h}</h3>
              <p className="step-p">{s.p}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 7 Profiles */}
      <section className="profiles-section">
        <p className="section-eyebrow">The 7 Innovation Profiles</p>
        <h2 className="section-h">Which one are you?</h2>
        <div className="profiles-grid-7">
          {[
            {e:'👑', n:'Rule Maker',           d:'Thought leader who executes powerful value propositions'},
            {e:'⚡', n:'Rule Breaker',          d:'Creative experimenter who continuously pivots'},
            {e:'🚀', n:'Rule Challenger',       d:'A-Player with the right attitude to learn by doing'},
            {e:'⚙️', n:'Optimistic Executor',   d:'Result-driven executor with a disciplined approach'},
            {e:'💎', n:'Diamond in the Rough',  d:'Sharp thinker with strong untapped potential'},
            {e:'📋', n:'Rule Executor',         d:'Domain expert who delivers when the path is clear'},
            {e:'📌', n:'Rule Follower',         d:'Reliable professional who excels within structure'},
          ].map(p=>(
            <div key={p.n} className="profile-card">
              <span className="profile-card-emoji">{p.e}</span>
              <span className="profile-card-name">{p.n}</span>
              <span className="profile-card-desc">{p.d}</span>
            </div>
          ))}
        </div>
      </section>

      {/* What you get */}
      <section className="features-section">
        <div className="features-inner">
          <p className="section-eyebrow">What you get</p>
          <h2 className="section-h">Your personalised Innovation Report</h2>
          <div className="features-grid">
            {[
              {icon:'🧠', h:'Innovation Mindset', p:'Scores across Growth Mindset, Grit, Creative Collaboration, and Flexible Execution — with drivers, enablers, and barriers explained in plain language.'},
              {icon:'🔧', h:'Knowledge & Tools',  p:'Proficiency across Intent, Concepts, Resources, and Make it Real — the four pillars that turn innovation ideas into real results.'},
              {icon:'🗺️', h:'Your Journey Map',   p:'Personalised strengths, recommended actions, and the exact GIMI certification level and path to reach your next stage as an innovator.'},
            ].map(f=>(
              <div key={f.h} className="feature-card">
                <div className="feature-card-icon">{f.icon}</div>
                <h3 className="feature-card-h">{f.h}</h3>
                <p className="feature-card-p">{f.p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <div className="bottom-cta">
        <h2 className="bottom-cta-h">Ready to find your Innovation Profile?</h2>
        <p className="bottom-cta-p">Free individual assessment in 5 minutes. Or book a call to assess your whole organisation.</p>
        <div className="bottom-cta-btns">
          <button className="btn btn-teal btn-lg" onClick={onStart}>Start Free Assessment →</button>
          <a href="https://calendly.com/erila-haska/30min" target="_blank" rel="noreferrer" className="btn btn-outline btn-lg">Assess My Organisation</a>
        </div>
      </div>
    </div>
  );
}
