import { useEffect, useState } from 'react';

const STEPS = [
  { icon: '🧠', label: 'Analysing your Innovation Mindset…' },
  { icon: '🔧', label: 'Evaluating Knowledge & Tools…' },
  { icon: '🗺️', label: 'Mapping your Innovation Profile…' },
  { icon: '✨', label: 'Generating your personalised report…' },
];

export default function LoadingScreen() {
  const [active, setActive] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setActive(i => Math.min(i + 1, STEPS.length - 1)), 520);
    return () => clearInterval(t);
  }, []);
  return (
    <div className="loading-wrap">
      <div className="loading-card">
        <div className="loading-ring" />
        <h2 className="loading-h">Building Your Innovation Profile</h2>
        <div className="loading-steps">
          {STEPS.map((s, i) => {
            const state = i < active ? 'done' : i === active ? 'active' : '';
            return (
              <div key={i} className={`loading-step ${state}`}>
                <span className="loading-step-icon">
                  {i < active ? '✓' : i === active ? s.icon : '○'}
                </span>
                <span>{s.label}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
