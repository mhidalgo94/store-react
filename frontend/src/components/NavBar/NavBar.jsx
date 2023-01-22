import {useState} from 'react';
import { Link } from "react-router-dom";
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { Typography } from "@mui/material";
import CartMenu from './CartMenu';
import styleNabVar from './styleNavbar'
import "./NavBar.scss";


export default function NavBar() {

  const [openCart, setOpenCart] = useState(false)



  return (
    <div className="content-navbar">
      <div className="info">
        <Typography variant="subtitle1" sx={{ color: "#fff" }}>
          You Store Art & Craft
        </Typography>
      </div>
      <div className="navbar">
        <div className="list-page">
          <div className="items">
            <Link className="link" to="/">
              <Typography variant="h6" sx={styleNabVar.styleLink}>
                Home
              </Typography>
            </Link>
          </div>
          <div className="items">
            <Link className="link" to="/shop/products">
              <Typography variant="h6" sx={styleNabVar.styleLink}>
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
            <FavoriteBorderIcon
              sx={styleNabVar.styleIcons}
            />
          </div>
          <div className="item">
            <AccountCircleIcon
              sx={styleNabVar.styleIcons}
            />
          </div>
          <div className="item">
            <ShoppingBagIcon
              onClick={()=>setOpenCart(!openCart)}
              sx={styleNabVar.styleIcons}
            />
          </div>
        </div>
      </div>
      {/* Swager to Cart Shop */}
      <CartMenu openCart={openCart} setOpenCart={setOpenCart} />
    </div>
  );
}
