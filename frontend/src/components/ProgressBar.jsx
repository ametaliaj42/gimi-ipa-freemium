const SECTION_LABELS = { mindset: 'Innovation Mindset', knowledge: 'Knowledge & Tools' };
const SECTION_COLORS = { mindset: '#00ACC1', knowledge: '#7C3AED' };

export default function ProgressBar({ current, total, section }) {
  const pct = Math.round((current / total) * 100);
  const color = SECTION_COLORS[section] || '#00ACC1';
  return (
    <div className="quiz-progress-bar">
      <div className="progress-header">
        <span className="progress-section" style={{ color }}>{SECTION_LABELS[section] || 'Assessment'}</span>
        <span className="progress-count">{current} / {total}</span>
      </div>
      <div className="progress-track">
        <div className="progress-fill" style={{ width: `${pct}%`, background: color }} />
      </div>
    </div>
  );
}
