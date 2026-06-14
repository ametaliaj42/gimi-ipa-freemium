# WORKFLOW SKILL — IPA ASSESSMENT & CONVERSION FUNNEL

## 1. THE 7-QUESTION ASSESSMENT MATRIX

### Question 1: Strategic Vision Clarity
**Question:** "When your organization faces a disruptive market threat, what is your immediate response?"
**Options:**
- (a) Assess threats analytically with cross-functional data
- (b) Build consensus across departments first
- (c) Pilot solutions quickly to test market response
- (d) Wait for leadership signal before acting

**Scoring:** a=20, b=10, c=15, d=5
**Measures:** Proactivity, decisiveness, risk tolerance
**If Low:** Needs GIMI Level 2 (Strategic Thinking module)

---

### Question 2: Cross-Functional Collaboration
**Question:** "How do you align R&D, Sales, Operations, and Finance on innovation initiatives?"
**Options:**
- (a) Formal steering committees with documented decisions
- (b) Quarterly business reviews with shared scorecards
- (c) Ad-hoc conversations and informal alignment
- (d) Haven't needed formal alignment yet

**Scoring:** a=20, b=15, c=8, d=2
**Measures:** Organizational maturity, process discipline
**If Low:** Needs GIMI Level 1 (Foundational collaboration)

---

### Question 3: Metrics & Accountability
**Question:** "How do you measure innovation pipeline health in your organization?"
**Options:**
- (a) ISO 56002 KPIs (Stage-Gate, Time-to-Market, Portfolio metrics)
- (b) Custom internal dashboards and scorecards
- (c) Anecdotal feedback from innovation teams
- (d) Don't currently measure innovation formally

**Scoring:** a=20, b=12, c=6, d=1
**Measures:** Maturity in measurement, ISO 56002 familiarity
**If Low:** Needs GIMI Level 1-2 (Metrics module)

---

### Question 4: Portfolio Management
**Question:** "How do you allocate innovation investment across Horizon 1 (core), Horizon 2 (adjacent), and Horizon 3 (transformative)?"
**Options:**
- (a) Structured multi-horizon model with formal governance
- (b) Approximate 70-20-10 split but fluid reallocation
- (c) Organic allocation based on team interest and capacity
- (d) Concentrated on core business; limited adjacent/transformative

**Scoring:** a=20, b=15, c=8, d=3
**Measures:** Strategic portfolio discipline, future-focused thinking
**If Low:** Needs GIMI Level 3 (Portfolio Leadership)

---

### Question 5: External Ecosystem Engagement
**Question:** "How do you identify and partner with external innovation partners (startups, universities, vendors)?"
**Options:**
- (a) Systematic partner vetting with innovation strategy alignment
- (b) Active university relationships; some vendor partnerships
- (c) Vendor introductions or occasional startup meetings
- (d) Don't actively pursue external partnerships

**Scoring:** a=20, b=15, c=8, d=2
**Measures:** Ecosystem maturity, external awareness
**If Low:** Needs GIMI Level 3 (Ecosystem & Partnerships)

---

### Question 6: Failure Tolerance & Learning
**Question:** "When an innovation initiative fails, what typically happens?"
**Options:**
- (a) Structured post-mortem with organizational learning disseminated
- (b) Team members learn individually; some insights shared
- (c) Project gets shelved and team moves to next initiative
- (d) There are executive consequences for failed projects

**Scoring:** a=20, b=12, c=6, d=1
**Measures:** Learning culture, psychological safety, iteration mindset
**If Low:** Needs GIMI Level 2 (Culture & Mindset)

---

### Question 7: Personal Innovation Leadership Style
**Question:** "Which best describes your innovation leadership approach?"
**Options:**
- (a) Systems thinker + hands-on execution (both strategy and delivery)
- (b) Visionary big-picture thinker but delegate execution
- (c) Hands-on problem solver, navigate as we go
- (d) Process-oriented risk manager, prefer proven playbooks

