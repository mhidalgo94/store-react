import { Link } from 'react-router-dom';
import {Container, Paper, Typography, Stack} from '@mui/material';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PersonIcon from '@mui/icons-material/Person';
import PaymentIcon from '@mui/icons-material/Payment';
import FavoriteIcon from '@mui/icons-material/Favorite';

import styleProfile from './styleProfile.js';

export default function HeadProfile({children}) {

  return (
    <Container sx={{p:2}}>
        <Paper sx={{px:2, py:1}} elevation={2}>
            <Typography variant='overline' fontSize='14px' sx={{color:'#7D879C'}}>DASHBOARD</Typography>
            <Stack sx={{my:1}} direction='row' justifyContent='space-between'>
                <Link className='link' to='/account/profile/orders'>
                    <Stack direction='row' gap={1} sx={styleProfile.styleItems}>
                        <ShoppingBagIcon />
                        <Typography variant='subtitle1' sx={styleProfile.styleText}>Orders</Typography>
                    </Stack>
                </Link> 
                <Typography variant='subtitle1' sx={styleProfile.styleText}>0</Typography>
            </Stack>
            <Stack sx={{my:1}} direction='row'  justifyContent='space-between'>
                <Link className='link' to='/account/profile/wishlist'>
                    <Stack direction='row' gap={1} sx={styleProfile.styleItems}>
                        <FavoriteIcon />
                        <Typography variant='subtitle1' sx={styleProfile.styleText}>Wishlist</Typography>
                    </Stack>
                </Link>
                <Typography variant='subtitle1' sx={styleProfile.styleText}>0</Typography>
            </Stack>
            
            <Typography variant='overline' fontSize='14px' sx={{color:'#7D879C'}}>ACCOUNT SETTINGS</Typography>

            <Stack sx={{my:1}} direction='row' justifyContent='space-between'>
                <Link className='link' to='/account/profile/profile-info'>
                    <Stack direction='row' gap={1} sx={styleProfile.styleItems}>
                        <PersonIcon />
                        <Typography variant='subtitle1' sx={styleProfile.styleText}>Profile Info</Typography>
                    </Stack>
                </Link>
                <Typography variant='subtitle1' sx={styleProfile.styleText}>0</Typography>
            </Stack>
            <Stack sx={{my:1}} direction='row' justifyContent='space-between'>
                <Link className='link' to='/account/profile/addresses'>
                    <Stack direction='row' gap={1} sx={styleProfile.styleItems}>
                        <LocationOnIcon />
                        <Typography variant='subtitle1' sx={styleProfile.styleText}>Addresses</Typography>
                    </Stack>
                </Link>
                <Typography variant='subtitle1' sx={styleProfile.styleText}>0</Typography>
            </Stack>
            <Stack sx={{my:1}} direction='row' justifyContent='space-between'>
                <Link className='link' to='/account/profile/pay-methods'>
                    <Stack direction='row' gap={1} sx={styleProfile.styleItems}>
                        <PaymentIcon />
                        <Typography variant='subtitle1' sx={styleProfile.styleText}>Payments Methods</Typography>
                    </Stack>
                </Link>
                <Typography variant='subtitle1' sx={styleProfile.styleText}>0</Typography>
            </Stack>
        </Paper>

        <Container>
            {children}
        </Container>
    </Container>
  )
}
