# REPORT SKILL — IPA ASSESSMENT RESULT RENDERING

## 1. UI STRUCTURE

### Welcome Screen → Quiz → Dashboard Flow

#### Screen 1: Welcome/Splash
```
┌─────────────────────────────────────┐
│                                     │
│   Discover Your Innovation Profile  │
│   in 45 Seconds (Free)              │
│                                     │
│   Understand your blind spots →     │
│   Compare to Fortune 500 CIOs →     │
│   Unlock your salary premium →      │
│                                     │
│   [Start Assessment] button          │
│                                     │
│   "takes 2 min • no email needed"   │
│   (builds FOMO: limited time)       │
│                                     │
└─────────────────────────────────────┘
```

#### Screen 2: Quiz Interface
```
┌─────────────────────────────────────┐
│  Question 1/7                       │
│  ████████░ Progress Bar             │
│                                     │
│  "When your organization faces      │
│   a disruptive market threat..."    │
│                                     │
│  ○ Option A                         │
│  ○ Option B (selected)              │
│  ○ Option C                         │
│  ○ Option D                         │
│                                     │
│  [Back] [Next] buttons              │
│                                     │
│  "Confidence: ☆☆☆☆☆" slider       │
│                                     │
└─────────────────────────────────────┘
```

#### Screen 3: Assessment Complete (Loading)
```
┌─────────────────────────────────────┐
│                                     │
│   ✓ Assessment Complete             │
│                                     │
│   Analyzing your responses...       │
│   Generating your innovation        │
│   profile (10-15 sec)...            │
│                                     │
│   [Animated spinner]                │
│                                     │
└─────────────────────────────────────┘
```

#### Screen 4: Dashboard (Main Result View)
```
┌────────────────────────────────────────┐
│  [Your Profile] [Results] [Share]      │ (Tabs)
├────────────────────────────────────────┤
│                                        │
│  🚀 You are a VISIONARY EXECUTOR      │
│  Score: 84/100                        │
│                                        │
├────────────────────────────────────────┤
│                                        │
│  YOUR CORE STRENGTH                   │
│  ─────────────────────────────────────│
│  You combine strategic vision with    │
│  execution rigor. You drive           │
│  organizational change.               │
│                                        │
├────────────────────────────────────────┤
│                                        │
│  YOUR HIDDEN BLIND SPOT               │
│  ─────────────────────────────────────│
│  [BLURRED TEXT]                       │
│  You avoid delegating portfolio       │
│  decisions, creating bottlenecks      │
│  in executive decision-making.        │
│                                        │
│  [🔓 Unlock Full Analysis – $50]      │
│                                        │
├────────────────────────────────────────┤
│  FORTUNE 500 COMPARISON               │
│  ─────────────────────────────────────│
│  Your style matches 89% of            │
│  [BLURRED: C-suite innovation         │
│   leaders globally]                   │
│                                        │
│  [🔓 Unlock Peer Benchmarking – $50]  │
│                                        │
├────────────────────────────────────────┤
│  SALARY PREMIUM (REGIONAL)            │
│  ─────────────────────────────────────│
│  Professionals with your profile      │
│  in [Your Region] who close this      │
│  gap earn [BLURRED: $58K-$89K] more  │
│                                        │
│  [🔓 Unlock Career Path – $50]        │
│                                        │
├────────────────────────────────────────┤
│                                        │
│  [Share on LinkedIn] [Unlock All]     │ (CTAs)
│                                        │
└────────────────────────────────────────┘
```

---

## 2. CSS BLUR IMPLEMENTATION (Cosmetic Layer)

### Key: Blur is COSMETIC ONLY
The real gating happens on the backend. CSS blur is just what the user sees while unpaid.

```css
/* Blurred text block (free tier) */
.gated-content-locked {
  filter: blur(8px);
  user-select: none;
  pointer-events: none;
  opacity: 0.7;
  transition: filter 0.3s ease-out;
}

/* Overlay CTA positioned on blur */
.unlock-modal-overlay {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 10;
  background: rgba(255, 255, 255, 0.95);
  padding: 24px;
  border-radius: 12px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.15);
}

.unlock-modal-overlay h3 {
  margin: 0 0 8px 0;
  font-size: 16px;
  font-weight: 700;
  color: #041628;
}

.unlock-modal-overlay p {
  margin: 0 0 16px 0;
  font-size: 13px;
  color: #7A95AE;
  line-height: 1.5;
}

.unlock-button {
  background: linear-gradient(135deg, #00ACC1, #008A9A);
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 8px;
  font-weight: 600;
  font-size: 14px;
  cursor: pointer;
  width: 100%;
  transition: all 0.2s ease;
}

.unlock-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 16px rgba(0, 172, 193, 0.3);
}

/* After unlock (paid) */
.gated-content-unlocked {
  filter: none;
  user-select: text;
  pointer-events: auto;
  opacity: 1;
}
```

