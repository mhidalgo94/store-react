import {Container,Grid} from '@mui/material';
import CartShop from '../../components/CartShop/CartShop';
import DetailsShop from '../../components/CartShop/DetailsShop';
import { useCartState } from '../../store/cartState';
import NonProducts from './NonProducts';

export default function CartShopPage() {
    const {products} = useCartState();

  return (
    <Container sx={{mt:2}}>
            {products.length ?
                <Grid container spacing={2}>
                    <Grid item lg={7} md={7} sm={7} xs={12}>
                        <CartShop />  
                    </Grid>
                    <Grid item lg={5} md={5} sm={5} xs={12}>
                    {/* All about the purchase */}
                        <DetailsShop />
                    </Grid>
                </Grid>
                :
               <NonProducts /> 
            }

    </Container>
  )
}
