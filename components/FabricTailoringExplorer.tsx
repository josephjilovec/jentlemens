"use client";

import { useState } from "react";
import { verifiedMenswearAssets } from "@/lib/site-config";

const fabrics = [
  {name:"Worsted 110",tone:"Deep Charcoal",image:verifiedMenswearAssets.tailoring.primary,breathability:74,resilience:88,structure:90,season:"Three-season",weave:"Fine twill",note:"A clean, structured tailoring reference with a smooth face and disciplined drape."},
  {name:"Open-Weave Tropical",tone:"Warm Taupe",image:verifiedMenswearAssets.tailoring.secondary,breathability:94,resilience:76,structure:72,season:"Warm weather",weave:"Open plain weave",note:"A lighter tailoring direction that prioritizes airflow while retaining enough structure for a sharp silhouette."},
  {name:"Brushed Flannel",tone:"Soft Charcoal",image:verifiedMenswearAssets.tailoring.primary,breathability:61,resilience:81,structure:84,season:"Cool weather",weave:"Brushed twill",note:"A denser, softer surface with visual depth intended for cooler-weather jackets and trousers."},
];

export function FabricTailoringExplorer(){
  const [active,setActive]=useState(0);
  const [zoom,setZoom]=useState(145);
  const [position,setPosition]=useState({x:50,y:50});
  const fabric=fabrics[active];

  function move(e:React.PointerEvent<HTMLDivElement>){
    const r=e.currentTarget.getBoundingClientRect();
    setPosition({x:Math.max(0,Math.min(100,((e.clientX-r.left)/r.width)*100)),y:Math.max(0,Math.min(100,((e.clientY-r.top)/r.height)*100))});
  }

  return <section className="fabricExplorer">
    <div className="fabricExplorerHead"><div><p>FABRIC & TAILORING EXPLORER</p><h2>See the material before you choose the silhouette.</h2></div><span>Move across the study panel and adjust magnification to inspect surface character. Metrics are comparative design references, not final mill specifications.</span></div>
    <div className="fabricExplorerBody">
      <div className="fabricStage" onPointerMove={move} role="img" aria-label={`${fabric.name} men's tailoring fabric study`} style={{backgroundImage:`linear-gradient(rgba(18,18,18,.12),rgba(18,18,18,.18)),url('${fabric.image}')`,backgroundSize:`${zoom}% auto`,backgroundPosition:`${position.x}% ${position.y}%`}}>
        <div className="fabricReticle"><i/><i/></div>
        <div className="fabricStageMeta"><span>{fabric.tone}</span><b>{fabric.name}</b><small>{fabric.weave} · {fabric.season}</small></div>
      </div>
      <div className="fabricPanel">
        <div className="fabricTabs">{fabrics.map((item,index)=><button key={item.name} className={index===active?"active":""} onClick={()=>setActive(index)}><span>0{index+1}</span><b>{item.name}</b><small>{item.tone}</small></button>)}</div>
        <label className="zoomControl"><span>MAGNIFICATION</span><input type="range" min="100" max="240" step="5" value={zoom} onChange={e=>setZoom(Number(e.target.value))}/><b>{zoom}%</b></label>
        <div className="fabricMetrics">{[["Breathability",fabric.breathability],["Wrinkle resilience",fabric.resilience],["Tailoring structure",fabric.structure]].map(([label,value])=><div key={String(label)}><span>{label}</span><div><i style={{width:`${value}%`}}/></div><b>{value}</b></div>)}</div>
        <div className="fabricNote"><span>TAILORING NOTE</span><p>{fabric.note}</p></div>
        <div className="stitchStudy"><div className="stitchLine">••••••••••••••••••••••••••</div><div><span>STITCH STUDY</span><b>Controlled edge finishing</b><small>Visual reference for seam discipline and construction detail.</small></div></div>
      </div>
    </div>
  </section>;
}
