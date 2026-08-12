import { defineMenswearProduct, verifiedMenswearAssets, type StoreProduct } from "@/lib/site-config";

export const permanentTenBundle: StoreProduct = defineMenswearProduct({
  id: "shirting-permanent-ten-bundle",
  slug: "permanent-ten-bundle",
  name: "The Permanent 10 Designer Tie Bundle",
  department: "shirting",
  genderTarget: "menswear",
  collection: "ties",
  price: 500,
  colors: ["Navy", "Charcoal", "Black", "Burgundy", "Taupe", "Classic Stripe", "Micro Pattern"],
  sizes: ["10-Tie Bundle"],
  fabric: "Curated designer neckwear assortment",
  fit: "Classic",
  badges: [],
  image: verifiedMenswearAssets.neckwear.primary,
  alt: "Rack of men's silk neckties representing the Jentlemens Permanent 10 bundle",
  hoverImage: verifiedMenswearAssets.neckwear.secondary,
  hoverAlt: "Men's dress shirt and necktie pairing illustrating the Permanent 10 formal styling system",
  description: "One complete ten-tie collection for $500. A restrained mix of solids, stripes and micro-patterns selected to cover the core formal and business wardrobe without requiring ten separate purchases.",
});

export const activeStoreProducts: StoreProduct[] = [permanentTenBundle];

export function activeProductsForDepartment(department: string, collection?: string) {
  return activeStoreProducts.filter(product => product.department === department && (!collection || product.collection === collection));
}
