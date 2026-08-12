"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import type { DepartmentConfig, StoreProduct } from "@/lib/site-config";

function badgeLabel(badge: string) {
  const icons: Record<string,string> = {
    "Tailored Wool":"🧵", "Pure Cotton":"🧵", "4-Way Stretch":"⚡", "Moisture-Wicking":"⚡",
    "Heavy Silver":"🛠️", "Solid Steel":"🛠️", "Leathercraft":"◆"
  };
  return `${icons[badge] || "•"} ${badge}`;
}

export function V2DepartmentPage({ department, products, collectionTitle }: { department: DepartmentConfig; products: StoreProduct[]; collectionTitle?: string }) {
  const [color,setColor] = useState("All");
  const [size,setSize] = useState("All");
  const [fabric,setFabric] = useState("All");
  const [fit,setFit] = useState("All");
  const colors = useMemo(()=>["All", ...Array.from(new Set(products.flatMap(p=>p.colors)))],[products]);
  const sizes = useMemo(()=>["All", ...Array.from(new Set(products.flatMap(p=>p.sizes)))],[products]);
  const fabrics = useMemo(()=>["All", ...Array.from(new Set(products.map(p=>p.fabric)))],[products]);
  const fits = useMemo(()=>["All", ...Array.from(new Set(products.map(p=>p.fit)))],[products]);
  const shown = products.filter(p => (color==="All" || p.colors.includes(color)) && (size==="All" || p.sizes.includes(size)) && (fabric==="All" || p.fabric===fabric) && (fit==="All" || p.fit===fit));

  return <main className={`v2Department tone-${department.tone}`}>
    <section className="v2DepartmentHero" style={{backgroundImage:`linear-gradient(90deg,rgba(8,8,8,.72),rgba(8,8,8,.12)),url('${department.hero}')`}}>
      <div className="v2HeroCopy"><p>{department.eyebrow}</p><h1>{collectionTitle || department.title}</h1><div className="v2Rule"/><span>{department.intro}</span></div>
    </section>

    <section className="v2CollectionShell">
      <aside className="v2FilterRail">
        <div><p>FILTER THE EDIT</p><h2>{collectionTitle || department.label}</h2></div>
        <label>Color<select value={color} onChange={e=>setColor(e.target.value)}>{colors.map(x=><option key={x}>{x}</option>)}</select></label>
        <label>Size<select value={size} onChange={e=>setSize(e.target.value)}>{sizes.map(x=><option key={x}>{x}</option>)}</select></label>
        <label>Fabric<select value={fabric} onChange={e=>setFabric(e.target.value)}>{fabrics.map(x=><option key={x}>{x}</option>)}</select></label>
        <label>Fit<select value={fit} onChange={e=>setFit(e.target.value)}>{fits.map(x=><option key={x}>{x}</option>)}</select></label>
        <button type="button" onClick={()=>{setColor("All");setSize("All");setFabric("All");setFit("All")}}>Reset filters</button>
      </aside>

      <div className="v2CollectionMain">
        <div className="v2CollectionTop"><span>{shown.length} piece{shown.length===1?"":"s"}</span><Link href="/athletic-fit-standard">The Athletic Fit Standard →</Link></div>
        <div className="v2ProductGrid">
          {shown.map((product,index)=><article className="v2ProductCard" key={product.slug}>
            <Link href={`/products/${product.slug}`} className="v2ProductVisual">
              <img src={product.image} alt={product.name}/><img className="v2HoverImage" src={product.hoverImage} alt={`${product.name} alternate view`}/>
              {index===0 && <span className="v2HouseBadge">HOUSE EDIT</span>}
            </Link>
            <div className="v2ProductMeta">
              <div><Link href={`/products/${product.slug}`}><h3>{product.name}</h3></Link><p>{product.colors.join(" · ")}</p></div><strong>${product.price}</strong>
            </div>
            <div className="v2MaterialBadges">{product.badges.map(b=><span key={b}>{badgeLabel(b)}</span>)}</div>
            <small>{product.description}</small>
          </article>)}
          {shown.length===0 && <div className="v2Empty"><h3>No pieces match that combination.</h3><p>Reset one or more filters to return to the full edit.</p></div>}
        </div>
      </div>
    </section>

    <section className="v2DepartmentStatement">
      <div><p>WHY THIS DEPARTMENT EXISTS</p><h2>{department.key==="performance"?"Technical fabric stays visibly separate from tailoring.":department.key==="accessories"?"Leather, steel, silver and timepieces are treated as hardware.":"Every category has a clear job inside the wardrobe system."}</h2></div>
      <Link href="/capsule-builder">Build a complete capsule →</Link>
    </section>
  </main>
}
