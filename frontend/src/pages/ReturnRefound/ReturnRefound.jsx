import { Box, Container, Typography } from "@mui/material";

export default function ReturnRefound() {
  return (
    <Box sx={{pt:3}}>
        <Container sx={{minWidth:'50%', maxWidth:'80%'}}>
            <Typography variant='h5' textAlign={'center'} pb={2}>Returns and Refunds</Typography>
            <Typography variant='body1' textAlign='justify' py={2}>In KyKa Be Inspired, we strive to provide quality products and ensure customer satisfaction. If for any reason you are not satisfied with your purchase, we offer a simple process for returns and refunds. Here's how it works:</Typography>

            <Typography variant='subittle1'>1. Return Policy:</Typography>
            <Typography variant='body1' px={2} textAlign='justify'>We accept returns within 7 days from the date of purchase. To be eligible for a return, the product must be in its original condition, unused, and in the same state as received. Please note that we cannot accept returns of personalized or clearance items.</Typography>

            <Typography variant='subittle1'>2. Return Process:</Typography>
            <Typography variant='body1' px={2} textAlign='justify'>If you wish to return a product, please follow these steps:</Typography>
            <Typography variant='body1' px={2} textAlign='justify'>a. Contact our customer support team and provide the details of your purchase, including the order number and reason for the return.</Typography>
            <Typography variant='body1' px={2} textAlign='justify'>b. Our team will provide you with further instructions, including the address to which you should send the product.</Typography>
            <Typography variant='body1' px={2} textAlign='justify'>c. Package the product securely and send it to the provided address. We recommend using a traceable shipping service to ensure delivery.</Typography>
            <Typography variant='body1' px={2} textAlign='justify'>d. Once we have received and processed the return, we will send you a confirmation via email.</Typography>
            <Typography variant='subittle1'>3. Refunds:</Typography>
            <Typography variant='body1' px={2} textAlign='justify'>Upon approval of the return, we will proceed with the refund using the original payment method. Please note that processing times may vary depending on your financial institution. If you haven't received the refund after a reasonable period, please contact us, and we will be happy to assist you.</Typography>
            <Typography variant='subittle1'>4. Damaged or Defective Products:</Typography>
            <Typography variant='body1' px={2} textAlign='justify'>If you receive a damaged or defective product, please contact us immediately. We will ask you to provide photos or evidence of the issue so that we can resolve it in the best possible way. Depending on the situation, we will offer a replacement or a full refund.</Typography>
        </Container>
    </Box>
  )
}
