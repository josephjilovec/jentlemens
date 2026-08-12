import { MeasurementProfileStudio } from "@/components/MeasurementProfileStudio";

export default function MadeToOrderPage(){
  return <main className="v2MtoPage">
    <section className="v2MtoHero"><div><p>MADE TO ORDER / FIT STUDIO</p><h1>Measure once. Build from your actual proportions.</h1><span>The Jentlemens fit studio turns six core body measurements and a preferred silhouette into a reusable local measurement profile for future made-to-order visits.</span></div></section>
    <section className="v2MtoStudio"><MeasurementProfileStudio/></section>
    <section className="v2MtoTrust"><div><span>01</span><h3>Local profile saving</h3><p>Your core fit data can be stored in this browser and preloaded the next time you return.</p></div><div><span>02</span><h3>Proportional preview</h3><p>The suit SVG responds to shoulder, chest and waist inputs so the relationship between measurements is visible.</p></div><div><span>03</span><h3>Human review still matters</h3><p>The preview is guidance, not a production pattern. Final made-to-order specifications require confirmation before fulfillment.</p></div></section>
  </main>
}
