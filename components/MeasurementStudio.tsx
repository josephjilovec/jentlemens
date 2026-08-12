"use client";

import { useMemo, useState } from "react";

type Unit = "in" | "cm";
type Step = 0 | 1 | 2 | 3;

type MeasureKey =
  | "height" | "weight" | "shoulder" | "chest" | "jacket" | "sleeve"
  | "waist" | "seat" | "outseam" | "inseam" | "thigh" | "rise";

const suitColors = [
  ["Taupe Brown", "#8A735D"], ["Light Grey", "#B9B9B5"], ["Charcoal", "#4A4C4F"],
  ["Navy", "#252D40"], ["Black", "#171717"]
] as const;

const steps = [
  {label:"Basics", keys:["height","weight"] as MeasureKey[]},
  {label:"Upper body", keys:["shoulder","chest","jacket","sleeve"] as MeasureKey[]},
  {label:"Lower body", keys:["waist","seat","outseam","inseam","thigh","rise"] as MeasureKey[]},
  {label:"Preferences", keys:[] as MeasureKey[]}
] as const;

const measurements: Record<MeasureKey, {label:string; help:string; min:number; max:number; callout:string}> = {
  height:{label:"Height",help:"Stand naturally without shoes. Enter your full standing height.",min:58,max:82,callout:"Full height"},
  weight:{label:"Weight",help:"Current body weight. Used as a proportion check, not a garment dimension.",min:105,max:350,callout:"Body weight"},
  shoulder:{label:"Shoulder width",help:"Measure straight across the upper back from one natural shoulder point to the other.",min:15,max:24,callout:"Shoulder"},
  chest:{label:"Chest",help:"Wrap the tape level around the fullest part of the chest with arms relaxed.",min:32,max:58,callout:"Chest"},
  jacket:{label:"Jacket length",help:"From the highest shoulder point beside the collar, straight down to the desired jacket hem.",min:27,max:36,callout:"Jacket length"},
  sleeve:{label:"Sleeve length",help:"From the shoulder point down the outside of the arm to the wrist bone or preferred cuff endpoint.",min:22,max:30,callout:"Sleeve"},
  waist:{label:"Natural waist",help:"Measure around the natural waist without pulling the tape tight or holding your breath.",min:28,max:54,callout:"Waist"},
  seat:{label:"Seat / hip",help:"Wrap the tape around the fullest part of the seat, keeping it level to the floor.",min:34,max:60,callout:"Seat"},
  outseam:{label:"Outseam",help:"Measure from the top of the trouser waistband down the outside leg to the desired hem.",min:36,max:48,callout:"Outseam"},
  inseam:{label:"Inseam",help:"Measure from the crotch seam straight down the inside leg to the desired trouser hem.",min:26,max:40,callout:"Inseam"},
  thigh:{label:"Thigh",help:"Measure around the fullest part of the upper thigh while standing naturally.",min:19,max:34,callout:"Thigh"},
  rise:{label:"Rise",help:"Measure from the front waistband through the legs to the back waistband. Keep the tape comfortably close.",min:20,max:34,callout:"Rise"}
};

const presetProfiles: Record<string, Partial<Record<MeasureKey,string>>> = {
  "":{},
  "38R · Athletic Drop 7":{shoulder:"17.5",chest:"39",waist:"32",seat:"39",jacket:"29.5",sleeve:"25",inseam:"31.5",outseam:"40",thigh:"23",rise:"25"},
  "40R · Athletic Drop 7":{shoulder:"18",chest:"41",waist:"34",seat:"41",jacket:"30",sleeve:"25.5",inseam:"32",outseam:"40.5",thigh:"24",rise:"25.5"},
  "42R · Athletic Drop 7":{shoulder:"18.5",chest:"43",waist:"36",seat:"43",jacket:"30.5",sleeve:"25.75",inseam:"32",outseam:"41",thigh:"25",rise:"26"}
};

function displayRange(key:MeasureKey, unit:Unit){
  const {min,max}=measurements[key];
  if(key==="weight") return unit==="in" ? `${min}–${max} lb` : `${Math.round(min*.4536)}–${Math.round(max*.4536)} kg`;
  return unit==="in" ? `${min}–${max} in` : `${Math.round(min*2.54)}–${Math.round(max*2.54)} cm`;
}

