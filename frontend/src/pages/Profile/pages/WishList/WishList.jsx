
import {Box, Grid, Stack, Typography,} from '@mui/material';
import ProfileBase from '../../ProfileBase';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CardProduct from '../../../../components/Card/CardProduct';

export default function WishList() {

  const data = [
    {
      id:1,
      title: "Police Gray Eyeglasses",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat dolorem adipisci...",
      price: 180,
      oldPrice: 120,
      image: [
        "https://bazaar.ui-lib.com/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FFashion%2FAccessories%2F7.PoliceGrayEyeglasses.png&w=384&q=75",
      ],
    },
    {
      id:2,
      title: "Sian Ban Black",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat dolorem adipisci...",
      price: 180,
      oldPrice: 120,
      image: [
        "https://bazaar.ui-lib.com/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FFashion%2FAccessories%2F9.RayBanBlack.png&w=1200&q=75",
      ],
    },
    {
      id:3,
      title: "Police Gray Eyeglasses",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat dolorem adipisci...",
      price: 180,
      oldPrice: 120,
      image: [
        "https://bazaar.ui-lib.com/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FFashion%2FAccessories%2F7.PoliceGrayEyeglasses.png&w=384&q=75",
      ],
    },
    {
      id:10,
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
    <ProfileBase>
        <Box  sx={{my:2}}>
            <Stack direction='row' alignItems='center' gap={1}>
              <FavoriteIcon sx={{fontSize:'28px'}} color="primary"/>
              <Typography variant="h4">Wishlist</Typography>
            </Stack>

          <Grid container spacing={1} mt={2}>
            {data.map((item, index) => {
              return (
                <Grid key={index} item xs={12} sm={6} md={3} lg={3}>
                  <CardProduct btnFavorite={false} item={item} id={index} />
                </Grid>
              )
            })}
          </Grid>
        </Box>
    </ProfileBase>
  )
}
