import { Link } from "react-router-dom";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { Typography } from "@mui/material";
import "./NavBar.scss";

export default function NavBar() {
  const styleLink = {
    color: "#7D879C",
    fontSize: "17px",
    fontWeight: 500,
    lineHeight: 1.6,
    letterSpacing: "0.0075em",

    "&:hover": {
      color: "rgb(210, 63, 87)",
    },
  };

  const styleIcons={
    color:'#7D879C',
    "&:hover": { color: "rgb(210, 63, 87)" }
  }

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
              <Typography variant="h6" sx={styleLink}>
                Home
              </Typography>
            </Link>
          </div>
          <div className="items">
            <Link className="link" to="/shop">
              <Typography variant="h6" sx={styleLink}>
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
              sx={styleIcons}
            />
          </div>
          <div className="item">
            <AccountCircleIcon
              sx={styleIcons}
            />
          </div>
          <div className="item">
            <AddShoppingCartIcon
              sx={styleIcons}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
