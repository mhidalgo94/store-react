import { Box,IconButton, Typography, Divider, Tooltip } from '@mui/material'
import AddIcon from '@mui/icons-material/Add';
import ClearIcon from '@mui/icons-material/Clear';
import RemoveIcon from '@mui/icons-material/Remove';

import { useCartState } from '../../store/cartState';

export default function ItemCart({values: item})  {

    const {updateMountProductCart, removeForIdProducts} = useCartState();

   const incrementQuantity = ()=>{
        updateMountProductCart(item.id, item.quantity + 1)

   }

    const decrementQuatity = ()=>{
        updateMountProductCart(item.id, item.quantity=== 1  ? 1 :  item.quantity - 1)
    }


  return (
    <>
        <Box sx={{display:'flex',alignItems:'center',margin:'10px 0px',width:'100%'}}>
            <Box sx={{display:'flex',width:'15%', flexDirection:'column',alignItems:'center', gap:'2px'}}>
                <IconButton 
                    onClick={ incrementQuantity }
                    variant='outlined'
                    sx={{borderRadius:'50%',border:'1px solid #f44336',}} 
                    size='small'>
                    <AddIcon  color='primary' fontSize='10px'/>
                </IconButton>
                <Typography variant='subtitle2' sx={{fontWeight:'bold'}}>{item.quantity}</Typography>
                <IconButton 
                    onClick={decrementQuatity} variant='outlined'  sx={{borderRadius:'50%',border:'1px solid #f44336'}} size='small'>
                    <RemoveIcon  color='primary' fontSize='12px'/>
                </IconButton>
            </Box>
            <Box sx={{width:'25%'}}>
                <img src={item.images[0]} alt={item.name} width="60" height="60"   />
            </Box>
            <Box  sx={{width:'45%'}}>
                <Typography variant="subtitle1" fontWeight='bold'>{item.name.substring(0,25)}{item.name.length > 25 ? "..." : null}</Typography>
                <Typography variant="caption text" fontSize='12px' color='grey.A700'>${item.price} x {item.quantity}</Typography>
                <Typography variant="h6" color='primary' fontWeight='bold'>${item.priceXquantity}</Typography>
            </Box>
            <Box sx={{width:'15%'}}>
            <IconButton variant='outlined'   size='small'>
                <Tooltip title="Remove" arrow>
                    <ClearIcon  onClick={()=>removeForIdProducts(item.id)} />
                </Tooltip>
            </IconButton>
            </Box>
        </Box>
        <Divider />
    </>
  )
}
