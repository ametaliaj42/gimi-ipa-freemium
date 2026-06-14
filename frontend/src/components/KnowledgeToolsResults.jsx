export default function KnowledgeToolsResults({ gatedContent }) {
  const { ktDetail } = gatedContent;
  return (
    <div className="detail-wrap">
      <h3 className="detail-h">🔧 Knowledge & Tools — Detailed Results</h3>
      <div className="detail-insight">{ktDetail.insight}</div>
      <div className="sub-groups">
        {[
          { title: 'Drivers', desc: 'Dimensions where your knowledge and tools are strongest.', color: '#059669', bg: '#ECFDF5', items: ktDetail.drivers },
          { title: 'Enablers', desc: 'Good foundations — targeted development will make these drivers.', color: '#D97706', bg: '#FFFBEB', items: ktDetail.enablers },
          { title: 'Barriers', desc: 'Priority gaps — highest leverage for your development.', color: '#DC2626', bg: '#FEF2F2', items: ktDetail.barriers },
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
