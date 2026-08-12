import { notFound } from "next/navigation";
import { V2ProductDetail } from "@/components/V2ProductDetail";
import { ProductDetail } from "@/components/ProductDetail";
import { storeProducts } from "@/lib/site-config";
import { productBySlug, products as legacyProducts } from "@/lib/catalog";

export function generateStaticParams() {
  return [...storeProducts.map(product=>({slug:product.slug})), ...legacyProducts.map(product=>({slug:product.slug}))];
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = storeProducts.find(product=>product.slug===slug);
  if (product) return <V2ProductDetail product={product}/>;
  const legacy = productBySlug(slug);
  if (!legacy) notFound();
  return <ProductDetail product={legacy} />;
}
