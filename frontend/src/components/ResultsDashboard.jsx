import { useState } from 'react';
import ArchetypeCard from './ArchetypeCard.jsx';
import BlurredSection from './BlurredSection.jsx';
import UnlockModal from './UnlockModal.jsx';
import StripeModal from './StripeModal.jsx';
import MindsetResults from './MindsetResults.jsx';
import KnowledgeToolsResults from './KnowledgeToolsResults.jsx';
import ProfileSuggestions from './ProfileSuggestions.jsx';
import LinkedInShare from './LinkedInShare.jsx';

export default function ResultsDashboard({ report, unlocked, onUnlock, onReset }) {
  const [showUnlock, setShowUnlock] = useState(false);
  const [showStripe, setShowStripe] = useState(false);

  const { scores, profile, gatedContent } = report;
  const mc = scores.mindset >= 67 ? '#059669' : scores.mindset >= 34 ? '#D97706' : '#DC2626';
  const kc = scores.kt     >= 67 ? '#059669' : scores.kt     >= 34 ? '#D97706' : '#DC2626';

  const handleUnlockClick = () => setShowUnlock(true);
  const handlePay = () => { setShowUnlock(false); setShowStripe(true); };
  const handlePaySuccess = () => { setShowStripe(false); onUnlock(); };

  return (
    <div className="results-wrap">
      {/* Top bar */}
      <div className="results-top-bar">
        <div>
          <div className="results-top-h">Your Innovation Profile</div>
          <div className="results-top-sub">Based on your self-assessment across 16 dimensions</div>
        </div>
        <button className="btn btn-ghost btn-sm" onClick={onReset}>Retake Assessment</button>
      </div>

      {/* Profile hero — full width */}
      <ArchetypeCard report={report} />

      {/* Score mini-cards */}
      <div className="scores-row">
        <div className="score-mini-card">
          <div>
            <div className="score-mini-label">Innovation Mindset</div>
            <div className="score-mini-sub">Growth Mindset, Grit, Creative Collaboration, Flexible Execution</div>
          </div>
          <div className="score-mini-val" style={{ color: mc }}>{scores.mindset}</div>
        </div>
        <div className="score-mini-card">
          <div>
            <div className="score-mini-label">Knowledge & Tools</div>
            <div className="score-mini-sub">Intent, Concepts, Resources, Make it Real</div>
          </div>
          <div className="score-mini-val" style={{ color: kc }}>{scores.kt}</div>
        </div>
      </div>

      {/* LinkedIn share */}
      <LinkedInShare profile={profile} scores={scores} />

      {/* Unlock CTA if not paid */}
      {!unlocked && (
        <div className="unlock-side-cta">
          <div className="usc-icon">🔓</div>
          <h3 className="usc-h">Unlock Your Full Report</h3>
          <p className="usc-p">
            Get your complete Innovation Profile breakdown — drivers, enablers, barriers across all 8 dimensions, plus your personalised GIMI certification path.
          </p>
          <div className="usc-price">$50 · One-time</div>
          <button className="btn btn-primary btn-lg" onClick={handleUnlockClick}
            style={{ minWidth: 220 }}>
            Unlock Full Report →
          </button>
        </div>
      )}

      {/* Gated sections — all single-column, scroll naturally */}
      <BlurredSection unlocked={unlocked} onUnlock={handleUnlockClick} title="Mindset Results">
        {gatedContent && <MindsetResults gatedContent={gatedContent} />}
      </BlurredSection>

      <BlurredSection unlocked={unlocked} onUnlock={handleUnlockClick} title="Knowledge & Tools Results">
        {gatedContent && <KnowledgeToolsResults gatedContent={gatedContent} />}
      </BlurredSection>

      <BlurredSection unlocked={unlocked} onUnlock={handleUnlockClick} title="Journey Map">
        {gatedContent && <ProfileSuggestions gatedContent={gatedContent} profile={profile} />}
      </BlurredSection>

      {/* Modals */}
      {showUnlock && <UnlockModal onPay={handlePay} onClose={() => setShowUnlock(false)} />}
      {showStripe && <StripeModal onSuccess={handlePaySuccess} onClose={() => setShowStripe(false)} />}
    </div>
  );
}
