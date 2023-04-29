import { useState,useEffect } from 'react';
import {Link, useParams, useNavigate} from 'react-router-dom';
import {Box, Typography, Grid, Stack, Button, Paper} from '@mui/material';
import ProfileBase from '../../ProfileBase';
import FormPayMethod from '../../../../components/Form/FormPayMethod/FormPayMethod';
import PaymentsIcon from '@mui/icons-material/Payments';
import CircularProgress from '@mui/material/CircularProgress';
import { userState } from '../../../../store/userState';
import { getOnePaymentMethods } from '../../../../api/fetchPaymentMethods';
import { useSnackBar } from '../../../../store/snackbarState';

export default function EditPayMethod() {
    const [data,setData] = useState({});
    const {id} = useParams();
    const {token,setLogout} = userState();
    const [loadingForm, setLoadingForm] = useState(true);
    const {setOpen} = useSnackBar();
    const navigate = useNavigate();
    
    useEffect(()=>{
        getOnePaymentMethods(token,id).then(res=>{
            const newValues = res?.data;
            setData(newValues);
        }).catch(err=>{
            if (err.response.status === 401) {
                setLogout();
            }
            const msg = err?.response?.data?.message || 'Error Server';
            setOpen(msg,'error');
            navigate('/account/profile/pay-methods')

        }).finally(()=>{
            setLoadingForm(false);
        })
    },[id,token,setLogout, setOpen, navigate])

  return (
    <ProfileBase>
         <Box sx={{my:2}}>
            <Grid sx={{my:2}} container justifyContent='space-between'>
                <Grid item md={9} sm={7} xs={12}>
                    <Stack direction='row' alignItems='center' gap={1}>
                        <PaymentsIcon sx={{fontSize:'28px'}} color="primary"/>
                        <Typography variant="h4">Edit Payment Method</Typography>
                    </Stack>
                </Grid>
                <Grid item md={3} sm={5} xs={7}>
                    <Link className='link' to='/account/profile/pay-methods'>
                    <Button variant='outlined' fullWidth sx={{bgcolor:'primary.50',textTransform:'capitalize', fontWeight:'bold'}}>
                        Back to Payment Methods
                    </Button>
                    </Link> 
                </Grid>
            </Grid>
            <Paper  sx={{p:5,my:2, borderRadius: '10px'}}>
                {loadingForm ?
                    <Box sx={{ display: 'flex', justifyContent:'center', width:'100%' }}>
                        <CircularProgress color='lightBlue' size={24}/>
                    </Box>
                 :
                    <FormPayMethod data={data}/>
                 }
            </Paper>
        </Box>
    </ProfileBase>
  )
}
