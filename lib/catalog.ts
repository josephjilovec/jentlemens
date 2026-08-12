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
  {slug:"athletic-fit-suit",name:"Athletic Fit Suit",type:"Suits",price:"$850",colors:"Taupe Brown · Light Grey · Charcoal · Navy · Black",palette:["Taupe Brown","Light Grey","Charcoal","Navy","Black"],fit:"Athletic",occasion:"Boardroom",img:"https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1400&q=88",secondaryImg:"https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=1400&q=88",note:"Made to order in the Jentlemens house fit.",specs:{fabric:"280 GSM Super 120s wool",construction:"Half-canvas construction · soft shoulder padding",leadTime:"Dispatched in 14–21 days"}},
  {slug:"athletic-fit-trouser",name:"Athletic Fit Trouser",type:"Trousers",price:"$145",colors:"Taupe Brown · Light Grey · Charcoal · Navy · Black",palette:["Taupe Brown","Light Grey","Charcoal","Navy","Black"],fit:"Athletic",occasion:"Boardroom",img:"https://images.unsplash.com/photo-1598808503746-f34c53b9323e?auto=format&fit=crop&w=1400&q=85",secondaryImg:"https://images.unsplash.com/photo-1506629082955-511b1aa562c8?auto=format&fit=crop&w=1400&q=85",note:"The same tailoring palette, available separately."},
  {slug:"office-dress-shirt",name:"Office Dress Shirt",type:"Shirts",price:"$78",colors:"White · Light Blue · Grey · Navy · Black",palette:["White","Light Blue","Grey","Navy","Black"],fit:"Athletic",occasion:"Boardroom",img:"https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=1400&q=85",secondaryImg:"https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&w=1400&q=85",note:"Permanent workplace neutrals in Athletic Fit."},
  {slug:"friday-microcheck",name:"Friday Microcheck",type:"Shirts",price:"$84",colors:"Blue microcheck · Grey microcheck · seasonal check",palette:["Blue","Grey"],fit:"Athletic",occasion:"Everyday",img:"https://images.unsplash.com/photo-1596755389378-c31d21fd1273?auto=format&fit=crop&w=1400&q=85",secondaryImg:"https://images.unsplash.com/photo-1588359348347-9bc6cbbb689e?auto=format&fit=crop&w=1400&q=85",note:"A small rotating pattern edit without expanding the wardrobe."},
  {slug:"cap-toe-oxford",name:"Cap-Toe Oxford",type:"Shoes",price:"$185",colors:"Black · Brown",palette:["Black","Brown"],fit:"Universal",occasion:"Boardroom",img:"https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?auto=format&fit=crop&w=1400&q=85",secondaryImg:"https://images.unsplash.com/photo-1449505278894-297fdb3edbc1?auto=format&fit=crop&w=1400&q=85",note:"Formal leather Oxford with a clean cap toe."},
  {slug:"flex-oxford",name:"Flex Oxford",type:"Shoes",price:"$195",colors:"Black · British tan",palette:["Black","Brown"],fit:"Universal",occasion:"Travel",img:"https://images.unsplash.com/photo-1614251056216-f748f76cd228?auto=format&fit=crop&w=1400&q=85",secondaryImg:"https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=1400&q=85",note:"Dress-shoe structure with a lighter, comfort-first build."},
  {slug:"everyday-trainer-dark",name:"Everyday Trainer — Dark",type:"Shoes",price:"$125",colors:"Seasonal dark neutral",palette:["Black","Charcoal"],fit:"Universal",occasion:"Travel",img:"https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1400&q=85",secondaryImg:"https://images.unsplash.com/photo-1600269452121-4f2416e55c28?auto=format&fit=crop&w=1400&q=85",note:"Limited seasonal trainer for walking, travel and gym use."},
  {slug:"everyday-trainer-light",name:"Everyday Trainer — Light",type:"Shoes",price:"$125",colors:"Seasonal light neutral",palette:["White","Light Grey"],fit:"Universal",occasion:"Travel",img:"https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&w=1400&q=85",secondaryImg:"https://images.unsplash.com/photo-1543508282-6319a3e2621f?auto=format&fit=crop&w=1400&q=85",note:"The light counterpart to the seasonal dark trainer."},
  {slug:"leather-belt",name:"Leather Belt",type:"Accessories",price:"$58",colors:"Black · Brown",palette:["Black","Brown"],fit:"Universal",occasion:"Boardroom",img:"https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=1400&q=85",secondaryImg:"https://images.unsplash.com/photo-1624222247344-550fb60583dc?auto=format&fit=crop&w=1400&q=85",note:"Two colors. Match the leather to the shoe."},
  {slug:"office-sock-set",name:"Office Sock Set",type:"Accessories",price:"$36",colors:"Grey · Charcoal · Navy · Black",palette:["Grey","Charcoal","Navy","Black"],fit:"Universal",occasion:"Everyday",img:"https://images.unsplash.com/photo-1586350977771-b3b0abd50c82?auto=format&fit=crop&w=1400&q=85",secondaryImg:"https://images.unsplash.com/photo-1582966772680-860e372bb558?auto=format&fit=crop&w=1400&q=85",note:"A restrained office palette in two practical size bands."},
  {slug:"silk-tie-edit",name:"Silk Tie Edit",type:"Accessories",price:"$55",colors:"Ten-piece maximum edit",palette:["Navy","Black","Grey"],fit:"Universal",occasion:"Evening",img:"https://images.unsplash.com/photo-1589756823695-278bc923f962?auto=format&fit=crop&w=1400&q=85",secondaryImg:"https://images.unsplash.com/photo-1598032895397-b9472444bf93?auto=format&fit=crop&w=1400&q=85",note:"A compact tie assortment designed around the permanent shirts and suits."}
];

export const departments = [
  {label:"New",href:"/new"},
  {label:"Suits",href:"/suits"},
  {label:"Shirts",href:"/shirts"},
  {label:"Trousers",href:"/trousers"},
  {label:"Shoes",href:"/shoes"},
  {label:"Accessories",href:"/accessories"},
  {label:"Fit Guide",href:"/fit-guide"},
  {label:"Made to Order",href:"/made-to-order"}
];

export function productsFor(type?: Product["type"]) {
  return type ? products.filter((product) => product.type === type) : products;
}

export function productBySlug(slug: string) {
  return products.find((product) => product.slug === slug);
}
