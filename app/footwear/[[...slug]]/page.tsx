import { notFound } from "next/navigation";
import { V2DepartmentPage } from "@/components/V2DepartmentPage";
import { getDepartment } from "@/lib/site-config";
import { activeProductsForDepartment } from "@/lib/active-inventory";

const labels:Record<string,string>={
  oxfords:"Oxfords",
  loafers:"Loafers",
  "monk-straps":"Monk Straps",
  trainers:"Minimalist Trainers",
  boots:"Boots",
  "dress-shoes":"Dress Shoes",
};

export default async function Page({params}:{params:Promise<{slug?:string[]}>}){
  const {slug}=await params;
  const c=slug?.[0];
  if(c&&!labels[c])notFound();
  return <V2DepartmentPage department={getDepartment("footwear")!} products={activeProductsForDepartment("footwear",c)} collectionTitle={c?labels[c]:undefined}/>;
}
