export default function ProfileSuggestions({ gatedContent, profile }) {
  const { suggestions } = gatedContent;
  return (
    <div className="detail-section">
      <div className="detail-header">
        <h3>🗺️ Your Innovation Journey Map</h3>
      </div>

      <div className="suggestions-profile-block" style={{borderColor:profile.color, background:profile.bgColor}}>
        <div className="spb-emoji">{profile.emoji}</div>
        <div>
          <div className="spb-title" style={{color:profile.color}}>{profile.name}</div>
          <div className="spb-level">{suggestions.gimiLevel}</div>
        </div>
      </div>

      <div className="suggestions-grid">
        <div className="suggestion-block">
          <h4>💪 Your Core Strengths</h4>
          <ul>{suggestions.strengths.map((s,i)=><li key={i}><span className="s-check">✓</span>{s}</li>)}</ul>
        </div>
        <div className="suggestion-block">
          <h4>🎯 Recommended Actions</h4>
          <ul>{suggestions.suggestions.map((s,i)=><li key={i}><span className="s-arrow">→</span>{s}</li>)}</ul>
        </div>
      </div>

      <div className="certification-block">
        <div className="cert-header">Recommended GIMI Certification Path</div>
        <div className="cert-name">{suggestions.certification}</div>
        <div className="cert-investment">{suggestions.investment}</div>
        <div className="cert-cohort">Next cohort starts: <strong>{suggestions.nextCohort}</strong></div>
        <div className="cert-ctas">
          <a href="https://www.giminstitute.org/product/innovation-potential-assessment/" target="_blank" rel="noreferrer" className="btn-primary">Enrol in Next Cohort →</a>
          <a href="https://calendly.com/erila-haska/30min" target="_blank" rel="noreferrer" className="btn-ghost-teal">Book a Free Call</a>
        </div>
      </div>

      <div className="disclaimer">
        <p>Results are based on self-assessment. GIMI advisors can help you build the most effective development plan for your goals.</p>
      </div>
    </div>
  );
}
