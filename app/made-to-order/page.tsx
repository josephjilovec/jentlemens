import { FitFinderConfigurator } from "@/components/FitFinderConfigurator";
import { MeasurementProfileStudio } from "@/components/MeasurementProfileStudio";

export default function MadeToOrderPage(){
  return <main className="v2MtoPage luxuryMto">
    <section className="v2MtoHero"><div><p>MADE TO ORDER / ATHLETIC FIT</p><h1>Fit starts with proportion, then gets precise.</h1><span>Use the Fit Finder for a fast upper-body profile, then continue into the detailed measurement studio for a reusable local made-to-order profile.</span></div></section>
    <FitFinderConfigurator/>
    <section className="mtoDivider"><p>STEP TWO / DETAILED PROFILE</p><h2>Move from frame-level guidance into the full measurement set.</h2></section>
    <section className="v2MtoStudio"><MeasurementProfileStudio/></section>
    <section className="v2MtoTrust"><div><span>01</span><h3>Frame-first profiling</h3><p>Neck, chest, shoulder and torso establish the broad fit direction before detailed measurements are entered.</p></div><div><span>02</span><h3>Reusable local profile</h3><p>Your detailed measurements can be stored in this browser and preloaded on a later made-to-order visit.</p></div><div><span>03</span><h3>Human review still matters</h3><p>Canvas and SVG previews are guidance, not production patterns. Final specifications require confirmation before fulfillment.</p></div></section>
  </main>;
}
