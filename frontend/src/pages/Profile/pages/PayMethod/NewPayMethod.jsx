import {Link} from 'react-router-dom';
import {Box, Typography, Grid, Stack, Button, Paper} from '@mui/material';
import ProfileBase from '../../ProfileBase';
import FormPayMethod from '../../../../components/Form/FormPayMethod/FormPayMethod';
import AddCardIcon from '@mui/icons-material/AddCard';

export default function NewPayMethod() {
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
                        <Button variant='outlined' fullWidth sx={{bgcolor:'primary.50',textTransform:'capitalize', fontWeight:'bold'}}>
                            Back to Payment Methods
                        </Button>
                    </Link> 
                </Grid>
            </Grid>
            <Paper  sx={{p:5,my:2, borderRadius: '10px'}}>
                <FormPayMethod edit={false} />
            </Paper>
        </Box>
    </ProfileBase>
  )
}
