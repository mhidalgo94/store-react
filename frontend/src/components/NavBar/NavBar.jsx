import { useState } from "react";
import { Link } from "react-router-dom";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { Tooltip, Typography } from "@mui/material";
import CartMenu from "./CartMenu";
import MenuAccount from "./MenuAccount";
import styleNavBar from "./styleNavbar";
import "./NavBar.scss";

export default function NavBar() {
  // Drawer Cart Shop
  const [openCart, setOpenCart] = useState(false);

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
      {/* <div className="info">
        <Typography variant="subtitle1" sx={{ color: "#fff" }}>
          You Store Art & Craft
        </Typography>
      </div> */}
      <div className="navbar">
        <div className="list-page">
          <div className="items">
            <Link className="link" to="/">
              <Typography variant="h6" sx={styleNavBar.styleLink}>
                Home
              </Typography>
            </Link>
          </div>
          <div className="items">
            <Link className="link" to="/shop/products">
              <Typography variant="h6" sx={styleNavBar.styleLink}>
                Shop
              </Typography>
            </Link>
          </div>
        </div>

        <div className="logo">
          <h4>Logotipo</h4>
        </div>

        <div className="icons">
          <div className="item">
            <Tooltip title="Wishlist" arrow>
              <FavoriteBorderIcon sx={styleNavBar.styleIcons} />
            </Tooltip>
          </div>
          <div className="item">
            <Tooltip title="Account" arrow>
              <AccountCircleIcon
                onClick={handleClick}
                aria-controls={open ? 'account-menu' : undefined}
                sx={styleNavBar.styleIcons}
              />
            </Tooltip>
            {/* Menu Profile */}
            <MenuAccount anchorEl={anchorEl} open={open} handleClose={handleClose}/>
          </div>
          <div className="item">
            <Tooltip title="Cart" arrow>
              <ShoppingBagIcon
                onClick={() => setOpenCart(!openCart)}
                sx={styleNavBar.styleIcons}
              />
            </Tooltip>
          </div>
        </div>
      </div>
      {/* Drawer to Cart Shop */}
      <CartMenu openCart={openCart} setOpenCart={setOpenCart} />
    </div>
  );
}
