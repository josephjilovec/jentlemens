export type MaterialBadge = "Tailored Wool" | "Pure Cotton" | "4-Way Stretch" | "Moisture-Wicking" | "Heavy Silver" | "Solid Steel" | "Leathercraft";

export type StoreProduct = {
  slug: string;
  name: string;
  department: "tailoring" | "shirting" | "performance" | "footwear" | "accessories";
  collection: string;
  price: number;
  colors: string[];
  sizes: string[];
  fabric: string;
  fit: string;
  badges: MaterialBadge[];
  image: string;
  hoverImage: string;
  description: string;
};

export type DepartmentConfig = {
  key: StoreProduct["department"];
  label: string;
  href: string;
  eyebrow: string;
  title: string;
  intro: string;
  hero: string;
  tone: "warm" | "clean";
  columns: { title: string; links: { label: string; href: string }[] }[];
  featured: { label: string; title: string; href: string; image: string };
};

export const departmentConfig: DepartmentConfig[] = [
  {
    key: "tailoring",
    label: "Tailoring & Suits",
    href: "/tailoring",
    eyebrow: "THE PERMANENT TAILORING SYSTEM",
    title: "Tailoring built around the Athletic Fit standard.",
    intro: "Made-to-order suits, standalone blazers and tailored trousers developed around broad shoulders, stronger chests and clean tapered waists.",
    hero: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=2200&q=92",
    tone: "warm",
    columns: [
      { title: "Tailoring", links: [
        { label: "Full Suits", href: "/tailoring/suits" },
        { label: "Blazers", href: "/tailoring/blazers" },
        { label: "Tailored Trousers", href: "/tailoring/trousers" },
      ]},
      { title: "Fit Studio", links: [
        { label: "Measurement Studio", href: "/made-to-order" },
        { label: "Fit Guide", href: "/fit-guide" },
        { label: "Athletic Fit Standard", href: "/athletic-fit-standard" },
      ]},
    ],
    featured: { label: "CUSTOM FITTING", title: "Build your made-to-order profile", href: "/made-to-order", image: "https://images.unsplash.com/photo-1617137968427-85924c800a22?auto=format&fit=crop&w=1000&q=88" },
  },
  {
    key: "shirting",
    label: "Shirts, Tops & Neckwear",
    href: "/shirting",
    eyebrow: "SHIRTING / COTTON / NECKWEAR",
    title: "The chest-up wardrobe, edited as one system.",
    intro: "Solid dress shirts, restrained microchecks, premium neutral tees and a permanent ten-tie edit designed to work directly with the tailoring palette.",
    hero: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=2200&q=92",
    tone: "warm",
    columns: [
      { title: "Shirting", links: [
        { label: "Dress Shirts", href: "/shirting/dress-shirts" },
        { label: "Office Microchecks", href: "/shirting/casual-checks" },
        { label: "Essential Cotton Tees", href: "/shirting/tees" },
      ]},
      { title: "Neckwear", links: [
        { label: "Classic Ties Edit", href: "/shirting/ties" },
        { label: "Pairing Guide", href: "/capsule-builder" },
      ]},
    ],
    featured: { label: "THE PERMANENT 10", title: "Ties + dress shirt pairing guide", href: "/capsule-builder", image: "https://images.unsplash.com/photo-1589756823695-278bc923f962?auto=format&fit=crop&w=1000&q=88" },
  },
  {
    key: "performance",
    label: "Performance & Athletic",
    href: "/performance",
    eyebrow: "TECHNICAL / TRAINING / EVERYDAY",
    title: "Performance clothing without contaminating the tailoring language.",
    intro: "Technical tees, tapered gym pants, swishy joggers, running shorts and daily undergarments built as a distinct performance line inside the Jentlemens house.",
    hero: "https://images.unsplash.com/photo-1538805060514-97d9cc17730c?auto=format&fit=crop&w=2200&q=92",
    tone: "clean",
    columns: [
      { title: "Training", links: [
        { label: "Technical Tops", href: "/performance/tops" },
        { label: "Tapered Gym Pants", href: "/performance/pants" },
        { label: "Running Shorts", href: "/performance/shorts" },
      ]},
      { title: "Base Layer", links: [
        { label: "Underwear", href: "/performance/underwear" },
        { label: "Daily Socks", href: "/performance/socks" },
      ]},
    ],
    featured: { label: "ATHLETIC FIT TRAINING", title: "Training and everyday staples", href: "/performance", image: "https://images.unsplash.com/photo-1538805060514-97d9cc17730c?auto=format&fit=crop&w=1000&q=88" },
  },
  {
    key: "footwear",
    label: "Footwear & Leather",
    href: "/footwear",
    eyebrow: "SHOES / TRAINERS / BELTS",
    title: "Leather finishes that work together instead of fighting each other.",
    intro: "Formal Oxfords, wingtips and monks sit beside a tightly edited trainer rotation and black or brown dress belts.",
    hero: "https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?auto=format&fit=crop&w=2200&q=92",
    tone: "warm",
    columns: [
      { title: "Footwear", links: [
        { label: "Dress Shoes", href: "/footwear/dress-shoes" },
        { label: "Minimalist Trainers", href: "/footwear/trainers" },
      ]},
      { title: "Leather Belts", links: [
        { label: "Black Leather Belts", href: "/footwear/belts-black" },
        { label: "Brown Leather Belts", href: "/footwear/belts-brown" },
      ]},
    ],
    featured: { label: "HAND-FINISHED LEATHERWARE", title: "Match your leather correctly", href: "/footwear/dress-shoes", image: "https://images.unsplash.com/photo-1614251056216-f748f76cd228?auto=format&fit=crop&w=1000&q=88" },
  },
  {
    key: "accessories",
    label: "Accessories & Time",
    href: "/accessories",
    eyebrow: "LEATHER GOODS / METAL / TIME",
    title: "Hardware with weight, purpose and restraint.",
    intro: "Leather briefcases and carry goods, solid silver and steel jewelry, heavy brass accents and masculine timepieces—no precious-metal theater.",
    hero: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?auto=format&fit=crop&w=2200&q=92",
    tone: "warm",
    columns: [
      { title: "Carry", links: [
        { label: "Briefcases, Backpacks & Slings", href: "/accessories/leather-bags" },
      ]},
      { title: "Hardware", links: [
        { label: "Steel & Silver Jewelry", href: "/accessories/jewelry" },
        { label: "Timepieces & Watches", href: "/accessories/watches" },
      ]},
    ],
    featured: { label: "HEAVY METAL + LEATHER", title: "The hardware edit", href: "/accessories/jewelry", image: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?auto=format&fit=crop&w=1000&q=88" },
  },
];

const img = (id: string) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1400&q=88`;

export const storeProducts: StoreProduct[] = [
  { slug:"permanent-five-suit", name:"Permanent Five Made-to-Order Suit", department:"tailoring", collection:"suits", price:850, colors:["Taupe Brown","Light Grey","Dark Charcoal Grey","Navy","Black"], sizes:["Custom"], fabric:"Super 120s wool", fit:"Athletic Fit", badges:["Tailored Wool"], image:img("photo-1507679799987-c73779587ccf"), hoverImage:img("photo-1594938298603-c8148c4dae35"), description:"Half-canvas two-piece tailoring cut around the Jentlemens Athletic Fit standard." },
  { slug:"athletic-fit-blazer", name:"Athletic Fit Blazer", department:"tailoring", collection:"blazers", price:425, colors:["Navy","Dark Charcoal Grey","Taupe Brown"], sizes:["36","38","40","42","44","46"], fabric:"Wool twill", fit:"Athletic Fit", badges:["Tailored Wool"], image:img("photo-1555069519-127aadedf1ee"), hoverImage:img("photo-1617137968427-85924c800a22"), description:"A standalone tailored jacket with room through the upper torso and a disciplined waist." },
  { slug:"tailored-trouser", name:"Tailored Trouser", department:"tailoring", collection:"trousers", price:165, colors:["Taupe Brown","Light Grey","Dark Charcoal Grey","Navy","Black"], sizes:["30","32","34","36","38","40"], fabric:"Wool twill", fit:"Athletic Taper", badges:["Tailored Wool"], image:img("photo-1598808503746-f34c53b9323e"), hoverImage:img("photo-1506629082955-511b1aa562c8"), description:"Room through the seat and thigh with a clean line below the knee." },
  { slug:"solid-dress-shirt", name:"Permanent Solid Dress Shirt", department:"shirting", collection:"dress-shirts", price:68, colors:["White","Black","Light Blue"], sizes:["S","M","L","XL","XXL"], fabric:"Long-staple cotton", fit:"Athletic Fit", badges:["Pure Cotton"], image:img("photo-1602810318383-e386cc2a3ccf"), hoverImage:img("photo-1598033129183-c4f50c736f10"), description:"A clean office shirt with chest and shoulder room without excess fabric at the waist." },
  { slug:"microcheck-shirt", name:"Office Microcheck Shirt", department:"shirting", collection:"casual-checks", price:74, colors:["Blue Microcheck","Grey Microcheck","Navy Plaid"], sizes:["S","M","L","XL","XXL"], fabric:"Cotton poplin", fit:"Athletic Fit", badges:["Pure Cotton"], image:img("photo-1596755389378-c31d21fd1273"), hoverImage:img("photo-1603252109303-2751441dd157"), description:"The controlled pattern edit: small checks and plaids that still work inside the permanent system." },
  { slug:"essential-tee", name:"Essential Cotton Tee", department:"shirting", collection:"tees", price:52, colors:["White","Black","Grey","Navy"], sizes:["S","M","L","XL","XXL"], fabric:"Heavyweight cotton jersey", fit:"Athletic Fit", badges:["Pure Cotton"], image:img("photo-1521572163474-6864f9cf17ab"), hoverImage:img("photo-1583743814966-8936f37f4ec7"), description:"Premium neutral cotton tee built to sit correctly across the shoulders and upper arms." },
  { slug:"permanent-ten-tie", name:"Permanent 10 Tie Edit", department:"shirting", collection:"ties", price:58, colors:["Navy","Charcoal","Black","Burgundy","Taupe","Stripe","Micro-plaid"], sizes:["One Size"], fabric:"Silk twill", fit:"Classic 8cm", badges:[], image:img("photo-1589756823695-278bc923f962"), hoverImage:img("photo-1598032895397-b9472444bf93"), description:"Ten controlled solids, stripes and micro-patterns selected to pair with the permanent shirts and suits." },
  { slug:"technical-training-tee", name:"Technical Training Tee", department:"performance", collection:"tops", price:54, colors:["White","Black","Grey","Navy"], sizes:["S","M","L","XL","XXL"], fabric:"Polyester technical knit", fit:"Athletic", badges:["4-Way Stretch","Moisture-Wicking"], image:img("photo-1538805060514-97d9cc17730c"), hoverImage:img("photo-1517836357463-d25dfeac3438"), description:"Moisture-wicking training top cut close through the waist without restricting the chest or back." },
  { slug:"tapered-gym-pant", name:"Tapered Gym Pant", department:"performance", collection:"pants", price:105, colors:["Black","Grey","Navy"], sizes:["S","M","L","XL","XXL"], fabric:"Stretch woven poly-blend", fit:"Athletic Taper", badges:["4-Way Stretch","Moisture-Wicking"], image:img("photo-1552674605-db6ffd4facb5"), hoverImage:img("photo-1517838277536-f5f99be501cd"), description:"Technical trousers for training, travel and everyday wear with a clean tapered leg." },
  { slug:"running-short", name:"Running Short", department:"performance", collection:"shorts", price:72, colors:["Black","Grey","Navy"], sizes:["S","M","L","XL"], fabric:"Lightweight technical shell", fit:"Athletic", badges:["4-Way Stretch","Moisture-Wicking"], image:img("photo-1546483875-ad9014c88eba"), hoverImage:img("photo-1517963879433-6ad2b056d712"), description:"Minimal running short with enough structure to work beyond the track." },
  { slug:"boxer-brief", name:"Performance Boxer Brief", department:"performance", collection:"underwear", price:48, colors:["White","Black","Grey","Navy"], sizes:["S","M","L","XL","XXL"], fabric:"Stretch moisture-control knit", fit:"Supportive", badges:["4-Way Stretch","Moisture-Wicking"], image:img("photo-1566206091558-7f218b696731"), hoverImage:img("photo-1618354691373-d851c5c3a990"), description:"Neutral daily base layer using stretch and moisture-control fabric." },
  { slug:"daily-sock-set", name:"Daily Sock Set", department:"performance", collection:"socks", price:38, colors:["White","Black","Grey","Navy"], sizes:["M","L"], fabric:"Cotton-performance blend", fit:"Daily", badges:["Moisture-Wicking"], image:img("photo-1586350977771-b3b0abd50c82"), hoverImage:img("photo-1582966772680-860e372bb558"), description:"A restrained four-color sock system for dress, travel and daily wear." },
  { slug:"cap-toe-oxford", name:"Cap-Toe Oxford", department:"footwear", collection:"dress-shoes", price:235, colors:["Black","Dark Brown"], sizes:["8","9","10","11","12","13"], fabric:"Full-grain leather", fit:"Standard", badges:["Leathercraft"], image:img("photo-1614252235316-8c857d38b5f4"), hoverImage:img("photo-1614251056216-f748f76cd228"), description:"Formal full-grain leather Oxford built around a clean cap toe and restrained finish." },
  { slug:"wingtip-derby", name:"Wingtip Derby", department:"footwear", collection:"dress-shoes", price:245, colors:["Black","Brown"], sizes:["8","9","10","11","12","13"], fabric:"Full-grain leather", fit:"Standard", badges:["Leathercraft"], image:img("photo-1614252369475-531eba835eb1"), hoverImage:img("photo-1614252235316-8c857d38b5f4"), description:"Classic brogue detailing without excessive ornament." },
  { slug:"minimal-trainer", name:"Minimalist Trainer", department:"footwear", collection:"trainers", price:148, colors:["Black","White","Stone","Navy"], sizes:["8","9","10","11","12","13"], fabric:"Leather and technical mesh", fit:"Standard", badges:["Leathercraft"], image:img("photo-1608231387042-66d1773070a5"), hoverImage:img("photo-1542291026-7eec264c27ff"), description:"One of a small seasonal trainer rotation chosen for understated form and everyday wear." },
  { slug:"black-dress-belt", name:"Black Dress Belt", department:"footwear", collection:"belts-black", price:72, colors:["Black"], sizes:["30","32","34","36","38","40","42"], fabric:"Full-grain leather", fit:"30mm", badges:["Leathercraft"], image:img("photo-1553062407-98eeb64c6a62"), hoverImage:img("photo-1624222247344-550fb60583dc"), description:"A narrow black dress belt made to pair with black formal footwear." },
  { slug:"brown-dress-belt", name:"Brown Dress Belt", department:"footwear", collection:"belts-brown", price:72, colors:["Dark Brown"], sizes:["30","32","34","36","38","40","42"], fabric:"Full-grain leather", fit:"30mm", badges:["Leathercraft"], image:img("photo-1553062407-98eeb64c6a62"), hoverImage:img("photo-1624222247344-550fb60583dc"), description:"A dark brown dress belt calibrated to the brown shoe family." },
  { slug:"leather-briefcase", name:"Structured Leather Briefcase", department:"accessories", collection:"leather-bags", price:390, colors:["Black","Dark Brown"], sizes:["One Size"], fabric:"Full-grain leather", fit:"15-inch laptop", badges:["Leathercraft"], image:img("photo-1553062407-98eeb64c6a62"), hoverImage:img("photo-1548036328-c9fa89d128fa"), description:"Work-focused carry with a restrained silhouette, solid hardware and room for a modern office loadout." },
  { slug:"leather-backpack", name:"Leather Backpack", department:"accessories", collection:"leather-bags", price:345, colors:["Black","Dark Brown"], sizes:["One Size"], fabric:"Full-grain leather", fit:"Daily carry", badges:["Leathercraft"], image:img("photo-1553062407-98eeb64c6a62"), hoverImage:img("photo-1622560480605-d83c853bc5c3"), description:"A cleaner alternative to technical nylon for office and travel use." },
  { slug:"sterling-band", name:"Heavy Sterling Band", department:"accessories", collection:"jewelry", price:165, colors:["Sterling Silver"], sizes:["8","9","10","11","12"], fabric:"Solid 925 sterling silver", fit:"Heavy profile", badges:["Heavy Silver"], image:img("photo-1605100804763-247f67b3557e"), hoverImage:img("photo-1599643478518-a784e5dc4c8f"), description:"Solid sterling with visible material weight and no decorative plating." },
  { slug:"steel-cuff", name:"Solid Steel Cuff", department:"accessories", collection:"jewelry", price:118, colors:["Brushed Steel"], sizes:["M","L"], fabric:"Stainless steel", fit:"Heavy cuff", badges:["Solid Steel"], image:img("photo-1611652022419-a9419f74343d"), hoverImage:img("photo-1535632066927-ab7c9ab60908"), description:"A weighty brushed steel cuff designed as hardware rather than ornament." },
  { slug:"dress-timepiece", name:"Minimal Dress Timepiece", department:"accessories", collection:"watches", price:285, colors:["Steel / Black","Steel / Brown"], sizes:["40mm"], fabric:"Stainless steel / leather", fit:"40mm case", badges:["Solid Steel","Leathercraft"], image:img("photo-1523170335258-f5ed11844a49"), hoverImage:img("photo-1524805444758-089113d48a6d"), description:"Clean dial, steel case and leather strap without oversized branding." },
  { slug:"sport-timepiece", name:"Steel Sport Timepiece", department:"accessories", collection:"watches", price:325, colors:["Brushed Steel","Black Steel"], sizes:["42mm"], fabric:"Stainless steel", fit:"42mm case", badges:["Solid Steel"], image:img("photo-1547996160-81dfa63595aa"), hoverImage:img("photo-1522312346375-d1a52e2b99b3"), description:"A more technical steel watch for travel and everyday wear while preserving the same restrained design language." },
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
