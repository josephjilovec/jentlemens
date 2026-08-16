import { FitFinderConfigurator } from "@/components/FitFinderConfigurator";

export default function FitFinderPage(){
  return <main className="featurePage">
    <section className="featureHero"><p>JENTLEMENS FIT SYSTEM</p><h1>Fit Finder.</h1><span>A fast, interactive Athletic Fit profile built from neck, chest, shoulder and torso measurements.</span></section>
    <FitFinderConfigurator/>
    <section className="featureFootnote"><span>NEXT STEP</span><h2>Use the result as a starting point, then continue into the full made-to-order measurement studio.</h2><a href="/made-to-order">Open Made-to-Order Studio →</a></section>
  </main>;
}
