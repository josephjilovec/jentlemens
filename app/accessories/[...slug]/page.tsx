import { notFound } from "next/navigation";
import { V2DepartmentPage } from "@/components/V2DepartmentPage";
import { getDepartment } from "@/lib/site-config";
import { activeProductsForDepartment } from "@/lib/active-inventory";
const labels:Record<string,string>={"leather-bags":"Briefcases, Backpacks & Slings",jewelry:"Steel & Silver Jewelry",watches:"Timepieces & Watches"};
export default async function Page({params}:{params:Promise<{slug:string[]}>}){const {slug}=await params;const c=slug?.[0];if(!c||!labels[c])notFound();return <V2DepartmentPage department={getDepartment("accessories")!} products={activeProductsForDepartment("accessories",c)} collectionTitle={labels[c]}/>}
