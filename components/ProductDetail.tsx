"use client";

import Link from "next/link";
import { useState } from "react";
import type { Product } from "@/lib/catalog";

const swatchColors: Record<string,string> = {
  "Taupe Brown":"#8a725f", "Light Grey":"#c8c8c4", Charcoal:"#484848", Navy:"#1f2f45", Black:"#111111",
  White:"#f2f0e9", "Light Blue":"#a9c8df", Grey:"#989898", Blue:"#345a8a", Brown:"#6b4a35"
};

export function ProductDetail({ product }: { product: Product }) {
  const [selectedColor, setSelectedColor] = useState(product.palette[0]);
  const [fitType, setFitType] = useState("Athletic Fit");
  const [modalOpen, setModalOpen] = useState(false);
  const [bagMessage, setBagMessage] = useState("Add to order");

  return (
    <main className="pdpPage">
      <section className="pdpLayout">
        <div className="pdpGallery">
          <div className="pdpHeroImage"><img src={product.img} alt={product.name} /></div>
          <div className="pdpThumbGrid">
            <button aria-label="Front view"><img src={product.img} alt="Front view" /></button>
            <button aria-label="Alternate view"><img src={product.secondaryImg} alt="Alternate tailoring view" /></button>
            <button aria-label="Fabric detail"><div className="fabricTexture" /></button>
          </div>
        </div>

        <div className="pdpBuyPanel">
          <p className="eyebrow">JENTLEMENS PERMANENT COLLECTION</p>
          <h1>{product.name} in {selectedColor}</h1>
          <div className="pdpPrice"><strong>{product.price}</strong><span>Made-to-Order</span></div>
          <p className="pdpIntro">Built around the Jentlemens Athletic Fit: room where an athletic frame needs it, taper where it should stay clean.</p>

          <div className="pdpControl">
            <div className="pdpControlHead"><b>Color palette</b><span>{selectedColor}</span></div>
            <div className="pdpColorChoices">
              {product.palette.map((color)=><button key={color} className={selectedColor===color?"selected":""} onClick={()=>setSelectedColor(color)}><i style={{background:swatchColors[color] || "#777"}} />{color}</button>)}
            </div>
          </div>

          <div className="pdpControl">
            <div className="pdpControlHead"><b>Select fit type</b><span>{fitType}</span></div>
            <label className="fitRadio"><input type="radio" checked={fitType==="Athletic Fit"} onChange={()=>setFitType("Athletic Fit")} /> Standard Athletic Fit</label>
            <label className="fitRadio"><input type="radio" checked={fitType==="Custom Profile"} onChange={()=>setFitType("Custom Profile")} /> Custom measurement profile</label>
          </div>

          <button className="measurementAssistantButton" onClick={()=>setModalOpen(true)}>Find your Athletic Fit size <span>→</span></button>
          <button className="addOrderButton" onClick={()=>{setBagMessage("Added to order ✓"); setTimeout(()=>setBagMessage("Add to order"),1800);}}>{bagMessage} — {product.price}</button>
          <p className="productionNote">Made to order · Complimentary measurement review · Secure fit notes before production</p>

          <div className="pdpSpecs">
            <details open><summary>Fabric specification</summary><p>{product.specs?.fabric || "Premium seasonal fabrication selected for the permanent wardrobe."}</p></details>
            <details><summary>Construction</summary><p>{product.specs?.construction || "Built for a clean line, practical movement, and repeatable house fit."}</p></details>
            <details><summary>Production lead time</summary><p>{product.specs?.leadTime || "Production timing confirmed after measurement review."}</p></details>
          </div>
        </div>
      </section>

      <section className="systemLookbook">
        <div className="lookbookImage"><img src="https://images.unsplash.com/photo-1617137968427-85924c800a22?auto=format&fit=crop&w=1800&q=90" alt="Jentlemens full tailored look" /></div>
        <div className="lookbookCopy">
          <p className="eyebrow">PAIR IT WITH THE SYSTEM</p>
          <h2>One suit. One complete working wardrobe.</h2>
          <p>Build the charcoal tailoring look with the White Crisp Shirt, Black Leather Belt and Cap-Toe Oxford. Every item is selected to reduce guesswork between pieces.</p>
          <div className="lookbookItems"><span>01 / {product.name}</span><span>02 / Office Dress Shirt</span><span>03 / Leather Belt</span><span>04 / Cap-Toe Oxford</span></div>
          <button className="fullLookButton">Add full look to cart — $1,171</button>
        </div>
      </section>

      <section className="pdpTrustRow">
        <div><span>01</span><b>Fit review included</b><p>Submitted measurements are reviewed before the made-to-order specification moves forward.</p></div>
        <div><span>02</span><b>Permanent palette</b><p>Five tailoring colors are designed to combine with the same shirts, shoes and leather.</p></div>
        <div><span>03</span><b>Built as a system</b><p>Future purchases use the same house logic instead of restarting your wardrobe every season.</p></div>
      </section>

      {modalOpen && <div className="measurementModal" role="dialog" aria-modal="true" aria-label="Athletic Fit size assistant">
        <div className="measurementModalCard">
          <button className="modalClose" onClick={()=>setModalOpen(false)} aria-label="Close">×</button>
          <p className="eyebrow">FIT ASSISTANT</p>
          <h2>Find your Athletic Fit starting point.</h2>
          <p>Use your best-fitting jacket as a reference. The made-to-order studio will still review your complete profile before production.</p>
          <div className="fitAssistantFields"><label>Chest<input placeholder="e.g. 42 in" /></label><label>Waist<input placeholder="e.g. 34 in" /></label><label>Height<input placeholder="e.g. 6 ft 0 in" /></label><label>Build<select><option>Athletic</option><option>Broad</option><option>Regular</option></select></label></div>
          <div className="assistantResult"><span>Recommended starting point</span><strong>42R · Athletic Fit</strong><p>Continue to Measurement Studio for production measurements.</p></div>
          <Link className="assistantCta" href="/made-to-order">Build measurement profile →</Link>
        </div>
      </div>}
    </main>
  );
}
