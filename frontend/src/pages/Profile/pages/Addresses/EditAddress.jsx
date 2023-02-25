import {Link,useParams} from 'react-router-dom';
import {Box, Button,Grid, Paper, Typography, Stack} from '@mui/material';
import ProfileBase from '../../ProfileBase';
import EditLocationIcon from '@mui/icons-material/EditLocation';
import FormAddress from '../../../../components/Form/FormAddress/FormAddress';


export default function EditAddress() {

    const {id} = useParams()
  return (
    <ProfileBase>
        <Box sx={{my:2}}>
            <Grid sx={{my:2}} container justifyContent='space-between'>
                <Grid item md={10} sm={9} xs={12}>
                    <Stack direction='row' alignItems='center' gap={1}>
                        <EditLocationIcon sx={{fontSize:'28px'}} color="primary"/>
                        <Typography variant="h4">Address</Typography>
                    </Stack>
                </Grid>
                <Grid item md={2} sm={3} xs={6} sx={{margin:'0 auto'}}>
                    <Link className='link' to='/account/profile/addresses'>
                    <Button variant='outlined' fullWidth sx={{bgcolor:'primary.50',textTransform:'capitalize', fontWeight:'bold'}}>
                        Back to Addresses
                    </Button>
                    </Link> 
                </Grid>
            </Grid>
            <Paper  sx={{p:'9px',my:2, borderRadius: '10px'}}>
                <FormAddress edit={true} data={{name:id}}/>
            </Paper>
        </Box>
    </ProfileBase>
  )
}
