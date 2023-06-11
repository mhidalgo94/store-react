import {useState,useEffect} from 'react';
import { useParams } from 'react-router-dom'
import { Box, Container, Typography} from "@mui/material";
import CircularProgress from '@mui/material/CircularProgress';
import { useSnackBar } from '../../store/snackbarState';
import { getOneOrderSales } from '../../api/apiOrderSales';
import OrderComponent from '../../components/Order/OrderComponent'


export default function OrderPagePublic() {
  const {id} = useParams();
  const [loadingOrder, setLoadingOrder] = useState(true);
  const {setOpen} = useSnackBar();
  const [orderValues,setOrderValues] = useState(null);
  const orderSplit = id.split('-');
  const orderId = orderSplit[orderSplit.length - 1];
  const [msgError, setMessageError] = useState('Error loading order. Try again later')

  useEffect(()=>{
    getOneOrderSales(id).then(res=>{
        setOrderValues(res?.data || null);
    }).catch(err=>{
      const msg = err?.response?.data?.message || 'Error server';
      if(msg) setMessageError(msg);
      setOpen(msgError,'error');
    }).finally(()=>{
        setLoadingOrder(false);
    });
    // eslint-disable-next-line
},[id, setOpen])


  return (
    <Container sx={{p:2}}>
      { loadingOrder ?
          <Box sx={{display:'flex', justifyContent:'center',mt:6}}>
              <CircularProgress  color='lightBlue' />
          </Box>
        :
        !Boolean(orderValues) ?
        <Box sx={{width:'100%',mt:6}}>
            <Typography align='center'  variant='h4'>{msgError}</Typography>
        </Box>
        :
        <OrderComponent orderValues={orderValues} orderId={orderId}/>    
      }
    </Container>
  )
}
