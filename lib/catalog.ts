export type Product = {
  slug: string;
  name: string;
  type: "Suits" | "Shirts" | "Trousers" | "Shoes" | "Accessories";
  price: string;
  colors: string;
  palette: string[];
  fit: "Athletic" | "Tailored" | "Classic" | "Universal";
  occasion: "Boardroom" | "Evening" | "Travel" | "Everyday";
  img: string;
  secondaryImg: string;
  note: string;
  specs?: {
    fabric: string;
    construction: string;
    leadTime: string;
  };
};

export const products: Product[] = [
  {
    slug: "permanent-ten-bundle",
    name: "The Permanent 10 Designer Tie Bundle",
    type: "Accessories",
    price: "$500",
    colors: "10-piece curated assortment",
    palette: ["Navy", "Charcoal", "Black", "Burgundy", "Taupe"],
    fit: "Classic",
    occasion: "Boardroom",
    img: "https://images.unsplash.com/photo-1589756823695-278bc923f962?auto=format&fit=crop&w=1400&q=90",
    secondaryImg: "https://images.unsplash.com/photo-1598032895397-b9472444bf93?auto=format&fit=crop&w=1400&q=90",
    note: "Ten coordinated designer ties sold only as one $500 collection — $50 per tie."
  }
];

export const departments = [
  {label:"The Permanent 10",href:"/products/permanent-ten-bundle"},
  {label:"Shirts, Tops & Neckwear",href:"/shirting"},
  {label:"The House",href:"/"},
  {label:"Fit Guide",href:"/fit-guide"}
];

export function productsFor(type?: Product["type"]) {
  return type ? products.filter((product) => product.type === type) : products;
}

export function productBySlug(slug: string) {
  return products.find((product) => product.slug === slug);
}