**Scoring:** a=20, b=14, c=10, d=5
**Measures:** Personal archetype, self-awareness
**If Low:** Needs GIMI Level 1-2 (Mindset foundational work)

---

## 2. ARCHETYPE SCORING & MAPPING

### Score Ranges & Archetypes

| Score | Archetype | Characteristics | GIMI Level Recommended | Upsell Focus |
|-------|-----------|-----------------|----------------------|--------------|
| **80-100** | Visionary Executor | Strategy + Execution + Measurement Strong | Level 3-4 Master + CCIO | Chief Innovation Officer Program ($3,999) |
| **60-79** | Strategic Organizer | Structure strong, experimentation weak | Level 2-3 Master | Portfolio Certification Track |
| **50-59** | Agile Experimenter | Pilot strong, measurement weak | Level 1-2 Proficient | CIP Associate + Metrics module |
| **40-49** | Consensus Builder | Alignment strong, decision velocity weak | Level 1-2 | CIP Associate + Decision-Making |
| **<40** | Risk Manager | Process-focused, innovation-averse | Level 1 Proficient | IMI Assessment first, then Level 1 |

---

## 3. PSYCHOLOGICAL HOOKS (THE BLURRED SECTIONS)

### Hook Strategy: 3-Layer Escalation

#### Layer 1: The Free Tier (Visible)
User sees:
- ✅ Flattering archetype name
- ✅ One core strength highlighted
- ✅ **Vague hint** of their gap (not specific)
- ✅ CTA: "Unlock [Specific Data] for $50"

**Example:**
"You are a **Consensus Builder** — your strength is aligning stakeholders. However, you have a critical operational blind spot that typically stalls promotions to VP within 3.5 years. [BLUR] Unlock the specific blind spot + salary premium for $50."

#### Layer 2: The Gated Tier (Behind $50 Paywall)
User sees (after payment):
- ✅ **Exact blind spot** (e.g., "You avoid disagreement in high-pressure decisions")
- ✅ **Specific business impact** (e.g., "Costs 2-4 weeks per cycle in organizations >500 people")
- ✅ **3-step mitigation** with timeline
- ✅ **Exact salary premium** (e.g., "$47,000-$63,000 regional premium")
- ✅ **Target job titles** actively hiring (e.g., "VP Innovation", "Director, Strategic Planning")

#### Layer 3: The Cohort Upsell (Behind Gated Content)
User sees (after payment):
- ✅ **Next GIMI cohort start date** + limited seats
- ✅ **Specific module** that solves their gap (e.g., "Decision Leadership Under Uncertainty")
- ✅ **Investment required** ($499-$3,999/month)
- ✅ **Graduate outcomes** (e.g., "87% report measurable capability uplift within 90 days")

---

## 4. PAYMENT FLOW & SECURITY

### Frontend-to-Backend Flow

```
User Completes Assessment (7 questions)
           ↓
Frontend sends to backend: { userId, answers[], confidence[] }
           ↓
Backend: Claude Agent generates assessment + all 3 tiers
           ↓
Backend checks: payment_status = unpaid?
           ├─ YES → Strip gated_tier, return free_tier + dummy placeholders
           └─ NO  → Return full assessment with gated_tier unlocked
           ↓
Frontend receives JSON
           ├─ If unpaid → Renders blurred sections (CSS cosmetic)
           └─ If paid   → Renders all sections unblurred
           ↓
User sees:
 - Free tier always visible
 - Gated tier blurred (unpaid) or visible (paid)
 - Stripe modal overlay on blurred section
           ↓
User clicks "Unlock for $50"
           ↓
Stripe modal → Payment processing
           ↓
Payment success → Backend updates payment_status to PAID
           ↓
Frontend refreshes → Calls backend again with updated status
           ↓
Backend returns full unblurred assessment
           ↓
Frontend removes blur, reveals gated content
```

---

## 5. CONVERSION MOMENTS (The 4 Pushes)

### Conversion Point 1: End of Free Assessment
**Trigger:** User completes 7 questions
**Action:** Immediate "You are a [Archetype]!" celebration
**CTA:** "See your hidden career blind spot ($50) →"
**Conversion Rate Target:** 8-12%

