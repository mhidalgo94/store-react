import {Link} from 'react-router-dom';
import {Container,Grid, Typography, Box, Button} from '@mui/material';
import CartShop from '../../components/CartShop/CartShop';
import DetailsShop from '../../components/CartShop/DetailsShop';
import { useCartState } from '../../store/cartState';
import useStyles from './styleCartShop';

export default function CartShopPage() {
    const {products} = useCartState();

  return (
    <Container sx={{mt:2}}>
            {products.length ?
                <Grid container spacing={2}>
                    <Grid item lg={7} md={7} sm={7} xs={12}>
                        <CartShop />  
                    </Grid>
                    <Grid item md={5}>
                    {/* All about the purchase */}
                        <DetailsShop />
                    </Grid>
                </Grid>
                :
                <Grid container>
                    <Grid item lg={8} md={8} sm={8} xs={12}>
                        <Box sx={useStyles.infoBox}>
                            <Typography sx={{margin:'0 auto'}} variant='body'>You don't have products in cart.</Typography>
                        </Box>

                    </Grid>
                    <Grid item md={4} sm={4} xs={12}>
                        <Box sx={useStyles.infoBox}>
                            <Link className='link' to='#'>
                                <Button variant='outlined' color='lightBlue'  sx={{textTransform:'capitalize'}}>Go to Shop</Button>
                            </Link>
                            <Link className='link' to='/account/profile/wishlist'>
                                <Button variant='outlined' color='primary' sx={{textTransform:'capitalize'}}>Wishlist</Button>
                            </Link>
                        </Box>
                    </Grid>
                </Grid>
            }

    </Container>
  )
}
