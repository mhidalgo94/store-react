import { useEffect, useState } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import {Box, Grid, Stack, Typography,} from '@mui/material';
import ProfileBase from '../../ProfileBase';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CardProduct from '../../../../components/Card/CardProduct';
import { userState } from '../../../../store/userState';
import { wishListUser } from '../../../../api/fetchWishlist';

export default function WishList() {
  
  const [loading, setLoading] = useState(true);
  const [wishsList, setWishlist] = useState([]);
  const {token} = userState();

  useEffect(()=>{
    wishListUser(token).then(res=>{
      setWishlist(res?.data?.wishlist);
    }).finally(()=>{
      setLoading(false);
      console.log('finally')
    })
  },[token])

  return (
    <ProfileBase>
        <Box  sx={{my:2}}>
            <Stack direction='row' alignItems='center' gap={1}>
              <FavoriteIcon sx={{fontSize:'28px'}} color="primary"/>
              <Typography variant="h4">Wishlist</Typography>
            </Stack>

            {loading ? 
              <Box sx={{width:'100%', display:'flex', justifyContent:'center'}}>
                <CircularProgress color='lightBlue' size={24} />
              </Box>
              :
              <Grid container spacing={1} mt={2}>
                {wishsList.map((values, index) => {
                // console.log(item)
                return (
                    <Grid key={index} item xs={12} sm={6} md={3} lg={3}>
                      <CardProduct item={values.Product} id={values.Product.id} />
                    </Grid>
                    )
                  })
                }
              </Grid>
          }
        </Box>
    </ProfileBase>
  )
}
