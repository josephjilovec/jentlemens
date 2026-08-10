"use client";

import { useMemo, useState } from "react";

const products = [
  {name:"Athletic Fit Suit",type:"Suits",price:"$495",colors:"Taupe Brown · Light Grey · Charcoal · Navy · Black",img:"https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1400&q=85"},
  {name:"Athletic Fit Trouser",type:"Trousers",price:"$145",colors:"Taupe Brown · Light Grey · Charcoal · Navy · Black",img:"https://images.unsplash.com/photo-1598808503746-f34c53b9323e?auto=format&fit=crop&w=1400&q=85"},
  {name:"Office Dress Shirt",type:"Shirts",price:"$78",colors:"White · Light Blue · Grey · Navy · Black",img:"https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=1400&q=85"},
  {name:"Friday Microcheck",type:"Shirts",price:"$84",colors:"Blue microcheck · Grey microcheck · seasonal check",img:"https://images.unsplash.com/photo-1596755389378-c31d21fd1273?auto=format&fit=crop&w=1400&q=85"},
  {name:"Cap-Toe Oxford",type:"Shoes",price:"$185",colors:"Black · Brown",img:"https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?auto=format&fit=crop&w=1400&q=85"},
  {name:"Flex Oxford",type:"Shoes",price:"$195",colors:"Black · British tan",img:"https://images.unsplash.com/photo-1614251056216-f748f76cd228?auto=format&fit=crop&w=1400&q=85"},
  {name:"Everyday Trainer — Dark",type:"Trainers",price:"$125",colors:"Seasonal dark neutral",img:"https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1400&q=85"},
  {name:"Everyday Trainer — Light",type:"Trainers",price:"$125",colors:"Seasonal light neutral",img:"https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&w=1400&q=85"},
  {name:"Leather Belt",type:"Accessories",price:"$58",colors:"Black · Brown",img:"https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=1400&q=85"},
  {name:"Office Sock Set",type:"Accessories",price:"$36",colors:"Grey · Charcoal · Navy · Black",img:"https://images.unsplash.com/photo-1586350977771-b3b0abd50c82?auto=format&fit=crop&w=1400&q=85"},
  {name:"Silk Tie Edit",type:"Accessories",price:"$55",colors:"Ten-piece permanent edit",img:"https://images.unsplash.com/photo-1589756823695-278bc923f962?auto=format&fit=crop&w=1400&q=85"},
];

const nav = ["New","Suits","Shirts","Trousers","Shoes","Accessories"];

