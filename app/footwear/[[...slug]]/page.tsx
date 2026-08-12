import { notFound } from "next/navigation";
import { V2DepartmentPage } from "@/components/V2DepartmentPage";
import { getDepartment, getProductsForDepartment } from "@/lib/site-config";
const labels:Record<string,string>={"dress-shoes":"Dress Shoes",trainers:"Minimalist Trainers","belts-black":"Black Leather Belts","belts-brown":"Brown Leather Belts"};
export default async function Page({params}:{params:Promise<{slug?:string[]}>}){const {slug}=await params;const c=slug?.[0];if(c&&!labels[c])notFound();return <V2DepartmentPage department={getDepartment("footwear")!} products={getProductsForDepartment("footwear",c)} collectionTitle={c?labels[c]:undefined}/>}
