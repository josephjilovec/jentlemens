"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import type { Product } from "@/lib/catalog";

const swatchColors: Record<string,string> = {
  "Taupe Brown":"#8a725f", "Light Grey":"#c8c8c4", Charcoal:"#484848", Navy:"#1f2f45", Black:"#111111",
  White:"#f2f0e9", "Light Blue":"#a9c8df", Grey:"#989898", Blue:"#345a8a", Brown:"#6b4a35"
};

export function CollectionExperience({ products }: { products: Product[] }) {
  const [palette, setPalette] = useState("All");
  const [fit, setFit] = useState("All");
  const [occasion, setOccasion] = useState("All");
  const [sort, setSort] = useState("Featured");
  const [activeImages, setActiveImages] = useState<Record<string,string>>({});

  const paletteOptions = Array.from(new Set(products.flatMap((p) => p.palette))).slice(0,8);
  const fitOptions = Array.from(new Set(products.map((p) => p.fit)));
  const occasionOptions = Array.from(new Set(products.map((p) => p.occasion)));

  const filtered = useMemo(() => {
    const result = products.filter((p) =>
      (palette === "All" || p.palette.includes(palette)) &&
      (fit === "All" || p.fit === fit) &&
      (occasion === "All" || p.occasion === occasion)
    );
    if (sort === "Price: Low") return [...result].sort((a,b) => Number(a.price.replace(/\D/g,""))-Number(b.price.replace(/\D/g,"")));
    if (sort === "Price: High") return [...result].sort((a,b) => Number(b.price.replace(/\D/g,""))-Number(a.price.replace(/\D/g,"")));
    return result;
  }, [products,palette,fit,occasion,sort]);

  return (
    <>
      <div className="collectionFilters" aria-label="Collection filters">
        <label><span>Palette</span><select value={palette} onChange={(e)=>setPalette(e.target.value)}><option>All</option>{paletteOptions.map((v)=><option key={v}>{v}</option>)}</select></label>
        <label><span>Fit</span><select value={fit} onChange={(e)=>setFit(e.target.value)}><option>All</option>{fitOptions.map((v)=><option key={v}>{v}</option>)}</select></label>
        <label><span>Occasion</span><select value={occasion} onChange={(e)=>setOccasion(e.target.value)}><option>All</option>{occasionOptions.map((v)=><option key={v}>{v}</option>)}</select></label>
        <label className="sortFilter"><span>Sort</span><select value={sort} onChange={(e)=>setSort(e.target.value)}><option>Featured</option><option>Price: Low</option><option>Price: High</option></select></label>
      </div>

      <div className="collectionCount"><span>{filtered.length} pieces</span><button onClick={()=>{setPalette("All");setFit("All");setOccasion("All");}}>Reset filters</button></div>

      <div className="grid productGrid luxuryProductGrid">
        {filtered.map((product, index) => (
          <div className="productSlot" key={product.slug}>
            {index > 0 && index % 5 === 0 && (
              <aside className="editorialCard">
                <span>THE HOUSE FIT / 01</span>
                <h3>Why Athletic Fit?</h3>
                <p>More room through the shoulders and chest, controlled at the waist. The result is cleaner than classic and easier than slim.</p>
                <Link href="/fit-guide">Understand the fit →</Link>
              </aside>
            )}
            <article className="luxuryProductCard">
              <Link className="productImageLink" href={`/products/${product.slug}`}>
                <div className="photo productPhoto">
                  <img className="primaryProductImage" src={activeImages[product.slug] || product.img} alt={product.name} />
                  <img className="secondaryProductImage" src={product.secondaryImg} alt={`${product.name} fabric detail`} />
                  <span className="productBadge">{product.fit === "Athletic" ? "HOUSE FIT" : product.occasion.toUpperCase()}</span>
                </div>
              </Link>
              <div className="meta luxuryMeta">
                <div>
                  <Link href={`/products/${product.slug}`}><h3>{product.name}</h3></Link>
                  <p>{product.colors}</p>
                  <div className="swatches" aria-label={`${product.name} colors`}>
                    {product.palette.map((color)=><button key={color} className="swatch" title={color} aria-label={color} onMouseEnter={()=>setActiveImages((current)=>({...current,[product.slug]:product.img}))} style={{background:swatchColors[color] || "#777"}} />)}
                  </div>
                  <small>{product.note}</small>
                </div>
                <strong>{product.price}</strong>
              </div>
            </article>
          </div>
        ))}
      </div>
    </>
  );
}
