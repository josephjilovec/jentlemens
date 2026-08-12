import { V2DepartmentPage } from "@/components/V2DepartmentPage";
import { getDepartment, getProductsForDepartment } from "@/lib/site-config";
export default function AccessoriesPage(){return <V2DepartmentPage department={getDepartment("accessories")!} products={getProductsForDepartment("accessories")}/>}
