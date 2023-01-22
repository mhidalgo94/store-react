import { Container, Grid } from "@mui/material";
import MenuFiler from "../../components/MenuFilter/MenuFiler";
import ListProducts from "../../components/List/ListProducts";

export default function Products() {

  return (
    <div style={{ backgroundColor: "#F6F9FC" }}>
      <Container sx={{p:4}}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={3} md={3} lg={3}>
            <MenuFiler />
          </Grid>
          <Grid item xs={12} sm={9} md={9} lg={9}>
              <Grid container spacing={2}>
                  {/*  sould include data in param list component */ }
                  <ListProducts />
              </Grid>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
