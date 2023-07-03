import { useEffect } from 'react';
import {Link, useLocation} from 'react-router-dom';
import { Box, Tooltip, SwipeableDrawer, Typography} from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
// import styleNavBar from "./styleNavbar";

export default function MenuNavigate({open,setOpen}) {
  const location = useLocation();

    useEffect(() => {
        setOpen(false);
    }, [location.pathname,setOpen]);



  return (
    <SwipeableDrawer open={open}
        anchor='left'
        onClose={(e)=>setOpen( false)}
        onOpen={(e)=>setOpen( true)}
        sx={{width:'calc(100% - 320px)',flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: '330px',
        }}}> 
        <Box sx={{width:'100%',display:'flex', justifyContent:'end',p:2}}>
            <Tooltip title="Close" arrow onClick={()=>setOpen(!open)}>
                <CloseIcon  />
            </Tooltip>
        </Box>
        <Box sx={{width:'100%',textAlign:'center'}}>
                <Link to='/' className='link' >
                    <Typography variant='h6'>Home</Typography>
                </Link>
                <Link to='/shop/products' className='link'>
                    <Typography variant='h6'>Shop</Typography>
                </Link>
                <Link to='/how-to-buy' className="link">
                    <Typography variant="h6">How to Buy</Typography>
                </Link>
                <Link to='/return-refound' className="link">
                    <Typography variant="h6">Returns & Refounds</Typography>
                </Link>
                <Link to='/termins-conditions' className="link">
                    <Typography variant="h6">Terms & Conditions</Typography>
                </Link>
            
        </Box>
        </SwipeableDrawer>
  )
}
