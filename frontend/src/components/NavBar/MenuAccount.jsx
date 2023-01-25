import { Menu, MenuItem, ListItem, Typography } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LogoutIcon from "@mui/icons-material/Logout";
import SettingsIcon from "@mui/icons-material/Settings";
import styleNavBar from './styleNavbar';


export default function MenuAccount({ anchorEl,open,handleClose}) {

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
      <MenuItem>
        <ListItem sx={{p:0}}>
          <AccountCircleIcon sx={styleNavBar.styleIcons} />
          <Typography variant="subtitle1" sx={{fontWeight:'500'}} m={1} >My Acount</Typography>
        </ListItem>
      </MenuItem>
      <MenuItem>
        <ListItem sx={{p:0}}>
          <SettingsIcon sx={styleNavBar.styleIcons}/>
          <Typography variant="subtitle1" sx={{fontWeight:'500'}} m={1} >Settings</Typography>
        </ListItem>
      </MenuItem>
      <MenuItem>
        <ListItem sx={{p:0}}>
          <LogoutIcon sx={styleNavBar.styleIcons}/>
          <Typography variant="subtitle1" sx={{fontWeight:'500'}} m={1} >Logout</Typography>
        </ListItem>
      </MenuItem>
    </Menu>
  );
}
