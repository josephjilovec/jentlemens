import type { StoreProduct } from "@/lib/site-config";

export const permanentTenBundle: StoreProduct = {
  slug: "permanent-ten-bundle",
  name: "The Permanent 10 Designer Tie Bundle",
  department: "shirting",
  collection: "ties",
  price: 500,
  colors: ["Navy", "Charcoal", "Black", "Burgundy", "Taupe", "Classic Stripe", "Micro Pattern"],
  sizes: ["10-Tie Bundle"],
  fabric: "Curated designer neckwear assortment",
  fit: "Classic",
  badges: [],
  image: "https://images.unsplash.com/photo-1589756823695-278bc923f962?auto=format&fit=crop&w=1600&q=90",
  hoverImage: "https://images.unsplash.com/photo-1598032895397-b9472444bf93?auto=format&fit=crop&w=1600&q=90",
  description: "One complete ten-tie collection for $500. A restrained mix of solids, stripes and micro-patterns selected to cover the core formal and business wardrobe without requiring ten separate purchases."
};

export const activeStoreProducts: StoreProduct[] = [permanentTenBundle];

export function activeProductsForDepartment(department: string, collection?: string) {
  return activeStoreProducts.filter(product => product.department === department && (!collection || product.collection === collection));
}
