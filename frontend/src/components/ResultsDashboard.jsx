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
  const { profile, scores, gatedContent } = report;

  const openUnlock = () => setShowUnlock(true);
  const pay = () => { setShowUnlock(false); setShowStripe(true); };
  const paid = () => { setShowStripe(false); onUnlock(); };

  return (
    <div className="results-page">
      {/* Top bar */}
      <div className="results-topbar">
        <div>
          <div className="results-topbar-h">Your Innovation Profile</div>
          <div className="results-topbar-sub">Scored across 8 dimensions · {new Date().toLocaleDateString('en-GB', { day:'numeric', month:'long', year:'numeric' })}</div>
        </div>
        <button className="btn btn-ghost" onClick={onReset}>Retake</button>
      </div>

      {/* 1. Profile hero — always visible */}
      <ArchetypeCard report={report} />

      {/* 2. Share */}
      <LinkedInShare profile={profile} scores={scores} />

      {/* 3. Unlock CTA — only if not paid */}
      {!unlocked && (
        <div className="unlock-cta-block">
          <div className="ucb-left">
            <div className="ucb-icon">🔓</div>
            <h3 className="ucb-h">Unlock Your Full Report</h3>
            <p className="ucb-p">Get the complete breakdown of all 8 dimensions — drivers, enablers, and barriers — plus your personalised GIMI certification path.</p>
          </div>
          <div className="ucb-right">
            <div className="ucb-price">$50</div>
            <div className="ucb-note">One-time · Instant access</div>
            <button className="btn btn-teal btn-lg" onClick={openUnlock}>Unlock Now →</button>
          </div>
        </div>
      )}

      {/* 4. Gated sections — stacked single column, scroll naturally */}
      <BlurredSection unlocked={unlocked} onUnlock={openUnlock} title="Mindset Results">
        {gatedContent && <MindsetResults gatedContent={gatedContent} />}
      </BlurredSection>

      <BlurredSection unlocked={unlocked} onUnlock={openUnlock} title="Knowledge & Tools Results">
        {gatedContent && <KnowledgeToolsResults gatedContent={gatedContent} />}
      </BlurredSection>

      <BlurredSection unlocked={unlocked} onUnlock={openUnlock} title="Journey Map">
        {gatedContent && <ProfileSuggestions gatedContent={gatedContent} profile={profile} />}
      </BlurredSection>

      {showUnlock && <UnlockModal onPay={pay} onClose={() => setShowUnlock(false)} />}
      {showStripe && <StripeModal onSuccess={paid} onClose={() => setShowStripe(false)} />}
    </div>
  );
}
