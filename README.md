# GIMI IPA — Innovation Potential Assessment

Freemium individual assessment platform identifying which of 7 Innovation Profiles you are.

## Quick Start

```bash
# Frontend (standalone — works without backend)
cd frontend
npm install
npm run dev
# Open http://localhost:5173

# Backend (optional — needed for Stripe/Claude)
cd backend
npm install
npm run dev
```

## How It Works

1. User takes 16-question assessment (Mindset + Knowledge & Tools)
2. Scores map to 1 of 7 Innovation Profiles
3. Free: Profile name, scores, 2D plot
4. Gated ($50): Detailed breakdowns, barriers, training path

## 7 Innovation Profiles

| Profile | Mindset | K&T |
|---------|---------|-----|
| 👑 Rule Maker | High | High |
| ⚡ Rule Breaker | High | Medium |
| 🚀 Rule Challenger | High | Low |
| 💎 Diamond in the Rough | Medium | Low–Med |
| ⚙️ Optimistic Executor | Medium | High |
| 📋 Rule Executor | Low | High |
| 📌 Rule Follower | Low | Low |

## Integrations (Ready to Enable)

**Real Stripe:** Set `ENABLE_STRIPE=true` in backend `.env` + add `STRIPE_SECRET_KEY`

**Real Claude:** Set `ENABLE_CLAUDE=true` in backend `.env` + add `ANTHROPIC_API_KEY`

## Deploy

**Frontend → GitHub Pages:** Push to main, GitHub Actions auto-deploys

**Backend → Heroku/Railway:** Set env vars, push backend folder
