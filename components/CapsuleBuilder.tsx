"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { permanentTenBundle } from "@/lib/active-inventory";

const pieces = [
  {id:"charcoal-suit",group:"Tailoring",name:"Charcoal Athletic Suit",tone:"#2f3033",status:"PLANNED HOUSE PIECE"},
  {id:"navy-suit",group:"Tailoring",name:"Navy Athletic Suit",tone:"#18243a",status:"PLANNED HOUSE PIECE"},
  {id:"taupe-jacket",group:"Tailoring",name:"Warm Taupe Jacket",tone:"#8c7a6b",status:"PLANNED HOUSE PIECE"},
  {id:"white-shirt",group:"Shirting",name:"White Poplin Shirt",tone:"#f1f0eb",status:"PLANNED HOUSE PIECE"},
  {id:"blue-shirt",group:"Shirting",name:"Sky Blue Shirt",tone:"#b9cad8",status:"PLANNED HOUSE PIECE"},
  {id:"permanent-ten",group:"Neckwear",name:"Permanent 10 Tie Collection",tone:"#4f1620",status:"CURRENT OFFER"},
  {id:"black-oxford",group:"Footwear",name:"Black Oxford",tone:"#171717",status:"PLANNED HOUSE PIECE"},
  {id:"brown-loafer",group:"Footwear",name:"Dark Brown Loafer",tone:"#4f3428",status:"PLANNED HOUSE PIECE"},
  {id:"black-belt",group:"Hardware",name:"Black Leather Belt",tone:"#242424",status:"PLANNED HOUSE PIECE"},
  {id:"steel-watch",group:"Hardware",name:"Steel Timepiece",tone:"#8c8f92",status:"PLANNED HOUSE PIECE"},
];

const defaultIds=["charcoal-suit","white-shirt","permanent-ten"];

export function CapsuleBuilder(){
  const [selected,setSelected]=useState<string[]>(defaultIds);
  const selectedPieces=pieces.filter(piece=>selected.includes(piece.id));
  const score=useMemo(()=>{
    let value=84;
    if(selected.some(id=>id.includes("suit")||id.includes("jacket"))) value+=4;
    if(selected.some(id=>id.includes("shirt"))) value+=4;
    if(selected.includes("permanent-ten")) value+=3;
    if(selected.some(id=>id.includes("oxford")||id.includes("loafer"))) value+=2;
    if(selected.some(id=>id.includes("belt")||id.includes("watch"))) value+=2;
    return Math.min(99,value);
  },[selected]);

  function toggle(id:string){
    setSelected(current=>{
      if(current.includes(id)) return current.length<=3?current:current.filter(item=>item!==id);
      if(current.length>=5) return current;
      const piece=pieces.find(item=>item.id===id);
      if(!piece) return current;
      if(piece.group==="Tailoring") return [...current.filter(item=>!pieces.find(p=>p.id===item&&p.group==="Tailoring")),id].slice(0,5);
      if(piece.group==="Shirting") return [...current.filter(item=>!pieces.find(p=>p.id===item&&p.group==="Shirting")),id].slice(0,5);
      return [...current,id];
    });
  }

  return <section className="capsuleBuilder permanentCapsule">
    <div className="capsuleIntro"><p>PERMANENT CAPSULE BUILDER</p><h2>Stack three to five pieces. Keep every choice compatible.</h2><span>The builder treats Jentlemens as a wardrobe system rather than a pile of products. Future tailoring, shirting, footwear and hardware remain concept pieces until inventory is confirmed; the Permanent 10 is the only current shoppable offer.</span></div>
    <div className="capsuleWorkspace">
      <div className="capsuleLibrary">{pieces.map(piece=><button key={piece.id} onClick={()=>toggle(piece.id)} className={selected.includes(piece.id)?"active":""}><i style={{background:piece.tone}}/><span>{piece.group}</span><b>{piece.name}</b><small>{piece.status}</small></button>)}</div>
      <div className="capsuleStackPanel">
        <div className="capsuleScore"><span>AUTOMATIC COMPATIBILITY</span><strong>{score}%</strong><div><i style={{width:`${score}%`}}/></div><small>{selected.length}/5 pieces selected</small></div>
        <div className="capsuleStack">{selectedPieces.map((piece,index)=><div key={piece.id}><span>0{index+1}</span><i style={{background:piece.tone}}/><div><b>{piece.name}</b><small>{piece.group}</small></div></div>)}</div>
        <div className="capsuleLogic"><span>BUNDLE LOGIC</span><p>{selected.length===3?"Core capsule: tailoring + shirting + neckwear.":selected.length===4?"Expanded capsule: add footwear or hardware for a complete day-to-evening system.":"Full five-piece capsule: tailoring, shirting, neckwear, footwear and hardware are all represented."}</p></div>
        <Link className="capsuleShopLink" href={`/products/${permanentTenBundle.slug}`}>Shop the Permanent 10 — $500</Link>
      </div>
    </div>
  </section>;
}
