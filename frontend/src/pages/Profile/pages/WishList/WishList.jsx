import { useEffect, useState } from 'react';
import {Box, Grid, Stack, Typography,} from '@mui/material';
import ProfileBase from '../../ProfileBase';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CardProduct from '../../../../components/Card/CardProduct';
import { userState } from '../../../../store/userState';
import { wishListUser } from '../../../../api/fetchWishlist';

export default function WishList() {
  
  const [loading, setLoading] = useState(false);
  const [wishsList, setWishlist] = useState([]);
  const {token} = userState();

  useEffect(()=>{
  
  wishListUser(token).then(res=>{
    setWishlist(res?.data?.wishlist);
  })
  },[token])

  return (
    <ProfileBase>
        <Box  sx={{my:2}}>
            <Stack direction='row' alignItems='center' gap={1}>
              <FavoriteIcon sx={{fontSize:'28px'}} color="primary"/>
              <Typography variant="h4">Wishlist</Typography>
            </Stack>

          <Grid container spacing={1} mt={2}>
            {wishsList.map((values, index) => {
              // console.log(item)
              return (
                <Grid key={index} item xs={12} sm={6} md={3} lg={3}>
                  <CardProduct item={values.Product} id={values.Product.id} />
                </Grid>
              )
            })}
          </Grid>
        </Box>
    </ProfileBase>
  )
}
