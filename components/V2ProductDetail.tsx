"use client";

import Link from "next/link";
import { useState } from "react";
import type { StoreProduct } from "@/lib/site-config";

export function V2ProductDetail({product}:{product:StoreProduct}){
  const [color,setColor]=useState(product.colors[0]);
  const [size,setSize]=useState(product.sizes[0]);
  return <main className="v2Pdp">
    <section className="v2PdpLayout">
      <div className="v2PdpGallery"><div className="v2PdpPrimary"><img src={product.image} alt={product.name}/></div><div className="v2PdpSecondary"><img src={product.hoverImage} alt={`${product.name} alternate view`}/><div className="v2FabricPanel"><span>MATERIAL</span><strong>{product.fabric}</strong><p>{product.badges.join(" · ")||"Permanent house specification"}</p></div></div></div>
      <aside className="v2PdpBuy"><p>JENTLEMENS / {product.department.toUpperCase()}</p><h1>{product.name}</h1><div className="v2PdpPrice"><strong>${product.price}</strong><span>{product.fit}</span></div><p className="v2PdpDescription">{product.description}</p>
        <div className="v2PdpBlock"><b>COLOR <span>{color}</span></b><div className="v2ChoiceRow">{product.colors.map(c=><button type="button" className={color===c?"active":""} onClick={()=>setColor(c)} key={c}>{c}</button>)}</div></div>
        <div className="v2PdpBlock"><b>SIZE / PROFILE <span>{size}</span></b><div className="v2ChoiceRow sizes">{product.sizes.map(s=><button type="button" className={size===s?"active":""} onClick={()=>setSize(s)} key={s}>{s}</button>)}</div></div>
        {product.department==="tailoring"&&<Link className="v2ProfileLink" href="/made-to-order">Use or build saved measurement profile →</Link>}
        <button type="button" className="v2AddButton">Add to order — ${product.price}</button>
        <div className="v2PdpSpecs"><div><span>FABRIC</span><b>{product.fabric}</b></div><div><span>FIT</span><b>{product.fit}</b></div><div><span>MATERIAL LOGIC</span><b>{product.badges.join(" / ")||"House standard"}</b></div></div>
      </aside>
    </section>
    <section className="v2PdpSystem"><div><p>THE WARDROBE SYSTEM</p><h2>Do not buy the piece in isolation.</h2><span>Use the capsule builder to see which tailoring, shirt, tie and leather families work around this item before adding more color or complexity.</span><Link href="/capsule-builder">Build the full look →</Link></div><div className="v2PdpSystemImage"/></section>
  </main>
}
