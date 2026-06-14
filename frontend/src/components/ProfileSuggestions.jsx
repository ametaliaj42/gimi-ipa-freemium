export default function ProfileSuggestions({ gatedContent, profile }) {
  const { suggestions } = gatedContent;
  return (
    <div className="detail-wrap">
      <h3 className="detail-h">🗺️ Your Innovation Journey Map</h3>

      <div className="suggestions-profile-row" style={{ borderColor: profile.color, background: profile.bgColor }}>
        <span className="spr-emoji">{profile.emoji}</span>
        <div>
          <div className="spr-name" style={{ color: profile.color }}>{profile.name}</div>
          <div className="spr-level">{suggestions.gimiLevel}</div>
        </div>
      </div>

      <div className="sugg-grid">
        <div className="sugg-block">
          <div className="sugg-block-h">Core Strengths</div>
          <ul>{suggestions.strengths.map((s, i) => (
            <li key={i}><span className="sugg-check">✓</span>{s}</li>
          ))}</ul>
        </div>
        <div className="sugg-block">
          <div className="sugg-block-h">Recommended Actions</div>
          <ul>{suggestions.suggestions.map((s, i) => (
            <li key={i}><span className="sugg-arrow">→</span>{s}</li>
          ))}</ul>
        </div>
      </div>

      <div className="cert-block">
        <div className="cert-eyebrow">Recommended GIMI Certification Path</div>
        <div className="cert-name">{suggestions.certification}</div>
        <div className="cert-inv">{suggestions.investment}</div>
        <div className="cert-cohort">Next cohort: <strong>{suggestions.nextCohort}</strong></div>
        <div className="cert-ctas">
          <a href="https://www.giminstitute.org/product/innovation-potential-assessment/"
             target="_blank" rel="noreferrer" className="btn btn-primary">
            Enrol Now →
          </a>
          <a href="https://calendly.com/erila-haska/30min"
             target="_blank" rel="noreferrer" className="btn btn-outline"
             style={{ borderColor: 'rgba(255,255,255,.4)', color: 'rgba(255,255,255,.8)' }}>
            Book a Free Call
          </a>
        </div>
      </div>

      <p style={{ fontSize: 11, color: '#6B7E95', lineHeight: 1.55 }}>
        Results are based on self-assessment. A GIMI advisor can help you build the most effective development plan for your goals and context.
      </p>
    </div>
  );
}
