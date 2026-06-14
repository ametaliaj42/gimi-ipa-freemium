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
  const [showUnlockModal, setShowUnlockModal] = useState(false);
  const [showStripeModal, setShowStripeModal] = useState(false);

  const handleUnlockClick = () => { setShowUnlockModal(true); };
  const handlePay = () => { setShowUnlockModal(false); setShowStripeModal(true); };
  const handlePaySuccess = () => { setShowStripeModal(false); onUnlock(); };

  return (
    <div className="results-screen">
      <div className="results-header">
        <div>
          <h1 className="results-title">Your Innovation Profile</h1>
          <p className="results-subtitle">Based on your self-assessment across 16 dimensions</p>
        </div>
        <button className="btn-ghost-sm" onClick={onReset}>Take Again</button>
      </div>

      <div className="results-grid">
        {/* Left column — always visible */}
        <div className="results-col-left">
          <ArchetypeCard report={report}/>
          <LinkedInShare profile={report.profile} scores={report.scores}/>

          {!unlocked && (
            <div className="results-unlock-sidebar">
              <div className="unlock-sidebar-card">
                <div className="unlock-sidebar-icon">🔓</div>
                <h3>Unlock Full Report</h3>
                <p>Get your complete Innovation Profile with detailed breakdowns, barriers analysis, and your personalised GIMI training journey map.</p>
                <button className="btn-unlock btn-full" onClick={handleUnlockClick}>Unlock for $50 →</button>
              </div>
            </div>
          )}
        </div>

        {/* Right column — gated sections */}
        <div className="results-col-right">
          <BlurredSection unlocked={unlocked} onUnlockClick={handleUnlockClick} title="Mindset">
            {report.gatedContent && <MindsetResults gatedContent={report.gatedContent}/>}
          </BlurredSection>

          <BlurredSection unlocked={unlocked} onUnlockClick={handleUnlockClick} title="Knowledge & Tools">
            {report.gatedContent && <KnowledgeToolsResults gatedContent={report.gatedContent}/>}
          </BlurredSection>

          <BlurredSection unlocked={unlocked} onUnlockClick={handleUnlockClick} title="Suggestions & Journey Map">
            {report.gatedContent && <ProfileSuggestions gatedContent={report.gatedContent} profile={report.profile}/>}
          </BlurredSection>
        </div>
      </div>

      {showUnlockModal && <UnlockModal onPay={handlePay} onClose={()=>setShowUnlockModal(false)}/>}
      {showStripeModal && <StripeModal onSuccess={handlePaySuccess} onClose={()=>setShowStripeModal(false)}/>}
    </div>
  );
}
