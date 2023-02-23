import {Link} from 'react-router-dom';
import {Box,Button ,Grid,Stack, Typography, Paper} from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Profile from '../Profile';


export default function Addresses() {
  return (
    <Profile>
        <Box sx={{my:2}}>
            <Grid sx={{my:2}} container justifyContent='space-between'>
                <Grid item md={10} sm={9} xs={12}>
                <Stack direction='row' alignItems='center' gap={1}>
                    <LocationOnIcon sx={{fontSize:'28px'}} color="primary"/>
                    <Typography variant="h4">Address</Typography>
                </Stack>
                </Grid>
                <Grid md={2} sm={3} xs={6} sx={{margin:'0 auto'}}>
                    <Link className='link' to='/account/profile/profile-info'>
                    <Button variant='outlined' fullWidth sx={{bgcolor:'primary.50',textTransform:'capitalize', fontWeight:'bold'}}>
                        Add New Address
                    </Button>
                    </Link> 
                </Grid>
            </Grid>

            <Paper sx={{p:3, my:4}}>
            </Paper>
        </Box>
    </Profile>
  )
}
