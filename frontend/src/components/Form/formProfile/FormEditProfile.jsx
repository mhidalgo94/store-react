import {useState, useEffect} from 'react';
import {Avatar,Box, Button, Grid, TextField,Stack, Input  } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';

import { updateUserClient } from '../../../api/fetchUser.js';
import { userState } from '../../../store/userState.js';


export default function FormEditProfile() {
    const { user, token, setLogout, setUser } = userState();
    const [file, setFile] = useState(null);
    const [dataUser,setDataUser] = useState(user);
    const [loadingBtn, setLoadingBtn] = useState(false)
    
    useEffect(()=>{
        setDataUser(user)
    },[user])

    function handleFileChange(event) {
        setFile(event.target.files[0]);
      }


    const onSubmit = (e) =>{
        e.preventDefault();
        setLoadingBtn(true)
        const formData= new FormData(e.target); 

        if(file){
            formData.set('image', file, file.name);
        }

        updateUserClient(formData, token).then(res=>{
            setUser(res.data.token)
        }).catch(err=>{
            if (err.response.status === 401) {
                setLogout();
          }
        }).finally(()=>setLoadingBtn(false))
    }

  return (
    <Box sx={{my:2}} component="form" autoComplete='off' onSubmit={onSubmit}>
        <Stack direction='row' gap={1} sx={{mb:2}}>
            <Avatar alt="Picture user profile" src={dataUser.image} sx={{ width: 70, height: 70 }}/>
            <Input variant='outlined' type='file' name='image' accept="image/*" onChange={handleFileChange} />
            
        </Stack>
        <Grid container spacing={2}> 
            <Grid item md={6} sm={6} xs={12} >
                <TextField fullWidth label='Name' name='firstName' value={dataUser.firstName}
                    type='text'
                    required
                    size='small'
                    onChange={(e)=>setDataUser(values=>({...values, [e.target.name]:e.target.value}))} />
            </Grid>
            <Grid item md={6} sm={6} xs={12} >
                <TextField fullWidth label='Last Name' name='lastName' value={dataUser.lastName} 
                    type='text'
                    required
                    size='small'
                    onChange={(e)=>setDataUser(values=>({...values, [e.target.name]:e.target.value}))} />
            </Grid>
            <Grid item md={6} sm={6} xs={12} >
                <TextField fullWidth label='Email' name='email' value={dataUser.email} 
                    type='email'
                    required
                    size='small'
                    onChange={(e)=>setDataUser(values=>({...values, [e.target.name]:e.target.value}))} />
            </Grid>
            <Grid item md={6} sm={6} xs={12} >
                <TextField fullWidth label='Phone' name='phone' value={dataUser.phone} 
                    type='tel'
                    required
                    size='small'
                    onChange={(e)=>setDataUser(values=>({...values, [e.target.name]:e.target.value}))} />
            </Grid>
            <Grid item md={6} sm={6} xs={12} >
                <TextField fullWidth label='Main Address' name='address' value={dataUser.address} 
                    type='text'
                    required
                    size='small'
                    onChange={(e)=>setDataUser(values=>({...values, [e.target.name]:e.target.value}))}  />
            </Grid>
        </Grid>

        <Box sx={{my:2}}>
            <Button disabled={loadingBtn} variant='contained' type='submit' sx={{fontWeight:600, textTransform:'capitalize'}}>
                    {loadingBtn ? <CircularProgress color='lightBlue' size={24} /> : 'Submit' }  
            </Button>
        </Box>
    </Box>
  )
}
