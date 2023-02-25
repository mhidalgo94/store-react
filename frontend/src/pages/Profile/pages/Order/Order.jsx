import {useParams} from 'react-router-dom';
import { Box, Container,Grid, Typography, Stack, Paper, Button, Divider} from "@mui/material";
import ProfileBase from '../../ProfileBase';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';



export default function PageOrder() {

    const {id} = useParams();
  return (
    <ProfileBase>
        <Container sx={{my:2}}>
            <Stack direction='row' alignItems='center' gap={1}>
                <ShoppingBagIcon sx={{fontSize:'28px'}} color="primary"/>
                <Typography variant="h4">Orders Details </Typography>
            </Stack>


            <Paper sx={{borderRadius:'12px', mt:2}}  elevation={2}>
                {/* Header Detail Order */}
                <Box p={2} sx={{borderRadius:'12px 12px 0 0', bgcolor:'grey.A100'}}>
                    <Grid container >
                        <Grid item lg={4} md={4} sm={4}>
                            <Stack direction='row'>
                                <Typography variant='subtitle1' color='grey.600'>Order ID: </Typography>
                                <Typography variant='subtitle1' ml={1} >{id}</Typography>
                            </Stack>
                        </Grid>
                        <Grid item lg={4} md={4} sm={4}>
                            <Stack direction='row'>
                                <Typography variant='subtitle1' color='grey.600'>Place On: </Typography>
                                <Typography variant='subtitle1' ml={1}> 10 Nov, 2022</Typography>
                            </Stack>
                        </Grid>
                        <Grid item lg={4} md={4} sm={4}>
                            <Stack direction='row'>
                                <Typography variant='subtitle1' color='grey.600'>Delivered On: </Typography>
                                <Typography variant='subtitle1' ml={1}> Pending</Typography>
                            </Stack>
                        </Grid>
                    </Grid>
                </Box>


                {/* Body Detail Order */}
                <Box p={2}>
                    <Grid container  spacing={2}>
                            <Grid item lg={4} md={4} sm={4}>
                                <Stack direction='row' alignItems='center'>
                                    <img src='https://bazaar.ui-lib.com/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FFashion%2FAccessories%2F9.RayBanBlack.png&w=1200&q=75' alt='asds' width='80px' height='80px'/>
                                    <Box>
                                        <Typography variant='subtitle1' >Sian Ban Black </Typography>
                                        <Typography alignItems='center' display='flex' variant='subtitle1' color='grey.500' >180 x 4 <ArrowRightAltIcon /> 720</Typography>
                                    </Box>
                                </Stack>
                            </Grid>
                            <Grid item lg={4} md={4} sm={4}>
                                <Stack>
                                    <Typography variant='subtitle1' color='grey.600'>Description:</Typography>
                                    <Typography variant='subtitle1' > Lorem ipsum dolor sit amet...</Typography>
                                </Stack>
                            </Grid>
                            <Grid item lg={4} md={4} sm={4}>
                                    <Button color='myBlue' variant='outlined'>Write A Review</Button>
                            </Grid>
                    </Grid>
                </Box>
            </Paper>

            <Box mt={2} sx={{width:'100%'}}>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6} md={6} lg={6}>
                        <Paper sx={{p:2}}>
                            <Typography variant='h6' fontWeight='bold'>Shipping Address</Typography>
                            <Typography variant='body1'>14428 59TH CIR E Bradenton FL 34211</Typography>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6} lg={6}>
                        <Paper sx={{p:2}}>
                            <Typography variant='h6' fontWeight='bold' color='grey.800'>Total Summary</Typography>
                            <Stack direction='row' justifyContent='space-between'>
                                <Typography variant='subtitle1'color='grey.600'>Items</Typography>
                                <Typography variant='subtitle1'color='grey.600'>4</Typography>
                            </Stack>
                            <Stack direction='row' justifyContent='space-between'>
                                <Typography variant='subtitle1'color='grey.600'>Delivery</Typography>
                                <Typography variant='subtitle1'color='grey.600'>$12.99</Typography>
                            </Stack>
                            <Divider />
                            <Stack direction='row' justifyContent='space-between'>
                                <Typography variant='body1' fontWeight='bold' color='grey.800'>Total</Typography>
                                <Typography variant='subtitle1'color='grey.600'>$179.99</Typography>
                            </Stack>
                        </Paper>
                    </Grid>
                </Grid>
            </Box>



        </Container>
    </ProfileBase>
  )
}
