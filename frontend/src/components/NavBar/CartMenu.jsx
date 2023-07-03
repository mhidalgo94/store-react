import { useEffect } from 'react';
import {Link,useLocation} from 'react-router-dom';
import CloseIcon from '@mui/icons-material/Close';
import { Button,Container,Typography,Tooltip,Stack, SwipeableDrawer, Divider, Grid, IconButton,Box} from "@mui/material";
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import ItemCart from './ItemCart';
import { useCartState } from '../../store/cartState';
import { userState } from '../../store/userState';

export default function CartMenu({openCart, setOpenCart}) {

  const {products:data } = useCartState();
  const  {isAuth} = userState();

  const location = useLocation();

    useEffect(() => {
      setOpenCart(false);
    }, [location.pathname,setOpenCart]);


  return (
    <SwipeableDrawer open={openCart}
        anchor='right'
        onClose={(e)=>setOpenCart( false)}
        onOpen={(e)=>setOpenCart( true)}
        sx={{width:'calc(100% - 320px)',flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: '330px',
        }}}>
          <Container sx={{marginTop:'20px'}} >
            <Grid display='flex' justifyContent='space-between' alignItems='center' >
              <Stack direction='row' spacing={2} alignItems='center'>
                <ShoppingBagIcon  size='small'/>
                <Typography variant='h6'>Items {data.length}</Typography>
              </Stack>
              <IconButton>
                <Tooltip title='Close' arrow>
                  <CloseIcon onClick={ () => setOpenCart(!openCart)} />
                </Tooltip>
              </IconButton>
            </Grid>
          </Container>
          <Divider sx={{marginTop:2}} />
          <Box sx={{minHeight:'60%',overflow:'auto'}}>

          {data.length > 0 ?
              data.map((item,index)=> <ItemCart key={index} values={item}/> )
              :
              <Box sx={{height:'70%', textAlign:'center',display:'flex',justifyContent:'center',
              alignItems:'center',color:'grey.500'}}>
                <Typography variant='subtitle2'>Empty Cart</Typography>
             </Box> 
          }
          </Box>
          <Container sx={{backgroundColor:'white',p:1,borderTop:'1px solid #f1f1f1', position:'sticky', bottom:0,right:0,height:'100px',width:'100%'}}>
            <Box display='flex' flexDirection='column' gap={1}>
              <Box width='100%'>
                <Link className='link' to={isAuth ? '/checkout-alternative' : '/login'}>
                  <Button fullWidth variant='contained' disabled={!Boolean(data.length)}>Checkout Now</Button>
                </Link>
              </Box>
              <Box width='100%'>
              {data.length > 0 ?
                <Link className='link' to='/cart-shop'>
                  <Button fullWidth variant='outlined'>View Cart</Button>
                </Link>
                :
                <Link className='link' to='/shop/products'>
                  <Button fullWidth color='lightBlue' variant='outlined'>Go Shop</Button>
                </Link>
              }
              </Box>
            </Box>
          </Container>
      </SwipeableDrawer>
  )
}
