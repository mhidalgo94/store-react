import { useState,useEffect } from 'react';
import {Box, Button, Grid, TextField} from '@mui/material';

export default function FormAddress({edit=false,data={}}) {
    console.log(data)
    const [values, setValues ] = useState(data);

    useEffect(()=>{
        console.log(values);
    },[values])

  return (
    <Box component='form'>
        <Grid container spacing={2}>
            <Grid item md={6} sm={6} xs={12}>
                <TextField 
                    type='text'
                    required
                    size='small'
                    label='Name'
                    name='name'
                    fullWidth
                    value={values?.name}
                    onChange={(e)=> setValues(v=> ({...v,[e.target.name]:e.target.value}))}
                    />
            </Grid>
            <Grid item md={6} sm={6} xs={12}>
                <TextField 
                    type='text'
                    required
                    size='small'
                    label='Address line'
                    name='addressLine'
                    fullWidth
                    value={values?.address}
                    onChange={(e)=> setValues(v=> ({...v,[e.target.name]:e.target.value}))}
                />
            </Grid>
            <Grid item md={6} sm={6} xs={12}>
                <TextField 
                    type='text'
                    required
                    size='small'
                    label='Phone to call'
                    name='phone'
                    fullWidth
                    value={values?.phone}
                    onChange={(e)=> setValues(v=> ({...v,[e.target.name]:e.target.value}))}
                    />
            </Grid>
        </Grid>
        <Button sx={{mt:2,textTransform:'capitalize',fontWeight:'600'}} type='submit' variant='contained'>
            {edit ? 'Save Changes' : 'Submit'}
        </Button>
    </Box>
  )
}
