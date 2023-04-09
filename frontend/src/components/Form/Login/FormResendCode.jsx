import {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, TextField, Typography, Button } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';

import {resendCode} from '../../../api/fetchUser.js';
import { useSnackBar } from '../../../store/snackbarState.js';

function FormResendCode() {
  const navigate = useNavigate();
  const {setOpen} = useSnackBar();
  const [loadingBtn, setLoadingBtn] = useState(false);

  const handleSubmit=(e)=>{
    e.preventDefault();
    setLoadingBtn(true);
    
    const form = new FormData(e.target);
    const body = Object.fromEntries(form);
    resendCode(body).then(res=>{
      const msg = res?.data?.message;
      setOpen(msg);
      navigate('/verify-code');
    }).catch(err=>{
      const msg = err?.response?.data?.message || 'Error servidor';
      setOpen(msg,'error')
    }).finally(()=>{
      setLoadingBtn(false)
    })

  }


  return (
    <>
         <Box sx={{textAlign:'center'}}>
            <Typography variant='subtitle1'>Resend code for verify you email.</Typography>
        </Box>
        <Box component='form' onSubmit={handleSubmit}>
            <TextField size='small' color='primary' required label='Input you email' sx={{mb:1}} fullWidth type='text' name='email' />

            <Button type='submit'
             fullWidth 
             variant='contained' 
             color='primary'
             sx={{textTransform:'capitalize'}}
             disabled={loadingBtn}>
              {loadingBtn ? <CircularProgress color='primary' size={24} /> : 'Resend Code' }  
            </Button>
            <Button onClick={()=>navigate('/verify-code')} variant='outlined' color='info' fullWidth sx={{textTransform:'capitalize',mt:1}}>
              Back to Verify Code
            </Button>
        </Box>
    </>
  )
}

export default FormResendCode;