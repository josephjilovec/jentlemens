import { SuitConfigurator } from "@/components/SuitConfigurator";

export default function MadeToOrderPage(){
  return <main>
    <section className="departmentHero mtoHero">
      <div>
        <p className="eyebrow">MADE TO ORDER</p>
        <h1>Your measurements become the order.</h1>
        <p>Configure the suit visually, choose one of the five permanent Jentlemens tailoring colors, then submit the measurement profile used to prepare the order specification.</p>
      </div>
    </section>

    <section className="mtoConfiguratorSection">
      <SuitConfigurator />
    </section>

    <section className="measurementPage upgradedMeasurementPage">
      <div className="measureInstructions">
        <p className="eyebrow">HOW TO MEASURE</p>
        <h2>Measure the body the suit has to fit.</h2>
        <p>Use a soft tailoring tape and measure in inches over a dress shirt and trousers—not outerwear. Keep the tape level and comfortably close to the body without pulling it tight.</p>
        <div className="measureTips">
          <div><span>01</span><b>Shoulder</b><p>Across the natural shoulder points, following the upper back.</p></div>
          <div><span>02</span><b>Chest</b><p>Around the fullest part of the chest with arms relaxed.</p></div>
          <div><span>03</span><b>Sleeve</b><p>From shoulder point to the desired jacket sleeve endpoint.</p></div>
          <div><span>04</span><b>Waist</b><p>Around the natural waist without holding your breath.</p></div>
          <div><span>05</span><b>Inseam</b><p>From the crotch seam to the desired trouser hem.</p></div>
        </div>
      </div>

      <form id="measurement-profile" action="mailto:realjjemail@gmail.com" method="post" encType="text/plain">
        <p className="eyebrow">MEASUREMENT PROFILE</p>
        <h2>Build your suit specification.</h2>
        <div className="fields">{["Height","Shoulder width","Chest","Waist","Seat / hip","Jacket length","Sleeve length","Trouser waist","Outseam","Inseam","Thigh","Rise"].map(x=><label key={x}>{x}<input name={x} required type="number" step="0.25" placeholder="in"/></label>)}</div>
        <label>Fit notes<textarea name="Fit notes" placeholder="Posture, preferred trouser break, room preferences, or anything else relevant."/></label>
        <button className="submit">Submit measurement profile</button>
        <p className="fine">Production tailoring requires manufacturer-specific tolerances and final confirmation before fulfillment.</p>
      </form>
    </section>
  </main>
}
