import { useState } from "react";
import { Container, Grid, Typography, Rating  } from "@mui/material"

import MiniSlider from "./MiniSlider";

export default function Product() {

    const [imageSelected, setImageSelected] = useState(0)
    const [rating, setRating] = useState(2)

    const data = {
        id:4,
        title: "Sian Ban Black",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat dolorem adipisci...",
        price: 180,
        oldPrice: 120,
        image: [
          "https://bazaar.ui-lib.com/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FFashion%2FAccessories%2F9.RayBanBlack.png&w=1200&q=75",
          "https://bazaar.ui-lib.com/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FFashion%2FAccessories%2F10.RayBanOcean.png&w=1200&q=75",
          "https://bazaar.ui-lib.com/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FFashion%2FAccessories%2F11.SunglassesCollection.png&w=1200&q=75",
          "https://bazaar.ui-lib.com/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FFashion%2FAccessories%2F9.RayBanBlack.png&w=1200&q=75",
          "https://bazaar.ui-lib.com/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FFashion%2FAccessories%2F8.RayBanMattBlack.png&w=1200&q=75",
        ],
    }
      

  return (
    <Container sx={{backgroundColor: 'rgb(246, 249, 252)'}}>
        <Grid container>
            <Grid item xs={12} md={6} lg={6}  alignItems='center'>
                <Grid container justifyContent='center'>
                    <img src={data.image[imageSelected]} width="350" height='350' alt={`${data.title}${data.id}`} />
                </Grid>
                <Grid container>
                    <MiniSlider values={data} imageSelected={imageSelected}  setImageSelected={setImageSelected}/>
                </Grid>
            </Grid>
            <Grid item xs={12} md={6} lg={6}>
                <Typography variant='h3' sx={{my:2}}>{data.title}</Typography>
                <Typography variant='subtitle1'>Description:</Typography>
                <Typography variant='body2'textAlign='justify' sx={{mx:1,maxWidth: '380px'}}>{data.desc}</Typography>

                <Typography variant='subtitle1' sx={{mt:1}}>Rated:</Typography>
                <Rating name='rating' value={rating} onChange={(event,newValue)=>setRating(newValue)} /> 
            </Grid>
        </Grid>
    </Container>
    
  )
}
