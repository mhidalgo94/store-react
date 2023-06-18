import React from 'react'
import { PaymentElement } from "@stripe/react-stripe-js";
import PaymentIcon from '@mui/icons-material/Payment';
import {Typography, Stack} from '@mui/material';


export default function PaymentCheckout() {
  return (
    <>
        <Stack direction='row' alignItems='center' sx={{pb:2}} spacing={1}>
            <PaymentIcon color='primary' />
            <Typography variant='h5'>Payment Details</Typography>
        </Stack>
        <PaymentElement options={{ hidePostalCode: true }}/>
    </>
  )
}
