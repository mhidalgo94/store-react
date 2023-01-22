import { Typography } from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import LocationOnIcon from "@mui/icons-material/LocationOn";

import "./Footer.scss";

export default function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="about">
          <Typography variant="h6" sx={{ color: "white" }}>
            About Us
          </Typography>
          <Typography variant="body1">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
            blanditiis tenetur unde suscipit, quam beatae rerum inventore
            consectetur, neque doloribus, cupiditate numquam dignissimos laborum
            fugiat deleniti? Eum quasi quidem quibusdam.
          </Typography>
        </div>
        <div className="contact">
          <Typography variant="h6" sx={{ color: "white", p:'0 5px' }}>
            Can we help you?
          </Typography>
          <div className="items">
            <div className="item">
              <LocationOnIcon />{" "}
              <Typography variant="subtitle1">
                14428 59TH CIR E Bradenton FL 34211.
              </Typography>
            </div>
            <div className="item">
              <PhoneIcon sx={{ fontSize: "18px" }} />
              <Typography variant="subtitle1"> +1 305 322 5290</Typography>
            </div>
            <div className="item">
              <AlternateEmailIcon />{" "}
              <Typography variant="subtitle1">info@gmail.com</Typography>
            </div>
          </div>
        </div>

        <div className="signup">
          <Typography variant="h6" sx={{ color: "white" }}>
            Custom Care
          </Typography>
          <Typography variant="subtitle1">How to Buy</Typography>
          <Typography variant="subtitle1">Track Your Order</Typography>
          <Typography variant="subtitle1">Returns & Refounds</Typography>
          <Typography variant="subtitle1">Terms & Conditions</Typography>
        </div>
      </div>  
    </div>
  );
}
