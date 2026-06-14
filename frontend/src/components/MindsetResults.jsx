export default function MindsetResults({ gatedContent }) {
  const { mindsetDetail } = gatedContent;
  return (
    <div className="detail-section">
      <div className="detail-header">
        <h3>🧠 Innovation Mindset — Detailed Results</h3>
      </div>
      <p className="detail-insight">{mindsetDetail.insight}</p>
      <div className="detail-groups">
        <SubGroup title="Drivers" color="#059669" bg="#ECFDF5" items={mindsetDetail.drivers} desc="Your strongest dimensions — leverage these in innovation projects."/>
        <SubGroup title="Enablers" color="#D97706" bg="#FFFBEB" items={mindsetDetail.enablers} desc="Solid foundations — with focused development, these become drivers."/>
        <SubGroup title="Barriers" color="#DC2626" bg="#FEF2F2" items={mindsetDetail.barriers} desc="Priority development areas — addressing these will accelerate your growth."/>
      </div>
      <SubScoreBars subs={[...mindsetDetail.drivers,...mindsetDetail.enablers,...mindsetDetail.barriers]}/>
    </div>
  );
}

function SubGroup({ title, color, bg, items, desc }) {
  if (!items.length) return null;
  return (
    <div className="sub-group" style={{background:bg,borderColor:color+'44'}}>
      <div className="sub-group-title" style={{color}}>{title}</div>
      <p className="sub-group-desc">{desc}</p>
      {items.map(s=>(
        <div key={s.key} className="sub-group-item">
          <span className="sub-group-label">{s.label}</span>
          <div className="sub-score-bar-wrap">
            <div className="sub-score-bar" style={{width:`${s.score}%`, background:color}}/>
          </div>
          <span className="sub-score-num" style={{color}}>{s.score}</span>
        </div>
      ))}
    </div>
  );
}

function SubScoreBars({ subs }) {
  const sorted = [...subs].sort((a,b)=>b.score-a.score);
  return (
    <div className="sub-bars-section">
      <h4>All Sub-Scores</h4>
      {sorted.map(s=>{
        const color = s.role==='driver'?'#059669':s.role==='enabler'?'#D97706':'#DC2626';
        return (
          <div key={s.key} className="sub-bar-row">
            <span className="sub-bar-label">{s.label}</span>
            <div className="sub-bar-track"><div className="sub-bar-fill" style={{width:`${s.score}%`,background:color}}/></div>
            <span className="sub-bar-score" style={{color}}>{s.score}/100</span>
          </div>
        );
      })}
    </div>
  );
}
