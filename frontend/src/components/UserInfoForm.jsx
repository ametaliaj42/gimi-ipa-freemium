import { useState } from 'react';

const industries = [
  'Technology','Finance & Banking','Healthcare & Life Sciences','Manufacturing',
  'Energy & Utilities','Education','Retail & Consumer Goods','Professional Services',
  'Government & Public Sector','Media & Entertainment','Other',
];
const seniorities = [
  'Individual Contributor','Team Lead','Manager',
  'Senior Manager / Director','VP / C-Suite','Founder / Entrepreneur',
];

export default function UserInfoForm({ onSubmit }) {
  const [form, setForm] = useState({ name: '', jobTitle: '', industry: '', country: '', seniority: '' });
  const set = (k, v) => setForm(p => ({ ...p, [k]: v }));
  const valid = form.jobTitle && form.industry && form.country && form.seniority;

  return (
    <div className="form-wrap">
      <div className="form-card">
        <p className="form-card-eyebrow">Step 1 of 2</p>
        <h2 className="form-card-h">A bit about you</h2>
        <p className="form-card-sub">This personalises your Innovation Profile report. Fields marked * are required.</p>

        <div className="form-fields">
          <div className="field">
            <label>First Name</label>
            <input type="text" placeholder="e.g. Arjola" value={form.name} onChange={e => set('name', e.target.value)} />
          </div>

          <div className="field">
            <label>Job Title <span className="field-req">*</span></label>
            <input type="text" placeholder="e.g. Innovation Manager" value={form.jobTitle} onChange={e => set('jobTitle', e.target.value)} />
          </div>

          <div className="form-row">
            <div className="field">
              <label>Industry <span className="field-req">*</span></label>
              <select value={form.industry} onChange={e => set('industry', e.target.value)}>
                <option value="">Select…</option>
                {industries.map(i => <option key={i}>{i}</option>)}
              </select>
            </div>
            <div className="field">
              <label>Country <span className="field-req">*</span></label>
              <input type="text" placeholder="e.g. Albania" value={form.country} onChange={e => set('country', e.target.value)} />
            </div>
          </div>

          <div className="field">
            <label>Seniority Level <span className="field-req">*</span></label>
            <select value={form.seniority} onChange={e => set('seniority', e.target.value)}>
              <option value="">Select…</option>
              {seniorities.map(s => <option key={s}>{s}</option>)}
            </select>
          </div>
        </div>

        <button className="btn btn-primary btn-full" style={{ height: 52 }} disabled={!valid} onClick={() => onSubmit(form)}>
          Start Assessment →
        </button>
        <p className="form-privacy">🔒 Your information is used only to personalise your report and is never shared.</p>
      </div>
    </div>
  );
}
