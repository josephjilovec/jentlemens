import { notFound } from "next/navigation";
import { V2DepartmentPage } from "@/components/V2DepartmentPage";
import { getDepartment, getProductsForDepartment } from "@/lib/site-config";
const labels:Record<string,string>={"dress-shirts":"Dress Shirts","casual-checks":"Office Microchecks",tees:"Essential Cotton Tees",ties:"Classic Ties Edit"};
export default async function Page({params}:{params:Promise<{slug?:string[]}>}){const {slug}=await params;const c=slug?.[0];if(c&&!labels[c])notFound();return <V2DepartmentPage department={getDepartment("shirting")!} products={getProductsForDepartment("shirting",c)} collectionTitle={c?labels[c]:undefined}/>}