export default function HomePage(){
 const [filter,setFilter]=useState("New");
 const [cart,setCart]=useState(0);
 const [measureOpen,setMeasureOpen]=useState(false);
 const shown=useMemo(()=>filter==="New"?products:products.filter(p=>p.type===filter),[filter]);
 return <main>
  <div className="announcement">ATHLETIC FIT / MADE-TO-ORDER SUITING / LIMITED SEASONAL FOOTWEAR</div>
  <header><a className="brand" href="#top"><span>J</span><b>JENTLEMENS</b></a><nav>{nav.map(n=><button key={n} onClick={()=>setFilter(n)} className={filter===n?"active":""}>{n}</button>)}</nav><button className="cart">Bag {cart}</button></header>

  <section className="hero" id="top"><div className="heroShade"/><div className="heroCopy"><p>THE PERMANENT MEN'S WARDROBE</p><h1>Built to fit.<br/>Built to combine.</h1><div className="rule"/><p className="lede">Jentlemens is a focused menswear system built around one house fit: <strong>Athletic Fit</strong> — cleaner than classic, easier than slim.</p><div className="actions"><a href="#shop">Shop the wardrobe</a><button onClick={()=>setMeasureOpen(true)}>Build a made-to-order suit</button></div></div></section>

  <section className="fit"><div><p className="eyebrow">THE HOUSE FIT</p><h2>One fit language.<br/>Across the wardrobe.</h2><p>Athletic Fit is slightly trimmer than a traditional classic cut and intentionally more forgiving than slim fit. The goal is repeatability: once you understand your Jentlemens size, you can move through shirts, trousers and tailoring with fewer surprises.</p></div><div className="fitScale"><div><span>CLASSIC</span><i/></div><div className="chosen"><span>ATHLETIC</span><i/></div><div><span>SLIM</span><i/></div><small>Structured shoulder · clean waist · room through seat and thigh</small></div></section>

  <section className="palette"><p className="eyebrow">PERMANENT PALETTE</p><h2>Five suit colors. Almost everything works together.</h2><div className="swatches">{[["Taupe Brown","#8a735d"],["Light Grey","#b8b8b3"],["Charcoal","#444648"],["Navy","#172033"],["Black","#111"]].map(([n,c])=><div key={n}><i style={{background:c}}/><span>{n}</span></div>)}</div></section>

  <section className="shop" id="shop"><div className="shopHead"><div><p className="eyebrow">THE WARDROBE</p><h2>{filter==="New"?"Everything earns its place.":filter}</h2></div><div className="filters">{nav.map(n=><button key={n} onClick={()=>setFilter(n)} className={filter===n?"active":""}>{n}</button>)}</div></div><div className="grid">{shown.map(p=><article key={p.name}><div className="photo"><img src={p.img} alt=""/><button onClick={()=>setCart(v=>v+1)}>Quick add</button></div><div className="meta"><div><h3>{p.name}</h3><p>{p.colors}</p></div><strong>{p.price}</strong></div></article>)}</div></section>

  <section className="wardrobe"><div className="wardrobeImage"/><div className="wardrobeCopy"><p className="eyebrow">THE SYSTEM</p><h2>Less choice.<br/>Better combinations.</h2><p>The collection is intentionally narrow: office shirts in white, light blue, grey, navy and black; a few rotating microchecks; five permanent tailoring colors including taupe brown, light grey, charcoal, navy and black; black and brown leather; and seasonal trainers in one light and one dark neutral.</p><div className="combo"><span>MON</span><b>Navy suit / white shirt / brown Oxford</b><span>WED</span><b>Grey trouser / blue shirt / black Oxford</b><span>FRI</span><b>Taupe brown trouser / white shirt / brown Oxford</b></div></div></section>

  <section className="shoeStory"><div><p className="eyebrow">FOOTWEAR / LIMITED EDIT</p><h2>Formal when it should be. Comfortable when it can be.</h2><p>The permanent dress-shoe palette stays black and brown. Alongside a sleek formal Oxford, Jentlemens carries a lighter flexible hybrid inspired by the comfort-first dress-shoe category, plus two everyday trainers. Seasonal trainer colors and details change periodically rather than multiplying into an endless catalog.</p></div><div className="shoeTiles"><div className="formal"><span>FORMAL OXFORD</span></div><div className="hybrid"><span>FLEX OXFORD</span></div><div className="trainer"><span>SEASONAL TRAINER</span></div></div></section>

  <section className="sizing"><div><p className="eyebrow">SIMPLE SIZING</p><h2>Fewer size systems to learn.</h2></div><div className="sizeCards"><article><span>SHIRTS / KNITS</span><h3>S · M · L · XL · 2XL</h3><p>No extended size maze. Every garment includes garment measurements so customers can compare against a shirt they already own.</p></article><article><span>SOCKS</span><h3>M / L</h3><p>Two practical bands tied to shoe size rather than unnecessary S–XL fragmentation.</p></article><article><span>BELTS</span><h3>32 · 34 · 36 · 38 · 40 · 42 · 44</h3><p>Conventional dress-belt sizing. The fit guide tells customers to size above their trouser waist where appropriate.</p></article></div></section>

  <section className="mto"><div className="mtoImage"/><div><p className="eyebrow">MADE TO ORDER</p><h2>Your measurements become the order.</h2><p>Suits are not selected from a generic rack size. The customer enters the core body and garment measurements required for production, reviews the summary, and submits the specification with the order.</p><button onClick={()=>setMeasureOpen(true)}>Open measurement studio</button></div></section>

  <footer><div className="footerBrand"><b>JENTLEMENS</b><p>A disciplined men's wardrobe built around Athletic Fit.</p></div><div><b>SHOP</b><a href="#shop">Suits</a><a href="#shop">Shirts</a><a href="#shop">Shoes</a></div><div><b>SERVICE</b><a href="#fit">Fit guide</a><button onClick={()=>setMeasureOpen(true)}>Made to order</button><a href="mailto:realjjemail@gmail.com">Contact</a></div><div className="bottom">© 2026 Jentlemens <span>A Joseph Jilovec Venture</span><a href="https://www.josephjilovec.com/ventures">Explore the Venture Studio →</a></div></footer>

 {measureOpen&&<div className="modal" onClick={()=>setMeasureOpen(false)}><div className="measure" onClick={e=>e.stopPropagation()}><button className="close" onClick={()=>setMeasureOpen(false)}>×</button><div className="figure"><div className="body"><i className="shoulder"/><i className="chest"/><i className="sleeve"/><i className="waist"/><i className="inseam"/></div><small>Select your measurements in inches. Measure over a shirt and trousers, not outerwear.</small></div><form onSubmit={e=>{e.preventDefault();alert("Measurement profile saved for checkout prototype.");setMeasureOpen(false)}}><p className="eyebrow">JENTLEMENS MEASUREMENT STUDIO</p><h2>Made-to-order profile</h2><div className="fields">{["Height","Shoulder width","Chest","Waist","Seat / hip","Jacket length","Sleeve length","Trouser waist","Outseam","Inseam","Thigh","Rise"].map(x=><label key={x}>{x}<input required type="number" step="0.25" placeholder="in"/></label>)}</div><label>Fit notes<textarea placeholder="Posture, preferred trouser break, room preferences, or anything we should know."/></label><button className="submit">Save measurement profile</button><p className="fine">Prototype measurement capture. Production tailoring would require manufacturer-specific tolerances and final confirmation before fulfillment.</p></form></div></div>}
 </main>
}
