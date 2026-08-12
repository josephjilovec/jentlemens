import { notFound } from "next/navigation";
import { V2DepartmentPage } from "@/components/V2DepartmentPage";
import { getDepartment, getProductsForDepartment } from "@/lib/site-config";
const labels:Record<string,string>={tops:"Technical Tops",pants:"Tapered Gym Pants",shorts:"Running Shorts",underwear:"Underwear",socks:"Daily Socks"};
export default async function Page({params}:{params:Promise<{slug?:string[]}>}){const {slug}=await params;const c=slug?.[0];if(c&&!labels[c])notFound();return <V2DepartmentPage department={getDepartment("performance")!} products={getProductsForDepartment("performance",c)} collectionTitle={c?labels[c]:undefined}/>}
