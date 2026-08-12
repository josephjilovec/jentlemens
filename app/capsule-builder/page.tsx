import { CapsuleBuilder } from "@/components/CapsuleBuilder";

export default function CapsuleBuilderPage(){
  return <main className="capsulePage">
    <section className="capsulePageHero"><div><p>JENTLEMENS WARDROBE SYSTEM</p><h1>Build your capsule.</h1><span>Start with tailoring. Let the system narrow the shirts, ties, shoes and leather that naturally belong around it.</span></div></section>
    <CapsuleBuilder/>
  </main>
}
