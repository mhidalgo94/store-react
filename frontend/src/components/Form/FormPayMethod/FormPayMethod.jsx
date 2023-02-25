import { useState,useEffect } from 'react';
import {Box, Button, Grid, TextField} from '@mui/material';

export default function FormPayMethod({edit=false,data={}}) {
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
                    label='Card Number'
                    name='card_no'
                    fullWidth
                    value={values?.card_no}
                    onChange={(e)=> setValues(v=> ({...v,[e.target.name]:e.target.value}))}
                    />
            </Grid>
            <Grid item md={6} sm={6} xs={12}>
                <TextField 
                    type='text'
                    required
                    size='small'
                    label='Name or Card'
                    name='name'
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
                    label='Exp. Date'
                    name='exp'
                    fullWidth
                    value={values?.phone}
                    onChange={(e)=> setValues(v=> ({...v,[e.target.name]:e.target.value}))}
                    />
            </Grid>
            <Grid item md={6} sm={6} xs={12}>
                <TextField 
                    type='text'
                    required
                    size='small'
                    label='CVC'
                    name='cvc'
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
