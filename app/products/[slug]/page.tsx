import { notFound } from "next/navigation";
import { ProductDetail } from "@/components/ProductDetail";
import { productBySlug, products } from "@/lib/catalog";

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = productBySlug(slug);
  if (!product) notFound();
  return <ProductDetail product={product} />;
}
