import {useState} from 'react';
import {useParams, useNavigate} from 'react-router-dom';
import {Box, Typography, TextField, Button} from '@mui/material'
import { LoadingButton } from '@mui/lab';
import { useSnackBar } from '../../../store/snackbarState';
import { changePassword } from '../../../api/fetchUser';
export default function ChangePassword() {
    const {id} = useParams();
    const navigate = useNavigate();
    const [loadingBtn, setLoadingBtn] = useState(false);
    const [password1, setPassword1] = useState('');
    const [password2, setPassword2] = useState('');

    const {setOpen} = useSnackBar();
    const handleSubmit = (e)=>{
        e.preventDefault();
        if(password1 !== password2){
            setOpen('Passwords do not match', 'warning')
            return 
        }
        setLoadingBtn(true);

        const formData = {id,password1}

        changePassword(formData).then(res=>{
            navigate('/shop/products')
        }).catch(err=>{
            const msg = err?.response?.data?.message ||'Error Server.'
            setOpen(msg, 'error');
        }).finally(()=>{
            setLoadingBtn(false);
        })
    }
  return (
    <Box>
        <Box sx={{textAlign:'center'}}>
            <img src='/logo2.png' style={{width:'100px'}} alt='logo'/>
            <Typography variant='subtitle1'>Change Password.</Typography>
        </Box>
        <Box component='form' onSubmit={handleSubmit} mt={2}>
            <TextField 
            size='small' 
            color='primary' 
            onChange={(e)=> setPassword1(e.target.value)}
             value={password1} 
             required label='New Password' 
             sx={{mb:1}} fullWidth 
             type='password' 
             name='password1' />
            <TextField 
                size='small' 
                color='primary' 
                onChange={(e)=> setPassword2(e.target.value)}
                value={password2} 
                required label='Confirm New Password' 
                sx={{mb:1}} fullWidth 
                type='password' 
                name='password2' 
                />

            <LoadingButton type='submit'
             fullWidth 
             variant='contained' 
             color='primary'
             sx={{textTransform:'capitalize'}}
             loading={loadingBtn}>
                Submit
            </LoadingButton >
              
            <Button onClick={()=>navigate('/verify-email')} variant='outlined' color='info' fullWidth sx={{textTransform:'capitalize',mt:1}}>
              Back to Verify Email
            </Button>
        </Box>
    </Box>

  )
}
