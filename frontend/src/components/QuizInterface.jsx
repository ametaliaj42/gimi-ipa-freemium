import { useState, useEffect } from 'react';
import { questions } from '../utils/scoring.js';
import ProgressBar from './ProgressBar.jsx';

const SECTION_COLORS = { mindset: '#00ACC1', knowledge: '#7C3AED' };
const SECTION_BG     = { mindset: '#E0F7FA', knowledge: '#F5F3FF' };

export default function QuizInterface({ answers, onAnswer, onComplete }) {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState(null);
  const [anim, setAnim] = useState('entering');

  const q = questions[current];
  const prev = answers.find(a => a.questionId === q.id);
  const active = selected !== null ? selected : (prev?.optionIndex ?? null);

  useEffect(() => { setAnim('entering'); }, [current]);

  const go = (dir) => {
    setAnim('exiting');
    setTimeout(() => {
      if (dir === 1 && active !== null) onAnswer(q.id, active);
      if (dir === 1 && current === questions.length - 1) { onComplete(); return; }
      setCurrent(c => c + dir);
      setSelected(null);
    }, 160);
  };

  const color = SECTION_COLORS[q.category];
  const bg    = SECTION_BG[q.category];

  return (
    <div className="quiz-wrap">
      <ProgressBar current={current + 1} total={questions.length} section={q.category} />

      <div className={`quiz-card ${anim}`}>
        <span className="quiz-section-label" style={{ color, background: bg }}>
          {q.category === 'mindset' ? '🧠 Innovation Mindset' : '🔧 Knowledge & Tools'}
        </span>

        <p className="quiz-q">{q.text}</p>

        <div className="quiz-options">
          {q.options.map((opt, idx) => (
            <button
              key={idx}
              className={`quiz-opt${active === idx ? ' selected' : ''}`}
              onClick={() => setSelected(idx)}
            >
              <span className="quiz-opt-marker">
                <span className="quiz-opt-marker-dot" />
              </span>
              <span className="quiz-opt-text">{opt.t}</span>
            </button>
          ))}
        </div>

        <div className="quiz-nav">
          <button className="btn btn-ghost" onClick={() => go(-1)} disabled={current === 0}>← Back</button>
          <span className="quiz-spacer" />
          <button
            className="btn btn-primary"
            onClick={() => go(1)}
            disabled={active === null}
            style={{ minWidth: 140 }}
          >
            {current === questions.length - 1 ? 'See My Profile →' : 'Next →'}
          </button>
        </div>
      </div>
    </div>
  );
}
