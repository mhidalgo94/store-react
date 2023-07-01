import {Box, Paper, Typography,Stack, Divider, Button} from '@mui/material'
import { useCartState } from '../../store/cartState'
import { Link } from 'react-router-dom';
import { userState } from '../../store/userState';

export default function DetailsShop() {
    const {isAuth} = userState();
    const {products,getSubtotal,getTax} = useCartState();

    const items = products.reduce((sum,value)=> sum + value.quantity, 0);

    const subtotal = getSubtotal();
    const tax = getTax();
    const total = parseFloat(subtotal + tax).toFixed(2);

  return (
    <Box>
        <Paper sx={{m:2,p:2}} elevation={1}>
            
            <Box my={1}>
            {products.map((item, index)=>{
                return (
                    <Box key={index} py={0.5}>
                        <Stack direction='row' justifyContent='space-between'>
                            <Stack direction='row' gap={1}>
                                <Typography variant='body2' fontWeight='bold'>{item.quantity}</Typography>
                                <Typography variant='body2'>x</Typography>
                                <Typography variant='body2'>{item.title}</Typography>
                            </Stack>
                            <Box>
                                <Typography variant='body2' fontWeight='400'>$ {item.priceXquantity}</Typography>
                            </Box>
                        </Stack>
                    </Box>
                    
                )
            })}
             </Box>
            <Divider sx={{my:2}}/>
            <Box py={1}>
                <Stack direction='row' justifyContent='space-between' my={0.5}>
                    <Typography variant='body2' >Items:</Typography>
                    <Typography variant='body2' >{items}</Typography>
                </Stack>
                <Stack direction='row' justifyContent='space-between' my={0.5}>
                    <Typography variant='body2' >Subtotal:</Typography>
                    <Typography variant='body2' >${subtotal}</Typography>
                </Stack>
                <Stack direction='row' justifyContent='space-between'>
                    <Typography variant='body2'>Tax:</Typography>
                    <Typography variant='body2'>${tax}</Typography>
                </Stack>
                <Stack direction='row' justifyContent='space-between' sx={{mt:2}}>
                    <Typography variant='body2' fontWeight='bold'>Total:</Typography>
                    <Typography variant='body2' fontWeight='bold'>${total}</Typography>
                </Stack>
                
            </Box>
            <Link to={isAuth ? '/checkout-alternative': '/login'} className='link'>
                <Button sx={{mt:2,textTransform:'capitalize'}} fullWidth variant='contained' color='primary'>Checkout Now</Button>
            </Link>
        </Paper>
    </Box>
  )
}
