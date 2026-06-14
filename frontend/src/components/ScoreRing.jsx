export default function ScoreRing({ score, size = 100, color = '#00ACC1', label }) {
  const r = (size / 2) - 8;
  const circ = 2 * Math.PI * r;
  const offset = circ * (1 - score / 100);
  return (
    <div className="score-ring-wrap">
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
        <circle cx={size/2} cy={size/2} r={r} fill="none" stroke="#E8EFF8" strokeWidth="7"/>
        <circle cx={size/2} cy={size/2} r={r} fill="none" stroke={color} strokeWidth="7"
          strokeLinecap="round" strokeDasharray={circ} strokeDashoffset={offset}
          transform={`rotate(-90 ${size/2} ${size/2})`} style={{transition:'stroke-dashoffset 1s ease'}}/>
        <text x={size/2} y={size/2-5} textAnchor="middle" fill={color} fontSize={size*0.22} fontWeight="700" fontFamily="Outfit,system-ui">{score}</text>
        <text x={size/2} y={size/2+12} textAnchor="middle" fill="#7A95AE" fontSize={size*0.1} fontFamily="system-ui">/100</text>
      </svg>
      {label && <span className="score-ring-label" style={{color}}>{label}</span>}
    </div>
  );
}
