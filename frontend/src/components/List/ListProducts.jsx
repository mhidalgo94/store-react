import { Grid } from "@mui/material";
import React from "react";
import CardProduct from "../Card/CardProduct";

export default function ListProducts() {// include data in params
  const data = [
    {
      title: "Police Gray Eyeglasses",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat dolorem adipisci...",
      price: 180,
      oldPrice: 120,
      image: [
        "https://bazaar.ui-lib.com/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FFashion%2FAccessories%2F7.PoliceGrayEyeglasses.png&w=384&q=75",
      ],
    },
    {
      title: "Sian Ban Black",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat dolorem adipisci...",
      price: 180,
      oldPrice: 120,
      image: [
        "https://bazaar.ui-lib.com/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FFashion%2FAccessories%2F9.RayBanBlack.png&w=1200&q=75",
      ],
    },
    {
      title: "Police Gray Eyeglasses",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat dolorem adipisci...",
      price: 180,
      oldPrice: 120,
      image: [
        "https://bazaar.ui-lib.com/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FFashion%2FAccessories%2F7.PoliceGrayEyeglasses.png&w=384&q=75",
      ],
    },
    {
      title: "Sian Ban Black",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat dolorem adipisci...",
      price: 180,
      oldPrice: 120,
      image: [
        "https://bazaar.ui-lib.com/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FFashion%2FAccessories%2F9.RayBanBlack.png&w=1200&q=75",
      ],
    },
  ];


  return (
    <React.Fragment>
      {data.map((item, index) => {
        return (
          <Grid key={index} item xs={12} md={5} lg={4}>
            <CardProduct item={item} />
          </Grid>
        );
      })}
    </React.Fragment>
  );
}
