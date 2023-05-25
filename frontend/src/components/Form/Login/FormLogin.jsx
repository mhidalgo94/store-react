import {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import {Box, TextField, Typography, Button} from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { Link } from 'react-router-dom';
import { login } from '../../../api/fetchAuth';
import {useSnackBar} from '../../../store/snackbarState'
import { userState } from '../../../store/userState';

export default function FormLogin() {
    const navigate = useNavigate();
    const {setUser } = userState();
    const [loadingBtn, setLoadingBtn] = useState(false);
    const {setOpen} = useSnackBar();

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    
    
    
    const handleSubmit = (e)=>{
        e.preventDefault();
        setLoadingBtn(true);
        login(email,password).then(res=>{
            const msg = res?.data?.message;
            const token = res?.data?.token;
            setUser(token);
            setOpen(msg);
            navigate('/shop/products')
        }).catch(err=>{
            const msg = err?.response?.data?.message || "Error servidor"
            setOpen(msg,'error')
        }).finally(()=>{
            setLoadingBtn(false);
        })

    }

    return (
    <>
        <Box sx={{textAlign:'center'}}>
            <Typography variant='h5'>LOGOTIPO</Typography>
            <Typography variant='subtitle1'>Welcome to LOGOTIPO</Typography>
        </Box>
        <Box component='form' onSubmit={handleSubmit}> 
            <TextField color='info' onChange={(e)=>setEmail(e.target.value)} fullWidth required helperText='Email required.' size='small' label='Email' placeholder='example@mail.com' type='email' name='email'/>
            <TextField fullWidth color='info' onChange={(e)=>setPassword(e.target.value)} required helperText='Password required.' size='small' label='Password' placeholder='*********' type='password' sx={{my:1}} name='password'/>
            <LoadingButton loading={loadingBtn}  fullWidth variant='contained' sx={{my:1, textTransform:'capitalize'}} type='submit' color='primary'>
                Login
            </LoadingButton>
            <Link className='link' to='/sign-in'>
                <Button  fullWidth variant='outlined' sx={{my:1, textTransform:'capitalize'}} color='lightBlue' >Sign in</Button>
            </Link>
        </Box>
    </>
    )
}
