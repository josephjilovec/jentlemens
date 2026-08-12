import { notFound } from "next/navigation";
import { V2DepartmentPage } from "@/components/V2DepartmentPage";
import { getDepartment } from "@/lib/site-config";
import { activeProductsForDepartment } from "@/lib/active-inventory";

const labels:Record<string,string>={
  belts:"Leather Belts",
  wallets:"Wallets",
  cardholders:"Cardholders",
  "leather-bags":"Briefcases & Bags",
  jewelry:"Steel & Silver Jewelry",
  cufflinks:"Cufflinks",
  watches:"Timepieces",
};

export default async function Page({params}:{params:Promise<{slug:string[]}>}){
  const {slug}=await params;
  const c=slug?.[0];
  if(!c||!labels[c])notFound();
  return <V2DepartmentPage department={getDepartment("accessories")!} products={activeProductsForDepartment("accessories",c)} collectionTitle={labels[c]}/>;
}