### On Hover Behavior
```css
.gated-section:hover .unlock-modal-overlay {
  animation: pulse 0.5s ease-in-out;
}

@keyframes pulse {
  0%, 100% { transform: translate(-50%, -50%) scale(1); }
  50% { transform: translate(-50%, -50%) scale(1.05); }
}
```

---

## 3. STRIPE MODAL INTEGRATION

### Payment Modal (Appears on "Unlock" Click)

```jsx
<StripeModalOverlay>
  <div className="stripe-modal">
    <h2>Unlock Your Career Analysis</h2>
    
    <div className="modal-benefits">
      <div>✓ Exact career blind spot</div>
      <div>✓ 3-step mitigation strategy</div>
      <div>✓ Regional salary premium ($47K-$89K)</div>
      <div>✓ Target job titles & next cohort</div>
    </div>
    
    <StripePaymentElement />
    
    <button className="pay-button">Pay $50</button>
    
    <p className="secure-note">
      Secure payment via Stripe. Your data is never shared.
    </p>
  </div>
</StripeModalOverlay>
```

### Post-Payment Success Flow
```
1. Stripe webhook → Backend updates: payment_status = PAID
2. Frontend receives payment confirmation
3. Modal closes
4. Page refreshes / API call to fetch full assessment
5. Backend now returns gated_tier data (not stripped)
6. Frontend removes CSS blur class
7. User sees all content unblurred
8. New CTA appears: "Enroll in Next GIMI Cohort → $499/month"
```

---

## 4. RESULT CARDS STRUCTURE

### Card 1: Archetype Profile
```
┌─────────────────────────────────────┐
│  [Icon: 🚀]                         │
│  VISIONARY EXECUTOR                 │
│  Score: 84/100 · Confidence: 92%    │
│                                     │
│  "You combine strategic vision with │
│   execution rigor. 12% of           │
│   professionals score in your       │
│   range."                           │
│                                     │
│  Strength: Strategy + Execution     │
│  Opportunity: Delegation            │
└─────────────────────────────────────┘
```

### Card 2: Career Ceiling Blind Spot (GATED)
```
┌─────────────────────────────────────┐
│  YOUR HIDDEN CAREER CEILING         │
│  ─────────────────────────────────  │
│                                     │
│  [BLUR: "You avoid delegating..."]  │
│                                     │
│  Impact Level: CRITICAL             │
│  Typical Consequence: Stalls        │
│  promotions to VP within 3.5 years  │
│                                     │
│  [🔓 Unlock Analysis – $50]         │
│                                     │
└─────────────────────────────────────┘
```

### Card 3: Salary Premium (GATED)
```
┌─────────────────────────────────────┐
│  REGIONAL SALARY IMPACT             │
│  ─────────────────────────────────  │
│                                     │
│  Your region: [User's Country]      │
│  Your industry: [User's Industry]   │
│  Your experience: [User's Level]    │
│                                     │
│  Current avg for your profile:      │
│  $125,000                           │
│                                     │
│  With skill gap closed:             │
│  [BLUR: $183,000] (+47%)            │
│                                     │
│  Target roles: [BLUR]               │
│                                     │
│  [🔓 See Exact Premium – $50]       │
│                                     │
└─────────────────────────────────────┘
```

### Card 4: Fortune 500 Comparison (GATED)
```
┌─────────────────────────────────────┐
│  PEER BENCHMARKING                  │
│  ─────────────────────────────────  │
│                                     │
│  Your style matches 89% of          │
│  [BLUR: Fortune 500 Chief           │
│   Innovation Officers]              │
│                                     │
│  However, they score higher on:     │
│  [BLUR: ISO 56002 Clause 4.3.2]     │
│                                     │
│  That's in GIMI's:                  │
│  [BLUR: "Strategic Portfolio        │
│   Leadership" module]               │
│                                     │
│  Next cohort: [BLUR: Jan 15]        │
│                                     │
│  [🔓 See Full Benchmark – $50]      │
│                                     │
└─────────────────────────────────────┘
```

