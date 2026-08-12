import { notFound } from "next/navigation";
import { V2DepartmentPage } from "@/components/V2DepartmentPage";
import { getDepartment } from "@/lib/site-config";
import { activeProductsForDepartment } from "@/lib/active-inventory";

const labels:Record<string,string>={
  "dress-shirts":"Dress Shirts",
  "casual-checks":"Microchecks",
  knits:"Casual Knits",
  tees:"Heavyweight Tees",
  ties:"The Permanent 10",
  bowties:"Bowties",
  "pocket-squares":"Pocket Squares",
};

export default async function Page({params}:{params:Promise<{slug?:string[]}>}){
  const {slug}=await params;
  const c=slug?.[0];
  if(c&&!labels[c])notFound();
  return <V2DepartmentPage department={getDepartment("shirting")!} products={activeProductsForDepartment("shirting",c)} collectionTitle={c?labels[c]:undefined}/>;
}
