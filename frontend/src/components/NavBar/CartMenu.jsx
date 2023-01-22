import CloseIcon from '@mui/icons-material/Close';
import { Button,Container,Typography,Tooltip,Stack, SwipeableDrawer, Divider, Grid, IconButton,Box} from "@mui/material";
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import ItemCart from './ItemCart';


export default function CartMenu({openCart, setOpenCart}) {

   const data = [
    {
      title: "Police Gray Eyeglasses",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat dolorem adipisci...",
      price: 180,
      oldPrice: 120,
      image: [
        "https://bazaar.ui-lib.com/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FFashion%2FAccessories%2F7.PoliceGrayEyeglasses.png&w=384&q=75",
      ],
      mount:6
    },
    {
      title: "Sian Ban Black",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat dolorem adipisci...",
      price: 180,
      oldPrice: 120,
      image: [
        "https://bazaar.ui-lib.com/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FFashion%2FAccessories%2F9.RayBanBlack.png&w=1200&q=75",
      ],
      mount:1
    },
    {
      title: "Police Gray Eyeglasses",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat dolorem adipisci...",
      price: 180,
      oldPrice: 120,
      image: [
        "https://bazaar.ui-lib.com/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FFashion%2FAccessories%2F7.PoliceGrayEyeglasses.png&w=384&q=75",
      ],
      mount:2
    },
    {
      title: "Ban Black",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat dolorem adipisci...",
      price: 180,
      oldPrice: 120,
      image: [
        "https://bazaar.ui-lib.com/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FFashion%2FAccessories%2F9.RayBanBlack.png&w=1200&q=75",
      ],
      mount:3
    },
        {
          title: "Police Gray Eyeglasses",
          desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat dolorem adipisci...",
          price: 180,
          oldPrice: 120,
          image: [
            "https://bazaar.ui-lib.com/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FFashion%2FAccessories%2F7.PoliceGrayEyeglasses.png&w=384&q=75",
          ],
          mount:6
        },
        {
          title: "Sian Ban Black",
          desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat dolorem adipisci...",
          price: 180,
          oldPrice: 120,
          image: [
            "https://bazaar.ui-lib.com/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FFashion%2FAccessories%2F9.RayBanBlack.png&w=1200&q=75",
          ],
          mount:1
        },
        {
          title: "Police Gray Eyeglasses",
          desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat dolorem adipisci...",
          price: 180,
          oldPrice: 120,
          image: [
            "https://bazaar.ui-lib.com/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FFashion%2FAccessories%2F7.PoliceGrayEyeglasses.png&w=384&q=75",
          ],
          mount:2
        },
        {
          title: "Ban Black",
          desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat dolorem adipisci...",
          price: 180,
          oldPrice: 120,
          image: [
            "https://bazaar.ui-lib.com/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FFashion%2FAccessories%2F9.RayBanBlack.png&w=1200&q=75",
          ],
          mount:3
        },
      ];

  return (
    <SwipeableDrawer open={openCart}
        anchor='right'
        onClose={(e)=>setOpenCart( false)}
        onOpen={(e)=>setOpenCart( true)}
        sx={{width:'calc(100% - 320px)',flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: '340px',
        }}}>
          <Container sx={{marginTop:'20px'}} >
            <Grid display='flex' justifyContent='space-between' alignItems='center' >
              <Stack direction='row' spacing={2} alignItems='center'>
                <ShoppingBagIcon  size='small'/>
                <Typography variant='h6'>Items {2}</Typography>
              </Stack>
              <IconButton>
                <Tooltip title='Close' arrow>
                  <CloseIcon onClick={()=>setOpenCart(!openCart)} />
                </Tooltip>
              </IconButton>
            </Grid>
          </Container>
          <Divider sx={{marginTop:2}}/>
          <>
            {data.map((item,index)=> <ItemCart key={index} item={item}/>)}
          </>
          <Container sx={{backgroundColor:'white',p:1,borderTop:'1px solid #f1f1f1', position:'sticky', bottom:0,right:0,height:'100px',width:'100%'}}>
            <Box display='flex' flexDirection='column' gap={1}>
              <Button variant='contained' >Checkout Now</Button>
              <Button variant='outlined'>View Cart</Button>
            </Box>
          </Container>
      </SwipeableDrawer>
  )
}
