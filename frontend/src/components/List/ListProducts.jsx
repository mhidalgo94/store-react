import { Grid, Typography, Box } from "@mui/material";
import React from "react";
import CardProduct from "../Card/CardProduct";
import PaginatorProducts from "../Paginator/PaginatorProducts";
import CircularProgress from '@mui/material/CircularProgress';

export default function ListProducts({listProduct=[],currentPage,setCurrentPage, totalPages,loading}) {// include data in params

  return (
    <React.Fragment>
      <Grid container spacing={2} sx={{minHeight:'450px'}}>
        {loading ?
          <Box sx={{display:'flex',width:"100%",p:2, justifyContent:'center'}}>
            <CircularProgress />
          </Box>
        :
        listProduct.length > 0 ? listProduct.map((item) => {
          return (
                <Grid item xs={12} sm={6} md={4} lg={4}  key={item.id}>
                  <CardProduct btnFavorite={true} item={item} id={item.id} />
                </Grid>
            )
          })
          :
          <Box sx={{width:'100%', textAlign:'center'}}>
        <Typography variant="h4">There are no products for sale.</Typography>
      </Box>
    }
    </Grid>
    {totalPages >= 0 ? 
    <PaginatorProducts currentPage={currentPage} setCurrentPage={setCurrentPage} totalPages={totalPages} />
    : null
    }
    </React.Fragment>
  );
}

