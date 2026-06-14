// ─────────────────────────────────────────────────────────────────────────────
// CLAUDE SERVICE — currently returns mock data
// To enable real Claude: set ANTHROPIC_API_KEY in .env and set ENABLE_CLAUDE=true
// ─────────────────────────────────────────────────────────────────────────────

// import Anthropic from '@anthropic-ai/sdk';
// const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

const ENABLED = process.env.ENABLE_CLAUDE === 'true';

export async function enrichReport(report) {
  if (!ENABLED) return mockEnrichment(report);

  // ── REAL CLAUDE INTEGRATION (uncomment when ready) ──────────────────────────
  // const prompt = buildPrompt(report);
  // const response = await client.messages.create({
  //   model: 'claude-sonnet-4-6',
  //   max_tokens: 2000,
  //   system: IPA_SYSTEM_PROMPT,
  //   messages: [{ role: 'user', content: prompt }],
  // });
  // return JSON.parse(response.content[0].text);
}

function mockEnrichment(report) {
  // Returns the report as-is — the assessmentService already builds full report
  return report;
}

// const IPA_SYSTEM_PROMPT = `[Paste IPA_SYSTEM_PROMPT.md content here when enabling]`;
// function buildPrompt(report) {
//   return `Generate enriched insights for: ${JSON.stringify(report)}`;
// }
