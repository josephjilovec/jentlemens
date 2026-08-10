import Link from "next/link";

const departments = [
  {name:"Suits",href:"/suits",copy:"Made-to-order Athletic Fit tailoring in five permanent neutral colors.",img:"https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1400&q=85"},
  {name:"Shirts",href:"/shirts",copy:"Permanent office solids plus a very small rotating pattern edit.",img:"https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=1400&q=85"},
  {name:"Trousers",href:"/trousers",copy:"The same tailoring palette, available as versatile separates.",img:"https://images.unsplash.com/photo-1598808503746-f34c53b9323e?auto=format&fit=crop&w=1400&q=85"},
  {name:"Shoes",href:"/shoes",copy:"Black and brown dress shoes. One light and one dark seasonal trainer.",img:"https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?auto=format&fit=crop&w=1400&q=85"},
  {name:"Accessories",href:"/accessories",copy:"Belts, socks and a tie edit designed to finish the system without clutter.",img:"https://images.unsplash.com/photo-1589756823695-278bc923f962?auto=format&fit=crop&w=1400&q=85"}
];

export default function HomePage(){return <main>
  <section className="hero" id="top"><div className="heroShade"/><div className="heroCopy"><p>THE PERMANENT MEN'S WARDROBE</p><h1>Built to fit.<br/>Built to combine.</h1><div className="rule"/><p className="lede">Jentlemens is a focused menswear system built around one house fit: <strong>Athletic Fit</strong> — cleaner than classic, easier than slim.</p><div className="actions"><Link href="/new">Shop the current edit</Link><Link href="/made-to-order" className="outlineCta">Build a made-to-order suit</Link></div></div></section>

  <section className="homeIntro"><p className="eyebrow">THE JENTLEMENS SYSTEM</p><h2>A real store, organized by department.</h2><p>Instead of burying every category inside one long landing page, the collection is now structured like a focused menswear house. Each department has its own product edit, fit logic and styling context.</p></section>

  <section className="departmentCards">{departments.map((item)=><Link href={item.href} className="departmentCard" key={item.name}><div className="departmentImage" style={{backgroundImage:`linear-gradient(0deg,rgba(0,0,0,.58),rgba(0,0,0,.05)),url('${item.img}')`}}/><div><span>SHOP DEPARTMENT</span><h2>{item.name}</h2><p>{item.copy}</p><b>Explore {item.name} →</b></div></Link>)}</section>

  <section className="palette"><p className="eyebrow">PERMANENT TAILORING PALETTE</p><h2>Five suit colors. Almost everything works together.</h2><div className="swatches">{[["Taupe Brown","#8A735D"],["Light Grey","#b8b8b3"],["Charcoal","#444648"],["Navy","#172033"],["Black","#111"]].map(([n,c])=><div key={n}><i style={{background:c}}/><span>{n}</span></div>)}</div></section>

  <section className="homeSplit"><div className="homeSplitImage"/><div><p className="eyebrow">THE HOUSE FIT</p><h2>Learn your Jentlemens fit once.</h2><p>Athletic Fit sits between traditional classic and slim. The goal is consistency across tailoring, shirts and trousers—not a different silhouette every season.</p><Link className="darkCta" href="/fit-guide">Read the Fit Guide →</Link></div></section>

  <section className="homeMto"><div><p className="eyebrow">MADE TO ORDER</p><h2>Your measurements become the suit.</h2><p>Submit the core body and garment measurements required for production, review your fit notes, and build a suit specification around your actual proportions.</p><Link href="/made-to-order">Open Measurement Studio →</Link></div></section>
 </main>}