### Conversion Point 2: LinkedIn Share Button
**Trigger:** Assessment complete
**Action:** "Share your profile badge on LinkedIn — only 7% of professionals have completed this assessment"
**CTA:** "Share on LinkedIn" (with dynamic image)
**Purpose:** Viral loop + FOMO

### Conversion Point 3: The Blur Hover
**Trigger:** User hovers over blurred salary/blind spot text
**Action:** "Unlock Your Career Ceiling Analysis" micro-modal
**CTA:** "Pay $50" or "Create account to save results"
**Conversion Rate Target:** 5-8% (from hoverers)

### Conversion Point 4: The Cohort CTA
**Trigger:** User unlocks ($50 paid) and reads gated tier
**Action:** Countdown timer to next cohort start (if <30 days)
**CTA:** "Reserve Your Seat in [Cohort Name]" (links to $499-$3,999 checkout)
**Conversion Rate Target:** 15-25% (from $50 payers → cohort buyers)

---

## 6. REGIONAL SALARY PREMIUM DATA

Use this framework (update annually):

| Region | Industry | Current Avg | Premium (Closed Gap) | Premium % |
|--------|----------|-------------|---------------------|-----------|
| **USA** | Tech | $145K | +$58K | +40% |
| **USA** | Finance | $135K | +$47K | +35% |
| **USA** | Healthcare | $125K | +$42K | +33% |
| **EU** | Tech | €95K | +€38K | +40% |
| **APAC** | Tech | $85K | +$32K | +38% |
| **LATAM** | Tech | $55K | +$18K | +33% |

**Rule:** Always show range (low-high). Gated content reveals exact regional premium.

---

## 7. COHORT UPSELL MAPPING

| Archetype | Critical Gap | Recommended Level | Module Focus | Investment |
|-----------|-------------|------------------|--------------|-----------|
| Visionary Executor | Rare; focus on retention | L3-4 Master | Advanced Portfolio | $1,699-$1,999 |
| Strategic Organizer | Experimentation speed | L2-3 Master | Agile Innovation | $899-$1,099 |
| Agile Experimenter | Measurement rigor | L1-2 Proficient | ISO 56002 Metrics | $499-$699 |
| Consensus Builder | Decision velocity | L1-2 Master | Decision Leadership | $599-$899 |
| Risk Manager | Mindset shift | IMI + L1 | Innovation Mindset Index | $99 + $499 |

---

## 8. LINKEDIN VIRALITY LOOP

### Badge System
After assessment, user gets dynamic badge:
- **Visionary Executor** 🚀 (80-100)
- **Strategic Organizer** 📊 (60-79)
- **Agile Experimenter** ⚡ (50-59)
- **Consensus Builder** 🤝 (40-49)
- **Risk Manager** 🛡️ (<40)

### Share Template
"Just completed my GIMI Innovation Profile Assessment. I'm a [Archetype] — scored [Score]/100 on strategic vision, cross-functional collaboration, and portfolio management. 

Where do you score? [Link to Assessment]

#Innovation #LeadershipDevelopment #GIMI"

### Viral Incentive
- First 500 users share → 10% discount code for $50 unlock
- Creates FOMO + social proof

---

## 9. RETENTION LOOP (Post-$50)

After $50 unlock:
1. Email: "You are [X] away from [Next Cohort]"
2. SMS (opt-in): "Limited seats remaining in [Cohort Name]"
3. Retargeting ad: "87% of Level 2 graduates report measurable uplift"
4. Slack integration (optional): "Your [Cohort] starts in 7 days"

**Goal:** 15-25% of $50 payers convert to $499-$3,999 cohort.

---

**Total Conversion Funnel:**
```
100 Users → 8-12 Pay $50 ($400-$600 revenue)
         → 2-3 Enroll in Cohort ($1,000-$4,500 additional revenue)
         → Total: $1,400-$5,100 per 100 users
```
