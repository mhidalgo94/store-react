import { Box, Container, Typography } from '@mui/material';

export default function Howtobuy() {
  return (
    <Box sx={{pt:3}}>
        <Container sx={{minWidth:'50%', maxWidth:'80%'}}>
            <Typography variant='h5' textAlign={'center'} pb={2}>How to buy</Typography>
            <Typography variant='subittle1'>1. Browse our catalog:</Typography>
            <Typography variant='body1' px={2} textAlign='justify'>Take a look at our wide selection of craft products. Use the categories or the search bar to find what you need.</Typography>

            <Typography variant='subittle1'>2. Add products to your cart:</Typography>
            <Typography variant='body1' px={2} textAlign='justify'>Click on the "Add to Cart" button on the product page to add it to your shopping cart. You can adjust quantities and remove products if needed.</Typography>

            <Typography variant='subittle1'>3. Review your cart:</Typography>
            <Typography variant='body1' px={2} textAlign='justify'>Click on the cart icon in the top right corner of the page to view the products you have selected. Here, you can see the subtotal of your purchase and make any modifications before proceeding to payment.</Typography>

            <Typography variant='subittle1'>4. Initiate the checkout process:</Typography>
            <Typography variant='body1' px={2} textAlign='justify'>Once you are satisfied with the products in your cart, click on the "Checkout" button to initiate the payment process.</Typography>

            <Typography variant='subittle1'>5. Provide shipping information:</Typography>
            <Typography variant='body1' px={2} textAlign='justify'>Enter the shipping address where you want to receive your crafts. Make sure to enter all the details correctly to avoid delivery issues.</Typography>

            <Typography variant='subittle1'>6. Choose the payment method:</Typography>
            <Typography variant='body1' px={2} textAlign='justify'>Select Stripe as your preferred payment method. Through Stripe, you will be able to securely pay with a credit or debit card.</Typography>

            <Typography variant='subittle1'>7. Enter payment details:</Typography>
            <Typography variant='body1' px={2} textAlign='justify'>Input your card details, including the number, expiration date, and security code (CVV). Ensure that all information is accurate to avoid any setbacks.</Typography>

            <Typography variant='subittle1'>8. Confirm your purchase:</Typography>
            <Typography variant='body1' px={2} textAlign='justify'>Click on the "Confirm Purchase" button to finalize the process. Once the transaction is complete, you will receive an order confirmation and shipping details to your email address.</Typography>

            <Typography variant='subittle1'>9. Track your order:</Typography>
            <Typography variant='body1' px={2} textAlign='justify'>We will send you updates on the status of your order as it is processed and shipped. If you have any questions or concerns, feel free to contact our customer support team.</Typography>



        </Container>
    </Box>
  )
}
