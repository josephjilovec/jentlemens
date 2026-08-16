import { FabricTailoringExplorer } from "@/components/FabricTailoringExplorer";

export default function FabricExplorerPage(){
  return <main className="featurePage">
    <section className="featureHero fabricHero"><p>MATERIAL / CONSTRUCTION / DRAPE</p><h1>Fabric & Tailoring Explorer.</h1><span>Inspect surface character, comparative breathability and construction cues before choosing a tailoring direction.</span></section>
    <FabricTailoringExplorer/>
    <section className="featureFootnote"><span>DESIGN REFERENCE</span><h2>Material studies are comparative guides. Final cloth weight, composition and mill specifications belong on confirmed product pages.</h2><a href="/tailoring">Explore Tailoring & Suiting →</a></section>
  </main>;
}
