import Link from "next/link";
import { departmentConfig } from "@/lib/site-config";

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
    <section className="v2HomeHero" style={{backgroundImage:"linear-gradient(90deg,rgba(8,8,8,.82),rgba(8,8,8,.28)),url('https://images.unsplash.com/photo-1589756823695-278bc923f962?auto=format&fit=crop&w=2200&q=92')"}}>
      <div className="v2HomeShade"/>
      <div className="v2HomeHeroCopy"><p>JENTLEMENS / THE PERMANENT 10</p><h1>Ten designer ties.<br/>One decision.</h1><span>A complete curated neckwear foundation sold only as one 10-pack: $500 total, or $50 per tie. No individual tie listings. No filler assortment.</span><div><Link href="/products/permanent-ten-bundle">Shop the 10-Pack — $500</Link><Link className="ghost" href="/shirting/ties">See the full edit</Link></div></div>
    </section>

    <section className="v2Manifesto"><p>ONE AND DONE</p><h2>The tie drawer, solved in one purchase.</h2><span>The offer is intentionally simple: ten coordinated ties covering solids, stripes and micro-patterns. Instead of asking customers to compare ten separate listings, Jentlemens presents one complete collection with a clear per-piece value.</span></section>

    <section className="v2PaletteSection"><div><p>THE VALUE</p><h2>$500 for the complete ten-tie collection.</h2><span>That works out to $50 per tie. The price is visible immediately so the customer understands the bundle before entering a product page.</span></div><div className="v2PaletteWidget"><Link href="/products/permanent-ten-bundle"><b>10</b><small>Ties included</small></Link><Link href="/products/permanent-ten-bundle"><b>$500</b><small>Bundle price</small></Link><Link href="/products/permanent-ten-bundle"><b>$50</b><small>Effective price per tie</small></Link><Link href="/products/permanent-ten-bundle"><b>1</b><small>Purchase decision</small></Link></div></section>

    <section className="v2Manifesto"><p>THE PERMANENT 10</p><h2>Built to cover the core business and formal rotation.</h2><span>The assortment is structured around dark neutrals, one warm neutral, classic stripes and small patterns so the ten pieces behave like a system rather than ten unrelated accessories.</span></section>

    <section className="v2DepartmentGrid">{tieEdit.map(([number,name,note],index)=><Link key={name} href="/products/permanent-ten-bundle" className={`v2DeptCard card-${(index%5)+1}`}><div style={{backgroundImage:"linear-gradient(0deg,rgba(0,0,0,.72),rgba(0,0,0,.18)),url('https://images.unsplash.com/photo-1598032895397-b9472444bf93?auto=format&fit=crop&w=1400&q=88')"}}/><span>{number}</span><h2>{name}</h2><p>{note}</p><b>Included in the bundle →</b></Link>)}</section>

    <section className="athleticFitPromo"><div className="athleticFitPhoto" style={{backgroundImage:"url('https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=1600&q=90')"}}/><div><p>WHY A BUNDLE</p><h2>No single-tie rabbit hole.</h2><span>The Permanent 10 is deliberately not broken into ten individual SKUs. The customer buys the complete edited set, which keeps the storefront cleaner and preserves the logic of the collection.</span><Link href="/products/permanent-ten-bundle">View the complete offer →</Link></div></section>

    <section className="v2Manifesto"><p>THE JENTLEMENS HOUSE</p><h2>The broader categories remain part of the brand, not fake inventory.</h2><span>Tailoring, shirting, performance, footwear and accessories can stay visible as the long-term house architecture. Until those products have confirmed inventory, pricing and correct product photography, their collection pages remain editorial rather than showing stock-photo placeholders.</span></section>

    <section className="v2DepartmentGrid">{departmentConfig.map((dept,index)=><Link key={dept.key} href={dept.href} className={`v2DeptCard card-${index+1}`}><div style={{backgroundImage:`linear-gradient(0deg,rgba(0,0,0,.58),rgba(0,0,0,.03)),url('${dept.hero}')`}}/><span>0{index+1}</span><h2>{dept.label}</h2><p>{dept.intro}</p><b>Explore the house →</b></Link>)}</section>
  </main>
}
