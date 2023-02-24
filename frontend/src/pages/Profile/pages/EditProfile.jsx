import {Link} from 'react-router-dom';
import {Button,Box, Grid, Typography, Stack, Paper, } from "@mui/material";
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import FormEditProfile from '../../../components/Form/formProfile/FormEditProfile';
import Profile from "../Profile";


export default function EditProfile() {

  return (
    <Profile>
        <Box sx={{my:2}}>
            <Grid container sx={{my:2}} justifyContent='space-between'>
                <Grid item md={10} sm={9} xs={12}>
                    <Stack direction='row' alignItems='center' gap={1}>
                        <ManageAccountsIcon sx={{fontSize:'28px'}} color="primary"/>
                        <Typography variant="h4">Edit Profile</Typography>
                    </Stack>
                </Grid>
                <Grid item md={2} sm={3} xs={6}>
                    <Link className='link' to='/account/profile/profile-info'>
                        <Button variant='outlined' fullWidth sx={{bgcolor:'primary.50',textTransform:'capitalize', fontWeight:'bold'}}>
                            Back To Profile
                        </Button>
                    </Link> 
                </Grid>
            </Grid>

            <Paper sx={{p:3, my:4}}>
                <FormEditProfile />
            </Paper>
        </Box>

    </Profile>
  )
}
