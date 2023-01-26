import {Link} from 'react-router-dom'
import {
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
import { Stack } from "@mui/system";

export default function CardProduct({ item }) {
  return (
    <Link to='/' className='link'>
      <Card elevation={1}>
        <CardMedia
          component="img"
          alt={item.title}
          height="240"
          width={200}
          image={item.image[0]}
        />
        <CardContent sx={{ padding: "10px" }}>
          <Typography variant="h6">{item.title}</Typography>
          <Typography
            variant="body1"
            sx={{ textAlign: "justify", fontSize: "14px" }}
          >
            {item.desc}
          </Typography>
        </CardContent>
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
              <IconButton color="primary" size="small">
                <AddShoppingCartIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title="Add to Favorite" arrow >
              <IconButton color="primary" size="small">
                <FavoriteBorderIcon />
              </IconButton>
            </Tooltip>
          </Stack>
        </CardActions>
      </Card>
    </Link>
  );
}
