import { useEffect,useState } from 'react';
import {useParams} from 'react-router-dom';
import { Box, Container, Typography, Stack} from "@mui/material";
import ProfileBase from '../../ProfileBase';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import CircularProgress from '@mui/material/CircularProgress';
import { getOneOrderSales } from '../../../../api/apiOrderSales';
import {useSnackBar} from '../../../../store/snackbarState.js'
import OrderComponent from '../../../../components/Order/OrderComponent';

export default function PageOrder(){
  const {id} = useParams();
  const [loadingOrder, setLoadingOrder] = useState(true);
  const {setOpen} = useSnackBar();
  const [orderValues,setOrderValues] = useState(null);
  const orderSplit = id.split('-')
  const orderId = orderSplit[orderSplit.length - 1]

    useEffect(()=>{
        getOneOrderSales(id).then(res=>{
            setOrderValues(res?.data || null);
        }).catch(err=>{
            setOpen('Error Server','error');
        }).finally(()=>{
            setLoadingOrder(false);
        });
    },[id, setOpen])

  return (
    <ProfileBase>
        <Container sx={{my:2}}>
            <Stack direction='row' alignItems='center' gap={1}>
                <ShoppingBagIcon sx={{fontSize:'28px'}} color="primary"/>
                <Typography variant="h4">Orders Details </Typography>
            </Stack>

            { loadingOrder ?
            <Box sx={{display:'flex', justifyContent:'center',mt:6}}>
                <CircularProgress  color='lightBlue' />
            </Box>
            :
            !Boolean(orderValues) ?
            <Box sx={{width:'100%',mt:6}}>
                <Typography align='center'  variant='h6'>Error loading order. Try again later</Typography>
            </Box>
            :
            <OrderComponent orderValues={orderValues} orderId={orderId}/>    
            }
        </Container>
    </ProfileBase>
  )
}
