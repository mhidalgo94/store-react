// Checkout without authentication
import {useContext, useState} from 'react';
import {useNavigate}  from 'react-router-dom';
import { CheckoutContext } from '../../context/Checkout/checkoutPayment';
import {Box,Container,Grid, Paper} from '@mui/material';
import { CartCheckout, DetailsCheckout, DeliveryCheckout, PaymentMethodCheckout } from '../../components/Checkout';
import LoadingButton from "@mui/lab/LoadingButton/LoadingButton";
import { addCheckout } from '../../api/fetchCheckout';
import { useStripe, useElements, CardNumberElement,  } from '@stripe/react-stripe-js';
import { useSnackBar } from '../../store/snackbarState.js';
import { useCartState } from '../../store/cartState';
import CustomDialog from '../../components/Dialog/Dialog.jsx';
import { userState } from '../../store/userState';


export default function CheckoutAlternative() {
  const {products,amount, clearCart} = useCartState();
  const {isAuth, token} = userState();
  const navigate = useNavigate();
  let tokenAtuh = isAuth ? token : ''
  const {valuesCheckout,setValuesCheckout} = useContext(CheckoutContext);
  const {setOpen} = useSnackBar();
  const [loadingBtn, setLoadingBtn] = useState(false);
  const stripe = useStripe();
  const elements = useElements();

  // Dialog for Delete Catergory
  const [btnLoadingConfirm, setBtnLoadingConfirm] = useState(false);
  const [openCloseDialog, setOpenCloseDialog] = useState(false);

  const confirmPay = ()=>{
    setBtnLoadingConfirm(true);
    const values = valuesCheckout;
    addCheckout(values,tokenAtuh).then(res=>{
      setOpen('Successful payment');
      clearCart();
      navigate('/payment-succeeded');
    }).catch(err=>{
      const msg = err?.response?.data?.message || 'Error Payment. Try to pay later.';
      setOpen(msg, 'error');
    }).finally(()=>{
      setBtnLoadingConfirm(false);
      setOpenCloseDialog(false);
    });
  }
  

  const handleSubmit = async (e)=>{
    e.preventDefault();
    const cardNumberElement = elements.getElement(CardNumberElement);
    const { token, error } = await stripe.createToken(cardNumberElement);

    if(error){
      setOpen(error.message, 'warning')
      setLoadingBtn(false)
      return
    }

    if(token){
      setValuesCheckout(prev=>({...prev, token, products, amount}))
      setOpenCloseDialog(true)
    }

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
                    <PaymentMethodCheckout />
                  <Box sx={{mt:3}}>
                    <LoadingButton disabled={btnLoadingConfirm} loading={btnLoadingConfirm}  color='primary' variant='contained' type='submit' fullWidth>
                      {!loadingBtn ? 'Pay Now' : 'Processing...'}
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
