"use client";

import { useEffect, useMemo, useState } from "react";

type Profile = {height:string;weight:string;chest:string;waist:string;inseam:string;shoulder:string;silhouette:"Athletic Classic"|"Tailored Sleek"};
const blank:Profile={height:"",weight:"",chest:"",waist:"",inseam:"",shoulder:"",silhouette:"Athletic Classic"};
const fields:[keyof Omit<Profile,"silhouette">,string,string][]=[
  ["height","Height","in"],["weight","Weight","lb"],["chest","Chest","in"],["waist","Waist","in"],["inseam","Inseam","in"],["shoulder","Shoulder Width","in"]
];

export function MeasurementProfileStudio(){
  const [profile,setProfile]=useState<Profile>(blank);
  const [step,setStep]=useState(0);
  const [saved,setSaved]=useState(false);
  useEffect(()=>{try{const raw=localStorage.getItem("jentlemens-measurement-profile");if(raw)setProfile({...blank,...JSON.parse(raw)});}catch{}},[]);
  const ratio=useMemo(()=>{const c=Number(profile.chest)||40,w=Number(profile.waist)||34,s=Number(profile.shoulder)||18;return {shoulder:Math.min(1.18,Math.max(.9,s/18)),chest:Math.min(1.18,Math.max(.9,c/40)),waist:Math.min(1.12,Math.max(.82,w/34))}},[profile]);
  function update(key:keyof Profile,value:string){setProfile(p=>({...p,[key]:value}));setSaved(false)}
  function save(){localStorage.setItem("jentlemens-measurement-profile",JSON.stringify(profile));setSaved(true)}
  function clear(){localStorage.removeItem("jentlemens-measurement-profile");setProfile(blank);setSaved(false);setStep(0)}

  return <div className="profileStudio">
    <div className="profileStudioHead"><div><p>MEASUREMENT STUDIO</p><h2>Your proportions become the starting point.</h2><span>Enter six core measurements, choose a silhouette profile, then save the profile locally on this device for future made-to-order visits.</span></div><div className="profileStatus"><i className={saved?"saved":""}/><b>{saved?"PROFILE SAVED":"LOCAL PROFILE"}</b><small>Stored only in this browser</small></div></div>
    <div className="profileStudioBody">
      <section className="profilePreview">
        <svg viewBox="0 0 420 640" role="img" aria-label="Dynamic Athletic Fit suit preview">
          <defs><linearGradient id="suitShade" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#1f2937"/><stop offset="1" stopColor="#0b0b0c"/></linearGradient></defs>
          <path d={`M ${95-(ratio.shoulder-1)*35} 145 Q 210 ${80-(ratio.shoulder-1)*18} ${325+(ratio.shoulder-1)*35} 145 L ${292+(ratio.chest-1)*35} 290 L ${270+(ratio.waist-1)*45} 430 L 150 430 L ${128-(ratio.waist-1)*45} 290 Z`} fill="url(#suitShade)" stroke="#71717a" strokeWidth="2"/>
          <path d="M145 150 L210 260 L275 150" fill="none" stroke="#a1a1aa" strokeWidth="2"/>
          <path d="M210 260 L210 430" stroke="#52525b" strokeWidth="2"/>
          <line x1="100" y1="140" x2="320" y2="140" stroke="#d4d4d8" strokeDasharray="6 8"/><text x="210" y="128" textAnchor="middle">SHOULDER {profile.shoulder||"—"}</text>
          <line x1="120" y1="235" x2="300" y2="235" stroke="#d4d4d8" strokeDasharray="6 8"/><text x="210" y="222" textAnchor="middle">CHEST {profile.chest||"—"}</text>
          <line x1="145" y1="355" x2="275" y2="355" stroke="#d4d4d8" strokeDasharray="6 8"/><text x="210" y="342" textAnchor="middle">WAIST {profile.waist||"—"}</text>
          <path d="M150 430 L145 615 L202 615 L210 455 L218 615 L275 615 L270 430 Z" fill="#171717" stroke="#71717a" strokeWidth="2"/>
          <text x="210" y="600" textAnchor="middle">INSEAM {profile.inseam||"—"}</text>
        </svg>
        <div className="previewReadout"><span>{profile.silhouette}</span><b>{profile.chest&&profile.waist?`${Math.max(0,Number(profile.chest)-Number(profile.waist)).toFixed(1)} in chest-to-waist drop`:"Enter chest + waist"}</b><small>Visual is proportional guidance, not a production pattern.</small></div>
      </section>
      <section className="profileWizard">
        <div className="profileSteps"><button className={step===0?"active":""} onClick={()=>setStep(0)}><span>01</span>Measurements</button><button className={step===1?"active":""} onClick={()=>setStep(1)}><span>02</span>Silhouette</button><button className={step===2?"active":""} onClick={()=>setStep(2)}><span>03</span>Save Profile</button></div>
        {step===0&&<div className="profileFieldGrid">{fields.map(([key,label,unit])=><label key={key}><span>{label}</span><div><input type="number" step="0.1" value={profile[key]} onChange={e=>update(key,e.target.value)} placeholder="0.0"/><b>{unit}</b></div></label>)}</div>}
        {step===1&&<div className="silhouetteChoice"><button className={profile.silhouette==="Athletic Classic"?"active":""} onClick={()=>update("silhouette","Athletic Classic")}><b>Athletic Classic</b><span>More ease through chest, seat and thigh with a disciplined waist.</span></button><button className={profile.silhouette==="Tailored Sleek"?"active":""} onClick={()=>update("silhouette","Tailored Sleek")}><b>Tailored Sleek</b><span>Closer body line while preserving Athletic Fit room in the shoulder and upper leg.</span></button></div>}
        {step===2&&<div className="saveProfilePanel"><p>PROFILE SUMMARY</p><h3>{profile.silhouette}</h3><div>{fields.map(([key,label,unit])=><span key={key}><b>{label}</b>{profile[key]||"—"} {unit}</span>)}</div><button onClick={save}>Save My Measurement Profile</button><button className="clearProfile" onClick={clear}>Clear saved profile</button>{saved&&<strong>Saved. Future made-to-order visits on this device will preload these values.</strong>}</div>}
        <div className="profileNav"><button disabled={step===0} onClick={()=>setStep(Math.max(0,step-1))}>← Back</button><button disabled={step===2} onClick={()=>setStep(Math.min(2,step+1))}>Continue →</button></div>
      </section>
    </div>
  </div>
}
