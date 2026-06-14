import { useState, useCallback } from 'react';
import { scoreAnswers, classifySubs } from '../utils/scoring.js';
import { determineProfile } from '../utils/profiles.js';

export function useAssessment() {
  const [step, setStep] = useState('welcome'); // welcome|userinfo|quiz|loading|results
  const [userInfo, setUserInfo] = useState({});
  const [answers, setAnswers] = useState([]);
  const [report, setReport] = useState(null);
  const [unlocked, setUnlocked] = useState(false);

  const submitAnswer = useCallback((questionId, optionIndex) => {
    setAnswers(prev => {
      const filtered = prev.filter(a => a.questionId !== questionId);
      return [...filtered, { questionId, optionIndex }];
    });
  }, []);

  const generateReport = useCallback(() => {
    setStep('loading');
    setTimeout(() => {
      const { mindsetScore, ktScore, mindsetSubs, ktSubs } = scoreAnswers(answers);
      const profile = determineProfile(mindsetScore, ktScore);
      const nextCohort = (() => { const d = new Date(); d.setMonth(d.getMonth()+1); d.setDate(15); return d.toLocaleDateString('en-US',{month:'long',day:'numeric',year:'numeric'}); })();
      setReport({
        assessmentId: `ipa_${Date.now()}`,
        userInfo,
        scores: { mindset: mindsetScore, kt: ktScore, mindsetSubs: classifySubs(mindsetSubs), ktSubs: classifySubs(ktSubs) },
        profile,
        gatedContent: {
          mindsetDetail: {
            drivers: classifySubs(mindsetSubs).filter(s=>s.role==='driver'),
            enablers: classifySubs(mindsetSubs).filter(s=>s.role==='enabler'),
            barriers: classifySubs(mindsetSubs).filter(s=>s.role==='barrier'),
            insight: `Your strongest mindset dimension is ${classifySubs(mindsetSubs).sort((a,b)=>b.score-a.score)[0]?.label}. Developing ${classifySubs(mindsetSubs).sort((a,b)=>a.score-b.score)[0]?.label} will unlock your next growth stage.`,
          },
          ktDetail: {
            drivers: classifySubs(ktSubs).filter(s=>s.role==='driver'),
            enablers: classifySubs(ktSubs).filter(s=>s.role==='enabler'),
            barriers: classifySubs(ktSubs).filter(s=>s.role==='barrier'),
            insight: `Your strongest Knowledge & Tools dimension is ${classifySubs(ktSubs).sort((a,b)=>b.score-a.score)[0]?.label}. Focusing on ${classifySubs(ktSubs).sort((a,b)=>a.score-b.score)[0]?.label} gives you the highest leverage.`,
          },
          suggestions: { strengths: profile.strengths, suggestions: profile.suggestions, gimiLevel: profile.gimiLevel, certification: profile.certification, investment: profile.investment, nextCohort },
        },
      });
      setStep('results');
    }, 2200);
  }, [answers, userInfo]);

  return { step, setStep, userInfo, setUserInfo, answers, submitAnswer, report, generateReport, unlocked, setUnlocked };
}
