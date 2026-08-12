import Link from "next/link";

export default function AthleticFitStandard(){
  return <main className="fitStandardPage">
    <section className="fitStandardHero"><div><p>THE CORNERSTONE OF JENTLEMENS</p><h1>The Athletic Fit Standard.</h1><span>Designed for men whose shoulders, chest, seat and thighs outgrow conventional slim blocks before their waist does.</span></div></section>
    <section className="fitProblemGrid"><div><span>01</span><h2>Shoulders first.</h2><p>Generic slim jackets often pull across the upper back and chest. The Athletic Fit block starts with more usable room through the shoulder line.</p></div><div><span>02</span><h2>Chest without the box.</h2><p>Additional room through the developed chest does not require carrying the same excess through the waist.</p></div><div><span>03</span><h2>Thigh room, tapered line.</h2><p>Trousers allow stronger quads and seat dimensions while preserving a controlled silhouette below the knee.</p></div></section>
    <section className="fitStandardDiagram"><div className="fitBody"><i className="shoulderLine"/><i className="chestLine"/><i className="waistLine"/><i className="thighLine"/></div><div><p>ATHLETIC CLASSIC</p><h2>Room where movement and muscle require it.</h2><ul><li>Broader shoulder allowance</li><li>Developed chest room</li><li>Controlled waist suppression</li><li>Higher thigh and seat allowance</li><li>Clean trouser taper</li></ul><Link href="/made-to-order">Build your measurement profile →</Link></div></section>
    <section className="fitComparison"><div><p>CLASSIC FIT</p><h3>Comfortable, but often too loose through the waist.</h3></div><div className="selected"><p>ATHLETIC FIT</p><h3>Upper-body and thigh room with disciplined taper.</h3></div><div><p>SLIM FIT</p><h3>Clean waist, but often restrictive across stronger frames.</h3></div></section>
  </main>
}
