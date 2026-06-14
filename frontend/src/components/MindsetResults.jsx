const GROUPS = [
  {key:'driver',  title:'Drivers',  desc:'Your strongest mindset dimensions — leverage these.',      color:'#059669', bg:'#ECFDF5', border:'#6EE7B744'},
  {key:'enabler', title:'Enablers', desc:'Solid foundations — targeted development turns these into drivers.', color:'#D97706', bg:'#FFFBEB', border:'#FDE68A44'},
  {key:'barrier', title:'Barriers', desc:'Priority gaps — addressing these has the highest impact.', color:'#DC2626', bg:'#FEF2F2', border:'#FCA5A544'},
];
export default function MindsetResults({ gatedContent }) {
  const { mindsetDetail: d } = gatedContent;
  return (
    <div className="detail-body">
      <h3 className="detail-h">🧠 Innovation Mindset — Detailed Results</h3>
      <div className="detail-insight">{d.insight}</div>
      <div className="sub-groups">
        {GROUPS.map(g => {
          const items = d[g.key + 's'];
          if (!items?.length) return null;
          return (
            <div key={g.key} className="sub-group" style={{ background: g.bg, borderColor: g.border }}>
              <div className="sub-g-head" style={{ color: g.color }}>{g.title}</div>
              <div className="sub-g-desc">{g.desc}</div>
              {items.map(s => (
                <div key={s.key} className="sub-row">
                  <span className="sub-row-label">{s.label}</span>
                  <div className="sub-track"><div className="sub-fill" style={{ width: `${s.score}%`, background: g.color }}/></div>
                  <span className="sub-score" style={{ color: g.color }}>{s.score}</span>
                </div>
              ))}
            </div>
          );
        })}
      </div>
    </div>
  );
}
