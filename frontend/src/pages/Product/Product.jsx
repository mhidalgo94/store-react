import { useState } from "react";
import { Container, Grid, Typography, Rating, IconButton, Button } from "@mui/material"
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import MiniSlider from "../../components/MiniSlider/MiniSlider";
import TabsProduct from "../../components/TabsProduct/TabsProduct";
import { Stack } from "@mui/system";

export default function Product() {

    const [imageSelected, setImageSelected] = useState(0);
    const [rating, setRating] = useState(2);

    const [quantityProduct,setQuantityProduct] = useState(1)


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
                <Typography variant='subtitle1' fontWeight='bold'>Description:</Typography>
                <Typography variant='body2' textAlign='justify' sx={{mx:1,maxWidth: '380px'}}>{data.desc}</Typography>
                
                <Typography variant='subtitle1' fontWeight='bold' sx={{mt:3}}>Rated:</Typography>
                <Stack direction='row' spacing={1}s>
                    <Rating name='rating' value={rating} onChange={(event,newValue)=>setRating(newValue)} /> 
                    <Typography variant="subtitle2">(20)</Typography>
                </Stack>

                <Stack direction='row' spacing={1} sx={{m:1}} alignItems='center'>                    
                    <Typography variant="h4" color='lightBlue.500' >${data.price}</Typography>
                    <Typography variant="h6" color='primary' sx={{paddingBottom:'10px',textDecoration:'line-through'}}>${data.oldPrice}</Typography>
                </Stack>
                    <Typography variant="body1" sx={{marginBottom:'20px'}}>Stock Available</Typography>

                <Stack direction="row" spacing={1} sx={{my:1}} alignItems='center'>
                    <IconButton sx={{border:'1px solid red', borderRadius:'8px'}} 
                    onClick={()=>setQuantityProduct(value=> value===0 ? 0 : value-1)}
                    onDoubleClick={()=>setQuantityProduct(value=> value === 0 ? 0 : value < 10 ? 0 : value-10)}
                    >
                        <RemoveIcon color='primary' />
                    </IconButton>
                    <Typography variant='h6'>{quantityProduct}</Typography>
                    <IconButton sx={{border:'1px solid red', borderRadius:'8px',p:1}} 
                        onClick={()=>setQuantityProduct(value=>value+1)} 
                        onDoubleClick={()=>setQuantityProduct(value=>value+10)}
                        >
                        <AddIcon color='primary'/>
                    </IconButton>
                    <Button sx={{py:1,px:2,fontWeight:600}} variant="contained" color="lightBlue" startIcon={<AddShoppingCartIcon />}>Add To Cart</Button>
                </Stack>
                
            </Grid>
        </Grid>
        <Container sx={{my:4}}>
            <TabsProduct />
        </Container>
    </Container>
    
  )
}
