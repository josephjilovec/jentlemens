"use client";

import { useState } from "react";
import Link from "next/link";
import { suitPalette } from "@/lib/site-config";
import { permanentTenBundle } from "@/lib/active-inventory";

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

  return <section className="capsuleBuilder">
    <div className="capsuleIntro"><p>WARDROBE PAIRING GUIDE</p><h2>See where the Permanent 10 fits.</h2><span>Choose a permanent tailoring color to see which tie families from the ten-pack naturally work with it. Shirts, shoes and tailoring remain pairing guidance until those categories have confirmed inventory and verified menswear photography.</span></div>
    <div className="capsulePalette">{suitPalette.map(([name,hex])=><button type="button" key={name} onClick={()=>setSuit(name)} className={suit===name?"active":""}><i style={{background:hex}}/><b>{name}</b></button>)}</div>
    <div className="capsuleResult">
      <div className="capsuleSuit" style={{background:suitPalette.find(x=>x[0]===suit)?.[1]}}><span>SELECTED TAILORING</span><strong>{suit}</strong><small>Athletic Fit pairing reference</small></div>
      <div className="capsuleRules"><div><span>MEN'S SHIRT FAMILIES</span><b>{matches.shirts.join(" / ")}</b></div><div><span>PERMANENT 10 TIES</span><b>{matches.ties.join(" / ")}</b></div><div><span>MEN'S FOOTWEAR</span><b>{matches.shoes.join(" / ")}</b></div></div>
    </div>
    <div className="capsuleProducts"><Link href={`/products/${permanentTenBundle.slug}`}><img src={permanentTenBundle.image} alt={permanentTenBundle.alt}/><span>{permanentTenBundle.name}</span><b>$500 · 10 ties</b></Link></div>
  </section>
}
