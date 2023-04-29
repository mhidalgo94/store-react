import { useState,useEffect } from 'react';
import {Link} from 'react-router-dom';
import {Box, Typography, Grid, Stack, Button, Paper, IconButton} from '@mui/material';
import PaymentIcon from '@mui/icons-material/Payment';
import CircularProgress from '@mui/material/CircularProgress';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import ProfileBase from '../../ProfileBase';

import { getAllPaymentMethods,deletePaymentMethods } from '../../../../api/fetchPaymentMethods.js';
import { userState } from '../../../../store/userState.js';
import { useSnackBar } from '../../../../store/snackbarState';
import CustomDialog from '../../../../components/Dialog/Dialog';

export default function PayMethods() {
    const {token, setLogout} = userState();
    const {setOpen} = useSnackBar();
    const [paymentList, setPaymentList] = useState([]);
    const [loadingPaymentList, setLoadingPaymentList ] = useState(true);

    useEffect(()=>{
        getAllPaymentMethods(token).then(res=>{
            setPaymentList(res?.data);
        }).catch(err=>{
            if (err.response.status === 401) {
                setLogout();
            }
            const msg = err?.response?.data?.message || 'Error Server';
            setOpen(msg,'error');
        }).finally(()=>{
            setLoadingPaymentList()
        })

    },[token,setOpen,setLogout])

    // Dialog for Delete Address
    const [btnLoadingDelete, setBtnLoadingDelete] = useState(false);
    const [openCloseDialog, setOpenCloseDialog] = useState(false);
    const [idPayMethodDelete, setIdPayMethodDelete] = useState();


    const handleDeletePaymentMethod = ()=>{
        setBtnLoadingDelete(true);
        const id = idPayMethodDelete;
        deletePaymentMethods(id,token).then(res=>{
            const msg = res?.data?.message || "Payment Method successfully removed.";
            setOpen(msg); 
            setPaymentList(preValues => preValues.filter(values => values.id !== id))
        }).catch(err=>{
            if (err.response.status === 401) {
                setLogout();
            }
            const msg = err?.response?.data?.message || 'Error Server';
            setOpen(msg,'error');
        }).finally(()=>{
            setBtnLoadingDelete(false);
            setOpenCloseDialog(false);
        })
    }

  return (
    <ProfileBase>
         <Box sx={{my:2}}>
            <Grid sx={{my:2}} container justifyContent='space-between'>
                <Grid item md={9} sm={7} xs={12}>
                    <Stack direction='row' alignItems='center' gap={1}>
                        <PaymentIcon sx={{fontSize:'28px'}} color="primary"/>
                        <Typography variant="h4">Payment Methods</Typography>
                    </Stack>
                </Grid>
                <Grid item md={3} sm={5} xs={7}>
                    <Link className='link' to='/account/profile/pay-methods-add'>
                    <Button variant='outlined' fullWidth sx={{bgcolor:'primary.50',textTransform:'capitalize', fontWeight:'bold'}}>
                        Add New Payment Method
                    </Button>
                    </Link> 
                </Grid>
            </Grid>
                    {loadingPaymentList ?
                        <Box sx={{display:'flex', flexDirection:'column', alignItems:'center'}}>
                            <CircularProgress color='lightBlue' size={24}  />
                        </Box>
                    :
                    Boolean(paymentList.length) ? 
                        paymentList.map((item)=>{    
                        return ( 
                            <Paper key={item.id} sx={{p:'9px',my:2, borderRadius: '10px'}}>
                                <Grid container alignItems='center' justifyContent='space-between'>
                                    <Grid item xs={6} sm={3} md={3} textAlign='center'>
                                        <Typography variant='body1'>{item.nameCard}</Typography>
                                    </Grid>
                                    <Grid item xs={6} sm={3} md={3} textAlign='center'>
                                        <Typography variant='body1'>**** **** **** {item.numberCard.slice(-4)}</Typography>
                                    </Grid>
                                    <Grid item xs={6} sm={3} md={3} textAlign='center'>
                                        <Typography variant='body1'>{item.expirationDate}</Typography>
                                    </Grid>
                                    <Grid item xs={6} sm={3} md={3}>
                                        <Stack direction='row' justifyContent='center'>
                                            <Link className='link' to={`/account/profile/pay-methods-edit/${item.id}`}>
                                                <IconButton aria-label='Edit'>
                                                    <EditIcon />
                                                </IconButton>
                                            </Link>
                                            <IconButton aria-label='Delete' onClick={()=>setOpenCloseDialog(true)} onMouseEnter={()=>setIdPayMethodDelete(item.id)}>
                                                <DeleteIcon />
                                            </IconButton>
                                        </Stack>
                                    </Grid>
                                </Grid>
                            </Paper>
                        )
                        })
                    :
                    <Typography variant='h5' textAlign='center'>You don't have saved payment methods.</Typography>
                    }
                    
        </Box>
        <CustomDialog isOpen={openCloseDialog} onClose={setOpenCloseDialog}
        title={'Confirm deletion!'}
        description={'Are you sure you want to permanently delete this payment method?.'}
        isAcept={handleDeletePaymentMethod}
        loadingBtn={btnLoadingDelete}
        />
    </ProfileBase>
  )
}
