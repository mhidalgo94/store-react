import { Container, Grid, Paper, Typography, Stack, Box } from "@mui/material";
import CarouselComponent from "../../components/Carousel/CarouselComponent";
import bottle2 from "./../../img/bottle2.jpg";
import sweats2 from "./../../img/sweats2.webp";
import hats3 from "./../../img/hats3.webp";
import hoodies from "./../../img/hoodies.jpg";
import dtShirt from "./../../img/design_t-shirt.jpg";
import thermosMainCradft from "./../../img/thermos-maincraft.webp";
import SavingsIcon from "@mui/icons-material/Savings";
import ElectricCarIcon from "@mui/icons-material/ElectricCar";
import PaymentIcon from "@mui/icons-material/Payment";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";

export default function Home() {

  const stylePaper = { p: 4, border: "1px solid #F3F5F9","&:hover":{boxShadow: '0px 8px 45px rgb(3 0 71 / 9%)',borderColor: 'transparent'} }

  return (
    <div>
      <Box sx={{ bgcolor: "white" }}>
        <Container sx={{ py: 2 }}>
          <Grid container spacing={2} style={{ alignItems: "start" }}>
            <Grid item  md={6} lg={6}>
              <Paper sx={stylePaper} elevation={0}>
                <Grid container alignItems='center'>
                  <Grid item xs={12} sm={3} md={4}>
                    <img src={hoodies} width="180" height="180" alt="hodies" />
                  </Grid>

                  <Grid item xs={12} sm={9} md={8}>
                    <Box>
                      <Typography variant="overline">
                        T-Shirt & Sweaters
                      </Typography>
                      <Typography variant="h5">
                        Stand Out with Our Customized Shirts
                      </Typography>
                      <Typography sx={{ p: 1 }} variant="body1">
                        Show off your style and uniqueness with our customized
                        sweaters: Create yours today!
                      </Typography>
                    </Box>
                  </Grid>
                </Grid>
              </Paper>

              <Paper sx={{...stylePaper,my:2}} elevation={0} >
                    <Stack direction={{xs:'column',sm:'row', md:'row'}}> 
                      <Box>
                        <Typography variant="overline">Thermos & Cup</Typography>
                        <Typography variant="h4">Stay Hydrated in Style</Typography>
                        <Typography sx={{ p: 1 }} variant="body1">
                          Keep your kids hydrated at all times with our
                          custom-printed thermoses. With a fun and colorful design,
                          these thermoses will be the perfect companion for your
                          kids' daily adventures.
                        </Typography>
                      </Box>
                        <img src={thermosMainCradft} width="140" height="210" alt="hodies" style={{margin:'0 auto'}}/>
                    </Stack>
              </Paper>
            </Grid>

            <Grid item md={6} lg={6} height="100%">
              <Paper sx={stylePaper} elevation={0}>
                <Stack>
                  <img
                    src={dtShirt}
                    alt="t-shirt-design"
                    width="200"
                    height="200"
                    style={{ margin: "0 auto" }}
                  />
                  <Typography variant="h4" my={2}>
                    Dress Your Team with Pride: Customized Shirts for Your
                    Company
                  </Typography>
                  <Typography variant="body1">
                    Offer your employees personalized shirts and sweaters with
                    your company logo. With our high-quality printing service,
                    we can create unique garments that reflect the professional
                    image of your brand. Don't wait any longer and make your
                    team proud to represent your company!
                  </Typography>
                </Stack>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <CarouselComponent />

      <Container sx={{ my: 2, bgcolor: "white", p: 4 }}>
        <Typography variant="h4" textAlign="center">
          Browser by style
        </Typography>
        <Typography variant="subtitle1" textAlign="center">
          Explore our product of personalized items and find the perfect product
          that reflects your style
        </Typography>
        <Grid container sx={{ my: 2 }} gap={4} justifyContent="center">
          <Grid item sx={{ minWidth: "270px" }}>
            <Stack direction="row" sx={{ position: "relative" }}>
              <Stack sx={{ zIndex: 1, p: 1 }}>
                <Typography
                  fontWeight="bold"
                  color="lightBlue.500"
                  variant="h5"
                >
                  Custom sweatshirts
                </Typography>
                <Typography
                  color="grey.600"
                  fontWeight="bold"
                  sx={{ my: 1 }}
                  variant="subtitle1"
                >
                  Crewnecks
                </Typography>
                <Typography
                  color="grey.600"
                  fontWeight="bold"
                  sx={{ my: 1 }}
                  variant="body1"
                >
                  Ladies Sweats
                </Typography>
                <Typography
                  color="grey.600"
                  fontWeight="bold"
                  sx={{ my: 1 }}
                  variant="body1"
                >
                  Youth Sweats
                </Typography>
                <Typography
                  color="grey.600"
                  fontWeight="bold"
                  sx={{ my: 1 }}
                  variant="body1"
                >
                  Jackets & Vests
                </Typography>
              </Stack>
              <img
                src={sweats2}
                alt=""
                style={{
                  position: "absolute",
                  bottom: 0,
                  right: 0,
                  height: "100%",
                }}
              />
            </Stack>
          </Grid>

          <Grid item sx={{ minWidth: "270px" }}>
            <Stack direction="row" sx={{ position: "relative" }}>
              <Stack sx={{ zIndex: 1, p: 1 }}>
                <Typography
                  fontWeight="bold"
                  color="lightBlue.500"
                  variant="h5"
                >
                  Custom Thermoses
                </Typography>
                <Typography
                  color="grey.600"
                  fontWeight="bold"
                  sx={{ my: 1 }}
                  variant="subtitle1"
                >
                  Coffee thermoses
                </Typography>
                <Typography
                  color="grey.600"
                  fontWeight="bold"
                  sx={{ my: 1 }}
                  variant="body1"
                >
                  Plastic thermoses
                </Typography>
                <Typography
                  color="grey.600"
                  fontWeight="bold"
                  sx={{ my: 1 }}
                  variant="body1"
                >
                  Glass thermoses
                </Typography>
                <Typography
                  color="grey.600"
                  fontWeight="bold"
                  sx={{ my: 1 }}
                  variant="body1"
                >
                  Stainless steel thermoses
                </Typography>
              </Stack>
              <img
                src={bottle2}
                alt="custom t-shirt"
                style={{
                  position: "absolute",
                  bottom: 0,
                  right: "-35px",
                  height: "100%",
                }}
              />
            </Stack>
          </Grid>
          <Grid item sx={{ minWidth: "270px" }}>
            <Stack direction="row" sx={{ position: "relative" }}>
              <Stack sx={{ zIndex: 1, p: 1 }}>
                <Typography
                  fontWeight="bold"
                  color="lightBlue.500"
                  variant="h5"
                >
                  Custom Hats
                </Typography>
                <Typography
                  color="grey.600"
                  fontWeight="bold"
                  sx={{ my: 1 }}
                  variant="subtitle1"
                >
                  Snapback/Adjustable
                </Typography>
                <Typography
                  color="grey.600"
                  fontWeight="bold"
                  sx={{ my: 1 }}
                  variant="body1"
                >
                  Trucker Hats
                </Typography>
                <Typography
                  color="grey.600"
                  fontWeight="bold"
                  sx={{ my: 1 }}
                  variant="body1"
                >
                  Ladies Hats
                </Typography>
                <Typography
                  color="grey.600"
                  fontWeight="bold"
                  sx={{ my: 1 }}
                  variant="body1"
                >
                  Youth Hats
                </Typography>
              </Stack>
              <img
                src={hats3}
                alt="custom hats"
                style={{
                  position: "absolute",
                  bottom: 0,
                  right: 0,
                  height: "100%",
                }}
              />
            </Stack>
          </Grid>
        </Grid>
      </Container>

      <Container sx={{ py: 4 }}>
        <Paper
          sx={{ bgcolor: "transparent", border: "1px solid #DAE1E7", p: 2 }}
          elevation={0}
        >
          <Grid container gap={2} sx={{ justifyContent: { md: "center" } }}>
            <Grid item display="flex" gap={2}>
              <ElectricCarIcon sx={{ fontSize: "70px", color: "grey.800" }} />
              <Stack>
                <Typography variant="h4" color="grey.800" fontWeight="bold">
                  Fast Delivery
                </Typography>
                <Typography
                  variant="subtitle1"
                  sx={{
                    px: 1,
                    lineHeight: "1.5",
                    color: "#7D879C",
                    fontWeight: "400",
                  }}
                >
                  Free in our areas.
                </Typography>
              </Stack>
            </Grid>
            <Grid item display="flex" gap={2}>
              <SavingsIcon sx={{ fontSize: "70px", color: "grey.800" }} />
              <Stack>
                <Typography variant="h4" color="grey.800" fontWeight="bold">
                  Money Guarantee
                </Typography>
                <Typography
                  variant="subtitle1"
                  sx={{
                    px: 1,
                    lineHeight: "1.5",
                    color: "#7D879C",
                    fontWeight: "400",
                  }}
                >
                  7 Day Back
                </Typography>
              </Stack>
            </Grid>
            <Grid item display="flex" gap={2}>
              <PaymentIcon sx={{ fontSize: "70px", color: "grey.800" }} />
              <Stack>
                <Typography variant="h4" color="grey.800" fontWeight="bold">
                  Payments
                </Typography>
                <Typography
                  variant="subtitle1"
                  sx={{
                    px: 1,
                    lineHeight: "1.5",
                    color: "#7D879C",
                    fontWeight: "400",
                  }}
                >
                  Secure System
                </Typography>
              </Stack>
            </Grid>

            <Grid item display="flex" gap={2}>
              <SupportAgentIcon sx={{ fontSize: "70px", color: "grey.800" }} />
              <Stack>
                <Typography variant="h4" color="grey.800" fontWeight="bold">
                  Online Support
                </Typography>
                <Typography
                  variant="subtitle1"
                  sx={{
                    px: 1,
                    lineHeight: "1.5",
                    color: "#7D879C",
                    fontWeight: "400",
                  }}
                >
                  24/7 daily
                </Typography>
              </Stack>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </div>
  );
}
