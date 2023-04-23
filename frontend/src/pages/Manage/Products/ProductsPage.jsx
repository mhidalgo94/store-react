import BasePage from "./BasePage";
import { Link } from "react-router-dom";
import { Box, Button, Stack } from "@mui/material";
import DataGridProducts from "../../../components/DataGrid/DataGridProducts";

function ProductsPage() {


  return (
    <BasePage title={'List Products'} 
      BtnHead={
        <Stack mt={1} direction='row' alignItems='center' gap={1}>
          <Link to='/manage/add-product' className="link">
            <Button color='info' variant='outlined'>Add Product</Button>
          </Link>
          <Link to='/manage/add-category' className="link">
            <Button color='info' variant='outlined'>Add Category</Button>
          </Link>
        </Stack>
      }>
      <Box>
        <DataGridProducts />
      </Box>
    </BasePage>
  )
}


export default ProductsPage;
