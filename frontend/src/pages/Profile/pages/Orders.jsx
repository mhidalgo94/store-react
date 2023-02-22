import { Link } from 'react-router-dom';
import { Box,IconButton, Typography, Stack, Container,Grid, Paper, Chip } from "@mui/material";
import Profile from "../Profile";
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import useMediaQuery from '@mui/material/useMediaQuery'
import storeTheme from '../../../themes/storeTheme';


export default function PageOrders() {

  const theme = storeTheme;
  const showHeaders = useMediaQuery(theme.breakpoints.up('md'));

  const data = [1,2,3,4,5]

  return (
    <Profile>
        <Container sx={{my:2}}>
            <Stack direction='row' alignItems='center' gap={1}>
                <ShoppingBagIcon sx={{fontSize:'28px'}} color="primary"/>
                <Typography variant="h4">My Orders</Typography>
            </Stack>
            <Box sx={{m:2}}>
              {showHeaders && 
                <Grid container columns={13}>
                  <Grid item sm={3} md={3} lg={3}>
                    <Typography sx={{marginLeft:'10px'}} variant="h6" color='grey.600'>Orders</Typography>
                  </Grid>
                  <Grid item sm={3} md={3} lg={3}>
                    <Typography variant="h6" color='grey.600'>Status</Typography>
                  </Grid>
                  <Grid item sm={3} md={3} lg={3}>
                    <Typography variant="h6" color='grey.600'>Date</Typography>
                  </Grid>
                  <Grid item sm={3} md={3} lg={3}>
                    <Typography variant="h6" color='grey.600'>Total</Typography>
                  </Grid>
                  <Grid item sm={2} md={1} lg={1}>
                    <Typography variant="h6" textAlign='end' color='grey.600'></Typography>
                  </Grid>
                </Grid>
              }

              {data.map((item,index)=>{
                return (
                  <Paper sx={{p:'9px',my:2, borderRadius: '10px'}} key={index}>
                    <Grid container rowSpacing={1} columns={13} alignItems='center'>
                      <Grid item xs={4} sm={3} md={3} lg={3} >
                          <Typography variant='subtitle2'>3t23tn3</Typography>
                      </Grid>
                      <Grid item xs={4} sm={3} md={3} lg={3}  >
                          <Chip size="small" label={'Pending'} fontWeight='bold'/>
                      </Grid>
                      <Grid item xs={4} sm={3} md={3} lg={3}  >
                          <Typography  variant='subtitle2'>{'2023-02-19T16:36'}</Typography>
                      </Grid>
                      <Grid item xs={6} sm={3} md={3} lg={3} >
                          <Typography variant='subtitle2'>$340</Typography>
                      </Grid>
                      <Grid item xs={6} sm={1} md={1} lg={1} textAlign='end'>
                        <Link to={`/account/profile/order/${'3t23tn3'}`} className='link'>
                          <IconButton aria-label="Example">
                            <ArrowForwardIcon/>
                        </IconButton>
                        </Link>
                      </Grid>
                    </Grid>
                </Paper>
                )
              })}
              

            </Box>
        </Container>
    </Profile>
  )
}
