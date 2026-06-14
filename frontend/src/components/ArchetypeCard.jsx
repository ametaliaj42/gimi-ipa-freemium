import ScoreRing from './ScoreRing.jsx';
import { allProfiles } from '../utils/profiles.js';

export default function ArchetypeCard({ report }) {
  const { profile, scores, userInfo } = report;
  const mindsetColor = scores.mindset >= 67 ? '#059669' : scores.mindset >= 34 ? '#D97706' : '#DC2626';
  const ktColor = scores.kt >= 67 ? '#059669' : scores.kt >= 34 ? '#D97706' : '#DC2626';

  return (
    <div className="archetype-card">
      <div className="archetype-header" style={{background:`linear-gradient(135deg, #041628 0%, ${profile.color}33 100%)`}}>
        <div className="archetype-emoji">{profile.emoji}</div>
        <div className="archetype-header-text">
          {userInfo?.name && <p className="archetype-name-greeting">Hello, {userInfo.name} 👋</p>}
          <h2 className="archetype-profile-name">{profile.name}</h2>
          <p className="archetype-tagline">{profile.tagline}</p>
          {userInfo?.jobTitle && <p className="archetype-role">{userInfo.jobTitle}{userInfo.country ? ` · ${userInfo.country}` : ''}</p>}
        </div>
      </div>

      <div className="archetype-scores">
        <div className="archetype-score-item">
          <ScoreRing score={scores.mindset} size={90} color={mindsetColor} label="Mindset"/>
        </div>
        <div className="archetype-score-divider"/>
        <div className="archetype-score-item">
          <ScoreRing score={scores.kt} size={90} color={ktColor} label="Know. & Tools"/>
        </div>
      </div>

      <div className="archetype-description">
        <p>{profile.description}</p>
      </div>

      <ProfilePlot profile={profile} scores={scores}/>
    </div>
  );
}

function ProfilePlot({ profile, scores }) {
  const W = 280, H = 220;
  const pad = 30;
  const toX = v => pad + (v / 100) * (W - pad*2);
  const toY = v => H - pad - (v / 100) * (H - pad*2);

  return (
    <div className="profile-plot-wrap">
      <p className="plot-label">Your position among the 7 Innovation Profiles</p>
      <svg viewBox={`0 0 ${W} ${H}`} className="profile-plot-svg">
        {/* Axes */}
        <line x1={pad} y1={H-pad} x2={W-pad} y2={H-pad} stroke="#CDD9E8" strokeWidth="1"/>
        <line x1={pad} y1={pad} x2={pad} y2={H-pad} stroke="#CDD9E8" strokeWidth="1"/>
        <text x={W/2} y={H-6} textAnchor="middle" fontSize="9" fill="#7A95AE">Knowledge &amp; Tools →</text>
        <text x={10} y={H/2} textAnchor="middle" fontSize="9" fill="#7A95AE" transform={`rotate(-90 10 ${H/2})`}>Mindset →</text>

        {/* Grid */}
        {[33,67].map(v=>(
          <g key={v}>
            <line x1={toX(v)} y1={pad} x2={toX(v)} y2={H-pad} stroke="#E8EFF8" strokeWidth="1" strokeDasharray="3,3"/>
            <line x1={pad} y1={toY(v)} x2={W-pad} y2={toY(v)} stroke="#E8EFF8" strokeWidth="1" strokeDasharray="3,3"/>
          </g>
        ))}

        {/* Profile dots */}
        {allProfiles.map(p => {
          const px = toX(p.plotX), py = toY(p.plotY);
          const isMe = p.id === profile.id;
          return (
            <g key={p.id}>
              <circle cx={px} cy={py} r={isMe?11:7} fill={isMe?p.color:p.color+'66'} stroke={isMe?p.color:'none'} strokeWidth="2"/>
              <text x={px} y={py+1} textAnchor="middle" dominantBaseline="middle" fontSize={isMe?9:7} fill={isMe?"#fff":"#fff"}>{p.emoji}</text>
            </g>
          );
        })}

        {/* User position indicator */}
        <circle cx={toX(scores.kt)} cy={toY(scores.mindset)} r={14} fill="none" stroke={profile.color} strokeWidth="2.5" strokeDasharray="4,2"/>
      </svg>
    </div>
  );
}
