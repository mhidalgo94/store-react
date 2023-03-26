import {useState} from 'react';
import { Box, TextField, Typography, Button } from '@mui/material';
import { verifyUserClient } from '../../../api/fetchUser';
import CircularProgress from '@mui/material/CircularProgress';

import { useSnackBar } from '../../../store/snackbarState';
import { userState } from '../../../store/userState';
import { useNavigate } from 'react-router-dom';

export default function VerifyCodeEmail() {

  const [loadingBtn, setLoadingBtn] = useState()
  const navigate = useNavigate()
  const {setOpen} = useSnackBar();
  const {setLogin} = userState();

  const handleSubmit=(e)=>{
    e.preventDefault();
    setLoadingBtn(true);
    
    const form = new FormData(e.target)
    const body = Object.fromEntries(form)

    verifyUserClient(body).then(res=>{
      setOpen('Code verified successfully.')
      setLogin(res.data.user);
      navigate('/login');
    }).catch(err=>{
      const msg = err.response?.data?.message;
      setOpen(msg,'error')
    }).finally(()=>{
      setLoadingBtn(false);
    })

  }

  const toResendCode = () =>{
    navigate('/resendCode')
  }

  return (
    <>
         <Box sx={{textAlign:'center'}}>
            <Typography variant='subtitle1'>Verify code with your email.</Typography>
        </Box>
        <Box component='form' onSubmit={handleSubmit}>
            <TextField size='small' color='primary' required label='Input Code' sx={{mb:1}} fullWidth type='text' name='code' />

            <Button type='submit'
             fullWidth 
             variant='contained' 
             color='primary'
             sx={{textTransform:'capitalize'}}
             disabled={loadingBtn}>
              {loadingBtn ? <CircularProgress color='primary' size={24} /> : 'Submit' }  
            </Button>

            <Button onClick={toResendCode} variant='outlined' color='info' fullWidth sx={{textTransform:'capitalize',mt:1}}>
              Resend Code
            </Button>
        </Box>
    </>
  )
}