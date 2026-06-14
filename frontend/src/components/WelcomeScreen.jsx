export default function WelcomeScreen({ onStart }) {
  return (
    <div className="welcome-screen">
      <div className="welcome-hero">
        <div className="welcome-badge">Free Assessment · 5 Minutes</div>
        <h1 className="welcome-title">Discover Your Innovation Profile</h1>
        <p className="welcome-subtitle">The IPA measures your Innovation Mindset and Knowledge & Tools to identify which of 7 Innovation Profiles you are — and the exact development path to become a better innovator.</p>
        <button className="btn-primary btn-xl" onClick={onStart}>Start Free Assessment →</button>
        <p className="welcome-no-email">No account needed · 16 questions · Instant results</p>
      </div>

      <div className="welcome-profiles-preview">
        {[{e:'👑',n:'Rule Maker'},{e:'⚡',n:'Rule Breaker'},{e:'🚀',n:'Rule Challenger'},{e:'💎',n:'Diamond in the Rough'},{e:'⚙️',n:'Optimistic Executor'},{e:'📋',n:'Rule Executor'},{e:'📌',n:'Rule Follower'}].map(p => (
          <div key={p.n} className="profile-chip"><span>{p.e}</span><span>{p.n}</span></div>
        ))}
      </div>

      <div className="welcome-features">
        {[
          {icon:'🎯', title:'Innovation Mindset Results', desc:'Discover your Growth Mindset, Grit, Creative Collaboration and Flexible Execution scores with detailed drivers, enablers and barriers.'},
          {icon:'🔧', title:'Knowledge & Tools Results', desc:'Understand your proficiency across Intent, Concepts, Resources and Make it Real — the four pillars of innovation execution.'},
          {icon:'🗺️', title:'Innovation Profile & Journey Map', desc:'Get your personalised Innovation Profile with tailored suggestions and GIMI training paths to become a better innovator.'},
        ].map(f => (
          <div key={f.title} className="feature-card">
            <div className="feature-icon">{f.icon}</div>
            <h3 className="feature-title">{f.title}</h3>
            <p className="feature-desc">{f.desc}</p>
          </div>
        ))}
      </div>

      <div className="welcome-cta-bottom">
        <button className="btn-primary btn-xl" onClick={onStart}>Assess Your Innovation Potential →</button>
        <div className="welcome-trust">
          <span>✓ Trusted by 18,000+ innovation professionals</span>
          <span>✓ ISO 56002 aligned</span>
          <span>✓ 60+ countries</span>
        </div>
      </div>
    </div>
  );
}
