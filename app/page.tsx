import Link from "next/link";
import { departmentConfig, verifiedMenswearAssets } from "@/lib/site-config";

const tieEdit = [
  ["01","Navy Solid","The default business anchor."],
  ["02","Charcoal Solid","Quiet contrast for lighter shirts."],
  ["03","Black Solid","Formal and evening use."],
  ["04","Burgundy Solid","Controlled color without noise."],
  ["05","Taupe Solid","Warm neutral for brown and stone tailoring."],
  ["06","Navy Stripe","Classic boardroom pattern."],
  ["07","Charcoal Stripe","Monochrome structure."],
  ["08","Burgundy Stripe","A restrained heritage note."],
  ["09","Navy Micro Pattern","Pattern that still reads clean from distance."],
  ["10","Charcoal Micro Pattern","The final versatile neutral."],
];

export default function Home(){
  return <main className="v2Home">
    <section className="v2HomeHero" role="img" aria-label={verifiedMenswearAssets.neckwear.primaryAlt} style={{backgroundImage:`linear-gradient(90deg,rgba(8,8,8,.82),rgba(8,8,8,.28)),url('${verifiedMenswearAssets.neckwear.primary}')`}}>
      <div className="v2HomeShade"/>
      <div className="v2HomeHeroCopy"><p>JENTLEMENS / THE PERMANENT 10</p><h1>Ten designer ties.<br/>One decision.</h1><span>A complete curated men's neckwear foundation sold only as one 10-pack: $500 total, or $50 per tie. No individual tie listings. No filler assortment.</span><div><Link href="/products/permanent-ten-bundle">Shop the 10-Pack — $500</Link><Link className="ghost" href="/shirting/ties">See the full edit</Link></div></div>
    </section>

    <section className="v2Manifesto"><p>ONE AND DONE</p><h2>The tie drawer, solved in one purchase.</h2><span>The offer is intentionally simple: ten coordinated men's ties covering solids, stripes and micro-patterns. Instead of asking customers to compare ten separate listings, Jentlemens presents one complete collection with a clear per-piece value.</span></section>

    <section className="v2PaletteSection"><div><p>THE VALUE</p><h2>$500 for the complete ten-tie collection.</h2><span>That works out to $50 per tie. The price is visible immediately so the customer understands the bundle before entering a product page.</span></div><div className="v2PaletteWidget"><Link href="/products/permanent-ten-bundle"><b>10</b><small>Ties included</small></Link><Link href="/products/permanent-ten-bundle"><b>$500</b><small>Bundle price</small></Link><Link href="/products/permanent-ten-bundle"><b>$50</b><small>Effective price per tie</small></Link><Link href="/products/permanent-ten-bundle"><b>1</b><small>Purchase decision</small></Link></div></section>

    <section className="v2Manifesto"><p>THE PERMANENT 10</p><h2>Built to cover the core business and formal rotation.</h2><span>The assortment is structured around dark neutrals, one warm neutral, classic stripes and small patterns so the ten pieces behave like a system rather than ten unrelated accessories.</span></section>

    <section className="v2DepartmentGrid">{tieEdit.map(([number,name,note],index)=><Link key={name} href="/products/permanent-ten-bundle" className={`v2DeptCard card-${(index%5)+1}`} aria-label={`${name}, included in the Jentlemens men's Permanent 10 tie bundle`}><div role="img" aria-label={verifiedMenswearAssets.neckwear.primaryAlt} style={{backgroundImage:`linear-gradient(0deg,rgba(0,0,0,.72),rgba(0,0,0,.18)),url('${verifiedMenswearAssets.neckwear.primary}')`}}/><span>{number}</span><h2>{name}</h2><p>{note}</p><b>Included in the bundle →</b></Link>)}</section>

    <section className="athleticFitPromo"><div className="athleticFitPhoto" role="img" aria-label={verifiedMenswearAssets.shirting.secondaryAlt} style={{backgroundImage:`url('${verifiedMenswearAssets.shirting.secondary}')`}}/><div><p>WHY A BUNDLE</p><h2>No single-tie rabbit hole.</h2><span>The Permanent 10 is deliberately not broken into ten individual SKUs. The customer buys the complete edited set, which keeps the storefront cleaner and preserves the logic of the collection.</span><Link href="/products/permanent-ten-bundle">View the complete offer →</Link></div></section>

    <section className="v2Manifesto"><p>THE JENTLEMENS HOUSE</p><h2>Five menswear departments. Zero placeholder fashion noise.</h2><span>Tailoring & Suiting, Shirting & Tops, Performance & Athletic, Footwear, and Accessories & Hardware remain the long-term house architecture. Until future products have confirmed inventory, pricing and verified menswear photography, their collection pages remain editorial rather than showing mismatched stock placeholders.</span></section>

    <section className="v2DepartmentGrid">{departmentConfig.map((dept,index)=><Link key={dept.key} href={dept.href} className={`v2DeptCard card-${index+1}`} aria-label={`Explore ${dept.label}`}><div role="img" aria-label={dept.heroAlt} style={{backgroundImage:`linear-gradient(0deg,rgba(0,0,0,.58),rgba(0,0,0,.03)),url('${dept.hero}')`}}/><span>0{index+1}</span><h2>{dept.label}</h2><p>{dept.intro}</p><b>Explore the house →</b></Link>)}</section>
  </main>
}
