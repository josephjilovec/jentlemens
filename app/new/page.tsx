import { DepartmentPage } from "@/components/DepartmentPage";
import { products } from "@/lib/catalog";

export default function NewPage(){return <DepartmentPage eyebrow="NEW / CURRENT EDIT" title="The current Jentlemens wardrobe." intro="A compact view of the complete assortment: permanent tailoring, office shirts, dress footwear, seasonal trainers and the accessories that tie it together." image="https://images.unsplash.com/photo-1617137968427-85924c800a22?auto=format&fit=crop&w=2200&q=90" products={products} />}
