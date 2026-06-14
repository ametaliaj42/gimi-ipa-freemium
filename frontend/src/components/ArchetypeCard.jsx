import ScoreRing from './ScoreRing.jsx';
import { allProfiles } from '../utils/profiles.js';

const scoreColor = s => s >= 67 ? '#059669' : s >= 34 ? '#D97706' : '#DC2626';

export default function ArchetypeCard({ report }) {
  const { profile, scores, userInfo } = report;
  const mc = scoreColor(scores.mindset);
  const kc = scoreColor(scores.kt);

  return (
    <div className="profile-hero">
      {/* Banner */}
      <div className="profile-hero-banner"
           style={{ background: `linear-gradient(135deg, #041628 0%, ${profile.color}55 100%)` }}>
        <span className="profile-hero-emoji">{profile.emoji}</span>
        <div className="profile-hero-text">
          {userInfo?.name && <p className="profile-hero-greeting">Hello, {userInfo.name} 👋</p>}
          <h2 className="profile-hero-name">{profile.name}</h2>
          <p className="profile-hero-tagline">{profile.tagline}</p>
          {userInfo?.jobTitle && (
            <p className="profile-hero-role">{userInfo.jobTitle}{userInfo.country ? ` · ${userInfo.country}` : ''}</p>
          )}
        </div>
      </div>

      {/* Score row */}
      <div className="profile-hero-scores">
        <div className="hero-score-item">
          <span className="hero-score-label">Innovation Mindset</span>
          <div className="score-ring-wrap">
            <ScoreRing score={scores.mindset} size={88} color={mc} />
          </div>
        </div>
        <div className="hero-score-item">
          <span className="hero-score-label">Knowledge & Tools</span>
          <div className="score-ring-wrap">
            <ScoreRing score={scores.kt} size={88} color={kc} />
          </div>
        </div>
      </div>

      {/* Description */}
      <div style={{ padding: '18px 24px 20px', borderTop: '1px solid #DDE4EE' }}>
        <p style={{ fontSize: 13, color: '#374B62', lineHeight: 1.65 }}>{profile.description}</p>
      </div>

      {/* Plot */}
      <ProfilePlot profile={profile} scores={scores} />
    </div>
  );
}

function ProfilePlot({ profile, scores }) {
  const W = 300, H = 200, pad = 32;
  const toX = v => pad + (v / 100) * (W - pad * 2);
  const toY = v => H - pad - (v / 100) * (H - pad * 2);

  return (
    <div style={{ padding: '0 20px 20px', borderTop: '1px solid #F0F4F9' }}>
      <p style={{ fontSize: 11, color: '#6B7E95', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '.05em', margin: '14px 0 10px' }}>
        Your position among the 7 Innovation Profiles
      </p>
      <svg viewBox={`0 0 ${W} ${H}`} style={{ width: '100%', background: '#F4F7FB', borderRadius: 10 }}>
        {/* Grid lines */}
        {[33, 67].map(v => (
          <g key={v}>
            <line x1={toX(v)} y1={pad} x2={toX(v)} y2={H - pad} stroke="#DDE4EE" strokeWidth="1" strokeDasharray="3,3" />
            <line x1={pad} y1={toY(v)} x2={W - pad} y2={toY(v)} stroke="#DDE4EE" strokeWidth="1" strokeDasharray="3,3" />
          </g>
        ))}
        {/* Axes */}
        <line x1={pad} y1={H - pad} x2={W - pad} y2={H - pad} stroke="#CDD9E8" strokeWidth="1" />
        <line x1={pad} y1={pad} x2={pad} y2={H - pad} stroke="#CDD9E8" strokeWidth="1" />
        <text x={W / 2} y={H - 8} textAnchor="middle" fontSize="9" fill="#6B7E95">Knowledge &amp; Tools →</text>
        <text x={12} y={H / 2} textAnchor="middle" fontSize="9" fill="#6B7E95" transform={`rotate(-90 12 ${H / 2})`}>Mindset →</text>

        {/* Profile dots */}
        {allProfiles.map(p => {
          const isMe = p.id === profile.id;
          const px = toX(p.plotX), py = toY(p.plotY);
          return (
            <g key={p.id}>
              <circle cx={px} cy={py} r={isMe ? 13 : 9} fill={isMe ? p.color : p.color + '55'} />
              <text x={px} y={py + 1} textAnchor="middle" dominantBaseline="middle" fontSize={isMe ? 10 : 8}>{p.emoji}</text>
            </g>
          );
        })}

        {/* User exact position ring */}
        <circle cx={toX(scores.kt)} cy={toY(scores.mindset)} r={17} fill="none"
          stroke={profile.color} strokeWidth="2.5" strokeDasharray="5,3" opacity=".7" />
      </svg>
    </div>
  );
}
