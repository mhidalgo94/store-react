import {Avatar,Box, Button, Grid, Input, TextField,Stack, } from '@mui/material';
import { updateUserClient } from '../../../api/fetchUser.js';




export default function FormEditProfile() {

    const onSubmit = (e) =>{
        e.preventDefault();
        updateUserClient()
    }

  return (
    <Box sx={{my:2}} component="form" autoComplete='off' onSubmit={onSubmit}>
        <Stack direction='row' gap={2} sx={{mb:2}}>
            <Avatar alt="Profile" src="" sx={{ width: 56, height: 56 }}/>
            <Input variant='outlined' type='file' name='image' />
        </Stack>
        <Grid container spacing={2}> 
            <Grid item md={6} sm={6} xs={12} >
                <TextField fullWidth label='Name' type='text' required size='small' />
            </Grid>
            <Grid item md={6} sm={6} xs={12} >
                <TextField fullWidth label='Last Name' type='text' required size='small' />
            </Grid>
            <Grid item md={6} sm={6} xs={12} >
                <TextField fullWidth label='Email' type='email' required size='small' />
            </Grid>
            <Grid item md={6} sm={6} xs={12} >
                <TextField fullWidth label='Phone' type='tel' required size='small' />
            </Grid>
            <Grid item md={6} sm={6} xs={12} >
                <TextField fullWidth label='Main Address' type='text' required size='small' />
            </Grid>
        </Grid>

        <Box sx={{my:2}}>
            <Button variant='contained' type='submit' sx={{fontWeight:600, textTransform:'capitalize'}}>Submit</Button>
        </Box>
    </Box>
  )
}
