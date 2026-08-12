"use client";

import Link from "next/link";
import { useState } from "react";
import type { StoreProduct } from "@/lib/site-config";

export function V2ProductDetail({product}:{product:StoreProduct}){
  const [color,setColor]=useState(product.colors[0]);
  const [size,setSize]=useState(product.sizes[0]);
  const isPermanentTen=product.slug==="permanent-ten-bundle";

  return <main className="v2Pdp">
    <section className="v2PdpLayout">
      <div className="v2PdpGallery"><div className="v2PdpPrimary"><img src={product.image} alt={product.alt}/></div><div className="v2PdpSecondary"><img src={product.hoverImage} alt={product.hoverAlt}/><div className="v2FabricPanel"><span>{isPermanentTen?"THE OFFER":"MATERIAL"}</span><strong>{isPermanentTen?"10 ties · 1 collection":product.fabric}</strong><p>{isPermanentTen?"$50 per tie":product.badges.join(" · ")||"Permanent house specification"}</p></div></div></div>
      <aside className="v2PdpBuy"><p>JENTLEMENS / {isPermanentTen?"THE PERMANENT 10":product.department.toUpperCase()}</p><h1>{product.name}</h1><div className="v2PdpPrice"><strong>${product.price}</strong><span>{isPermanentTen?"$50 / tie":product.fit}</span></div><p className="v2PdpDescription">{product.description}</p>
        {isPermanentTen ? <>
          <div className="v2PdpBlock"><b>WHAT YOU GET</b><div className="v2ChoiceRow"><button type="button" className="active">10 curated ties</button><button type="button">Solids</button><button type="button">Stripes</button><button type="button">Micro-patterns</button></div></div>
          <div className="v2PdpBlock"><b>BUYING FORMAT</b><div className="v2ChoiceRow sizes"><button type="button" className="active">One 10-pack only</button></div></div>
        </> : <>
          <div className="v2PdpBlock"><b>COLOR <span>{color}</span></b><div className="v2ChoiceRow">{product.colors.map(c=><button type="button" className={color===c?"active":""} onClick={()=>setColor(c)} key={c}>{c}</button>)}</div></div>
          <div className="v2PdpBlock"><b>SIZE / PROFILE <span>{size}</span></b><div className="v2ChoiceRow sizes">{product.sizes.map(s=><button type="button" className={size===s?"active":""} onClick={()=>setSize(s)} key={s}>{s}</button>)}</div></div>
        </>}
        {product.department==="tailoring"&&<Link className="v2ProfileLink" href="/made-to-order">Use or build saved measurement profile →</Link>}
        <button type="button" className="v2AddButton">{isPermanentTen?"Add the complete 10-pack":"Add to order"} — ${product.price}</button>
        <div className="v2PdpSpecs">{isPermanentTen?<><div><span>QUANTITY</span><b>10 ties</b></div><div><span>BUNDLE PRICE</span><b>$500</b></div><div><span>EFFECTIVE PRICE</span><b>$50 per tie</b></div></>:<><div><span>FABRIC</span><b>{product.fabric}</b></div><div><span>FIT</span><b>{product.fit}</b></div><div><span>MATERIAL LOGIC</span><b>{product.badges.join(" / ")||"House standard"}</b></div></>}</div>
      </aside>
    </section>
    <section className="v2PdpSystem"><div><p>{isPermanentTen?"ONE AND DONE":"THE WARDROBE SYSTEM"}</p><h2>{isPermanentTen?"Ten ties without ten separate buying decisions.":"Do not buy the piece in isolation."}</h2><span>{isPermanentTen?"The Permanent 10 is designed as a complete neckwear foundation: restrained solids, classic stripes and small patterns chosen to cover business, formal and evening combinations without turning the closet into an endless assortment.":"Use the capsule builder to see which tailoring, shirt, tie and leather families work around this item before adding more color or complexity."}</span><Link href={isPermanentTen?"/shirting/ties":"/capsule-builder"}>{isPermanentTen?"View the Permanent 10 edit →":"Build the full look →"}</Link></div><div className="v2PdpSystemImage" role="img" aria-label="Male model wearing a tailored Jentlemens-style suit"/></section>
  </main>
}
