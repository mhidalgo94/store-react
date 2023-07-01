import { useEffect,useState } from 'react';
import {useNavigate} from 'react-router-dom';
import { CheckoutProvider } from "../../context/Checkout/checkoutPayment";
import { useCartState } from '../../store/cartState';
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import { createPaymentIntent } from '../../api/fetchCheckout';
import CheckoutAlternative from './CheckoutAlternative';
import { Box } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
import { userState } from '../../store/userState';

export default function PageCheckOut() {
  const {isAuth} = userState();
  const [clientSecret, setClientSecret] = useState(null);
  const {products,amount} = useCartState();
  const navigate = useNavigate();

  if(!isAuth){
    navigate('/login');
  }

  if(products.length === 0 && isAuth){
    navigate('/shop/products')
  }

  useEffect(()=>{
    createPaymentIntent({amount}).then(res=>{
      const {clientSecret} = res.data;
      setClientSecret(clientSecret);
    }).catch(()=>{
    })
  },[amount])

  
  const stripePromise = loadStripe(`${process.env.REACT_APP_PUBLIC_KEY}`);



  return (
    <CheckoutProvider>
      {(clientSecret && stripePromise) ? 
        (
        <Elements stripe={stripePromise} options={{clientSecret}}>
           <CheckoutAlternative />
        </Elements >
        )
      :
        <Box sx={{width:'100%',textAlign:'center',p:2}}>
          <CircularProgress sx={{m:2}} />
        </Box>
      }
    </CheckoutProvider> 
  )
}
