"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { suitPalette, storeProducts } from "@/lib/site-config";

const pairing: Record<string,{shirts:string[];ties:string[];shoes:string[]}> = {
  "Taupe Brown": { shirts:["White","Light Blue"], ties:["Navy","Charcoal"], shoes:["Dark Brown"] },
  "Light Grey": { shirts:["White","Light Blue","Black"], ties:["Navy","Black","Burgundy"], shoes:["Black","Dark Brown"] },
  "Dark Charcoal Grey": { shirts:["White","Light Blue"], ties:["Navy","Black","Burgundy"], shoes:["Black"] },
  "Navy": { shirts:["White","Light Blue"], ties:["Charcoal","Burgundy","Taupe"], shoes:["Black","Dark Brown"] },
  "Black": { shirts:["White","Light Blue"], ties:["Black","Charcoal"], shoes:["Black"] },
};

export function CapsuleBuilder(){
  const [suit,setSuit]=useState("Dark Charcoal Grey");
  const matches=pairing[suit];
  const picks=useMemo(()=>{
    const shirt=storeProducts.find(p=>p.collection==="dress-shirts");
    const tie=storeProducts.find(p=>p.collection==="ties");
    const shoe=storeProducts.find(p=>p.slug==="cap-toe-oxford");
    const belt=storeProducts.find(p=>p.collection===(matches.shoes.includes("Black")?"belts-black":"belts-brown"));
    return [shirt,tie,shoe,belt].filter(Boolean);
  },[suit,matches]);

  return <section className="capsuleBuilder">
    <div className="capsuleIntro"><p>WARDROBE SYSTEM VISUALIZER</p><h2>Build the look from the suit outward.</h2><span>Choose one permanent tailoring color. Jentlemens then narrows the shirt, tie, shoe and leather families that naturally work with it.</span></div>
    <div className="capsulePalette">{suitPalette.map(([name,hex])=><button type="button" key={name} onClick={()=>setSuit(name)} className={suit===name?"active":""}><i style={{background:hex}}/><b>{name}</b></button>)}</div>
    <div className="capsuleResult">
      <div className="capsuleSuit" style={{background:suitPalette.find(x=>x[0]===suit)?.[1]}}><span>SELECTED TAILORING</span><strong>{suit}</strong><small>Athletic Fit / Permanent Five</small></div>
      <div className="capsuleRules"><div><span>SHIRTS</span><b>{matches.shirts.join(" / ")}</b></div><div><span>TIES</span><b>{matches.ties.join(" / ")}</b></div><div><span>LEATHER</span><b>{matches.shoes.join(" / ")}</b></div></div>
    </div>
    <div className="capsuleProducts">{picks.map(p=><Link key={p!.slug} href={`/products/${p!.slug}`}><img src={p!.image} alt={p!.name}/><span>{p!.name}</span><b>${p!.price}</b></Link>)}</div>
  </section>
}
