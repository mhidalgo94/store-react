import {useState } from 'react';
import {Box, TextField, Typography, Button} from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import CircularProgress from '@mui/material/CircularProgress';

import { createUserClient } from '../../../api/fetchUser';
import { useSnackBar } from '../../../store/snackbarState';



export default function FormSignIn() {
    const navigate = useNavigate();
    const [loadingBtn, setLoadingBtn] = useState(false);

    const {setOpen} = useSnackBar();

    const handleSubmit = (e)=>{
        e.preventDefault();
        setLoadingBtn(true);
        const form = new FormData(e.target);
        const body = Object.fromEntries(form);

        createUserClient(body).then(res=>{
            if(res.status === 200){
                setOpen(res.data.message);
                navigate('/verify-code');
            }
        }).catch(err=>{
            const msg = err?.response?.data?.message || 'Error servidor';
            setOpen(msg,'error');
            console.log(err);
        }).finally(()=>{
            setLoadingBtn(false);
        });


    }

    return (
        <>
            <Box sx={{textAlign:'center'}}>
                <Typography variant='h5'>LOGOTIPO</Typography>
                <Typography variant='subtitle1'>Welcome to LOGOTIPO</Typography>
            </Box>
            <Box component='form' onSubmit={handleSubmit}>
                
                <TextField color='info' fullWidth required sx={{my:1}}  size='small' label='First name' type='text' name='firstName'/>
                <TextField color='info' fullWidth required sx={{my:1}}  size='small' label='Last Name' type='text' name='lastName'/>
                <TextField color='info' fullWidth required sx={{my:1}} size='small' label='Email' type='email' name='email'/>
                <TextField fullWidth label='Phone' type='tel' name='phone' required sx={{my:1}} size='small' />
                <TextField fullWidth label='Full Address' type='text' name='address' sx={{my:1}} required size='small' />
                <TextField fullWidth color='info' required sx={{my:1}} size='small' name='zip_code' label='Zip Code' type='text'/>
                <TextField fullWidth color='info' required sx={{my:1}} size='small' name='password' label='Password' placeholder='*********' type='password'/>
                
                <Button  
                    fullWidth
                    variant='contained' 
                    sx={{my:1, textTransform:'capitalize'}} 
                    type='submit' 
                    color='primary'
                    disabled={loadingBtn}
                    >
                        {loadingBtn ? <CircularProgress color='info' size={24} /> : 'Sign In' }
                    </Button>

                <Link className='link' to='/login'>
                    <Button  fullWidth variant='outlined' sx={{my:1, textTransform:'capitalize'}} color='lightBlue' >Back Login</Button>
                </Link>
            </Box>
        </>
    )
}
