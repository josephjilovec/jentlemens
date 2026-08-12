import { notFound } from "next/navigation";
import { V2DepartmentPage } from "@/components/V2DepartmentPage";
import { getDepartment, getProductsForDepartment } from "@/lib/site-config";

const labels: Record<string,string> = { suits:"Full Suits", blazers:"Blazers", trousers:"Tailored Trousers" };
export default async function Page({params}:{params:Promise<{slug?:string[]}>}){ const {slug}=await params; const collection=slug?.[0]; if(collection && !labels[collection]) notFound(); const dept=getDepartment("tailoring")!; return <V2DepartmentPage department={dept} products={getProductsForDepartment("tailoring",collection)} collectionTitle={collection?labels[collection]:undefined}/>; }
