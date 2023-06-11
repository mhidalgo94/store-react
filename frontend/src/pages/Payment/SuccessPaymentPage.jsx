import {Link} from 'react-router-dom';
import { Container, Typography, Button, Box } from '@mui/material';
import CelebrationIcon from '@mui/icons-material/Celebration';


export default function SuccessPaymentPage() {

  return (
    <Container maxWidth="sm" sx={{p:2}}>
      <Typography variant="h4" mt={3} align="center" >
        Payment Successful!
      </Typography>
      <Box sx={{display:'flex', justifyContent:'center',p:2}} >
        <CelebrationIcon fontSize='large' />
      </Box>
      <Typography variant="body1" align="center">
        Thank you for your purchase.
      </Typography>
      <Typography variant="body1" sx={{color:'lightBlue.200'}} align="center">
        Check your email to see sales order
      </Typography>
      <Box sx={{display:'flex', justifyContent:'center',p:2}} >
        <Link to='/shop/products' className='link'>
          <Button variant="outlined">
            Continue Shopping
          </Button>
        </Link>
      </Box>
    </Container>
  );
}

