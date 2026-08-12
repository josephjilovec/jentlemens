import { notFound } from "next/navigation";
import { V2DepartmentPage } from "@/components/V2DepartmentPage";
import { getDepartment } from "@/lib/site-config";
import { activeProductsForDepartment } from "@/lib/active-inventory";

const labels: Record<string,string> = {
  suits: "Full Suits",
  blazers: "Blazers",
  tuxedos: "Tuxedos",
  trousers: "Tailored Trousers",
  overcoats: "Overcoats",
};

export default async function Page({params}:{params:Promise<{slug?:string[]}>}){
  const {slug}=await params;
  const collection=slug?.[0];
  if(collection && !labels[collection]) notFound();
  const dept=getDepartment("tailoring")!;
  return <V2DepartmentPage department={dept} products={activeProductsForDepartment("tailoring",collection)} collectionTitle={collection?labels[collection]:undefined}/>;
}
