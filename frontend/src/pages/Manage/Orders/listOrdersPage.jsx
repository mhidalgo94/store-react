import BaseOrderPage from "./BaseOrderPage" 
import DataGridListOrderSales from "../../../components/DataGrid/DataGridListOrderSales"
export default function ListOrdersPage() {
    return (
      <BaseOrderPage title={'List Order Sales'}>
        <DataGridListOrderSales />
      </BaseOrderPage>
    )
  }
