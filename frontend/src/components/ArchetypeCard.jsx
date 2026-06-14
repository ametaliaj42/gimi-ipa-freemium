import { allProfiles } from '../utils/profiles.js';

const sc = s => s >= 67 ? '#059669' : s >= 34 ? '#D97706' : '#DC2626';

export default function ArchetypeCard({ report }) {
  const { profile, scores, userInfo } = report;
  const mc = sc(scores.mindset), kc = sc(scores.kt);

  return (
    <div className="profile-hero">
      {/* Banner */}
      <div className="profile-hero-top" style={{ background: `linear-gradient(135deg, #041628 0%, ${profile.color}44 100%)` }}>
        <span className="hero-emoji">{profile.emoji}</span>
        <div className="hero-text">
          {userInfo?.name && <p className="hero-greeting">Hello, {userInfo.name} 👋</p>}
          <h2 className="hero-name">{profile.name}</h2>
          <p className="hero-tagline">{profile.tagline}</p>
          {userInfo?.jobTitle && <p className="hero-role">{userInfo.jobTitle}{userInfo.country ? ` · ${userInfo.country}` : ''}</p>}
        </div>
      </div>

      {/* Description */}
      <div className="profile-hero-desc">{profile.description}</div>

      {/* Scores */}
      <div className="profile-hero-scores">
        <div className="hero-score-col">
          <div>
            <div className="hsc-label">Innovation Mindset</div>
            <div className="hsc-num" style={{ color: mc }}>{scores.mindset}</div>
            <div className="hsc-sub">out of 100</div>
          </div>
        </div>
        <div className="hero-score-col">
          <div>
            <div className="hsc-label">Knowledge & Tools</div>
            <div className="hsc-num" style={{ color: kc }}>{scores.kt}</div>
            <div className="hsc-sub">out of 100</div>
          </div>
        </div>
      </div>

      {/* 2D Plot */}
      <div className="profile-plot-wrap">
        <p className="plot-title">Your position among the 7 Innovation Profiles</p>
        <Plot profile={profile} scores={scores} />
      </div>
    </div>
  );
}

function Plot({ profile, scores }) {
  const W = 340, H = 200, P = 32;
  const tx = v => P + (v / 100) * (W - P * 2);
  const ty = v => H - P - (v / 100) * (H - P * 2);
  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="plot-svg">
      {[33, 67].map(v => (
        <g key={v}>
          <line x1={tx(v)} y1={P} x2={tx(v)} y2={H - P} stroke="#DDE4EE" strokeWidth="1" strokeDasharray="3,3"/>
          <line x1={P} y1={ty(v)} x2={W - P} y2={ty(v)} stroke="#DDE4EE" strokeWidth="1" strokeDasharray="3,3"/>
        </g>
      ))}
      <line x1={P} y1={H-P} x2={W-P} y2={H-P} stroke="#C8D4E0" strokeWidth="1"/>
      <line x1={P} y1={P}   x2={P}   y2={H-P} stroke="#C8D4E0" strokeWidth="1"/>
      <text x={W/2} y={H-6} textAnchor="middle" fontSize="9" fill="#7A92A8">Knowledge &amp; Tools →</text>
      <text x={12} y={H/2} textAnchor="middle" fontSize="9" fill="#7A92A8" transform={`rotate(-90 12 ${H/2})`}>Mindset →</text>
      {allProfiles.map(p => {
        const isMe = p.id === profile.id;
        const px = tx(p.plotX), py = ty(p.plotY);
        return (
          <g key={p.id}>
            <circle cx={px} cy={py} r={isMe ? 14 : 10} fill={isMe ? p.color : p.color + '44'}/>
            <text x={px} y={py+1} textAnchor="middle" dominantBaseline="middle" fontSize={isMe ? 10 : 8}>{p.emoji}</text>
          </g>
        );
      })}
      <circle cx={tx(scores.kt)} cy={ty(scores.mindset)} r={19} fill="none" stroke={profile.color} strokeWidth="2" strokeDasharray="4,3" opacity=".6"/>
    </svg>
  );
}
