import {Box, Grid, TextField} from '@mui/material';

export default function FormAddressDelivery({values,setValues}) {

    
  return (
    <Box component='form' sx={{mt:2}}>
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
                    label='ZIP Code'
                    name='zip_code'
                    fullWidth
                    value={values?.zip_code}
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
    </Box>
  )
}
