export default function KnowledgeToolsResults({ gatedContent }) {
  const { ktDetail } = gatedContent;
  return (
    <div className="detail-section">
      <div className="detail-header">
        <h3>🔧 Knowledge & Tools — Detailed Results</h3>
      </div>
      <p className="detail-insight">{ktDetail.insight}</p>
      <div className="detail-groups">
        {[{t:'Drivers',c:'#059669',bg:'#ECFDF5',items:ktDetail.drivers,d:'Dimensions where your knowledge and tools are strongest.'},{t:'Enablers',c:'#D97706',bg:'#FFFBEB',items:ktDetail.enablers,d:'Good foundations — targeted development will make these drivers.'},{t:'Barriers',c:'#DC2626',bg:'#FEF2F2',items:ktDetail.barriers,d:'Priority gaps — addressing these will have the highest impact.'}].map(g=>
          g.items.length ? (
            <div key={g.t} className="sub-group" style={{background:g.bg,borderColor:g.c+'44'}}>
              <div className="sub-group-title" style={{color:g.c}}>{g.t}</div>
              <p className="sub-group-desc">{g.d}</p>
              {g.items.map(s=>(
                <div key={s.key} className="sub-group-item">
                  <span className="sub-group-label">{s.label}</span>
                  <div className="sub-score-bar-wrap"><div className="sub-score-bar" style={{width:`${s.score}%`,background:g.c}}/></div>
                  <span className="sub-score-num" style={{color:g.c}}>{s.score}</span>
                </div>
              ))}
            </div>
          ) : null
        )}
      </div>
      <div className="sub-bars-section">
        <h4>All Sub-Scores</h4>
        {[...ktDetail.drivers,...ktDetail.enablers,...ktDetail.barriers].sort((a,b)=>b.score-a.score).map(s=>{
          const color=s.role==='driver'?'#059669':s.role==='enabler'?'#D97706':'#DC2626';
          return <div key={s.key} className="sub-bar-row"><span className="sub-bar-label">{s.label}</span><div className="sub-bar-track"><div className="sub-bar-fill" style={{width:`${s.score}%`,background:color}}/></div><span className="sub-bar-score" style={{color}}>{s.score}/100</span></div>;
        })}
      </div>
    </div>
  );
}
