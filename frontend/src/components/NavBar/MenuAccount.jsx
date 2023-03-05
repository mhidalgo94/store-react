import { Menu, MenuItem, ListItem, Typography } from "@mui/material";
import {Link} from 'react-router-dom';
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LogoutIcon from "@mui/icons-material/Logout";
import LoginIcon from '@mui/icons-material/Login';
import SettingsIcon from "@mui/icons-material/Settings";
import styleNavBar from './styleNavbar';

import { userState } from "../../store/userState";

export default function MenuAccount({ anchorEl,open,handleClose}) {

  const styleLinkMenu = {
    p:0,
    color:'#7D879C',

    "&:hover": {
      color: "rgb(210, 63, 87)",
    }
  }

  const {isAuth,setLogout,setLogin} = userState();

  const handleLogout = ()=>{
    setLogout();
  }

  return (
    <Menu
    PaperProps={{
        elevation:1,
        sx:styleNavBar.styleMenuAccount,
      }}
      anchorEl={anchorEl}
      id="account-menu"
      open={open}
      onClose={handleClose}
      onClick={handleClose}
      transformOrigin={{ horizontal: 'right', vertical: 'top' }}
      anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
    >
      <MenuItem sx={styleLinkMenu}>
        <Link to='/account/profile' className="link">
          <ListItem sx={{padding:0,margin:'0 10px'}}>
              <AccountCircleIcon  />
              <Typography variant="subtitle1" sx={{fontWeight:'500'}} m={1} >My Acount</Typography>
          </ListItem>
        </Link>
      </MenuItem>
      <MenuItem sx={styleLinkMenu}>
        <ListItem sx={{padding:0,margin:'0 10px'}}>
          <SettingsIcon />
          <Typography variant="subtitle1" sx={{fontWeight:'500'}} m={1} >Settings</Typography>
        </ListItem>
      </MenuItem>
      <MenuItem sx={styleLinkMenu}>
        {isAuth ?
          <ListItem sx={{padding:0,margin:'0 10px'}} onClick={handleLogout}>
            <LogoutIcon/>
            <Typography variant="subtitle1" sx={{fontWeight:'500'}} m={1}  >Logout</Typography>
          </ListItem>  
          :
          <ListItem sx={{padding:0,margin:'0 10px'}} onClick={()=>setLogin()}>
            <LoginIcon/>
            <Typography variant="subtitle1" sx={{fontWeight:'500'}} m={1} >Login</Typography>
          </ListItem>
      }
      </MenuItem>
    </Menu>
  );
}
