import { useEffect,useState } from 'react';
import { Link } from 'react-router-dom';
import { Box,IconButton, Typography, Stack,Grid, Paper, Chip } from "@mui/material";
import ProfileBase from '../../ProfileBase';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import useMediaQuery from '@mui/material/useMediaQuery'
import storeTheme from '../../../../themes/storeTheme';
import CircularProgress from '@mui/material/CircularProgress';
import {userState}  from '../../../../store/userState.js'
import { listOrderSales } from '../../../../api/fetchOrderSales';



export default function PageOrders() {
  const [loadingOrder, setLoading]= useState(true)
  const [listOrders,setListOrders] = useState([]);
  const theme = storeTheme;
  const showHeaders = useMediaQuery(theme.breakpoints.up('md'));
  const {token, setLogout} = userState();



  useEffect(()=>{
    listOrderSales(token).then(res=>{
        setListOrders(res?.data || []);
    }).catch(err=>{
      if(err?.response?.status === 401){
        setLogout()
      }
    }).finally(()=>{
      setLoading(false)
    })
  },[token,setLogout])  


  return (
    <ProfileBase>
        <Box sx={{my:2}}>
            <Stack direction='row' alignItems='center' gap={1}>
                <ShoppingBagIcon sx={{fontSize:'28px'}} color="primary"/>
                <Typography variant="h4">My Orders</Typography>
            </Stack>
            <Box sx={{m:2}}>
              {showHeaders && !loadingOrder && (listOrders.length > 0) && 
                <Grid container columns={13}>
                  <Grid item sm={3} md={3} lg={3}>
                    <Typography sx={{marginLeft:'10px'}} variant="h6" color='grey.600'>Orders</Typography>
                  </Grid>
                  <Grid item sm={3} md={3} lg={3}>
                    <Typography variant="h6" color='grey.600'>Status</Typography>
                  </Grid>
                  <Grid item sm={3} md={3} lg={3}>
                    <Typography variant="h6" color='grey.600'>Date</Typography>
                  </Grid>
                  <Grid item sm={3} md={3} lg={3}>
                    <Typography variant="h6" color='grey.600'>Total</Typography>
                  </Grid>
                  <Grid item sm={2} md={1} lg={1}>
                    <Typography variant="h6" textAlign='end' color='grey.600'></Typography>
                  </Grid>
                </Grid>
              }

              {loadingOrder ? 
                <Box sx={{display:'flex', justifyContent:'center',mt:6}}>
                    <CircularProgress  color='lightBlue' />
                </Box>
                :
                (listOrders.length > 0) ?
                  listOrders.map((values)=>{
                    const orderSplit = values.UUID.split('-')
                    const orderId = orderSplit[orderSplit.length - 1]

                    return (
                      <Paper sx={{p:'9px',my:2, borderRadius: '10px'}} key={orderId}>
                        <Grid container rowSpacing={1} columns={13} alignItems='center'>
                          <Grid item xs={12} sm={3} md={3} lg={3} >
                              <Typography variant='subtitle2'>{orderId}</Typography>
                          </Grid>
                          <Grid item xs={12} sm={3} md={3} lg={3}  >
                              <Chip size="small" label={values.status} fontWeight='bold'/>
                          </Grid>
                          <Grid item xs={12} sm={3} md={3} lg={3}  >
                              <Typography  variant='subtitle2'>{values.createdAt}</Typography>
                          </Grid>
                          <Grid item xs={12} sm={3} md={3} lg={3} >
                              <Typography variant='subtitle2'>${values.amount}</Typography>
                          </Grid>
                          <Grid item xs={12} sm={1} md={1} lg={1} textAlign='end'>
                            <Link to={`/account/profile/order/${values.UUID}`} className='link'>
                              <IconButton aria-label="Example">
                                <ArrowForwardIcon/>
                            </IconButton>
                            </Link>
                          </Grid>
                        </Grid>
                    </Paper>
                    )
                  })  
                : 
                <Box sx={{width:'100%',mt:6}}>
                  <Typography align='center'  variant='h6'>You don't have purchase orders</Typography>
                </Box>
                }
              

            </Box>
        </Box>
    </ProfileBase>
  )
}
