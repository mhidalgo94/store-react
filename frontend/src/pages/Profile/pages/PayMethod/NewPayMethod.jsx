import {Link} from 'react-router-dom';
import {Box, Typography, Grid, Stack, Paper} from '@mui/material';
import { LoadingButton } from '@mui/lab';
import ProfileBase from '../../ProfileBase';
import FormPayMethod from '../../../../components/Form/FormPayMethod/FormPayMethod';
import AddCardIcon from '@mui/icons-material/AddCard';

import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';

export default function NewPayMethod() {
  const stripePromise  = loadStripe(`${process.env.REACT_APP_PUBLIC_KEY}`)

  return (
    <ProfileBase>
         <Box sx={{my:2}}>
            <Grid sx={{my:2}} container justifyContent='space-between'>
                <Grid item md={9} sm={8} xs={12}>
                    <Stack direction='row' alignItems='center' gap={1}>
                        <AddCardIcon sx={{fontSize:'28px'}} color="primary"/>
                        <Typography variant="h4">New Payment Methods</Typography>
                    </Stack>
                </Grid>
                <Grid item md={3} sm={4} xs={7}>
                    <Link className='link' to='/account/profile/pay-methods'>
                        <LoadingButton variant='outlined' fullWidth sx={{bgcolor:'primary.50',textTransform:'capitalize', fontWeight:'bold'}}>
                            Back to Payment Methods
                        </LoadingButton>
                    </Link> 
                </Grid>
            </Grid>
            <Paper  sx={{p:5,my:2, borderRadius: '10px'}}>
                <Elements stripe={stripePromise}>
                    <FormPayMethod />
                </Elements>
            </Paper>
        </Box>
    </ProfileBase>
  )
}
