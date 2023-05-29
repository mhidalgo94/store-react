import {Grid, Typography, Box, Button} from '@mui/material';
import useStyles from './styleCartShop';
import {Link} from 'react-router-dom';


export default function NonProducts() {
  return (
    <Grid container>
            <Grid item lg={8} md={8} sm={8} xs={12}>
                <Box sx={useStyles.infoBox}>
                    <Typography sx={{margin:'0 auto'}} variant='body'>You don't have products in cart.</Typography>
                </Box>

            </Grid>
            <Grid item md={4} sm={4} xs={12}>
                <Box sx={useStyles.infoBox}>
                    <Link className='link' to='/shop/products'>
                        <Button variant='outlined' color='lightBlue'  sx={{textTransform:'capitalize'}}>Go to Shop</Button>
                    </Link>
                    <Link className='link' to='/account/profile/wishlist'>
                        <Button variant='outlined' color='primary' sx={{textTransform:'capitalize'}}>Wishlist</Button>
                    </Link>
                </Box>
            </Grid>
        </Grid>
  )
}