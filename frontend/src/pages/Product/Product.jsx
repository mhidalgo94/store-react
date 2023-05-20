import { useEffect, useState } from "react";
import {useParams} from 'react-router-dom';
import { Box, Button,Container, Grid, Typography,Stack } from "@mui/material"


import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import MiniSlider from "../../components/MiniSlider/MiniSlider";
import TabsProduct from "../../components/TabsProduct/TabsProduct";
import CircularProgress from '@mui/material/CircularProgress';

import { useSnackBar } from "../../store/snackbarState";
import { useCartState } from './../../store/cartState.js'
import { getOneProduct } from '../../api/fetchProducts.js'
import RatedProduct from "../../components/RatedProduct/RatedProduct";
import ButtonProductPage from "../../components/ButtonProductPage/ButtonProductPage";



export default function Product() {
    const [loadingProduct, setLoadingProduct] =useState(false)
    // id product for fetch and search in products cart shop
    const {id} = useParams();
    // for include product in cart shop
    const {setNewProduct, addProduct,products:productsCart} = useCartState()

    const [product,setProduct] = useState(null)
    // Img for mini slider pre-view
    const [imageSelected, setImageSelected] = useState(0);
    
    const checkProdCart = ()=>{
        const check = productsCart.find(item=> parseInt(item.id) === parseInt(id));
        return check || product;
    }
    // Notifications
    const { setOpen } = useSnackBar()


    const checkProdInCart = checkProdCart();

    useEffect(()=>{
        setLoadingProduct(true);
        getOneProduct(id).then(res=>{
            const values = {...res.data,quantity:0};
            setProduct(values);
        }).catch(err=>{
            const msg = err?.response?.data?.message || 'Error Server';
            setOpen(msg, 'error')
        }).finally(()=>{
            setLoadingProduct(false);
        })
    },[id, setOpen])


    const addCart = () =>{
        setNewProduct(product, 1);
        addProduct();
            
    }


  return (
    <Container sx={{backgroundColor: 'rgb(246, 249, 252)'}}>
        {loadingProduct ?
        <Box sx={{width:'100%', display:'flex', justifyContent:'center',mt:2,p:4}}>
            <CircularProgress />
        </Box>
        :
            Boolean(product?.id) ?
            <>
            <Grid container>
                {/* Images Product */}
                <Grid item xs={12} md={6} lg={6}  alignItems='center'>
                    <Grid container justifyContent='center'>
                        <img src={product.images[imageSelected]} width="350" height='350' alt={`${product.name}${product.id}`} />
                    </Grid>
                    <Grid item container>
                        <MiniSlider values={product} imageSelected={imageSelected}  setImageSelected={setImageSelected}/>
                    </Grid>
                </Grid>

                <Grid item xs={12} md={6} lg={6}>
                    <Typography variant='h3' sx={{my:2}}>{product.name}</Typography>
                    <Typography variant='subtitle1' fontWeight='bold'>Description:</Typography>
                    <Typography variant='body2' textAlign='justify' sx={{mx:1,maxWidth: '380px'}}>{product.description}</Typography>
                    {/* Rating Product */}
                    <Typography variant='subtitle1' fontWeight='bold' sx={{mt:3}}>Rated:</Typography>
                    <RatedProduct />

                    <Stack direction='row' spacing={1} sx={{m:1}} alignItems='center'>                    
                        <Typography variant="h4" color='lightBlue.500' >${product.price}</Typography>
                        {product.old_price > product.price &&
                            <Typography variant="h6" color='primary' sx={{paddingBottom:'10px',textDecoration:'line-through'}}>${product.old_price}</Typography>
                        }
                    </Stack>
                    {product.available ? 
                        <Typography variant="body1" sx={{marginBottom:'20px'}}>Stock Available</Typography>
                        : 
                        <Typography variant="body1" color='error' sx={{marginBottom:'20px'}}>Stock not enabled</Typography>
                    }

                    {checkProdInCart.quantity > 0 ? 
                        <ButtonProductPage product={checkProdInCart} />
                        : 
                        <Button sx={{py:1,px:2,fontWeight:600}} onClick={addCart} variant="contained" color="lightBlue" startIcon={<AddShoppingCartIcon />}>Add To Cart</Button>
                    }
                </Grid>
            </Grid>
            <Container sx={{my:4}}>
                <TabsProduct id={id} specification={product.specification}/>
            </Container>
            </>
            :
            <Box sx={{mt:2,p:4,width:'100%'}}>
                <Typography variant='h5' textAlign='center'>The product does not exist.</Typography>
            </Box>
            
        }

    </Container>
    
  )
}
