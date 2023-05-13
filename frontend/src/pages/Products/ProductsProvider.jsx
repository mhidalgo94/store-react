import { FilterProvider } from "../../context/Product/filterProducts"
import Products from "./Products"
export default function ProductsBase({ children}) {
  return (
    <FilterProvider>
        <Products />
    </FilterProvider>
  )
}
