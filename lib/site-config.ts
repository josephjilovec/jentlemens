export type MaterialBadge = "Tailored Wool" | "Pure Cotton" | "4-Way Stretch" | "Moisture-Wicking" | "Heavy Silver" | "Solid Steel" | "Leathercraft";

export type DepartmentKey = "tailoring" | "shirting" | "performance" | "footwear" | "accessories";

export interface StoreProduct {
  id: string;
  slug: string;
  name: string;
  department: DepartmentKey;
  genderTarget: "menswear";
  collection: string;
  price: number;
  colors: string[];
  sizes: string[];
  fabric: string;
  fit: string;
  badges: MaterialBadge[];
  image: string;
  alt: string;
  hoverImage: string;
  hoverAlt: string;
  description: string;
}

export type DepartmentConfig = {
  key: DepartmentKey;
  label: string;
  href: string;
  eyebrow: string;
  title: string;
  intro: string;
  hero: string;
  heroAlt: string;
  visualTarget: "menswear";
  tone: "warm" | "clean";
  columns: { title: string; links: { label: string; href: string }[] }[];
  featured: { label: string; title: string; href: string; image: string; alt: string };
};

const imageUrl = (id: string, width = 1400, quality = 88) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=${quality}`;

/**
 * Curated visual allow-list. Every ID below has been manually reviewed for the
 * Jentlemens menswear rule: men's apparel, masculine tailoring, men's footwear,
 * men's neckwear, or gender-neutral leather/hardware only.
 */
export const approvedMenswearImageIds = [
  "photo-1594938298603-c8148c4dae35", // men's tailored suit
  "photo-1617137968427-85924c800a22", // male model in tailored suit
  "photo-1602810318383-e386cc2a3ccf", // men's dress shirts
  "photo-1677505385024-5c6d27eae5f6", // rack of men's neckties
  "photo-1598032895397-b9472444bf93", // men's shirt and tie
  "photo-1549476464-37392f717541", // male athlete in gym training apparel
  "photo-1517838277536-f5f99be501cd", // men's performance training detail
  "photo-1614252235316-8c857d38b5f4", // men's formal leather shoes
  "photo-1624222247344-550fb60583dc", // leather dress belt detail
  "photo-1548036328-c9fa89d128fa", // structured leather backpack
  "photo-1523170335258-f5ed11844a49", // steel/leather wristwatch
] as const;

const menswearAltLanguage = /(men'?s|male|menswear|necktie|tie|suit|tailor|shirt|athlete|training|oxford|shoe|belt|leather|backpack|watch|timepiece|hardware)/i;

export function isApprovedMenswearImage(url: string) {
  return approvedMenswearImageIds.some((id) => url.includes(id));
}

export function defineMenswearProduct(product: StoreProduct): StoreProduct {
  if (product.genderTarget !== "menswear") {
    throw new Error(`Jentlemens brand guard: ${product.name} must target menswear.`);
  }
  if (!menswearAltLanguage.test(product.alt) || !menswearAltLanguage.test(product.hoverAlt)) {
    throw new Error(`Jentlemens brand guard: ${product.name} requires explicit menswear/product alt text.`);
  }
  if (!isApprovedMenswearImage(product.image) || !isApprovedMenswearImage(product.hoverImage)) {
    throw new Error(`Jentlemens brand guard: ${product.name} uses an image outside the approved menswear allow-list.`);
  }
  return Object.freeze(product);
}

export const verifiedMenswearAssets = {
  tailoring: {
    primary: imageUrl("photo-1594938298603-c8148c4dae35", 2200, 92),
    primaryAlt: "Male model wearing a structured blue tailored suit",
    secondary: imageUrl("photo-1617137968427-85924c800a22", 1400, 90),
    secondaryAlt: "Male model in a fitted navy suit and men's leather dress shoes",
  },
  shirting: {
    primary: imageUrl("photo-1602810318383-e386cc2a3ccf", 2200, 92),
    primaryAlt: "Folded men's dress shirts arranged as a refined shirting edit",
    secondary: imageUrl("photo-1598032895397-b9472444bf93", 1400, 90),
    secondaryAlt: "Men's dress shirt styled with a structured necktie",
  },
  neckwear: {
    primary: imageUrl("photo-1677505385024-5c6d27eae5f6", 1800, 92),
    primaryAlt: "Rack of men's silk neckties in formal colors and patterns",
    secondary: imageUrl("photo-1598032895397-b9472444bf93", 1400, 90),
    secondaryAlt: "Men's dress shirt and necktie pairing detail",
  },
  performance: {
    primary: imageUrl("photo-1549476464-37392f717541", 2200, 92),
    primaryAlt: "Male athlete training in black gym apparel",
    secondary: imageUrl("photo-1517838277536-f5f99be501cd", 1400, 90),
    secondaryAlt: "Men's performance training detail with athletic footwear and gym equipment",
  },
  footwear: {
    primary: imageUrl("photo-1614252235316-8c857d38b5f4", 2200, 92),
    primaryAlt: "Pair of men's brown leather formal dress shoes",
    secondary: imageUrl("photo-1614252235316-8c857d38b5f4", 1400, 90),
    secondaryAlt: "Close view of men's polished leather dress shoes",
  },
  accessories: {
    primary: imageUrl("photo-1523170335258-f5ed11844a49", 2200, 92),
    primaryAlt: "Masculine steel and leather wristwatch detail",
    secondary: imageUrl("photo-1624222247344-550fb60583dc", 1400, 90),
    secondaryAlt: "Men's leather dress belt and buckle detail",
    carry: imageUrl("photo-1548036328-c9fa89d128fa", 1400, 90),
    carryAlt: "Structured gender-neutral leather backpack for business carry",
  },
} as const;

export const departmentConfig: DepartmentConfig[] = [
  {
    key: "tailoring",
    label: "Tailoring & Suiting",
    href: "/tailoring",
    eyebrow: "STRUCTURE / FORMAL / MADE TO ORDER",
    title: "Tailoring built around the Athletic Fit standard.",
    intro: "Full suits, blazers, tuxedos, tailored trousers and overcoats developed around broad shoulders, stronger chests and clean tapered waists.",
    hero: verifiedMenswearAssets.tailoring.primary,
    heroAlt: verifiedMenswearAssets.tailoring.primaryAlt,
    visualTarget: "menswear",
    tone: "warm",
    columns: [
      { title: "Tailoring", links: [
        { label: "Full Suits", href: "/tailoring/suits" },
        { label: "Blazers", href: "/tailoring/blazers" },
        { label: "Tuxedos", href: "/tailoring/tuxedos" },
        { label: "Tailored Trousers", href: "/tailoring/trousers" },
        { label: "Overcoats", href: "/tailoring/overcoats" },
      ]},
      { title: "Fit Studio", links: [
        { label: "Measurement Studio", href: "/made-to-order" },
        { label: "Athletic Fit Standard", href: "/athletic-fit-standard" },
      ]},
    ],
    featured: {
      label: "CUSTOM FITTING",
      title: "Build your made-to-order profile",
      href: "/made-to-order",
      image: verifiedMenswearAssets.tailoring.secondary,
      alt: verifiedMenswearAssets.tailoring.secondaryAlt,
    },
  },
  {
    key: "shirting",
    label: "Shirting & Tops",
    href: "/shirting",
    eyebrow: "SHIRTS / KNITS / NECKWEAR",
    title: "Upper-body essentials, edited as one system.",
    intro: "Men's dress shirts, microchecks, casual knits, heavyweight tees and a restrained neckwear edit built to work with the tailoring palette.",
    hero: verifiedMenswearAssets.shirting.primary,
    heroAlt: verifiedMenswearAssets.shirting.primaryAlt,
    visualTarget: "menswear",
    tone: "warm",
    columns: [
      { title: "Shirting & Tops", links: [
        { label: "Dress Shirts", href: "/shirting/dress-shirts" },
        { label: "Microchecks", href: "/shirting/casual-checks" },
        { label: "Casual Knits", href: "/shirting/knits" },
        { label: "Heavyweight Tees", href: "/shirting/tees" },
      ]},
      { title: "Neckwear", links: [
        { label: "Silk Ties", href: "/shirting/ties" },
        { label: "Bowties", href: "/shirting/bowties" },
        { label: "Pocket Squares", href: "/shirting/pocket-squares" },
      ]},
    ],
    featured: {
      label: "THE PERMANENT 10",
      title: "Ten designer ties. One decision.",
      href: "/products/permanent-ten-bundle",
      image: verifiedMenswearAssets.neckwear.primary,
      alt: verifiedMenswearAssets.neckwear.primaryAlt,
    },
  },
  {
    key: "performance",
    label: "Performance & Athletic",
    href: "/performance",
    eyebrow: "TECHNICAL / TRAINING / BASE LAYER",
    title: "Technical menswear with its own clear material language.",
    intro: "Men's technical tops, tapered performance pants, running shorts and base layers separated visually and materially from the tailoring collection.",
    hero: verifiedMenswearAssets.performance.primary,
    heroAlt: verifiedMenswearAssets.performance.primaryAlt,
    visualTarget: "menswear",
    tone: "clean",
    columns: [
      { title: "Training", links: [
        { label: "Technical Tops", href: "/performance/tops" },
        { label: "Tapered Performance Pants", href: "/performance/pants" },
        { label: "Running Shorts", href: "/performance/shorts" },
      ]},
      { title: "Base Layer", links: [
        { label: "Performance Base Layers", href: "/performance/base-layers" },
        { label: "Underwear", href: "/performance/underwear" },
      ]},
    ],
    featured: {
      label: "ATHLETIC FIT TRAINING",
      title: "Performance clothing shown only on male frames",
      href: "/performance",
      image: verifiedMenswearAssets.performance.secondary,
      alt: verifiedMenswearAssets.performance.secondaryAlt,
    },
  },
  {
    key: "footwear",
    label: "Footwear",
    href: "/footwear",
    eyebrow: "OXFORDS / LOAFERS / BOOTS / TRAINERS",
    title: "Everything that goes on the feet. Nothing else.",
    intro: "Men's formal Oxfords, loafers, monk straps, minimalist dress sneakers and boots. Belts now live where shoppers expect them: Accessories & Hardware.",
    hero: verifiedMenswearAssets.footwear.primary,
    heroAlt: verifiedMenswearAssets.footwear.primaryAlt,
    visualTarget: "menswear",
    tone: "warm",
    columns: [
      { title: "Formal Footwear", links: [
        { label: "Oxfords", href: "/footwear/oxfords" },
        { label: "Loafers", href: "/footwear/loafers" },
        { label: "Monk Straps", href: "/footwear/monk-straps" },
      ]},
      { title: "Everyday Footwear", links: [
        { label: "Minimalist Trainers", href: "/footwear/trainers" },
        { label: "Boots", href: "/footwear/boots" },
      ]},
    ],
    featured: {
      label: "MEN'S FORMAL FOOTWEAR",
      title: "Polished leather without navigation clutter",
      href: "/footwear/oxfords",
      image: verifiedMenswearAssets.footwear.secondary,
      alt: verifiedMenswearAssets.footwear.secondaryAlt,
    },
  },
  {
    key: "accessories",
    label: "Accessories & Hardware",
    href: "/accessories",
    eyebrow: "LEATHER / CARRY / STEEL / TIME",
    title: "Leather accents and daily hardware, organized where they belong.",
    intro: "Men's leather belts, wallets and cardholders sit with business carry, steel or sterling hardware, cufflinks and masculine timepieces.",
    hero: verifiedMenswearAssets.accessories.primary,
    heroAlt: verifiedMenswearAssets.accessories.primaryAlt,
    visualTarget: "menswear",
    tone: "warm",
    columns: [
      { title: "Leather & Carry", links: [
        { label: "Leather Belts", href: "/accessories/belts" },
        { label: "Wallets", href: "/accessories/wallets" },
        { label: "Cardholders", href: "/accessories/cardholders" },
        { label: "Briefcases & Bags", href: "/accessories/leather-bags" },
      ]},
      { title: "Hardware & Time", links: [
        { label: "Steel & Silver Jewelry", href: "/accessories/jewelry" },
        { label: "Cufflinks", href: "/accessories/cufflinks" },
        { label: "Timepieces", href: "/accessories/watches" },
      ]},
    ],
    featured: {
      label: "BELTS / LEATHER / HARDWARE",
      title: "The accessory department now owns the leather accents",
      href: "/accessories/belts",
      image: verifiedMenswearAssets.accessories.secondary,
      alt: verifiedMenswearAssets.accessories.secondaryAlt,
    },
  },
];

/**
 * Planned catalog references only. These are not automatically offered for sale.
 * Product imagery stays intentionally conservative until real Jentlemens product
 * photography is available; no placeholder women, handbags, or category swaps.
 */
export const storeProducts: StoreProduct[] = [
  defineMenswearProduct({
    id: "tailoring-permanent-five-suit",
    slug: "permanent-five-suit",
    name: "Permanent Five Made-to-Order Suit",
    department: "tailoring",
    genderTarget: "menswear",
    collection: "suits",
    price: 850,
    colors: ["Taupe Brown", "Light Grey", "Dark Charcoal Grey", "Navy", "Black"],
    sizes: ["Custom"],
    fabric: "Super 120s wool",
    fit: "Athletic Fit",
    badges: ["Tailored Wool"],
    image: verifiedMenswearAssets.tailoring.primary,
    alt: "Male model wearing a men's tailored suit with structured jacket and trousers",
    hoverImage: verifiedMenswearAssets.tailoring.secondary,
    hoverAlt: "Male model showing the full men's tailored suit silhouette",
    description: "Half-canvas two-piece tailoring cut around the Jentlemens Athletic Fit standard.",
  }),
  defineMenswearProduct({
    id: "shirting-permanent-dress-shirt",
    slug: "solid-dress-shirt",
    name: "Permanent Solid Dress Shirt",
    department: "shirting",
    genderTarget: "menswear",
    collection: "dress-shirts",
    price: 68,
    colors: ["White", "Black", "Light Blue"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    fabric: "Long-staple cotton",
    fit: "Athletic Fit",
    badges: ["Pure Cotton"],
    image: verifiedMenswearAssets.shirting.primary,
    alt: "Folded men's dress shirts in a refined business shirting assortment",
    hoverImage: verifiedMenswearAssets.shirting.secondary,
    hoverAlt: "Men's dress shirt styled with a necktie for formal business wear",
    description: "A clean men's office shirt with chest and shoulder room without excess fabric at the waist.",
  }),
  defineMenswearProduct({
    id: "performance-training-system",
    slug: "performance-training-system",
    name: "Performance Training System",
    department: "performance",
    genderTarget: "menswear",
    collection: "tops",
    price: 0,
    colors: ["Black", "Grey", "Navy"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    fabric: "Technical performance knit",
    fit: "Athletic",
    badges: ["4-Way Stretch", "Moisture-Wicking"],
    image: verifiedMenswearAssets.performance.primary,
    alt: "Male athlete wearing men's black gym training apparel",
    hoverImage: verifiedMenswearAssets.performance.secondary,
    hoverAlt: "Men's performance training detail during a gym workout",
    description: "Visual reference for the future men's technical performance line; not active inventory.",
  }),
  defineMenswearProduct({
    id: "footwear-cap-toe-oxford",
    slug: "cap-toe-oxford",
    name: "Cap-Toe Oxford",
    department: "footwear",
    genderTarget: "menswear",
    collection: "oxfords",
    price: 235,
    colors: ["Black", "Dark Brown"],
    sizes: ["8", "9", "10", "11", "12", "13"],
    fabric: "Full-grain leather",
    fit: "Standard",
    badges: ["Leathercraft"],
    image: verifiedMenswearAssets.footwear.primary,
    alt: "Pair of men's polished brown leather Oxford dress shoes",
    hoverImage: verifiedMenswearAssets.footwear.secondary,
    hoverAlt: "Close view of men's formal leather Oxford shoes",
    description: "Formal men's leather footwear built around a clean cap toe and restrained finish.",
  }),
  defineMenswearProduct({
    id: "accessories-leather-dress-belt",
    slug: "classic-leather-dress-belt",
    name: "Classic Leather Dress Belt",
    department: "accessories",
    genderTarget: "menswear",
    collection: "belts",
    price: 72,
    colors: ["Black", "Dark Brown"],
    sizes: ["30", "32", "34", "36", "38", "40", "42"],
    fabric: "Full-grain leather",
    fit: "30mm",
    badges: ["Leathercraft"],
    image: verifiedMenswearAssets.accessories.secondary,
    alt: "Men's full-grain leather dress belt with polished buckle",
    hoverImage: verifiedMenswearAssets.accessories.secondary,
    hoverAlt: "Close detail of a men's leather dress belt and buckle",
    description: "A narrow men's dress belt positioned under Accessories & Hardware, with black and brown variants planned.",
  }),
  defineMenswearProduct({
    id: "accessories-leather-backpack",
    slug: "structured-leather-backpack",
    name: "Structured Leather Backpack",
    department: "accessories",
    genderTarget: "menswear",
    collection: "leather-bags",
    price: 345,
    colors: ["Black", "Dark Brown"],
    sizes: ["One Size"],
    fabric: "Full-grain leather",
    fit: "Business carry",
    badges: ["Leathercraft"],
    image: verifiedMenswearAssets.accessories.carry,
    alt: "Structured gender-neutral leather backpack suitable for men's business carry",
    hoverImage: verifiedMenswearAssets.accessories.carry,
    hoverAlt: "Leather backpack shown as structured business carry hardware",
    description: "Structured business carry without handbag styling or unrelated lifestyle imagery.",
  }),
  defineMenswearProduct({
    id: "accessories-dress-timepiece",
    slug: "minimal-dress-timepiece",
    name: "Minimal Dress Timepiece",
    department: "accessories",
    genderTarget: "menswear",
    collection: "watches",
    price: 285,
    colors: ["Steel / Black", "Steel / Brown"],
    sizes: ["40mm"],
    fabric: "Stainless steel / leather",
    fit: "40mm case",
    badges: ["Solid Steel", "Leathercraft"],
    image: verifiedMenswearAssets.accessories.primary,
    alt: "Masculine steel and leather men's dress watch",
    hoverImage: verifiedMenswearAssets.accessories.primary,
    hoverAlt: "Close view of a masculine steel men's timepiece",
    description: "A restrained steel-and-leather timepiece reference for the future hardware collection.",
  }),
];

export function getDepartment(key: string) {
  return departmentConfig.find((department) => department.key === key);
}

export function getProductsForDepartment(key: string, collection?: string) {
  return storeProducts.filter((product) => product.department === key && (!collection || product.collection === collection));
}

export const suitPalette = [
  ["Taupe Brown", "#8A735D"],
  ["Light Grey", "#B9B9B5"],
  ["Dark Charcoal Grey", "#414348"],
  ["Navy", "#172033"],
  ["Black", "#111111"],
] as const;
