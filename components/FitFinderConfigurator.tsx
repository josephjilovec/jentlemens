"use client";

import { useEffect, useMemo, useRef, useState } from "react";

type Measurements = { neck:number; chest:number; shoulder:number; torso:number };

const defaults:Measurements = { neck:16.5, chest:42, shoulder:19.5, torso:28.5 };
const fields:{key:keyof Measurements;label:string;min:number;max:number;step:number}[] = [
  {key:"neck",label:"Neck",min:13,max:21,step:.25},
  {key:"chest",label:"Chest",min:34,max:54,step:.5},
  {key:"shoulder",label:"Shoulder",min:16,max:24,step:.25},
  {key:"torso",label:"Torso",min:24,max:34,step:.5},
];

export function FitFinderConfigurator(){
  const [measurements,setMeasurements] = useState<Measurements>(defaults);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const profile = useMemo(()=>{
    const athletic = measurements.shoulder >= 19 || measurements.chest >= 42;
    const longTorso = measurements.torso >= 30;
    const jacket = longTorso ? "Longer balance" : measurements.torso <= 26.5 ? "Compact balance" : "Standard balance";
    const frame = athletic ? "Athletic Frame" : measurements.chest <= 38 ? "Lean Frame" : "Balanced Frame";
    const neck = measurements.neck >= 17.5 ? "Roomier collar base" : measurements.neck <= 15 ? "Close collar base" : "Standard collar base";
    return {frame,jacket,neck,drop:Math.max(0,measurements.chest-(measurements.neck*2)).toFixed(1)};
  },[measurements]);

  useEffect(()=>{
    const canvas = canvasRef.current;
    if(!canvas) return;
    const ctx = canvas.getContext("2d");
    if(!ctx) return;
    const W=720,H=820,cx=W/2;
    ctx.clearRect(0,0,W,H);
    ctx.fillStyle="#171717";ctx.fillRect(0,0,W,H);
    ctx.strokeStyle="rgba(255,255,255,.055)";ctx.lineWidth=1;
    for(let x=60;x<W;x+=60){ctx.beginPath();ctx.moveTo(x,0);ctx.lineTo(x,H);ctx.stroke()}
    for(let y=70;y<H;y+=70){ctx.beginPath();ctx.moveTo(0,y);ctx.lineTo(W,y);ctx.stroke()}

    const shoulderHalf=155+(measurements.shoulder-18)*16;
    const chestHalf=140+(measurements.chest-40)*5.4;
    const waistHalf=Math.max(105,chestHalf-38);
    const torsoBottom=420+(measurements.torso-27)*9;
    const neckHalf=45+(measurements.neck-15)*4;

    const grad=ctx.createLinearGradient(cx-shoulderHalf,120,cx+shoulderHalf,torsoBottom);
    grad.addColorStop(0,"#35302d");grad.addColorStop(.48,"#24211f");grad.addColorStop(1,"#111");
    ctx.fillStyle=grad;ctx.strokeStyle="#8c7a6b";ctx.lineWidth=2;
    ctx.beginPath();
    ctx.moveTo(cx-neckHalf,110);
    ctx.quadraticCurveTo(cx-shoulderHalf*.65,118,cx-shoulderHalf,165);
    ctx.lineTo(cx-chestHalf,280);
    ctx.lineTo(cx-waistHalf,torsoBottom);
    ctx.lineTo(cx+waistHalf,torsoBottom);
    ctx.lineTo(cx+chestHalf,280);
    ctx.lineTo(cx+shoulderHalf,165);
    ctx.quadraticCurveTo(cx+shoulderHalf*.65,118,cx+neckHalf,110);
    ctx.closePath();ctx.fill();ctx.stroke();

    ctx.strokeStyle="rgba(212,175,55,.8)";ctx.lineWidth=1.2;ctx.setLineDash([8,8]);
    const dims=[
      {y:112,a:cx-neckHalf,b:cx+neckHalf,label:`NECK ${measurements.neck.toFixed(2)} IN`},
      {y:165,a:cx-shoulderHalf,b:cx+shoulderHalf,label:`SHOULDER ${measurements.shoulder.toFixed(2)} IN`},
      {y:280,a:cx-chestHalf,b:cx+chestHalf,label:`CHEST ${measurements.chest.toFixed(1)} IN`},
      {y:torsoBottom,a:cx-waistHalf,b:cx+waistHalf,label:`TORSO ${measurements.torso.toFixed(1)} IN`},
    ];
    ctx.font="600 12px Arial";ctx.textAlign="center";ctx.fillStyle="#e7cf82";
    dims.forEach(d=>{ctx.beginPath();ctx.moveTo(d.a,d.y);ctx.lineTo(d.b,d.y);ctx.stroke();ctx.fillText(d.label,cx,d.y-12)});
    ctx.setLineDash([]);

    ctx.strokeStyle="rgba(255,255,255,.2)";ctx.lineWidth=1;
    ctx.beginPath();ctx.moveTo(cx,125);ctx.lineTo(cx,torsoBottom);ctx.stroke();
    ctx.fillStyle="#f9f9fb";ctx.font="500 16px Georgia";ctx.fillText(profile.frame.toUpperCase(),cx,torsoBottom+72);
    ctx.fillStyle="#8c7a6b";ctx.font="600 10px Arial";ctx.fillText("PROPORTIONAL FIT VISUALIZATION",cx,torsoBottom+96);
  },[measurements,profile.frame]);

  function setValue(key:keyof Measurements,value:number){
    setMeasurements(current=>({...current,[key]:value}));
  }

  return <section className="fitFinder">
    <div className="fitFinderIntro">
      <div><p>FIT FINDER / ATHLETIC PROFILE</p><h2>Start with the frame, not the size label.</h2></div>
      <span>Enter four core upper-body measurements. The canvas responds to your proportions and returns a preliminary Jentlemens fit profile before the full made-to-order measurement studio.</span>
    </div>
    <div className="fitFinderGrid">
      <div className="fitCanvasWrap"><canvas ref={canvasRef} width={720} height={820} aria-label="Interactive canvas showing a proportional men's tailoring silhouette"/></div>
      <div className="fitControls">
        <div className="fitProfileResult"><span>PRELIMINARY PROFILE</span><h3>{profile.frame}</h3><p>{profile.jacket} · {profile.neck}</p><small>Fit guidance only. Final made-to-order specifications require measurement review.</small></div>
        <div className="fitFieldList">{fields.map(field=><label key={field.key}><div><span>{field.label}</span><b>{measurements[field.key].toFixed(field.step<.5?2:1)} in</b></div><input type="range" min={field.min} max={field.max} step={field.step} value={measurements[field.key]} onChange={e=>setValue(field.key,Number(e.target.value))}/><input className="fitNumber" type="number" min={field.min} max={field.max} step={field.step} value={measurements[field.key]} onChange={e=>setValue(field.key,Number(e.target.value))}/></label>)}</div>
        <div className="fitSignals"><div><span>FRAME</span><b>{profile.frame}</b></div><div><span>JACKET BALANCE</span><b>{profile.jacket}</b></div><div><span>COLLAR BASE</span><b>{profile.neck}</b></div></div>
      </div>
    </div>
  </section>;
}
