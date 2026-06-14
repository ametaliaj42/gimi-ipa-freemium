export default function ProfileSuggestions({ gatedContent, profile }) {
  const { suggestions: s } = gatedContent;
  return (
    <div className="detail-body">
      <h3 className="detail-h">🗺️ Your Innovation Journey Map</h3>
      <div className="sugg-profile-row" style={{ borderColor: profile.color, background: profile.bgColor }}>
        <span className="spr-emoji">{profile.emoji}</span>
        <div><div className="spr-name" style={{ color: profile.color }}>{profile.name}</div><div className="spr-level">{s.gimiLevel}</div></div>
      </div>
      <div className="sugg-2col">
        <div className="sugg-block">
          <div className="sugg-block-h">Core Strengths</div>
          <ul>{s.strengths.map((x,i) => <li key={i}><span className="s-check">✓</span>{x}</li>)}</ul>
        </div>
        <div className="sugg-block">
          <div className="sugg-block-h">Recommended Actions</div>
          <ul>{s.suggestions.map((x,i) => <li key={i}><span className="s-arr">→</span>{x}</li>)}</ul>
        </div>
      </div>
      <div className="cert-box">
        <div className="cert-ey">Recommended GIMI Certification</div>
        <div className="cert-name">{s.certification}</div>
        <div className="cert-inv">{s.investment}</div>
        <div className="cert-date">Next cohort: <strong>{s.nextCohort}</strong></div>
        <div className="cert-btns">
          <a href="https://www.giminstitute.org/product/innovation-potential-assessment/" target="_blank" rel="noreferrer" className="btn btn-teal">Enrol Now →</a>
          <a href="https://calendly.com/erila-haska/30min" target="_blank" rel="noreferrer" className="btn btn-white-outline">Book a Free Call</a>
        </div>
      </div>
      <p className="cert-disc">Results are based on self-assessment. A GIMI advisor can help you build the most effective development plan for your role and context.</p>
    </div>
  );
}
