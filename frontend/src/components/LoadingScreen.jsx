import { useEffect, useState } from 'react';

const steps = [
  'Analysing your innovation mindset…',
  'Evaluating knowledge & tools…',
  'Mapping your innovation profile…',
  'Generating your personalised report…',
];

export default function LoadingScreen() {
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setIdx(i => Math.min(i+1, steps.length-1)), 550);
    return () => clearInterval(t);
  }, []);
  return (
    <div className="loading-screen">
      <div className="loading-card">
        <div className="loading-spinner"/>
        <h2 className="loading-title">Building Your Innovation Profile</h2>
        <div className="loading-steps">
          {steps.map((s, i) => (
            <div key={i} className={`loading-step ${i <= idx ? 'loading-step-active' : ''}`}>
              <span className="loading-step-dot">{i < idx ? '✓' : i === idx ? '◉' : '○'}</span>
              <span>{s}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
