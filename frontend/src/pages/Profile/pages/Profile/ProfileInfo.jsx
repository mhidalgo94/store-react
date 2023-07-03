import { useState,useEffect } from 'react';
import {Link} from 'react-router-dom';
import {Avatar, Button, Box, Grid,Stack, Paper,Typography} from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import ProfileBase from '../../ProfileBase';

import {userState} from '../../../../store/userState';
import {useCartState} from '../../../../store/cartState.js';
import { getUserReviews } from '../../../../api/fetchReviews.js'
import {wishListUser} from '../../../../api/fetchWishlist.js'
import { listOrderSales } from '../../../../api/fetchOrderSales';
export default function ProfileInfo() {

  const {user,token,setLogout} = userState();
  const {products} = useCartState();
  const firstName = user.firstName.substring(0,1).toUpperCase() + user.firstName.substring(1);
  const lastName = user.lastName.substring(0,1).toUpperCase() + user.lastName.substring(1);
  const fullName = `${firstName} ${lastName}`;


  // Extra Details Profile
  const [reviews, setReviews ] = useState([])
  const [wihslist, setWishlist] = useState({count:0})
  const [allOrders, setAllOrders] = useState(0)

  useEffect(()=>{
    getUserReviews(token).then(res=>{
      setReviews(res?.data || []);
    }).catch(err=>{
      if (err?.response?.status === 401) {
          setLogout();
      }
    })
    wishListUser(token).then(res=>{
      setWishlist(prev=>({...prev, count:res?.data?.count}));
    }).catch(err=>{
      if (err?.response?.status === 401) {
          setLogout();
      }
    });
    listOrderSales(token).then(res=>{
      setAllOrders(res?.data?.length || 0);
    }).catch(err=>{
      if (err?.response?.status === 401) {
          setLogout();
      }
    });
  },[token,setLogout])

  return (
    <ProfileBase>
        <Box sx={{my:2}}>
          <Grid container justifyContent='space-between'>
            <Grid item md={10} sm={9} xs={12}>
              <Stack direction='row' alignItems='center' gap={1}>
                  <PersonIcon sx={{fontSize:'28px'}} color="primary"/>
                  <Typography variant="h4">Profile Info </Typography>
              </Stack>
            </Grid>
            <Grid item md={2} sm={3} xs={6}>
                <Link className='link' to='/account/profile/profile-edit'>
                  <Button variant='outlined' fullWidth sx={{bgcolor:'primary.50',textTransform:'capitalize', fontWeight:'bold'}}>
                    Edit Profile
                  </Button>
                </Link> 
            </Grid>
          </Grid>

          <Box sx={{my:4}}>
            <Grid container  spacing={1}>
                <Grid item md={6} sm={7} xs={12}>
                    <Paper sx={{ p:2}} elevation={2}>
                      <Grid container >
                        <Grid item sx={{margin:'0 auto', display:'flex', alignItems:'center'}}>
                          <Avatar alt="Picture user profile" src={user.image} sx={{width:'100px',height:'100px'}} />
                        </Grid>
                        <Grid item>
                        <Box sx={{mx:2}} >
                            <Typography variant='body2' color='grey.500'>Name:</Typography>
                            <Typography variant='body1' mx={1}>{fullName}</Typography>
                            <Typography variant='body2' color='grey.500'>Email:</Typography>
                            <Typography variant='body1' mx={1}>{user.email}</Typography>
                            <Typography variant='body2' color='grey.500'>Phone:</Typography>
                            <Typography variant='body1' mx={1}>+1 {user.phone}</Typography>
                            <Stack direction='row'>
                              <Box>
                                <Typography variant='body2' color='grey.500'>Address:</Typography>
                                <Typography variant='body1' mx={1}>{user.address}</Typography>
                              </Box>  
                              <Box>
                                <Typography variant='body2' color='grey.500'>Zip Code:</Typography>
                                <Typography variant='body1' mx={1}>{user.zip_code}</Typography>
                              </Box>
                            </Stack>
                          </Box>
                        </Grid>
                      </Grid>
                    </Paper>
                </Grid>
                <Grid item container md={6} sm={5} xs={12} spacing={1} alignItems='center'>
                    <Grid item sm={6} xs={12}>
                      <Paper elevation={2} sx={{p:2}}>
                        <Typography variant='h5' color='primary' textAlign='center'>{allOrders}</Typography>
                        <Typography variant='body2' color='grey.600' textAlign='center'>all Orders</Typography>
                      </Paper>
                    </Grid>
                    <Grid item sm={6} xs={12}>
                      <Paper sx={{p:2}} elevation={2}>
                        <Typography variant='h5' color='primary' textAlign='center'>{products.length}</Typography>
                        <Typography variant='body2' color='grey.600' textAlign='center'>Items in Cart</Typography>
                      </Paper>
                    </Grid>
                    <Grid item sm={6} xs={12}>
                      <Paper sx={{p:2}} elevation={2}>
                        <Typography variant='h5' color='primary' textAlign='center'>{reviews.length}</Typography>
                        <Typography variant='body2' color='grey.600' textAlign='center'>Reviews</Typography>
                      </Paper>
                    </Grid>
                    <Grid item sm={6} xs={12}>
                      <Paper sx={{p:2}} elevation={2}>
                        <Typography variant='h5' color='primary' textAlign='center'>{wihslist.count}</Typography>
                        <Typography variant='body2' color='grey.600' textAlign='center'>Wishlist</Typography>
                      </Paper>
                    </Grid>
                    
                </Grid>
            </Grid>
          </Box>
        </Box>
    </ProfileBase>
  )
}