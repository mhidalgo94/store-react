import {Grid, Paper,Typography,Stack,Box} from '@mui/material';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import FormAddressDelivery from './FormAddressDelivery';
import AccordionAddress from './AccordionAddress';
import { userState } from '../../../store/userState';
export default function DeliveryCheckout() {
  const {isAuth} = userState();

  return (
    <Paper sx={{p:2}}>
      <Grid container>
        <Grid item lg={8} md={8} sm={12} xs={12}>
          <Stack direction='row' alignItems='center' spacing={1}>
            <LocalShippingIcon color='primary' />
            <Typography variant='h5'>Delivery Address</Typography>
          </Stack>
        </Grid>
      </Grid>
      <FormAddressDelivery />
      {isAuth &&
        <Box>
          <AccordionAddress />
        </Box>
      }
    </Paper>
  )
}
