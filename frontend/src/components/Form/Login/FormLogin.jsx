import {Box, TextField, Typography, Button} from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';

export default function FormLogin() {
    const nav = useNavigate();

    const handleSubmit = (e)=>{
        e.preventDefault();
        
        nav('/verify-code')
    }

    return (
        <>
            <Box sx={{textAlign:'center'}}>
                <Typography variant='h5'>LOGOTIPO</Typography>
                <Typography variant='subtitle1'>Welcome to LOGOTIPO</Typography>
            </Box>
            <Box component='form' onSubmit={handleSubmit}>
                
                <TextField color='info' fullWidth required helperText='Email required.' size='small' label='email' placeholder='example@mail.com' type='email'/>
                
                <TextField fullWidth color='info' required helperText='Password required.' size='small' label='password' placeholder='*********' type='password' sx={{my:1}}/>
                
                <Button  fullWidth variant='contained' sx={{my:1, textTransform:'capitalize'}} type='submit' color='primary'>Login</Button>
                <Link className='link' to='/'>
                    <Button  fullWidth variant='outlined' sx={{my:1, textTransform:'capitalize'}} color='lightBlue' >Back Home</Button>
                </Link>
            </Box>
        </>
    )
}
