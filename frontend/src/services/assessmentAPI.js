const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001';
const USE_MOCK = import.meta.env.VITE_USE_MOCK !== 'false';

export async function submitToBackend(answers, userInfo) {
  if (USE_MOCK) return null; // Use frontend scoring only
  try {
    const res = await fetch(`${API_URL}/api/assessment`, {
      method: 'POST', headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ answers, userInfo }),
    });
    if (!res.ok) throw new Error('API error');
    return res.json();
  } catch { return null; } // Fallback to frontend scoring
}

export async function unlockAssessment(assessmentId) {
  if (USE_MOCK) return { success: true };
  try {
    const res = await fetch(`${API_URL}/api/payment/mock-confirm`, {
      method: 'POST', headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ assessmentId }),
    });
    return res.json();
  } catch { return { success: true }; }
}
