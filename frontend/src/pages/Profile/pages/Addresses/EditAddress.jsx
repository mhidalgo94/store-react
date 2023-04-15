import { useEffect, useState } from 'react';
import {Link,useParams} from 'react-router-dom';
import {Box, Button,Grid, Paper, Typography, Stack} from '@mui/material';
import ProfileBase from '../../ProfileBase';
import EditLocationIcon from '@mui/icons-material/EditLocation';
import FormAddress from '../../../../components/Form/FormAddress/FormAddress';
import CircularProgress from '@mui/material/CircularProgress';

import { getOneAddress } from '../../../../api/fetchUser.js';
import { userState } from '../../../../store/userState';
import { useSnackBar } from '../../../../store/snackbarState';

export default function EditAddress() {
    const {setOpen}  = useSnackBar();
    const {id} = useParams();
    const {token, setLogout} = userState();

    const [data, setData] = useState();
    const [btnLoading, setBtnLoading] = useState(false);

    useEffect(()=>{
        setBtnLoading(true);
        getOneAddress(id,token).then(res=>{
            setData(res.data);
        }).catch(err=>{
            if (err.response.status === 401) {
                setLogout();
            }
            const msg = err?.response?.data?.message || 'Error Server';
            setOpen(msg,'error')
        }).finally(()=>{
            setBtnLoading(false)
        })
    },[id,token,setLogout, setOpen])


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
                {btnLoading ? 
                    <Box sx={{display:'flex', flexDirection:'column', alignItems:'center'}}>
                        <CircularProgress color='lightBlue' size={24}  />
                    </Box>
                    :
                    <Paper  sx={{p:5,my:2, borderRadius: '10px'}}>
                        <FormAddress edit={true} data={data}/>
                    </Paper>
                }
        </Box>
    </ProfileBase>
  )
}
