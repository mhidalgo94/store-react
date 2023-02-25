import {Link} from 'react-router-dom';
import {Box,Button ,Grid,Stack, Typography, Paper, IconButton} from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import ProfileBase from '../../ProfileBase';


export default function Addresses() {
  return (
    <ProfileBase>
        <Box sx={{my:2}}>
            <Grid sx={{my:2}} container justifyContent='space-between'>
                <Grid item md={10} sm={9} xs={12}>
                    <Stack direction='row' alignItems='center' gap={1}>
                        <LocationOnIcon sx={{fontSize:'28px'}} color="primary"/>
                        <Typography variant="h4">Address</Typography>
                    </Stack>
                </Grid>
                <Grid item md={2} sm={3} xs={6} sx={{margin:'0 auto'}}>
                    <Link className='link' to='/account/profile/pay-methods-new'>
                    <Button variant='outlined' fullWidth sx={{bgcolor:'primary.50',textTransform:'capitalize', fontWeight:'bold'}}>
                        Add New Address
                    </Button>
                    </Link> 
                </Grid>
            </Grid>
            <Paper  sx={{p:'9px',my:2, borderRadius: '10px'}}>
                <Grid container alignItems='center' justifyContent='space-between'>
                    <Grid item xs={6} sm={3} md={3} textAlign='center'>
                        <Typography variant='body1'>Office</Typography>
                    </Grid>
                    <Grid item xs={6} sm={3} md={3} textAlign='center'>
                        <Typography variant='body1'>address</Typography>
                    </Grid>
                    <Grid item xs={6} sm={3} md={3} textAlign='center'>
                        <Typography variant='body1'>number phone</Typography>
                    </Grid>
                    <Grid item xs={6} sm={3} md={3}>
                        <Stack direction='row' justifyContent='center'>
                            <Link className='link' to={`/account/profile/address-edit/${'asdsad'}`}>
                                <IconButton aria-label='Edit'>
                                    <EditIcon />
                                </IconButton>
                            </Link>
                            <IconButton aria-label='Delete'>
                                <DeleteIcon />
                            </IconButton>

                        </Stack>
                    </Grid>
                    
                </Grid>
            </Paper>
        </Box>
    </ProfileBase>
  )
}
