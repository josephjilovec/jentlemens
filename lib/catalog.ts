export type Product = {
  name: string;
  type: "Suits" | "Shirts" | "Trousers" | "Shoes" | "Accessories";
  price: string;
  colors: string;
  img: string;
  note: string;
};

export const products: Product[] = [
  {name:"Athletic Fit Suit",type:"Suits",price:"$495",colors:"Taupe Brown · Light Grey · Charcoal · Navy · Black",img:"https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1400&q=85",note:"Made to order in the Jentlemens house fit."},
  {name:"Athletic Fit Trouser",type:"Trousers",price:"$145",colors:"Taupe Brown · Light Grey · Charcoal · Navy · Black",img:"https://images.unsplash.com/photo-1598808503746-f34c53b9323e?auto=format&fit=crop&w=1400&q=85",note:"The same tailoring palette, available separately."},
  {name:"Office Dress Shirt",type:"Shirts",price:"$78",colors:"White · Light Blue · Grey · Navy · Black",img:"https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=1400&q=85",note:"Permanent workplace neutrals in Athletic Fit."},
  {name:"Friday Microcheck",type:"Shirts",price:"$84",colors:"Blue microcheck · Grey microcheck · seasonal check",img:"https://images.unsplash.com/photo-1596755389378-c31d21fd1273?auto=format&fit=crop&w=1400&q=85",note:"A small rotating pattern edit without expanding the wardrobe."},
  {name:"Cap-Toe Oxford",type:"Shoes",price:"$185",colors:"Black · Brown",img:"https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?auto=format&fit=crop&w=1400&q=85",note:"Formal leather Oxford with a clean cap toe."},
  {name:"Flex Oxford",type:"Shoes",price:"$195",colors:"Black · British tan",img:"https://images.unsplash.com/photo-1614251056216-f748f76cd228?auto=format&fit=crop&w=1400&q=85",note:"Dress-shoe structure with a lighter, comfort-first build."},
  {name:"Everyday Trainer — Dark",type:"Shoes",price:"$125",colors:"Seasonal dark neutral",img:"https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1400&q=85",note:"Limited seasonal trainer for walking, travel and gym use."},
  {name:"Everyday Trainer — Light",type:"Shoes",price:"$125",colors:"Seasonal light neutral",img:"https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&w=1400&q=85",note:"The light counterpart to the seasonal dark trainer."},
  {name:"Leather Belt",type:"Accessories",price:"$58",colors:"Black · Brown",img:"https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=1400&q=85",note:"Two colors. Match the leather to the shoe."},
  {name:"Office Sock Set",type:"Accessories",price:"$36",colors:"Grey · Charcoal · Navy · Black",img:"https://images.unsplash.com/photo-1586350977771-b3b0abd50c82?auto=format&fit=crop&w=1400&q=85",note:"A restrained office palette in two practical size bands."},
  {name:"Silk Tie Edit",type:"Accessories",price:"$55",colors:"Ten-piece maximum edit",img:"https://images.unsplash.com/photo-1589756823695-278bc923f962?auto=format&fit=crop&w=1400&q=85",note:"A compact tie assortment designed around the permanent shirts and suits."}
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
