import { Container, Grid } from "@mui/material";
import CardProduct from "../../components/Card/CardProduct";
import MenuFiler from "../../components/MenuFilter/MenuFiler";
export default function Products() {
  return (
    <div style={{ backgroundColor: "#F6F9FC" }}>
      <Container sx={{p:4}}>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={4} md={3} lg={2}>
            <MenuFiler />
          </Grid>
          <Grid item xs={12} sm={8} md={9} lg={10}>
              <Grid container sparcing={3}>
                <Grid item xs={12} md={6} lg={4}>
                  <CardProduct item={{title:'Police Gray Eyeglasses'}} />
                </Grid>
              </Grid>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
