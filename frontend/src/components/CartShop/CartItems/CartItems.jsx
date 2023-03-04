
import { Box, Tooltip,Paper, Stack, Typography, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

export default function CartItems({item,update, remove}) {



   const incrementQuantity = ()=>{
        update(item.id, item.quantity + 1)

   }

    const decrementQuatity = ()=>{
        update(item.id, item.quantity=== 1  ? 1 :  item.quantity - 1)
    }

  return (
    <Box sx={{my:2}}>
        <Paper elevation={2} sx={{p:0.5}}>
            <Stack direction='row' gap={2}>
              <img width='120px' height='120px' src={item.image[0]} alt={item.title} />
              <Box sx={{width:'100%'}} >
                <Stack direction='row' alignItems='center' justifyContent='space-between'>
                  <Typography variant='subtitle1'>{item.title}</Typography>
                  <Tooltip title="Remove" arrow>
                    <IconButton onClick={()=>remove(item.id)} >
                      <CloseIcon  sx={{fontSize:'20px'}} />
                    </IconButton>
                  </Tooltip>
                </Stack>
                <Stack direction='row' gap={2}>
                  <Typography variant='subtitle2' color='grey.600'>${item.price} x {item.quantity}</Typography>
                  <Typography variant='subtitle2' color='lightBlue.400'>${(item.priceXquantity)}</Typography>
                </Stack>
                <Stack direction="row" spacing={1} sx={{my:1}} alignItems='center'>
                    {item.quantity === 0 ? (
                        <IconButton sx={{border:'1px solid ', borderRadius:'8px',cursor:'no-drop'}}
                        onClick={()=>incrementQuantity()}>
                        <RemoveIcon color='grey' />
                    </IconButton>
                    ):(

                    <IconButton sx={{border:'1px solid red', borderRadius:'5px'}}
                        onClick={()=>decrementQuatity()}>
                        <RemoveIcon color='primary'sx={{fontSize:'0.875rem'}} />
                    </IconButton>
                    )}
                    <Typography variant='h6'>{item.quantity}</Typography>
                    <IconButton sx={{border:'1px solid red', borderRadius:'5px',p:1}} 
                        onClick={()=>incrementQuantity()} 
                    >
                        <AddIcon color='primary' sx={{fontSize:'0.875rem'}}/>
                    </IconButton>
                </Stack>
              </Box>
            </Stack>
        </Paper>
    </Box>
  )
}
