import { Box,IconButton, Typography, Divider, Tooltip } from '@mui/material'
import AddIcon from '@mui/icons-material/Add';
import ClearIcon from '@mui/icons-material/Clear';
import RemoveIcon from '@mui/icons-material/Remove';
export default function ItemCart({item}) {

  return (
    <>
        <Box sx={{display:'flex',alignItems:'center',margin:'10px 5px',justifyContent:'space-between'}}>
            <Box sx={{display:'flex', flexDirection:'column',alignItems:'center', gap:'2px'}}>
                <IconButton variant='outlined' sx={{borderRadius:'50%',border:'1px solid #f44336',}} size='small'>
                    <AddIcon  color='primary' fontSize='10px'/>
                </IconButton>
                <Typography variant='subtitle2' sx={{fontWeight:'bold'}}>{item.mount}</Typography>
                <IconButton variant='outlined'  sx={{borderRadius:'50%',border:'1px solid #f44336'}} size='small'>
                    <RemoveIcon  color='primary' fontSize='12px'/>
                </IconButton>
            </Box>
            <Box>
                <img src={item.image[0]} alt={item.title} width="100px" height='100px'   />
            </Box>
            <Box >
                <Typography variant="subtitle1" fontWeight='bold'>{item.title.substring(0,15)}...</Typography>
                <Typography variant="caption text" fontSize='12px' color='grey.A700'>${item.price} x {item.mount}</Typography>
                <Typography variant="h6" color='primary' fontWeight='bold'>${parseFloat(item.price) * parseFloat(item.mount)}</Typography>
            </Box>
            <Box>
            <IconButton variant='outlined'   size='small'>
                <Tooltip title="Remove" arrow>
                    <ClearIcon />
                </Tooltip>
            </IconButton>
            </Box>
        </Box>
        <Divider />
    </>
  )
}
