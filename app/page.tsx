import Link from "next/link";
import { CapsuleBuilder } from "@/components/CapsuleBuilder";
import { departmentConfig, suitPalette } from "@/lib/site-config";

export default function Home(){
  return <main className="v2Home">
    <section className="v2HomeHero">
      <div className="v2HomeShade"/>
      <div className="v2HomeHeroCopy"><p>JENTLEMENS / THE DISCIPLINED MEN'S WARDROBE</p><h1>Built to fit.<br/>Built to combine.</h1><span>Premium menswear organized around Athletic Fit proportions, a permanent neutral tailoring palette and clear separation between natural tailoring fabrics and technical performance clothing.</span><div><Link href="/tailoring">Shop Tailoring</Link><Link className="ghost" href="/made-to-order">Open Fit Studio</Link></div></div>
    </section>

    <section className="v2Manifesto"><p>THE HOUSE SYSTEM</p><h2>Five departments. One disciplined wardrobe.</h2><span>Tailoring, shirting, performance, leather and hardware each keep their own material identity while sharing the same restrained design language.</span></section>

    <section className="v2DepartmentGrid">{departmentConfig.map((dept,index)=><Link key={dept.key} href={dept.href} className={`v2DeptCard card-${index+1}`}><div style={{backgroundImage:`linear-gradient(0deg,rgba(0,0,0,.58),rgba(0,0,0,.03)),url('${dept.hero}')`}}/><span>0{index+1}</span><h2>{dept.label}</h2><p>{dept.intro}</p><b>Enter department →</b></Link>)}</section>

    <section className="v2PaletteSection"><div><p>THE PERMANENT FIVE</p><h2>Five suit colors. Dozens of clean combinations.</h2><span>The tailoring palette is intentionally narrow so shirts, ties, footwear and leather can be bought as a system instead of isolated pieces.</span></div><div className="v2PaletteWidget">{suitPalette.map(([name,hex])=><Link href="/capsule-builder" key={name}><i style={{background:hex}}/><b>{name}</b><small>Build combinations →</small></Link>)}</div></section>

    <section className="athleticFitPromo"><div className="athleticFitPhoto"/><div><p>THE ATHLETIC FIT STANDARD</p><h2>Room where a stronger frame needs it. Control everywhere else.</h2><span>Broad shoulders, developed chests, larger thighs and tapered waists expose the compromises in generic slim and classic fits. Jentlemens starts with that problem instead of treating it as an alteration afterthought.</span><Link href="/athletic-fit-standard">Understand the cut →</Link></div></section>

    <CapsuleBuilder/>

    <section className="fitStudioPromo"><div><p>MEASUREMENT PROFILE</p><h2>Measure once. Save the profile. Use it again.</h2><span>The made-to-order studio stores your core measurement profile locally on your device so repeat tailoring orders can begin with the same fit data.</span><Link href="/made-to-order">Build measurement profile →</Link></div><div className="fitDiagram"><i/><i/><i/><span>CHEST</span><span>WAIST</span><span>INSEAM</span></div></section>
  </main>
}
