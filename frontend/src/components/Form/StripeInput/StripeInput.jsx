import {styled } from '@mui/material/styles';
import {CardElement, CardNumberElement,CardExpiryElement,CardCvcElement } from '@stripe/react-stripe-js';

const StyleCardElement = styled(CardElement)(({ theme }) => ({
    // Estilos personalizados para el contenedor del CardElement
    // utilizando el theme de Material-UI
    border: `1px solid ${theme.palette.primary.main}`,
    padding: theme.spacing(1),
    borderRadius: theme.shape.borderRadius,
    fontSize: theme.typography.body1.fontSize,
    color: theme.palette.primary.main,
    backgroundColor: theme.palette.common.white,
    fontFamily: theme.typography.fontFamily,
    '&:focus': {
      outline: 'none',
    },
    '& .StripeElement': {
        height: '40px', // Establece la altura deseada para el tamaño small
      },
  }));


const StyleCardNumberElement = styled(CardNumberElement)(({ theme }) => ({
    // Estilos personalizados para el contenedor del CardElement
    // utilizando el theme de Material-UI
    border: `1px solid ${theme.palette.primary.main}`,
    padding: theme.spacing(1),
    borderRadius: theme.shape.borderRadius,
    fontSize: theme.typography.body1.fontSize,
    color: theme.palette.primary.main,
    backgroundColor: theme.palette.common.white,
    fontFamily: theme.typography.fontFamily,
    '&:focus': {
      outline: 'none',
    },
    '& .StripeElement': {
        height: '40px', // Establece la altura deseada para el tamaño small
      },
  }));

  const StyleCardExpiryElement = styled(CardExpiryElement)(({ theme }) => ({
    border: `1px solid ${theme.palette.primary.main}`,
    padding: theme.spacing(1),
    borderRadius: theme.shape.borderRadius,
    fontSize: theme.typography.body1.fontSize,
    color: theme.palette.primary.main,
    backgroundColor: theme.palette.common.white,
    fontFamily: theme.typography.fontFamily,
    '&:focus': {
      outline: 'none',
    },
    '& .StripeElement': {
        height: '40px', // Establece la altura deseada para el tamaño small
      },
  }));

const StyleCardCvcElement = styled(CardCvcElement)(({ theme }) => ({
border: `1px solid ${theme.palette.primary.main}`,
padding: theme.spacing(1),
borderRadius: theme.shape.borderRadius,
fontSize: theme.typography.body1.fontSize,
color: theme.palette.primary.main,
backgroundColor: theme.palette.common.white,
fontFamily: theme.typography.fontFamily,
'&:focus': {
    outline: 'none',
},
'& .StripeElement': {
    height: '40px', // Establece la altura deseada para el tamaño small
    },
}));




export  const StripeInputCardNumberElement = ()=>  <StyleCardNumberElement />
export  const StripeInpuCardExpiryElement = ()=>  <StyleCardExpiryElement />
export  const StripeInpuCardCvcElement = ()=>  <StyleCardCvcElement />
export  const StripeInpuCardElement = ()=>  <StyleCardElement />
