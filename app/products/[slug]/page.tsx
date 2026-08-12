import { notFound } from "next/navigation";
import { V2ProductDetail } from "@/components/V2ProductDetail";
import { activeStoreProducts } from "@/lib/active-inventory";

export function generateStaticParams() {
  return activeStoreProducts.map(product => ({ slug: product.slug }));
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = activeStoreProducts.find(product => product.slug === slug);
  if (!product) notFound();
  return <V2ProductDetail product={product}/>;
}
