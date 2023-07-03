import { Box, Container, Typography } from "@mui/material";


export default function TerminCondition() {
  return (
    <Box sx={{pt:3}}>
        <Container sx={{minWidth:'50%', maxWidth:'80%'}}>
            <Typography variant='h5' textAlign={'center'} pb={2}>Terms and Conditions</Typography>
            <Typography variant='body1' textAlign='justify' py={2}>Welcome to  KyKa Be Inspired. We recommend that you carefully read the following terms and conditions before making a purchase on our website. By making a purchase, you agree to comply with these terms and conditions.</Typography>

            <Typography variant='subittle1'>1. Use of the Website:</Typography>
            <Typography variant='body1' px={2} textAlign='justify'>a. Access to and use of our website are subject to the following terms and conditions, as well as applicable laws and regulations.</Typography>
            <Typography variant='body1' px={2} textAlign='justify'>b. It is not permitted to use our website for illegal or unauthorized purposes. Interfering with the normal operation of the site is also prohibited.</Typography>

            <Typography variant='subittle1'>2. Prices and Payments:</Typography>
            <Typography variant='body1' px={2} textAlign='justify'>a. All product prices are stated in the local currency and do not include taxes or shipping costs, unless otherwise indicated.</Typography>
            <Typography variant='body1' px={2} textAlign='justify'>b. We reserve the right to modify prices at any time without prior notice. However, the applicable price will be the one indicated at the time of purchase.</Typography>
            <Typography variant='body1' px={2} textAlign='justify'>c. Payments will be processed through our secure payment service provider (e.g., Stripe), and we accept credit and debit cards as forms of payment.</Typography>

            <Typography variant='subittle1'>3. Shipping and Delivery:</Typography>
            <Typography variant='body1' px={2} textAlign='justify'>a. We strive to ship orders within the estimated timeframe indicated on our website. However, we are not responsible for delays that may arise due to circumstances beyond our control.</Typography>
            <Typography variant='body1' px={2} textAlign='justify'>b. Shipping costs and delivery options will be calculated during the checkout process and added to the total cost of the purchase.</Typography>

            <Typography variant='subittle1'>4. Intellectual Property:</Typography>
            <Typography variant='body1' px={2} textAlign='justify'>a. All content present on our website, including images, logos, texts, and designs, is protected by copyright and intellectual property rights. It is prohibited to use, reproduce, or distribute such content without our prior written consent.</Typography>

            <Typography variant='subittle1'>5. Privacy Policy:</Typography>
            <Typography variant='body1' px={2} textAlign='justify'>a. Our privacy policy describes how we collect, use, and protect the personal information you provide to us during your visit and purchase on our website. We recommend reviewing our privacy policy for more details.</Typography>

            <Typography variant='subittle1'>6. Limitation of Liability:</Typography>
            <Typography variant='body1' px={2} textAlign='justify'>a. We are not liable for any direct, indirect, incidental, or consequential damages that may arise from the use of our website or the purchased products.</Typography>
            <Typography variant='body1' px={2} textAlign='justify'>b. We do not guarantee the continuous or error-free availability of our website, nor the accuracy or reliability of the information present on it.</Typography>

        </Container>
    </Box>
  )
}
