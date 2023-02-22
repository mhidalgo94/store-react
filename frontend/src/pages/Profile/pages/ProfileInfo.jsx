import {Avatar, Button, Box, Grid,Stack, Paper,Typography} from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import Profile from '../Profile';


export default function ProfileInfo() {
  return (
    <Profile>
        <Box>
          <Grid container justifyContent='space-between'>
            <Grid item md={10} sm={9} xs={12}>
              <Stack direction='row' alignItems='center' gap={1}>
                  <PersonIcon sx={{fontSize:'28px'}} color="primary"/>
                  <Typography variant="h4">Profile Info </Typography>
              </Stack>
            </Grid>
            <Grid md={2} sm={3} xs={6} sx={{margin:'0 auto'}}>
                <Button variant='outlined' fullWidth sx={{bgcolor:'primary.50',textTransform:'capitalize', fontWeight:'bold'}}>Edit Profile</Button>
            </Grid>
          </Grid>

          <Box sx={{my:4}}>
            <Grid container  spacing={1}>
                <Grid item md={6} sm={12} xs={12}>
                    <Paper sx={{ px:5,height:'200px'}} elevation={2}>
                      <Stack direction='row' sx={{height:'100%', margin:'0 auto'}} alignItems='center' >
                          <Avatar sx={{width:'100px',height:'100px'}} />
                          <Box sx={{mx:2}} >
                            <Typography variant='body2' color='grey.500'>Name:</Typography>
                            <Typography variant='body1' mx={1}>Jhon James</Typography>
                            <Typography variant='body2' color='grey.500'>Email:</Typography>
                            <Typography variant='body1' mx={1}>jhonjames@gmail.com</Typography>
                            <Typography variant='body2' color='grey.500'>Phone:</Typography>
                            <Typography variant='body1' mx={1}>+1 243 784 1422</Typography>
                            <Typography variant='body2' color='grey.500'>Address:</Typography>
                            <Typography variant='body1' mx={1}>978 Elton Springs, Eribertoview</Typography>
                          </Box>
                      </Stack>
                    </Paper>
                </Grid>
                <Grid item container md={6} sm={12} xs={12} spacing={1} alignItems='center'>
                    <Grid item sm={6} xs={12}>
                      <Paper elevation={2} sx={{p:2}}>
                        <Typography variant='h5' color='primary' textAlign='center'>14</Typography>
                        <Typography variant='body2' color='grey.600' textAlign='center'>all Orders</Typography>
                      </Paper>
                    </Grid>
                    <Grid item sm={6} xs={12}>
                      <Paper sx={{p:2}} elevation={2}>
                        <Typography variant='h5' color='primary' textAlign='center'>4</Typography>
                        <Typography variant='body2' color='grey.600' textAlign='center'>Items in Cart</Typography>
                      </Paper>
                    </Grid>
                    <Grid item sm={6} xs={12}>
                      <Paper sx={{p:2}} elevation={2}>
                        <Typography variant='h5' color='primary' textAlign='center'>3</Typography>
                        <Typography variant='body2' color='grey.600' textAlign='center'>Reviews</Typography>
                      </Paper>
                    </Grid>
                    <Grid item sm={6} xs={12}>
                      <Paper sx={{p:2}} elevation={2}>
                        <Typography variant='h5' color='primary' textAlign='center'>2</Typography>
                        <Typography variant='body2' color='grey.600' textAlign='center'>Await Delivery</Typography>
                      </Paper>
                    </Grid>
                    
                </Grid>
            </Grid>
          </Box>
        </Box>
    </Profile>
  )
}