---

## 5. LINKEDIN SHARE CARD

After assessment, display:

```
┌─────────────────────────────────────┐
│  Share Your Profile                 │
│                                     │
│  [PREVIEW OF LINKEDIN POST]         │
│  ┌─────────────────────────────┐   │
│  │ 🚀 Visionary Executor       │   │
│  │ Score: 84/100               │   │
│  │                             │   │
│  │ Just completed my GIMI      │   │
│  │ Innovation Profile. Where   │   │
│  │ do you score?               │   │
│  │ [LINK TO ASSESSMENT]        │   │
│  │                             │   │
│  │ #Innovation #Leadership     │   │
│  └─────────────────────────────┘   │
│                                     │
│  [Share on LinkedIn] button         │
│  [Copy Link] button                 │
│                                     │
│  "Getting viral: [N] people shared  │
│   their profile today"              │
│                                     │
└─────────────────────────────────────┘
```

---

## 6. RENDERING RULES (CRITICAL)

### Rule 1: Free Tier Always Visible
- Archetype name + score + confidence
- One strength + one opportunity (vague)
- CTA buttons to unlock

### Rule 2: Gated Content Shows [BLUR]
- If `payment_status = unpaid`:
  - Show blurred text with CSS filter
  - Show "Unlock for $50" modal on hover/click
  - Backend returns dummy data: `{ "value": "[LOCKED]" }`

- If `payment_status = paid`:
  - Remove CSS blur class
  - Reveal all text
  - Backend returns actual data

### Rule 3: Stripe Modal
- Only appears on unlock click
- Does NOT appear if already paid
- Does NOT appear for free content

### Rule 4: Cohort CTA
- **Before payment:** Hidden
- **After payment:** Prominent (countdown timer if <30 days to next start)
- **Never in free tier:** Never mention cohort until gated content revealed

---

## 7. MOBILE RESPONSIVENESS

### Mobile View (< 768px)
```
- Archetype card: Full width, centered
- Gated cards: Stack vertically
- Blur sections: Slightly increased filter (blur: 10px)
- Modal: Full-screen overlay with bottom-sheet styling
- Stripe form: Optimized for mobile tap
- Share button: Larger tap target (48px minimum)
```

### Desktop View (≥ 768px)
```
- Archetype card: Left sidebar (30% width)
- Gated cards: Right column (70% width)
- Blur sections: Standard filter (blur: 8px)
- Modal: Centered overlay
- Stripe form: Standard layout
```

---

## 8. ANIMATION & MICRO-INTERACTIONS

### On Assessment Complete
```
1. Loading spinner fades out (200ms)
2. Archetype card slides in from left (400ms, ease-out)
3. Score number animates 0 → final (800ms, easing)
4. Strength card fades in (300ms)
5. Gated cards fade in sequentially (200ms stagger)
```

### On Blur Hover
```
1. Unlock modal scales in (200ms)
2. Background blur increases (blur: 8px → 12px)
3. Unlock button pulses
```

### On Unlock Click
```
1. Stripe modal slides up (300ms)
2. Modal has slight bounce on entry
3. Overlay opacity animates (0 → 0.5)
```

### On Payment Success
```
1. Success checkmark animation (500ms)
2. Modal fades out (200ms)
3. Page content blur removes (400ms)
4. Gated text fades in (300ms, sequential)
5. Confetti animation (optional, subtle)
```

---

## 9. ACCESSIBILITY

```
- All blur/unlock interactions keyboard-accessible (Tab navigation)
- Modal has proper ARIA labels
- Stripe form is screen-reader friendly
- Color contrast >= 4.5:1 throughout
- Focus indicators visible and prominent
- Blur effect has fallback text for screen readers: "This content is locked. [Unlock button]"
```

---

## 10. VALIDATION CHECKLIST

Before rendering:
- [ ] Free tier completely visible (no blur)
- [ ] Gated sections blurred if unpaid
- [ ] Unlock buttons functional and findable
- [ ] Stripe modal opens on button click
- [ ] Backend returns different data for unpaid vs. paid users
- [ ] CSS blur is cosmetic (real security is backend)
- [ ] Mobile responsive (test on iPhone SE, iPad, desktop)
- [ ] LinkedIn share button pre-fills correctly
- [ ] Cohort CTA only shows after unlock
- [ ] Countdown timer accurate if <30 days to cohort start
