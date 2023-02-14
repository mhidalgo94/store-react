import CloseIcon from '@mui/icons-material/Close';
import { Button,Container,Typography,Tooltip,Stack, SwipeableDrawer, Divider, Grid, IconButton,Box} from "@mui/material";
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import ItemCart from './ItemCart';
import { useCartState } from '../../store/cartState';


export default function CartMenu({openCart, setOpenCart}) {

  const {products:data } = useCartState();


  return (
    <SwipeableDrawer open={openCart}
        anchor='right'
        onClose={(e)=>setOpenCart( false)}
        onOpen={(e)=>setOpenCart( true)}
        sx={{width:'calc(100% - 320px)',flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: '340px',
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
          <>
            {data.map((item,index)=> <ItemCart key={index} values={item}/> )}
          </>
          <Container sx={{backgroundColor:'white',p:1,borderTop:'1px solid #f1f1f1', position:'sticky', bottom:0,right:0,height:'100px',width:'100%'}}>
            <Box display='flex' flexDirection='column' gap={1}>
              <Button variant='contained' disabled={!Boolean(data.length)}>Checkout Now</Button>
              <Button variant='outlined'>View Cart</Button>
            </Box>
          </Container>
      </SwipeableDrawer>
  )
}
