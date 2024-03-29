import {Link} from 'react-router-dom'
import {Box,Tooltip,IconButton,Card,CardActions,CardContent,CardMedia,Typography,Stack} from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

import { useCartState } from '../../store/cartState';
import { useSnackBar } from '../../store/snackbarState';

//  Need finish add to wishlist
export default function CardProduct({ item, id}) {

  const {setNewProduct, addProduct, products}= useCartState()
  const {setOpen} = useSnackBar();

  const addCart = ()=>{
    const verifyInCart = products.find(product => parseInt(product.id) === parseInt(id));
    if(verifyInCart){
      setOpen('This product is already in the cart.', 'info')
      return 
    }
    setNewProduct(item, 1);
    const e = addProduct();
    if(e){
      setOpen('Added to cart','success')
    }else{
      setOpen('Server Error!','error')
    }
  }

  

  return (
    <>
      <Card elevation={1} sx={{maxHeight:'400px'}}>
        <Link to={`/shop/product/${id}`} className='link'>
          <CardMedia
            component="img"
            alt={item.name}
            height="240"
            width={200}
            image={item.images[0]}
          />
        <CardContent sx={{ padding:'10px',paddingBottom:'5px' }}>
            <Box sx={{paddingBottom:'5px'}}>
              <Typography variant="h6">{item.name}</Typography>
              <Typography
                variant="body1"
                sx={{ textAlign: "justify", fontSize: "14px"}}
              >
                {/* {item.description} */}
                {item.description.substring(0,25)}{item.description.length > 25 ? "..." : null}
              </Typography>
            </Box>
        </CardContent>
        </Link>
        <CardActions
          sx={{
            display: "felx",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "10px 20px",
          }}
        >
          <Stack direction="row" spacing={2}>
            <Typography variant="subtitle1" color="lightBlue.600">
              $ {item.price}
            </Typography>

            {item.old_price > item.price &&
             <Box sx={{display:'flex'}}>
               <Typography variant="subtitle1"color="gray" sx={{ textDecoration: ""}}>$ </Typography>
                <Typography
                  variant="subtitle1"
                  color="gray"
                  sx={{ textDecoration: "line-through", display:'flex' }}
                  >
                    {item.old_price}
                </Typography>
            </Box> 
              }
          </Stack>
          <Stack direction="row">
            <Tooltip title="Add to Cart" arrow >
              <IconButton color="primary" size="small" onClick={addCart}>
                <AddShoppingCartIcon  />
              </IconButton>
            </Tooltip>
          </Stack>
        </CardActions>
      </Card>
    </>
  );
}
