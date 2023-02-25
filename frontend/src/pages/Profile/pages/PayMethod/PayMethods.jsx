import {Link} from 'react-router-dom';
import {Box, Typography, Grid, Stack, Button, Paper, IconButton} from '@mui/material';
import PaymentIcon from '@mui/icons-material/Payment';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import ProfileBase from '../../ProfileBase';


export default function PayMethods() {
  return (
    <ProfileBase>
         <Box sx={{my:2}}>
            <Grid sx={{my:2}} container justifyContent='space-between'>
                <Grid item md={9} sm={7} xs={12}>
                    <Stack direction='row' alignItems='center' gap={1}>
                        <PaymentIcon sx={{fontSize:'28px'}} color="primary"/>
                        <Typography variant="h4">Payment Methods</Typography>
                    </Stack>
                </Grid>
                <Grid item md={3} sm={5} xs={7}>
                    <Link className='link' to='/account/profile/pay-methods-new'>
                    <Button variant='outlined' fullWidth sx={{bgcolor:'primary.50',textTransform:'capitalize', fontWeight:'bold'}}>
                        Add New Payment Method
                    </Button>
                    </Link> 
                </Grid>
            </Grid>
            <Paper  sx={{p:'9px',my:2, borderRadius: '10px'}}>
                <Grid container alignItems='center' justifyContent='space-between'>
                    <Grid item xs={6} sm={3} md={3} textAlign='center'>
                        <Typography variant='body1'>Jhon Ralph</Typography>
                    </Grid>
                    <Grid item xs={6} sm={3} md={3} textAlign='center'>
                        <Typography variant='body1'>**** **** **** 5467</Typography>
                    </Grid>
                    <Grid item xs={6} sm={3} md={3} textAlign='center'>
                        <Typography variant='body1'>09 / 2025</Typography>
                    </Grid>
                    <Grid item xs={6} sm={3} md={3}>
                        <Stack direction='row' justifyContent='center'>
                            <Link className='link' to={`/account/profile/pay-methods-edit/${'asdsad'}`}>
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
