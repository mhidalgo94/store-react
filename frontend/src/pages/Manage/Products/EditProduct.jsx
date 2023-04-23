import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {Link} from 'react-router-dom';
import { Button, Box } from '@mui/material';
import BasePage from "./BasePage";
import FormProduct from "../../../components/Form/FormProduct/FormProduct";
import { getOneProduct } from '../../../api/fetchProducts';
import { userState } from '../../../store/userState';
import CircularProgress from '@mui/material/CircularProgress';
const BtnHead = ()=>{
  return (
      <Link className="link" to="/manage/list-products">
          <Button variant="outlined" color="info">Back Products</Button>
      </Link>
  )
}


function EditProduct() {
    const [data,setData] = useState([])
    const [loadingData, setLoadingData] = useState(false);
    const params = useParams();
    const {token, setLogout} = userState();
    const {id} = params;

    const fetchData = ()=>{
        setLoadingData(true);
        getOneProduct(id,token).then(res=>{
            setData(res?.data);
        }).catch(err=>{
            if (err.response.status === 401) {
                setLogout();
            }
        }).finally(()=>{
            setLoadingData(false);
        })
    }
    useEffect(()=>{
        fetchData();
    },[]);
  return (
    <BasePage title={'Edit Product'} BtnHead={<BtnHead />}>
        {!loadingData ? 
        <FormProduct data={data} id={id}/>
        :
        <Box sx={{width:'100%', display:'flex', justifyContent:'center'}}>
            <CircularProgress />
        </Box>
        }
    </BasePage>
  )
}

export default EditProduct;

