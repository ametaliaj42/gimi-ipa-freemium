import { useState } from 'react';
const INDUSTRIES = ['Technology','Finance & Banking','Healthcare & Life Sciences','Manufacturing','Energy & Utilities','Education','Retail & Consumer Goods','Professional Services','Government & Public Sector','Media & Entertainment','Other'];
const SENIORITIES = ['Individual Contributor','Team Lead','Manager','Senior Manager / Director','VP / C-Suite','Founder / Entrepreneur'];
export default function UserInfoForm({ onSubmit }) {
  const [f, setF] = useState({ name:'', jobTitle:'', industry:'', country:'', seniority:'' });
  const set = (k,v) => setF(p=>({...p,[k]:v}));
  const ok = f.jobTitle && f.industry && f.country && f.seniority;
  return (
    <div className="form-screen">
      <div className="form-card">
        <p className="form-step">Step 1 of 2</p>
        <h2 className="form-h">A bit about you</h2>
        <p className="form-sub">This personalises your Innovation Profile. Required fields marked *</p>
        <div className="form-fields">
          <div className="field"><label>First Name</label><input type="text" placeholder="e.g. Arjola" value={f.name} onChange={e=>set('name',e.target.value)}/></div>
          <div className="field"><label>Job Title <span className="field-req">*</span></label><input type="text" placeholder="e.g. Innovation Manager" value={f.jobTitle} onChange={e=>set('jobTitle',e.target.value)}/></div>
          <div className="form-row">
            <div className="field"><label>Industry <span className="field-req">*</span></label><select value={f.industry} onChange={e=>set('industry',e.target.value)}><option value="">Select…</option>{INDUSTRIES.map(i=><option key={i}>{i}</option>)}</select></div>
            <div className="field"><label>Country <span className="field-req">*</span></label><input type="text" placeholder="e.g. Albania" value={f.country} onChange={e=>set('country',e.target.value)}/></div>
          </div>
          <div className="field"><label>Seniority <span className="field-req">*</span></label><select value={f.seniority} onChange={e=>set('seniority',e.target.value)}><option value="">Select…</option>{SENIORITIES.map(s=><option key={s}>{s}</option>)}</select></div>
        </div>
        <button className="btn btn-teal btn-full" style={{height:52}} disabled={!ok} onClick={()=>onSubmit(f)}>Start Assessment →</button>
        <p className="form-privacy">🔒 Used only to personalise your report. Never shared.</p>
      </div>
    </div>
  );
}
