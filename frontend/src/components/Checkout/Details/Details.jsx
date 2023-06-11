import {Box, Typography, Stack, Divider} from '@mui/material';
import { useCartState } from '../../../store/cartState';

export default function DetailsCheckout() {

    const {products, getSubtotal, getTax} = useCartState();
    const items = products.reduce((sum,value)=> sum + value.quantity, 0)

    const subtotal = getSubtotal();
    const tax = getTax();

  return (
    <Box p={2} my={2}>
        <Typography variant='subtitle2' fontWeight='bold'>Your Order</Typography>
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
        {Boolean(products.length) && <Divider sx={{my:2}}/>}
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
                <Typography variant='body2' fontWeight='bold'>${subtotal}</Typography>
            </Stack>
            
        </Box>
       
    </Box>
  )
}
