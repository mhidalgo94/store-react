import { Typography } from "@mui/material";
import {Link} from 'react-router-dom';
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
          We are an e-commerce specialized in the sale of craft and handicraft products, as well as in the customization of items such as shirts, mugs and glasses. We offer a wide variety of high-quality products and exceptional customization services to meet all of your creative needs. Thanks for trusting us!
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
          <Link to='/how-to-buy' className="link">
            <Typography variant="subtitle1">How to Buy</Typography>
          </Link>
          <Link to='/return-refound' className="link">
            <Typography variant="subtitle1">Returns & Refounds</Typography>
          </Link>
          <Link to='/termins-conditions' className="link">
            <Typography variant="subtitle1">Terms & Conditions</Typography>
          </Link>

        </div>
      </div>  
    </div>
  );
}
