import {useState} from 'react';
import {Box,Container,Grid} from '@mui/material';
import { CartCheckout, DetailsCheckout, DeliveryCheckout, PaymentMethodCheckout } from '../../components/Checkout';

export default function PageCheckoutAlternative1() {

  const [valuesDelivery,setValuesDelivery] = useState({})


  return (
    <Container>
      <Grid container>
        {/* Products, Settings devivery and payment method */}
        <Grid item lg={8} md={8} sm={8} xs={12}>
            <Box sx={{p:2}}>
              <CartCheckout />
            </Box>
            <Box sx={{p:2}}>
              <DeliveryCheckout valuesDelivery={valuesDelivery} setValuesDelivery={setValuesDelivery} />
            </Box>
            <Box sx={{p:2}}>
              <PaymentMethodCheckout />
            </Box>
        </Grid>
        <Grid item md={4}>
          {/* All about the purchase */}
          <DetailsCheckout  valuesDelivery={valuesDelivery}/>
        </Grid>

      </Grid>
    </Container>
  )
}
