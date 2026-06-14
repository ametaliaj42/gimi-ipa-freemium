import { useState } from 'react';
import { questions } from '../utils/scoring.js';

const SECTION = { mindset: { label: '🧠 Innovation Mindset', color: '#00ACC1', bg: '#E0F7FA' }, knowledge: { label: '🔧 Knowledge & Tools', color: '#7C3AED', bg: '#F5F3FF' } };

export default function QuizInterface({ answers, onAnswer, onComplete }) {
  const [current, setCurrent] = useState(0);
  const [chosen, setChosen] = useState(null);
  const [anim, setAnim] = useState('qin');

  const q = questions[current];
  const existing = answers.find(a => a.questionId === q.id);
  const active = chosen !== null ? chosen : (existing?.optionIndex ?? null);
  const sec = SECTION[q.category];
  const pct = Math.round(((current + 1) / questions.length) * 100);

  const go = (dir) => {
    if (dir === 1 && active === null) return;
    setAnim('qout');
    setTimeout(() => {
      if (dir === 1) {
        onAnswer(q.id, active);
        if (current === questions.length - 1) { onComplete(); return; }
      }
      setCurrent(c => c + dir);
      setChosen(null);
      setAnim('qin');
    }, 160);
  };

  return (
    <div className="quiz-screen">
      {/* Progress */}
      <div className="quiz-progress">
        <div className="quiz-prog-top">
          <span className="quiz-prog-section" style={{ color: sec.color }}>{sec.label}</span>
          <span className="quiz-prog-count">{current + 1} / {questions.length}</span>
        </div>
        <div className="quiz-prog-track">
          <div className="quiz-prog-fill" style={{ width: `${pct}%`, background: sec.color }} />
        </div>
      </div>

      {/* Card */}
      <div className={`quiz-card ${anim}`}>
        <span className="quiz-section-tag" style={{ color: sec.color, background: sec.bg }}>
          {q.category === 'mindset' ? 'Innovation Mindset' : 'Knowledge & Tools'} · Question {current + 1}
        </span>

        <p className="quiz-question">{q.text}</p>

        <div className="quiz-options">
          {q.options.map((opt, idx) => (
            <button key={idx} className={`quiz-opt${active === idx ? ' selected' : ''}`} onClick={() => setChosen(idx)}>
              <span className="quiz-opt-radio"><span className="quiz-opt-dot"/></span>
              <span className="quiz-opt-text">{opt.t}</span>
            </button>
          ))}
        </div>

        <div className="quiz-nav">
          <button className="btn btn-ghost" onClick={() => go(-1)} disabled={current === 0}>← Back</button>
          <span className="quiz-nav-spacer"/>
          <button className="btn btn-teal" style={{ minWidth: 130 }} onClick={() => go(1)} disabled={active === null}>
            {current === questions.length - 1 ? 'See My Profile →' : 'Next →'}
          </button>
        </div>
      </div>
    </div>
  );
}
