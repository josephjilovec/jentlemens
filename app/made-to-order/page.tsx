import { MeasurementStudio } from "@/components/MeasurementStudio";

export default function MadeToOrderPage(){
  return <main>
    <section className="departmentHero mtoHero">
      <div>
        <p className="eyebrow">MADE TO ORDER</p>
        <h1>Your measurements become the order.</h1>
        <p>Build a made-to-order Jentlemens suit specification through a guided fitting studio. Start from scratch or use a baseline Athletic Fit profile, then refine each body measurement against a live visual guide.</p>
      </div>
    </section>

    <section className="mtoConfiguratorSection upgradedMtoSection">
      <MeasurementStudio />
    </section>
  </main>
}
