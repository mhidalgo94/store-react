import { useState } from "react";
import { Link } from "react-router-dom";
import {Badge, Tooltip, Typography, Stack } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import CartMenu from "./CartMenu";
import MenuAccount from "./MenuAccount";
import styleNavBar from "./styleNavbar";
import { useCartState } from "../../store/cartState";
import "./NavBar.scss";
import useMediaQuery from '@mui/material/useMediaQuery'
import storeTheme from '../../themes/storeTheme';

import Logo from "./Logo";

export default function NavBar() {
  const theme = storeTheme;
  const showLogo = useMediaQuery(theme.breakpoints.up('minixs'));

  // Drawer Cart Shop
  const [openCart, setOpenCart] = useState(false);
  const {products} = useCartState();
  // Menu Profile
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };


  return (
    <div className="content-navbar">
      <div className="navbar">
        <Stack direction='row' spacing={2}>
            <Link className="link" to="/">
              <Typography variant="h6" sx={styleNavBar.styleLink}>
                Home
              </Typography>
            </Link>
            <Link className="link" to="/shop/products">
              <Typography variant="h6" sx={styleNavBar.styleLink}>
                Shop
              </Typography>
            </Link>
        </Stack>

        {showLogo && <Logo />}

        <Stack direction='row' spacing={2}>
            <Link className='link' to='/account/profile/wishlist'>
              <Tooltip title="Wishlist" arrow>
                <FavoriteBorderIcon sx={styleNavBar.styleIcons} />
              </Tooltip>
            </Link>
            <Tooltip title="Account" arrow>
              <AccountCircleIcon
                onClick={handleClick}
                aria-controls={open ? 'account-menu' : undefined}
                sx={styleNavBar.styleIcons}
              />
            </Tooltip>
            <MenuAccount anchorEl={anchorEl} open={open} handleClose={handleClose}/>
            <Tooltip title="Cart" arrow>
              <Badge badgeContent={products.length} invisible={!Boolean(products.length > 0)} color='lightBlue' >
                <AddShoppingCartIcon
                  onClick={() => setOpenCart(!openCart)}
                  sx={styleNavBar.styleIcons}
                  />
              </Badge>
            </Tooltip>
      <CartMenu openCart={openCart} setOpenCart={setOpenCart} />

        </Stack>
        
      </div>
      {/* Drawer to Cart Shop */}
      <CartMenu openCart={openCart} setOpenCart={setOpenCart} />
    </div>
  );
}
