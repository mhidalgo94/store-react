import { Stack, IconButton, Typography } from "@mui/material"
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';

import { useCartState } from "../../store/cartState"

export default function ButtonProductPage({ product }) {
    const {updateMountProductCart} = useCartState();


    const incrementQuantity = () => {
        // const verifyInCart = productsCart.find(p => parseInt(p.id) === parseInt(id));
        
        const quantity = product.quantity + 1;

        updateMountProductCart(product.id, quantity);
    }

    const decrementQuantity =()=>{
        // const quantity = setProduct(product=> ({...product,quantity: product.quantity === 1 ? 1 : product.quantity - 1}));
        const quantity =  product.quantity === 1 ? 1 : product.quantity - 1;
        updateMountProductCart(product.id, quantity);


    }
  return (
    <Stack direction="row" spacing={3} sx={{my:1}} alignItems='center'>
        {product.quantity === 0 ? (
            <IconButton disabled sx={{border:'1px solid ', borderRadius:'8px',cursor:'no-drop'}}
            onClick={decrementQuantity}>
                <RemoveIcon color='grey' />
            </IconButton>
        ):
            (
            <IconButton sx={{border:'1px solid red', borderRadius:'8px'}}
                onClick={decrementQuantity}>
                <RemoveIcon color='primary' />
            </IconButton>
        )}
        <Typography variant='h6'>
            {product.quantity}
            </Typography>
        <IconButton sx={{border:'1px solid red', borderRadius:'8px',p:1}} 
            onClick={incrementQuantity} >
            <AddIcon color='primary'/>
        </IconButton>
    </Stack>
  )
}