export function MeasurementStudio(){
  const [step,setStep]=useState<Step>(0);
  const [unit,setUnit]=useState<Unit>("in");
  const [active,setActive]=useState<MeasureKey>("height");
  const [values,setValues]=useState<Partial<Record<MeasureKey,string>>>({});
  const [color,setColor]=useState("Navy");
  const [preset,setPreset]=useState("");
  const [info,setInfo]=useState<MeasureKey|null>(null);

  const activeMeasure=measurements[active];
  const unitLabel=active==="weight" ? (unit==="in"?"lb":"kg") : (unit==="in"?"in":"cm");

  function normalizeToInches(key:MeasureKey, raw:string){
    const n=Number(raw); if(!raw || Number.isNaN(n)) return NaN;
    if(key==="weight") return unit==="in" ? n : n/0.45359237;
    return unit==="in" ? n : n/2.54;
  }

  function warningFor(key:MeasureKey){
    const raw=values[key]; if(!raw) return "";
    const n=normalizeToInches(key,raw); const def=measurements[key];
    if(n<def.min || n>def.max) return `Please recheck this measurement. Typical entry range: ${displayRange(key,unit)}.`;
    if(key==="sleeve" && values.height){
      const h=normalizeToInches("height",values.height);
      if(h<64 && n>28) return "This sleeve is unusually long relative to the entered height. Please remeasure before submitting.";
    }
    return "";
  }

  function applyPreset(name:string){
    setPreset(name);
    if(!name) return;
    const base=presetProfiles[name];
    const converted:Partial<Record<MeasureKey,string>>={};
    Object.entries(base).forEach(([k,v])=>{
      const key=k as MeasureKey; const num=Number(v);
      converted[key]=unit==="in" ? String(v) : (num*2.54).toFixed(1);
    });
    setValues(prev=>({...prev,...converted}));
  }

  function changeUnit(next:Unit){
    if(next===unit) return;
    const converted:Partial<Record<MeasureKey,string>>={};
    Object.entries(values).forEach(([k,v])=>{
      if(!v) return; const key=k as MeasureKey; const n=Number(v);
      if(key==="weight") converted[key]=next==="cm" ? (n*.45359237).toFixed(1) : (n/.45359237).toFixed(1);
      else converted[key]=next==="cm" ? (n*2.54).toFixed(1) : (n/2.54).toFixed(2);
    });
    setValues(converted); setUnit(next);
  }

  const currentKeys=steps[step].keys;
  const currentWarnings=useMemo(()=>currentKeys.filter(k=>warningFor(k)),[currentKeys,values,unit]);

  return <div className="measurementStudio">
    <div className="studioTopbar">
      <div><p className="eyebrow">MEASUREMENT STUDIO</p><h2>Build the specification around your body.</h2></div>
      <div className="studioControls">
        <label>Starting profile<select value={preset} onChange={e=>applyPreset(e.target.value)}>{Object.keys(presetProfiles).map(x=><option key={x} value={x}>{x||"Start from scratch"}</option>)}</select></label>
        <div className="unitToggle" aria-label="Measurement units"><button type="button" className={unit==="in"?"activeUnit":""} onClick={()=>changeUnit("in")}>IN / LB</button><button type="button" className={unit==="cm"?"activeUnit":""} onClick={()=>changeUnit("cm")}>CM / KG</button></div>
      </div>
    </div>

    <div className="studioSteps">{steps.map((s,i)=><button type="button" key={s.label} className={step===i?"currentStep":step>i?"doneStep":""} onClick={()=>setStep(i as Step)}><span>0{i+1}</span><b>{s.label}</b></button>)}</div>

    <div className="studioBody">
      <section className="modelPanel">
        <div className="modelPhotoWrap">
          <img className="tailoringModel" src="https://images.unsplash.com/photo-1617137968427-85924c800a22?auto=format&fit=crop&w=1200&q=90" alt="Man wearing a tailored suit used as a visual measurement guide"/>
          <div className={`measureLine line-shoulder ${active==="shoulder"?"isActive":""}`}><i/><span>Shoulder</span></div>
          <div className={`measureLine line-chest ${active==="chest"?"isActive":""}`}><i/><span>Chest</span></div>
          <div className={`measureLine line-jacket ${active==="jacket"?"isActive":""}`}><i/><span>Jacket</span></div>
          <div className={`measureLine line-sleeve ${active==="sleeve"?"isActive":""}`}><i/><span>Sleeve</span></div>
          <div className={`measureLine line-waist ${active==="waist"?"isActive":""}`}><i/><span>Waist</span></div>
          <div className={`measureLine line-seat ${active==="seat"?"isActive":""}`}><i/><span>Seat</span></div>
          <div className={`measureLine line-thigh ${active==="thigh"?"isActive":""}`}><i/><span>Thigh</span></div>
          <div className={`measureLine line-rise ${active==="rise"?"isActive":""}`}><i/><span>Rise</span></div>
          <div className={`measureLine line-inseam ${active==="inseam"?"isActive":""}`}><i/><span>Inseam</span></div>
          <div className={`measureLine line-outseam ${active==="outseam"?"isActive":""}`}><i/><span>Outseam</span></div>
          <div className={`measureLine line-height ${active==="height"?"isActive":""}`}><i/><span>Height</span></div>
        </div>
        <div className="activeMeasureCard"><span>ACTIVE MEASUREMENT</span><strong>{activeMeasure.label}</strong><p>{activeMeasure.help}</p><small>Expected entry: {displayRange(active,unit)}</small></div>
        <div className="suitColorRail"><span>SUIT COLOR</span>{suitColors.map(([name,hex])=><button type="button" key={name} className={color===name?"chosenColor":""} onClick={()=>setColor(name)} aria-label={name}><i style={{background:hex}}/><b>{name}</b></button>)}</div>
      </section>

      <form id="measurement-profile" className="wizardPanel" action="mailto:realjjemail@gmail.com" method="post" encType="text/plain">
        <input type="hidden" name="Suit color" value={color}/><input type="hidden" name="Units" value={unit==="in"?"inches / pounds":"centimeters / kilograms"}/>
        <div className="wizardHeading"><p className="eyebrow">STEP 0{step+1}</p><h3>{steps[step].label}</h3><p>{step===0?"Start with the two measurements that help us sanity-check the rest of the profile.":step===1?"Measure over a dress shirt with your arms relaxed and posture natural.":step===2?"Measure over trousers or lightweight clothing. Keep the tape level and close, never tight.":"Finish the specification with fit preferences and any posture or proportional notes."}</p></div>

        {step<3 && <div className="wizardFields">{currentKeys.map(key=>{
          const def=measurements[key]; const warning=warningFor(key);
          return <label key={key} className={active===key?"activeField":""} onFocus={()=>setActive(key)}>
            <span>{def.label}<button type="button" className="infoButton" onClick={()=>setInfo(key)} aria-label={`How to measure ${def.label}`}>?</button></span>
            <div className="measureInput"><input name={def.label} type="number" step="0.1" inputMode="decimal" value={values[key]||""} onChange={e=>setValues(v=>({...v,[key]:e.target.value}))} onFocus={()=>setActive(key)} placeholder="0.0" required/><b>{key==="weight"?(unit==="in"?"lb":"kg"):(unit==="in"?"in":"cm")}</b></div>
            <small>{def.help}</small>{warning&&<em className="fieldWarning">{warning}</em>}
          </label>
        })}</div>}

        {step===3 && <div className="preferenceFields"><label>Posture<select name="Posture"><option>Regular / neutral</option><option>Forward shoulders</option><option>Erect posture</option><option>Stooped posture</option></select></label><label>Trouser break<select name="Trouser break"><option>Slight break</option><option>No break</option><option>Full break</option></select></label><label>Fit notes<textarea name="Fit notes" placeholder="Shoulder slope, posture, room preferences, asymmetry, preferred trouser rise, or anything else the tailor should review."/></label></div>}

        <div className="wizardNav"><button type="button" className="backButton" disabled={step===0} onClick={()=>setStep(Math.max(0,step-1) as Step)}>← Previous</button>{step<3?<button type="button" className="nextButton" onClick={()=>setStep((step+1) as Step)}>Continue →</button>:<button className="nextButton" type="submit">Submit measurement profile</button>}</div>
        {currentWarnings.length>0&&<p className="formNotice">One or more entries are outside the usual range. You can continue, but please remeasure before final submission.</p>}
        <p className="fine">Manufacturer-specific tolerances and final production measurements require confirmation before fulfillment.</p>
      </form>
    </div>

    {info&&<div className="measureInfoModal" role="dialog" aria-modal="true" aria-label={`How to measure ${measurements[info].label}`}><button className="measureInfoClose" onClick={()=>setInfo(null)} aria-label="Close">×</button><p className="eyebrow">MEASUREMENT GUIDE</p><h3>{measurements[info].label}</h3><div className={`miniMeasure mini-${info}`}><div className="miniBody"/><i/></div><p>{measurements[info].help}</p><b>Typical entry: {displayRange(info,unit)}</b></div>}
  </div>
}
