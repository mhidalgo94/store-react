import { Box, TextField, Typography, Button } from '@mui/material';

export default function VerifyCodeEmail() {

    const handleSubmit=(e)=>{
        e.preventDefault();
        alert('x')
    }
  return (
    <>
         <Box sx={{textAlign:'center'}}>
            <Typography variant='subtitle1'>Verify your email.</Typography>
        </Box>
        <Box component='form' onSubmit={handleSubmit}>
            <TextField size='small' colr='info' required label='Input Code' sx={{mb:1}} fullWidth type='text' name='code' />
            <Button type='submit' fullWidth variant='contained' color='lightBlue'>Verify</Button>
        </Box>
    </>
  )
}