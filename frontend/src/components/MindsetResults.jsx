export default function MindsetResults({ gatedContent }) {
  const { mindsetDetail } = gatedContent;
  return (
    <div className="detail-wrap">
      <h3 className="detail-h">🧠 Innovation Mindset — Detailed Results</h3>
      <div className="detail-insight">{mindsetDetail.insight}</div>
      <div className="sub-groups">
        {[
          { title: 'Drivers', desc: 'Your strongest dimensions — leverage these actively.', color: '#059669', bg: '#ECFDF5', items: mindsetDetail.drivers },
          { title: 'Enablers', desc: 'Solid foundations — focused development turns these into drivers.', color: '#D97706', bg: '#FFFBEB', items: mindsetDetail.enablers },
          { title: 'Barriers', desc: 'Priority gaps — addressing these accelerates your growth most.', color: '#DC2626', bg: '#FEF2F2', items: mindsetDetail.barriers },
        ].filter(g => g.items.length).map(g => (
          <div key={g.title} className="sub-group" style={{ background: g.bg, borderColor: g.color + '44' }}>
            <div className="sub-group-head" style={{ color: g.color }}>{g.title}</div>
            <div className="sub-group-desc">{g.desc}</div>
            {g.items.map(s => (
              <div key={s.key} className="sub-item">
                <span className="sub-item-label">{s.label}</span>
                <div className="sub-bar-track">
                  <div className="sub-bar-fill" style={{ width: `${s.score}%`, background: g.color }} />
                </div>
                <span className="sub-item-score" style={{ color: g.color }}>{s.score}</span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
