import Header from './components/Header.jsx';
import WelcomeScreen from './components/WelcomeScreen.jsx';
import UserInfoForm from './components/UserInfoForm.jsx';
import QuizInterface from './components/QuizInterface.jsx';
import LoadingScreen from './components/LoadingScreen.jsx';
import ResultsDashboard from './components/ResultsDashboard.jsx';
import { useAssessment } from './hooks/useAssessment.js';
import './index.css';

export default function App() {
  const {
    step, setStep, userInfo, setUserInfo,
    answers, submitAnswer, report, generateReport,
    unlocked, setUnlocked,
  } = useAssessment();

  const reset = () => window.location.reload();

  return (
    <div className="app">
      <Header step={step} onReset={reset} />
      <div className="app-body">
        {step === 'welcome'  && <WelcomeScreen onStart={() => setStep('userinfo')} />}
        {step === 'userinfo' && <UserInfoForm onSubmit={info => { setUserInfo(info); setStep('quiz'); }} />}
        {step === 'quiz'     && <QuizInterface answers={answers} onAnswer={submitAnswer} onComplete={generateReport} />}
        {step === 'loading'  && <LoadingScreen />}
        {step === 'results' && report && (
          <ResultsDashboard
            report={report}
            unlocked={unlocked}
            onUnlock={() => setUnlocked(true)}
            onReset={reset}
          />
        )}
      </div>
      <footer className="app-footer">
        <span>© {new Date().getFullYear()} GIMI-IAOIP · Global Innovation Management Institute</span>
        <span>ISO 56002+ Aligned · 18,000+ Professionals · 60+ Countries</span>
      </footer>
    </div>
  );
}
