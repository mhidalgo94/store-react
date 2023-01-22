import React from 'react'
import { IconButton, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';

import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { Stack } from '@mui/system';

export default function CardProduct({item}) {
  return (
    <div>
        <Card elevation={1}>
            <CardMedia component='img' alt={item.title}  height='240' width={200} 
                image='https://bazaar.ui-lib.com/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FFashion%2FAccessories%2F7.PoliceGrayEyeglasses.png&w=384&q=75'
            />
            <CardContent sx={{padding:'10px'}}>
                <Typography variant='h6'>{item.title}</Typography>
                <Typography variant='body1' sx={{textAlign:'justify',fontSize:'14px'}}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum ...</Typography>
            </CardContent>
            <CardActions sx={{display:'felx',alignItems:'center', justifyContent:'space-between', padding:'10px 20px'}}>
                <Typography variant='subtitle1' color='primary'>$188</Typography>
                <Stack direction='row'>
                    <IconButton  color='primary' size='small' ><AddShoppingCartIcon /></IconButton>
                    <IconButton  color='primary' size='small' ><FavoriteBorderIcon /></IconButton>
                </Stack>
            </CardActions>
        </Card>
    </div>
  )
}
