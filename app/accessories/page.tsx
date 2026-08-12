import { V2DepartmentPage } from "@/components/V2DepartmentPage";
import { getDepartment } from "@/lib/site-config";
import { activeProductsForDepartment } from "@/lib/active-inventory";
export default function AccessoriesPage(){return <V2DepartmentPage department={getDepartment("accessories")!} products={activeProductsForDepartment("accessories")}/>}
