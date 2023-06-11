import {Link} from 'react-router-dom';
import { Box,Grid, Typography, Stack, Paper, Button, Divider} from "@mui/material";

import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

export default function OrderComponent({orderId,orderValues}) {
  return (
    <>
        <Paper sx={{borderRadius:'12px', mt:2}}  elevation={2}>
            {/* Header Detail Order */}
            <Box p={2} sx={{borderRadius:'12px 12px 0 0', bgcolor:'grey.A100'}}>
                <Grid container spacing={1} >
                    <Grid item lg={4} md={4} sm={6} xs={12}>
                        <Stack direction='row'>
                            <Typography variant='subtitle1' color='grey.600'>Order ID: </Typography>
                            <Typography variant='subtitle1' ml={1} >{orderId}</Typography>
                        </Stack>
                    </Grid>
                    <Grid item lg={4} md={4} sm={6} xs={12}>
                        <Stack direction='row'>
                            <Typography variant='subtitle1' color='grey.600'>Place On: </Typography>
                            <Typography variant='subtitle1' ml={1}>{orderValues.createdAt}</Typography>
                        </Stack>
                    </Grid>
                    <Grid item lg={4} md={4} sm={12} xs={12}>
                        <Stack direction='row'>
                            <Typography variant='subtitle1' color='grey.600'>Delivered On: </Typography>
                            <Typography variant='subtitle1' ml={1}>{orderValues.status}</Typography>
                        </Stack>
                    </Grid>
                </Grid>
            </Box>


            {/* Body Detail Order */}
            <Box sx={{p:2,width:'100%'}}>
                {orderValues?.orderSalesProducts.map((values)=>{
                    return (
                        <Grid container spacing={2} key={values.Product.id} sx={{width:'100%',margin:'5px 0','&:hover':{backgroundColor:'rgb(246 249 252)'}}}>
                            <Grid item lg={4} md={4} sm={4} xs={12}>
                                <Stack direction='row' alignItems='center'  spacing={1}>
                                    <img src={values.Product.images[0]} alt={values.name} width='80px' height='80px'/>
                                    <Box>
                                        <Typography variant='subtitle1' >{values.Product.name} </Typography>
                                        <Typography alignItems='center' display='flex' variant='subtitle1' color='grey.500' >${values.price} x {values.quantity} <ArrowRightAltIcon />$ {parseFloat(values.price) * parseFloat(values.quantity)}</Typography>
                                    </Box>
                                </Stack>
                            </Grid>
                            <Grid item lg={4} md={4} sm={4} xs={12}>
                                <Stack>
                                    <Typography variant='subtitle1' color='grey.600'>Description:</Typography>
                                    <Typography variant='subtitle1' > {values.Product.description.slice(0,30)}...</Typography>
                                </Stack>
                            </Grid>
                            <Grid item lg={4} md={4} sm={4} xs={12} display='flex' alignItems='center' >
                                <Link className='link' to={`/shop/product/${values.Product.id}`}>
                                    <Button color='myBlue' variant='outlined'>Write A Review</Button>
                                </Link>
                            </Grid>
                    </Grid>
                )
            })}
            </Box>
        </Paper>
        <Box mt={2} sx={{width:'100%'}}>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6} md={6} lg={6}>
                    <Paper sx={{p:2}}>
                        <Typography variant='h6' fontWeight='bold'>Shipping Address</Typography>
                        <Typography variant='body1'>{orderValues.address}</Typography>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={6} md={6} lg={6}>
                    <Paper sx={{p:2}}>
                        <Typography variant='h6' fontWeight='bold' color='grey.800'>Total Summary</Typography>
                        <Stack direction='row' justifyContent='space-between'>
                            <Typography variant='subtitle1'color='grey.600'>Items</Typography>
                            <Typography variant='subtitle1'color='grey.600'>{orderValues.quantity}</Typography>
                        </Stack>
                        {/* <Stack direction='row' justifyContent='space-between'>
                            <Typography variant='subtitle1'color='grey.600'>Delivery</Typography>
                            <Typography variant='subtitle1'color='grey.600'>$12.99</Typography>
                        </Stack> */}
                        <Divider />
                        <Stack direction='row' justifyContent='space-between'>
                            <Typography variant='body1' fontWeight='bold' color='grey.800'>Total</Typography>
                            <Typography variant='subtitle1'color='grey.600'>${orderValues.amount}</Typography>
                        </Stack>
                    </Paper>
                </Grid>
            </Grid>
        </Box> 
    </>
  )
}
