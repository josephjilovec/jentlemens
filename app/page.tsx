import Link from "next/link";
import { departmentConfig, verifiedMenswearAssets } from "@/lib/site-config";
import { FitFinderConfigurator } from "@/components/FitFinderConfigurator";
import { FabricTailoringExplorer } from "@/components/FabricTailoringExplorer";
import { CapsuleBuilder } from "@/components/CapsuleBuilder";

const houseFeatures = [
  {number:"01",eyebrow:"ATHLETIC FIT",title:"Built around stronger proportions.",text:"Broader shoulders, developed chests and stronger thighs should not force excess fabric through the waist.",href:"/fit-finder"},
  {number:"02",eyebrow:"MADE TO ORDER",title:"Measurement before assumption.",text:"Start with a fit profile, then move into the detailed made-to-order studio for reusable local measurements.",href:"/made-to-order"},
  {number:"03",eyebrow:"PERMANENT WARDROBE",title:"Fewer pieces. Better combinations.",text:"Neutral tailoring, disciplined shirting and controlled accessories are designed to work as one repeatable system.",href:"/capsule-builder"},
];

export default function Home(){
  return <main className="v2Home luxuryHome">
    <section className="v2HomeHero luxuryHomeHero" role="img" aria-label={verifiedMenswearAssets.tailoring.primaryAlt} style={{backgroundImage:`linear-gradient(90deg,rgba(17,17,17,.9),rgba(17,17,17,.25)),url('${verifiedMenswearAssets.tailoring.primary}')`}}>
      <div className="v2HomeShade"/>
      <div className="v2HomeHeroCopy"><p>JENTLEMENS / ATHLETIC FIT / MADE TO ORDER</p><h1>Built for the frame standard menswear misses.</h1><span>Luxury tailoring and athletic menswear organized around proportion, material and a permanent neutral wardrobe—not seasonal noise.</span><div><Link href="/fit-finder">Find Your Fit</Link><Link className="ghost" href="/made-to-order">Enter the Fit Studio</Link></div></div>
    </section>

    <section className="housePositioning"><div><p>THE HOUSE STANDARD</p><h2>Tailored discipline.<br/>Athletic proportion.</h2></div><span>Jentlemens sits between traditional tailoring and modern performance menswear: structured enough for formal life, flexible enough for stronger frames, and restrained enough to remain useful for years.</span></section>

    <section className="houseFeatureGrid">{houseFeatures.map(item=><Link href={item.href} key={item.number}><span>{item.number}</span><small>{item.eyebrow}</small><h3>{item.title}</h3><p>{item.text}</p><b>Explore →</b></Link>)}</section>

    <FitFinderConfigurator/>
    <FabricTailoringExplorer/>
    <CapsuleBuilder/>

    <section className="currentOffer">
      <div className="currentOfferImage" role="img" aria-label={verifiedMenswearAssets.neckwear.primaryAlt} style={{backgroundImage:`linear-gradient(0deg,rgba(17,17,17,.35),rgba(17,17,17,.05)),url('${verifiedMenswearAssets.neckwear.primary}')`}}/>
      <div><p>CURRENT SHIP-READY OFFER</p><h2>The Permanent 10.</h2><span>Ten coordinated designer ties sold as one $500 collection. The rest of the Jentlemens house remains editorial until inventory and final product photography are confirmed.</span><div className="offerNumbers"><b>10<small>Ties</small></b><b>$500<small>Collection</small></b><b>$50<small>Per tie</small></b></div><Link href="/products/permanent-ten-bundle">Shop the 10-Pack</Link></div>
    </section>

    <section className="v2Manifesto"><p>THE FIVE-DEPARTMENT HOUSE</p><h2>One menswear system, organized by function.</h2><span>Tailoring & Suiting, Shirting & Tops, Performance & Athletic, Footwear, and Accessories & Hardware form the long-term architecture. Each department stays editorial until a product has confirmed inventory, pricing and verified menswear photography.</span></section>

    <section className="v2DepartmentGrid">{departmentConfig.map((dept,index)=><Link key={dept.key} href={dept.href} className={`v2DeptCard card-${index+1}`} aria-label={`Explore ${dept.label}`}><div role="img" aria-label={dept.heroAlt} style={{backgroundImage:`linear-gradient(0deg,rgba(17,17,17,.68),rgba(17,17,17,.08)),url('${dept.hero}')`}}/><span>0{index+1}</span><h2>{dept.label}</h2><p>{dept.intro}</p><b>Explore the house →</b></Link>)}</section>
  </main>;
}
