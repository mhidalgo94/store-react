import { useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Divider, Grid, TextField } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { addPaymentMethods } from '../../../api/fetchPaymentMethods';
import { userState } from '../../../store/userState.js';
import  { useSnackBar } from '../../../store/snackbarState.js';

import {useStripe, CardElement, useElements} from '@stripe/react-stripe-js';

export default function FormPayMethod() {
    const [tag, setTag ] = useState('');
    const {token,setLogout} = userState();
    const navigate = useNavigate();
    const {setOpen} = useSnackBar();
    const [loadingBtn, setLoadingBtn] = useState(false);

    const stripe = useStripe();
    const element = useElements()
    const onSubmit = async (e)=>{
        e.preventDefault();


        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type:'card',
            card:element.getElement(CardElement)
        })
        if(error){
            setOpen(error.message, 'warning')
            return
        }
        console.log(paymentMethod)

        const formData = {...paymentMethod, nameCard: tag}
        setLoadingBtn(true);
        addPaymentMethods(formData, token).then(res=>{
            const msg = res?.data?.message;
            setOpen(msg);
            navigate('/account/profile/pay-methods');
        }).catch(err=>{
            console.log(err)
            if (err.response?.status === 401) {
                setLogout();
            }
            const msg = err?.response?.data?.message || 'Error Server';
            setOpen(msg,'error');
        }).finally(()=>{
            setLoadingBtn(false);
        })
       
    }

  return (
    <Box component='form' onSubmit={onSubmit}>
        <Grid container spacing={2}>
            <Grid item md={12} sm={12} xs={12}>
                <TextField 
                    type='text'
                    required
                    size='small'
                    label='Tag Payment'
                    name='nameCard'
                    fullWidth
                    value={tag}
                    onChange={(e)=> setTag(e.target.value)}
                />
            </Grid>
            <Grid sx={{my:2}}  item md={12} sm={12} xs={12}>
                <CardElement /> 
            </Grid>
        </Grid>
            <Divider />
        <LoadingButton loading={loadingBtn} sx={{mt:2,textTransform:'capitalize',fontWeight:'600'}} type='submit' variant='contained'>
                Submit
        </LoadingButton>
    </Box>
  )
}
