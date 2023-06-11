import {useNavigate} from 'react-router-dom';
import { CheckoutProvider } from "../../context/Checkout/checkoutPayment";
import { useCartState } from '../../store/cartState';

import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';

import CheckoutAlternative from './CheckoutAlternative';

export default function PageCheckOut() {
  const {products} = useCartState();
  const navigate = useNavigate();

  if(products.length === 0){
    navigate('/shop/products')
  }
  
  const stripePromise = loadStripe(`${process.env.REACT_APP_PUBLIC_KEY}`);



  return (
    <CheckoutProvider>
        <Elements stripe={stripePromise}>
           <CheckoutAlternative />
        </Elements >
    </CheckoutProvider> 
  )
}
