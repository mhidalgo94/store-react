// Checkout without authentication
import {useContext, useState} from 'react';

import {useNavigate}  from 'react-router-dom';
import { CheckoutContext } from '../../context/Checkout/checkoutPayment';
import {Box,Container,Grid, Paper} from '@mui/material';
import { CartCheckout, DetailsCheckout, DeliveryCheckout } from '../../components/Checkout';
import LoadingButton from "@mui/lab/LoadingButton/LoadingButton";
import { addCheckout } from '../../api/fetchCheckout';
import { useStripe, useElements} from '@stripe/react-stripe-js';
import { useSnackBar } from '../../store/snackbarState.js';
import { useCartState } from '../../store/cartState';
import CustomDialog from '../../components/Dialog/Dialog.jsx';
import { userState } from '../../store/userState';
import PaymentCheckout from '../../components/Checkout/PaymentMethod/PaymentCheckout';


export default function CheckoutAlternative() {
  const {products,amount, clearCart} = useCartState();
  const {isAuth, token} = userState();
  const navigate = useNavigate();
  let tokenAtuh = isAuth ? token : ''
  const {valuesCheckout} = useContext(CheckoutContext);
  const {setOpen} = useSnackBar();
  const stripe = useStripe();
  const elements = useElements();

  // Dialog for Delete Category
  const [btnLoadingConfirm, setBtnLoadingConfirm] = useState(false);
  const [openCloseDialog, setOpenCloseDialog] = useState(false);


  const SaveOrder = (paymentIntent)=>{
    //Guardad order base datos
    const values = {delivery:valuesCheckout,paymentIntent,products, amount};
    console.log(values)
    addCheckout(values,tokenAtuh).then(res=>{
      setOpen('Successful payment');
      clearCart();
      navigate('/payment-succeeded');
    }).catch(err=>{
      const msg = err?.response?.data?.message || 'Error generating the order.'
      setOpen(msg,'error')
    }).finally(()=>{
      setBtnLoadingConfirm(false);
      setOpenCloseDialog(false);
    });
  }

  const confirmPay = async()=>{
    setBtnLoadingConfirm(true);
    await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: `${window.location.origin}/payment-succeeded`,
      },
      redirect: "if_required",
    }).then(result=>{
      if(result?.error){
        setOpen(result?.error?.message || "An unexpected error occured.Try later",'warning');
      }else{
        const {paymentIntent} = result;
        SaveOrder(paymentIntent);
      }
    }).finally(()=>{
      setBtnLoadingConfirm(false);
      setOpenCloseDialog(false);

    })    

  }
  

  const handleSubmit = (e)=>{
    e.preventDefault();
    setOpenCloseDialog(true);
    


  }
  

  return (
    <Container>
        <Grid container>
          {/* Products, Settings devivery and payment method */}
          <Grid item lg={8} md={8} sm={8} xs={12}>
              <Box sx={{p:2}}>
                {/* List articles for checkout */}
                <CartCheckout />
              </Box>
          </Grid>
          <Grid item xs={12} sm={4} md={4} lg={4} >
            {/* All about the purchase */}
            <DetailsCheckout  />
          </Grid>
          <Grid item lg={8} md={8} sm={12} xs={12}>
            <Box component='form' onSubmit={handleSubmit}>
              <Box sx={{p:2}}>
                <DeliveryCheckout  />
              </Box>
              <Box sx={{p:2}}>
                <Paper sx={{p:2}}>
                  <PaymentCheckout />
                  <Box sx={{mt:3}}>
                    <LoadingButton disabled={btnLoadingConfirm} loading={btnLoadingConfirm}  color='primary' variant='contained' type='submit' fullWidth>
                     Pay Now
                    </LoadingButton>
                  </Box>
                </Paper>
              </Box>
            </Box>
          </Grid>
        </Grid>
        <CustomDialog 
            isOpen={openCloseDialog} 
            onClose={setOpenCloseDialog}
            title={'Confirm Payment'}
            description={' Please confirm your purchase and proceed with the payment.'}
            isAcept={confirmPay}
            loadingBtn={btnLoadingConfirm}
        />

    </Container>
  )
}
