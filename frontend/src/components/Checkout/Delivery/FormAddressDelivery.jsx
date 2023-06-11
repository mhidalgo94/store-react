import {Box, Grid, TextField} from '@mui/material';
import { useContext } from 'react';
import { CheckoutContext } from '../../../context/Checkout/checkoutPayment';

export default function FormAddressDelivery() {
    
    const {valuesCheckout,setValuesCheckout} = useContext(CheckoutContext);


  return (
    <Box>
        <Grid container spacing={2} sx={{py:2}}>
            <Grid item md={6} sm={6} xs={12}>
                <TextField 
                    type='text'
                    required
                    size='small'
                    placeholder='Your Name'
                    name='NameDelivery'
                    fullWidth
                    value={valuesCheckout?.NameDelivery || ''}
                    onChange={(e)=> setValuesCheckout(v=> ({...v,[e.target.name]:e.target.value}))}
                    />
            </Grid>
            <Grid item md={6} sm={6} xs={12}>
                <TextField 
                    type='text'
                    required
                    size='small'
                    placeholder='Full Address line'
                    name='addressLine'
                    value={valuesCheckout?.addressLine || ''}
                    fullWidth
                    onChange={(e)=> setValuesCheckout(v=> ({...v,[e.target.name]:e.target.value}))}
                />
            </Grid>
            <Grid item md={6} sm={6} xs={12}>
                <TextField 
                    type='text'
                    required
                    size='small'
                    placeholder='ZIP Code'
                    name='zip_code'
                    value={valuesCheckout?.zip_code || ''}
                    fullWidth
                    inputProps={{ pattern: "[0-9]{5}",required: true }}
                    onChange={(e)=> setValuesCheckout(v=> ({...v,[e.target.name]:e.target.value}))}
                    />
            </Grid>
            <Grid item md={6} sm={6} xs={12}>
                <TextField 
                    type='text'
                    required
                    size='small'
                    placeholder='Phone to call'
                    name='phone'
                    value={valuesCheckout?.phone || ''}
                    inputProps={{pattern:"[0-9]+",minLength: 9, maxLength: 9, required: true}}
                    fullWidth
                    onChange={(e)=> setValuesCheckout(v=> ({...v,[e.target.name]:e.target.value}))}
                    />
            </Grid>
        </Grid>
    </Box>
  )
}
