import { questions } from '../data/questions.js';
import { determineProfile, profiles } from '../data/profiles.js';

// ─── SCORING ─────────────────────────────────────────────────────────────────
export function scoreAssessment(answers) {
  const scores = {
    mindset: { total: 0, count: 0, subs: { growthMindset: [], grit: [], creativeCollaboration: [], flexibleExecution: [] } },
    knowledge: { total: 0, count: 0, subs: { intent: [], concepts: [], resources: [], makeItReal: [] } },
  };

  answers.forEach(({ questionId, optionIndex }) => {
    const q = questions.find(q => q.id === questionId);
    if (!q) return;
    const score = q.options[optionIndex]?.score ?? 1;
    scores[q.category].total += score;
    scores[q.category].count += 1;
    scores[q.category].subs[q.subcategory].push(score);
  });

  const toPercent = (arr) => arr.length ? Math.round(((arr.reduce((a, b) => a + b, 0) / arr.length - 1) / 4) * 100) : 0;

  const mindsetScore = Math.round(((scores.mindset.total / scores.mindset.count - 1) / 4) * 100);
  const ktScore = Math.round(((scores.knowledge.total / scores.knowledge.count - 1) / 4) * 100);

  return {
    mindsetScore,
    ktScore,
    mindsetSubs: {
      growthMindset: toPercent(scores.mindset.subs.growthMindset),
      grit: toPercent(scores.mindset.subs.grit),
      creativeCollaboration: toPercent(scores.mindset.subs.creativeCollaboration),
      flexibleExecution: toPercent(scores.mindset.subs.flexibleExecution),
    },
    ktSubs: {
      intent: toPercent(scores.knowledge.subs.intent),
      concepts: toPercent(scores.knowledge.subs.concepts),
      resources: toPercent(scores.knowledge.subs.resources),
      makeItReal: toPercent(scores.knowledge.subs.makeItReal),
    },
  };
}

// ─── REPORT BUILDER ──────────────────────────────────────────────────────────
export function buildReport(scored, userInfo) {
  const profile = determineProfile(scored.mindsetScore, scored.ktScore);

  const classifySubScore = (score) => {
    if (score >= 70) return 'driver';
    if (score >= 40) return 'enabler';
    return 'barrier';
  };

  const mindsetClassified = Object.entries(scored.mindsetSubs).map(([key, score]) => ({
    key,
    label: subLabels[key],
    score,
    role: classifySubScore(score),
  }));

  const ktClassified = Object.entries(scored.ktSubs).map(([key, score]) => ({
    key,
    label: subLabels[key],
    score,
    role: classifySubScore(score),
  }));

  return {
    assessmentId: `ipa_${Date.now()}`,
    userInfo,
    scores: {
      mindset: scored.mindsetScore,
      kt: scored.ktScore,
      mindsetSubs: mindsetClassified,
      ktSubs: ktClassified,
    },
    profile: {
      id: profile.id,
      name: profile.name,
      emoji: profile.emoji,
      color: profile.color,
      bgColor: profile.bgColor,
      tagline: profile.tagline,
      description: profile.description,
    },
    gatedContent: {
      mindsetDetail: {
        drivers: mindsetClassified.filter(s => s.role === 'driver'),
        enablers: mindsetClassified.filter(s => s.role === 'enabler'),
        barriers: mindsetClassified.filter(s => s.role === 'barrier'),
        insight: generateMindsetInsight(scored.mindsetSubs, profile),
      },
      ktDetail: {
        drivers: ktClassified.filter(s => s.role === 'driver'),
        enablers: ktClassified.filter(s => s.role === 'enabler'),
        barriers: ktClassified.filter(s => s.role === 'barrier'),
        insight: generateKtInsight(scored.ktSubs, profile),
      },
      suggestions: {
        strengths: profile.strengths,
        suggestions: profile.suggestions,
        gimiLevel: profile.gimiLevel,
        certification: profile.certification,
        investment: profile.investment,
        nextCohort: getNextCohortDate(),
      },
    },
    allProfiles: Object.values(profiles).map(p => ({
      id: p.id, name: p.name, emoji: p.emoji, color: p.color,
      plotX: p.plotX, plotY: p.plotY,
    })),
    userPlot: { x: scored.ktScore, y: scored.mindsetScore },
    createdAt: new Date().toISOString(),
    paymentStatus: 'unpaid',
  };
}

// ─── HELPERS ─────────────────────────────────────────────────────────────────
const subLabels = {
  growthMindset: 'Growth Mindset',
  grit: 'Grit',
  creativeCollaboration: 'Creative Collaboration',
  flexibleExecution: 'Flexible Execution',
  intent: 'Intent',
  concepts: 'Concepts',
  resources: 'Resources',
  makeItReal: 'Make it Real',
};

function generateMindsetInsight(subs, profile) {
  const sorted = Object.entries(subs).sort(([, a], [, b]) => b - a);
  const top = subLabels[sorted[0][0]];
  const bottom = subLabels[sorted[sorted.length - 1][0]];
  return `Your strongest mindset dimension is ${top}, which aligns well with the ${profile.name} profile. Your biggest growth opportunity lies in ${bottom} — developing this will accelerate your innovation impact significantly.`;
}

function generateKtInsight(subs, profile) {
  const sorted = Object.entries(subs).sort(([, a], [, b]) => b - a);
  const top = subLabels[sorted[0][0]];
  const bottom = subLabels[sorted[sorted.length - 1][0]];
  return `Your strongest Knowledge & Tools dimension is ${top}. Focusing on improving ${bottom} will give you the most leverage in moving toward a higher innovation profile.`;
}

function getNextCohortDate() {
  const now = new Date();
  now.setMonth(now.getMonth() + 1);
  now.setDate(15);
  return now.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
}

export function stripGatedContent(report) {
  return {
    ...report,
    gatedContent: null,
  };
}
