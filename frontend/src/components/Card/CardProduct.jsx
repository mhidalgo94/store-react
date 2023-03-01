import {Link} from 'react-router-dom'
import {
  Box,
  Tooltip,
  IconButton,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import DeleteIcon from '@mui/icons-material/Delete';
import { Stack } from "@mui/material";

import { useCartState } from '../../store/cartState';



export default function CardProduct({ item,id, btnFavorite=false }) {

  const {setNewProduct, addProduct}= useCartState()

  const addCart = ()=>{
    setNewProduct(item, 1);
    addProduct();


  }

  return (
    <>
      <Card elevation={1}>
        <Link to={`/shop/product/${id}`} className='link'>
          <CardMedia
            component="img"
            alt={item.title}
            height="240"
            width={200}
            image={item.image[0]}
          />
        <CardContent sx={{ padding: "10px" }}>
            <Box>
              <Typography variant="h6">{item.title}</Typography>
              <Typography
                variant="body1"
                sx={{ textAlign: "justify", fontSize: "14px" }}
              >
                {item.desc}
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
            <Typography variant="subtitle1" color="lightBlue.800">
              $ {item.price}
            </Typography>
            <Typography
              variant="subtitle1"
              color="lightBlue.800"
              sx={{ textDecoration: "line-through" }}
            >
              ${item.oldPrice}
            </Typography>
          </Stack>
          <Stack direction="row">
            <Tooltip title="Add to Cart" arrow >
              <IconButton color="lightBlue" size="small" onClick={addCart}>
                <AddShoppingCartIcon  />
              </IconButton>
            </Tooltip>
            {btnFavorite ? ( 
              <Tooltip title="Add to Favorite" arrow >
                <IconButton color="primary" size="small">
                  <FavoriteBorderIcon />
                </IconButton>
              </Tooltip>
            ) :
            (
              <Tooltip title="Remove" arrow >
                <IconButton color="primary" size="small">
                  <DeleteIcon />
                </IconButton>
              </Tooltip>
            )}
          </Stack>
        </CardActions>
      </Card>
    </>
  );
}
