import {useContext} from 'react';
import PaymentIcon from '@mui/icons-material/Payment';
import {Typography,Divider, TextField, Stack, Grid, FormControl, FormLabel} from '@mui/material';

import {  CardNumberElement, CardExpiryElement, CardCvcElement } from '@stripe/react-stripe-js';
import { CheckoutContext } from '../../../context/Checkout/checkoutPayment';
import { userState } from '../../../store/userState';

export default function PaymentMethodCheckout() {
  const {setValuesCheckout} = useContext(CheckoutContext);
  const {isAuth} = userState();
  
  return (
    <>
      <Stack direction='row' alignItems='center' sx={{pb:2}} spacing={1}>
        <PaymentIcon color='primary' />
        <Typography variant='h5'>Payment Details</Typography>
      </Stack>
      <Grid container spacing={3}>
        {!isAuth &&
        <Grid item md={12} sm={12} xs={12}>
          <TextField 
                  type='email'
                  required
                  size='small'
                  label='Email to send order'
                  name='emailOrderSale'
                  fullWidth
                  onChange={(e)=>setValuesCheckout(prev=> ({...prev, [e.target.name]:e.target.value}))}
                  />
            </Grid>
          }
        <Grid item md={12} sm={12} xs={12}>
          <TextField fullWidth type='text' size='small' 
            name="nameCard"
            onChange={(e)=>setValuesCheckout(prev=> ({...prev, [e.target.name]:e.target.value}))}
            required label='Enter your full name card' />
        </Grid>
          <Grid item md={4} sm={4} xs={12}>
            <FormControl sx={{width:'100%'}}>
              <FormLabel sx={{mb:1}}>Card Number</FormLabel>
              <CardNumberElement  />
              <Divider />
            </FormControl>
          </Grid>
          <Grid item md={4} sm={4} xs={12}>
            <FormControl sx={{width:'100%'}}>
              <FormLabel sx={{mb:1}}>Expiry Date</FormLabel>
              <CardExpiryElement />
            <Divider />
            </FormControl>
          </Grid>
          <Grid item md={4} sm={4} xs={12}>
          <FormControl sx={{width:'100%'}}>
            <FormLabel sx={{mb:1}}>Card Verification Code</FormLabel>
              <CardCvcElement />
          </FormControl>
            <Divider />
          </Grid>
      </Grid>
    </>
      
    
  )
}
