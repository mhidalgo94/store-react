import {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import BaseLogin from "../../../components/Login/BaseLogin";
import { Box, Typography,TextField, Button } from "@mui/material";
import { LoadingButton } from "@mui/lab";

import { verifyEmail } from '../../../api/fetchUser'; 
import { useSnackBar } from '../../../store/snackbarState';
export default function VerifyEmail() {
  const [loadingBtn, setLoadingBtn] = useState(false)
  const {setOpen} = useSnackBar();
  const navigate = useNavigate();

  const handleSubmit = (e)=>{
    e.preventDefault();
    setLoadingBtn(true);
    const form = new FormData(e.target);
    const fromEntry = Object.fromEntries(form);
    verifyEmail(fromEntry).then(res=>{
        const msg= res?.data?.message || 'Check your email to retrieve password';
        setOpen(msg);
        navigate('/shop/products')
    }).catch(err=>{
        const msg = err?.response?.data?.message || 'Error server';
        setOpen(msg, 'error');
    }).finally(()=>{
        setLoadingBtn(false);
    })
      
  }
  return (
    <BaseLogin>
        <>
         <Box sx={{textAlign:'center'}}>
            <Typography variant='subtitle1'>Verify your email.</Typography>
        </Box>
        <Box component='form' onSubmit={handleSubmit}>
            <TextField size='small' color='primary' required label='Input your email' sx={{mb:1}} fullWidth type='email' name='email' />

            <LoadingButton type='submit'
                fullWidth 
                variant='contained' 
                color='primary'
                sx={{textTransform:'capitalize'}} loading={loadingBtn}>
                Submit
            </LoadingButton>

            <Button onClick={()=>navigate('/login')} variant='outlined' color='info' fullWidth sx={{textTransform:'capitalize',mt:1}}>
              Back to Login
            </Button>
        </Box>
    </>
    </BaseLogin>
  )
}
