import {Grid, Paper,Typography, Button,Stack} from '@mui/material';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import FormAddressDelivery from './FormAddressDelivery';

export default function DeliveryCheckout({valuesDelivery,setValuesDelivery}) {

  const auth = false
  return (
    <Paper sx={{p:2}}>
      <Grid container>
        <Grid item lg={8} md={8} sm={12} xs={12}>
          <Stack direction='row' alignItems='center' spacing={1}>
            <LocalShippingIcon color='primary' />
            <Typography variant='h5'>Delivery Address</Typography>
          </Stack>
        </Grid>
        <Grid item lg={4} md={4} sm={6} xs={6}>
          {auth && (
            <Button fullWidth variant='outlined' >
              <Typography variant='subtitle2' sx={{fontWeight:'bold', textTransform:'capitalize'}}>Add New Delivery</Typography>
            </Button>
            )}
        </Grid>
      </Grid>
      <FormAddressDelivery  values={valuesDelivery} setValues={setValuesDelivery}/>
    </Paper>
  )
}
