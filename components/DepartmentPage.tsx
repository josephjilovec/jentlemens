import Link from "next/link";
import type { Product } from "@/lib/catalog";
import { CollectionExperience } from "@/components/CollectionExperience";

export function ProductGrid({ products }: { products: Product[] }) {
  return <CollectionExperience products={products} />;
}

export function DepartmentPage({ eyebrow, title, intro, image, products, children }: { eyebrow: string; title: string; intro: string; image: string; products: Product[]; children?: React.ReactNode }) {
  return (
    <main>
      <section className="departmentHero" style={{backgroundImage:`linear-gradient(90deg,rgba(8,8,8,.75),rgba(8,8,8,.15)),url('${image}')`}}>
        <div><p className="eyebrow">{eyebrow}</p><h1>{title}</h1><p>{intro}</p></div>
      </section>
      {children}
      <section className="departmentShop">
        <div className="shopHead"><div><p className="eyebrow">SHOP THE EDIT</p><h2>Built to work together.</h2></div><Link className="textCta" href="/fit-guide">Understand Athletic Fit →</Link></div>
        <ProductGrid products={products} />
      </section>
    </main>
  );
}
