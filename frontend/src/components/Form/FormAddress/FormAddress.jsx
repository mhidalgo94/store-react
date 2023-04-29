import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {Box, Button, Grid, TextField} from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';

import {userState} from '../../../store/userState.js';
import {newAddress, updateAddress} from '../../../api/fetchUser.js';

import {useSnackBar} from '../../../store/snackbarState.js'


export default function FormAddress({edit=false,data={}}) {
    const navigate = useNavigate();
    const [btnLoading, setBtnLoading] = useState(false);
    const {token, setLogout} = userState();
    const [values, setValues ] = useState(data);
    const {setOpen} = useSnackBar();    
    
    const handleSubmit = (e)=>{
        e.preventDefault();
        setBtnLoading(true)
        const form = new FormData(e.target);
        const formData = Object.fromEntries(form);

        if(!edit){
            newAddress(formData,token).then(resp =>{
                const msg = resp?.data?.message || "New address created successfully.";
                setOpen(msg);
                navigate('/account/profile/addresses')
            }).catch(err=>{
                if (err.response.status === 401) {
                    setLogout();
                }
                const msg = err?.response?.data?.message || 'Error Server';
                setOpen(msg,'error')
    
            }).finally(()=>{
                setBtnLoading(false)
            })
        }else{
            const id =data.id;
            updateAddress(id,formData,token).then(resp =>{
                const msg = resp?.data?.message || "Address successfully updated.";
                setOpen(msg);   
                navigate('/account/profile/addresses')
            }).catch(err=>{
                if (err.response.status === 401) {
                    setLogout();
                }
                const msg = err?.response?.data?.message || 'Error Server';
                setOpen(msg,'error');
    
            }).finally(()=>{
                setBtnLoading(false)
            })
        }
        
    }
  return (
    <Box component='form' onSubmit={handleSubmit}>
        <Grid container spacing={2}>
            <Grid item md={6} sm={6} xs={12}>
                <TextField 
                    type='text'
                    required
                    size='small'
                    label='Tag Name'
                    name='nombre'
                    fullWidth
                    value={values?.nombre}
                    onChange={(e)=> setValues(v=> ({...v,[e.target.name]:e.target.value}))}
                    />
            </Grid>
            <Grid item md={6} sm={6} xs={12}>
                <TextField 
                    type='text'
                    required
                    size='small'
                    label='Address line'
                    name='direccion'
                    fullWidth
                    value={values?.direccion}
                    onChange={(e)=> setValues(v=> ({...v,[e.target.name]:e.target.value}))}
                />
            </Grid>
            <Grid item md={6} sm={6} xs={12}>
                <TextField 
                    type='text'
                    required
                    size='small'
                    label='ZIP Code'
                    name='zip_code'
                    fullWidth
                    value={values?.zip_code}
                    onChange={(e)=> setValues(v=> ({...v,[e.target.name]:e.target.value}))}
                    />
            </Grid>
            <Grid item md={6} sm={6} xs={12}>
                <TextField 
                    type='text'
                    required
                    size='small'
                    label='Phone to call'
                    name='telefono'
                    fullWidth
                    value={values?.telefono}
                    onChange={(e)=> setValues(v=> ({...v,[e.target.name]:e.target.value}))}
                    />
            </Grid>
        </Grid>
        <Button disabled={btnLoading} sx={{mt:2,textTransform:'capitalize',fontWeight:'600', minWidth:'120px'}} type='submit' variant='contained'>
            {btnLoading ?
            <CircularProgress color='lightBlue' size={24}  /> 
            :
            edit ? 'Save Changes' : 'Submit'}
        </Button>
    </Box>
  )
}
