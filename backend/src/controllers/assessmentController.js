import { scoreAssessment, buildReport, stripGatedContent } from '../services/assessmentService.js';
import { enrichReport } from '../services/claudeService.js';
import { isPaymentConfirmed } from '../services/paymentService.js';

// In-memory store (replace with DB when ready)
const assessments = new Map();

export async function submitAssessment(req, res) {
  try {
    const { answers, userInfo } = req.body;
    if (!answers || answers.length < 16) {
      return res.status(400).json({ error: 'All 16 questions must be answered.' });
    }
    const scored = scoreAssessment(answers);
    let report = buildReport(scored, userInfo || {});
    report = await enrichReport(report);
    assessments.set(report.assessmentId, report);
    // Return stripped version (gated content hidden)
    res.json(stripGatedContent(report));
  } catch (err) {
    console.error('Assessment error:', err);
    res.status(500).json({ error: 'Failed to generate assessment.' });
  }
}

export function getAssessment(req, res) {
  const { id } = req.params;
  const report = assessments.get(id);
  if (!report) return res.status(404).json({ error: 'Assessment not found.' });
  const paid = isPaymentConfirmed(id);
  res.json(paid ? report : stripGatedContent(report));
}
