import { useState } from 'react';

const industries = ['Technology','Finance & Banking','Healthcare & Life Sciences','Manufacturing','Energy & Utilities','Education','Retail & Consumer Goods','Professional Services','Government & Public Sector','Media & Entertainment','Other'];
const seniorities = ['Individual Contributor','Team Lead','Manager','Senior Manager / Director','VP / C-Suite','Founder / Entrepreneur'];

export default function UserInfoForm({ onSubmit }) {
  const [form, setForm] = useState({ name:'', jobTitle:'', industry:'', country:'', seniority:'' });
  const set = (k,v) => setForm(p=>({...p,[k]:v}));
  const valid = form.jobTitle && form.industry && form.country && form.seniority;

  return (
    <div className="form-screen">
      <div className="form-card">
        <h2 className="form-title">Tell us about yourself</h2>
        <p className="form-subtitle">This helps us personalise your Innovation Profile report.</p>

        <div className="form-fields">
          <div className="form-field">
            <label>First Name (optional)</label>
            <input type="text" placeholder="e.g. Arjola" value={form.name} onChange={e=>set('name',e.target.value)}/>
          </div>
          <div className="form-field">
            <label>Job Title <span className="required">*</span></label>
            <input type="text" placeholder="e.g. Innovation Manager" value={form.jobTitle} onChange={e=>set('jobTitle',e.target.value)} required/>
          </div>
          <div className="form-field">
            <label>Industry <span className="required">*</span></label>
            <select value={form.industry} onChange={e=>set('industry',e.target.value)} required>
              <option value="">Select industry…</option>
              {industries.map(i=><option key={i}>{i}</option>)}
            </select>
          </div>
          <div className="form-field">
            <label>Country <span className="required">*</span></label>
            <input type="text" placeholder="e.g. Albania" value={form.country} onChange={e=>set('country',e.target.value)} required/>
          </div>
          <div className="form-field">
            <label>Seniority Level <span className="required">*</span></label>
            <select value={form.seniority} onChange={e=>set('seniority',e.target.value)} required>
              <option value="">Select level…</option>
              {seniorities.map(s=><option key={s}>{s}</option>)}
            </select>
          </div>
        </div>

        <button className="btn-primary btn-full" disabled={!valid} onClick={()=>onSubmit(form)}>
          Start Assessment →
        </button>
        <p className="form-privacy">🔒 Your data is used solely to personalise your report. We never share it.</p>
      </div>
    </div>
  );
}
