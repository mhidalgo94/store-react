import {Link, useParams} from 'react-router-dom';
import {Box, Typography, Grid, Stack, Button, Paper} from '@mui/material';
import ProfileBase from '../../ProfileBase';
import FormPayMethod from '../../../../components/Form/FormPayMethod/FormPayMethod';
import PaymentsIcon from '@mui/icons-material/Payments';


export default function EditPayMethod() {

    const {id} = useParams();
    console.log(id)
  return (
    <ProfileBase>
         <Box sx={{my:2}}>
            <Grid sx={{my:2}} container justifyContent='space-between'>
                <Grid item md={9} sm={7} xs={12}>
                    <Stack direction='row' alignItems='center' gap={1}>
                        <PaymentsIcon sx={{fontSize:'28px'}} color="primary"/>
                        <Typography variant="h4">Edit Payment Method</Typography>
                    </Stack>
                </Grid>
                <Grid item md={3} sm={5} xs={7}>
                    <Link className='link' to='/account/profile/pay-methods'>
                    <Button variant='outlined' fullWidth sx={{bgcolor:'primary.50',textTransform:'capitalize', fontWeight:'bold'}}>
                        Back to Payment Methods
                    </Button>
                    </Link> 
                </Grid>
            </Grid>
            <Paper  sx={{p:5,my:2, borderRadius: '10px'}}>
                <FormPayMethod edit={true} data={{card_no:id}}/>
            </Paper>
        </Box>
    </ProfileBase>
  )
}
