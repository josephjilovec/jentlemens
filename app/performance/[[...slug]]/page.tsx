import { notFound } from "next/navigation";
import { V2DepartmentPage } from "@/components/V2DepartmentPage";
import { getDepartment } from "@/lib/site-config";
import { activeProductsForDepartment } from "@/lib/active-inventory";

const labels:Record<string,string>={
  tops:"Technical Tops",
  pants:"Tapered Performance Pants",
  shorts:"Running Shorts",
  "base-layers":"Performance Base Layers",
  underwear:"Underwear",
};

export default async function Page({params}:{params:Promise<{slug?:string[]}>}){
  const {slug}=await params;
  const c=slug?.[0];
  if(c&&!labels[c])notFound();
  return <V2DepartmentPage department={getDepartment("performance")!} products={activeProductsForDepartment("performance",c)} collectionTitle={c?labels[c]:undefined}/>;
}
