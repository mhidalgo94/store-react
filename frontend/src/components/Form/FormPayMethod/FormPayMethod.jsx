import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Grid, TextField } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { addPaymentMethods, updatePaymentMethods } from '../../../api/fetchPaymentMethods';
import { userState } from '../../../store/userState.js';
import  { useSnackBar } from '../../../store/snackbarState.js';


export default function FormPayMethod({data={}}) {
    const edit = Boolean(Object.keys(data).length);
    const [values, setValues ] = useState(data);
    const {token,setLogout} = userState();
    const navigate = useNavigate();
    const {setOpen} = useSnackBar();
    const [loadingBtn, setLoadingBtn] = useState(false);

    const onSubmit = (e)=>{
        e.preventDefault();
        setLoadingBtn(true);
        const formData = values
        if(!edit){
            addPaymentMethods(formData, token).then(res=>{
                const msg = res?.data?.message;
                setOpen(msg);
                navigate('/account/profile/pay-methods');
            }).catch(err=>{
                if (err.response.status === 401) {
                    setLogout();
                }
                const msg = err?.response?.data?.message || 'Error Server';
                setOpen(msg,'error');
            }).finally(()=>{
                setLoadingBtn(false);
            })
        } else{
            updatePaymentMethods(formData, data.id,token).then(res=>{
                const msg = res?.data?.message;
                setOpen(msg);
                navigate('/account/profile/pay-methods');
            }).catch(err=>{
                if (err.response.status === 401) {
                    setLogout();
                }
                const msg = err?.response?.data?.message || 'Error Server';
                setOpen(msg,'error');
            }).finally(()=>{
                setLoadingBtn(false);
            })
        }
       
    }

  return (
    <Box component='form' onSubmit={onSubmit}>
        <Grid container spacing={2}>
            <Grid item md={6} sm={6} xs={12}>
                <TextField 
                    type='text'
                    required
                    size='small'
                    label='Card Number'
                    name='numberCard'
                    // inputProps={{pattern:/^\d{12,19}$/}}
                    fullWidth
                    value={values?.numberCard || ''}
                    onChange={(e)=> setValues(v=> ({...v,[e.target.name]:e.target.value}))}
                    />
            </Grid>
            <Grid item md={6} sm={6} xs={12}>
                <TextField 
                    type='text'
                    required
                    size='small'
                    label='Name or Card'
                    name='nameCard'
                    fullWidth
                    value={values?.nameCard || ''}
                    onChange={(e)=> setValues(v=> ({...v,[e.target.name]:e.target.value}))}
                />
            </Grid>
            <Grid item md={6} sm={6} xs={12}>
                <TextField 
                    type='text'
                    required
                    size='small'
                    label='Exp. Date'
                    name='expirationDate'
                    placeholder="Ex: 02/30"
                    fullWidth
                    value={values?.expirationDate || ''}
                    onChange={(e)=> setValues(v=> ({...v,[e.target.name]:e.target.value}))}
                    />
            </Grid>
            <Grid item md={6} sm={6} xs={12}>
                <TextField 
                    type='text'
                    required
                    size='small'
                    label='CVC'
                    name='cvc'
                    fullWidth
                    value={values?.cvc || ''}
                    onChange={(e)=> setValues(v=> ({...v,[e.target.name]:e.target.value}))}
                    />
            </Grid>
        </Grid>
        <LoadingButton loading={loadingBtn} sx={{mt:2,textTransform:'capitalize',fontWeight:'600'}} type='submit' variant='contained'>
            {edit ? 'Save Changes' : 'Submit'}
        </LoadingButton>
    </Box>
  )
}
