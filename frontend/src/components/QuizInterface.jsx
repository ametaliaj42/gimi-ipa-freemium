import { useState } from 'react';
import { questions } from '../utils/scoring.js';
import ProgressBar from './ProgressBar.jsx';

const SECTION_LABELS = {
  mindset: { label: 'Innovation Mindset', color: '#00ACC1', icon: '🧠' },
  knowledge: { label: 'Knowledge & Tools', color: '#7C3AED', icon: '🔧' },
};

export default function QuizInterface({ answers, onAnswer, onComplete }) {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState(null);
  const [transitioning, setTransitioning] = useState(false);

  const q = questions[current];
  const existingAnswer = answers.find(a => a.questionId === q.id);
  const activeOption = selected !== null ? selected : (existingAnswer?.optionIndex ?? null);
  const section = SECTION_LABELS[q.category];

  const handleSelect = (idx) => { if (!transitioning) setSelected(idx); };

  const handleNext = () => {
    if (activeOption === null) return;
    onAnswer(q.id, activeOption);
    if (current === questions.length - 1) { onComplete(); return; }
    setTransitioning(true);
    setTimeout(() => { setCurrent(c => c+1); setSelected(null); setTransitioning(false); }, 200);
  };

  const handleBack = () => {
    if (current === 0) return;
    setTransitioning(true);
    setTimeout(() => { setCurrent(c => c-1); setSelected(null); setTransitioning(false); }, 200);
  };

  const sectionChanged = current > 0 && questions[current-1]?.category !== q.category;

  return (
    <div className="quiz-screen">
      <ProgressBar current={current+1} total={questions.length}/>

      <div className={`quiz-card ${transitioning ? 'quiz-fade-out' : 'quiz-fade-in'}`}>
        <div className="quiz-section-tag" style={{color: section.color, borderColor: section.color}}>
          {section.icon} {section.label}
        </div>

        {sectionChanged && (
          <div className="section-transition-note">
            Now assessing your <strong>{section.label}</strong>
          </div>
        )}

        <h3 className="quiz-question">{q.text}</h3>

        <div className="quiz-options">
          {q.options.map((opt, idx) => (
            <button
              key={idx}
              className={`quiz-option ${activeOption === idx ? 'quiz-option-active' : ''}`}
              onClick={() => handleSelect(idx)}
            >
              <span className="quiz-option-dot">{activeOption === idx ? '●' : '○'}</span>
              <span className="quiz-option-text">{opt.t}</span>
            </button>
          ))}
        </div>

        <div className="quiz-nav">
          <button className="btn-ghost" onClick={handleBack} disabled={current===0}>← Back</button>
          <span className="quiz-counter">{current+1} / {questions.length}</span>
          <button className="btn-primary" onClick={handleNext} disabled={activeOption===null}>
            {current === questions.length-1 ? 'See My Profile →' : 'Next →'}
          </button>
        </div>
      </div>
    </div>
  );
}
