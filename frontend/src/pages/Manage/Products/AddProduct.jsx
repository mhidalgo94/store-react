import {Link} from 'react-router-dom';
import { Button } from '@mui/material';
import BasePage from "./BasePage";
import FormProduct from "../../../components/Form/FormProduct/FormProduct";

const BtnHead = ()=>{
  return (
      <Link className="link" to="/manage/list-products">
          <Button variant="outlined" color="info">Back Products</Button>
      </Link>
  )
}


function AddProduct() {
  return (
    <BasePage title={'Add New Product'} BtnHead={<BtnHead />}>
        <FormProduct />
    </BasePage>
  )
}

export default AddProduct;
