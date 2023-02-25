import {Link} from 'react-router-dom';
import {Box,Button ,Grid,Stack, Typography, Paper} from '@mui/material';
import ProfileBase from '../../ProfileBase';
import FormAddress from '../../../../components/Form/FormAddress/FormAddress';
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';

export default function NewAddress() {
    return(
        <ProfileBase>
        <Box sx={{my:2}}>
            <Grid sx={{my:2}} container justifyContent='space-between'>
                <Grid item md={10} sm={9} xs={12}>
                    <Stack direction='row' alignItems='center' gap={1}>
                        <AddLocationAltIcon sx={{fontSize:'28px'}} color="primary"/>
                        <Typography variant="h4">New Address</Typography>
                    </Stack>
                </Grid>
                <Grid item md={2} sm={3} xs={6} sx={{margin:'0 auto'}}>
                    <Link className='link' to='/account/profile/addresses'>
                    <Button variant='outlined' fullWidth sx={{bgcolor:'primary.50',textTransform:'capitalize', fontWeight:'bold'}}>
                        Back to Addresses
                    </Button>
                    </Link> 
                </Grid>
            </Grid>
            <Paper  sx={{p:5,my:2, borderRadius: '10px'}}>
                <FormAddress />
            </Paper>
        </Box>
    </ProfileBase>
    )
  
}
