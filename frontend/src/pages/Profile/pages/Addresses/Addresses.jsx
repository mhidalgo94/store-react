import { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import {Box,Button ,Grid,Stack, Typography, Paper, IconButton} from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import ProfileBase from '../../ProfileBase';
import CustomDialog from '../../../../components/Dialog/Dialog';
import CircularProgress from '@mui/material/CircularProgress';
import {userState} from '../../../../store/userState.js'
import { getAddresses, deleteAddres } from '../../../../api/fetchUser';

import {useSnackBar} from '../../../../store/snackbarState.js';

export default function Addresses() {
    const {token, setLogout} = userState();
    const {setOpen} = useSnackBar();
    const [addresses, setAddresses] = useState([])
    const [btnLoading, setBtnLoading] = useState(true)

    const getListAddresses = ()=>{
        getAddresses(token).then(res=>{
            const resAddresses  = res.data.addresses;
            setAddresses(resAddresses);
       }).catch(err=>{
           if (err.response.status === 401) {
               setLogout();
           }
           const msg = err?.response?.data?.message || 'Error Server';
            setOpen(msg,'error')
       }).finally(()=>{
           setBtnLoading(false);
       });
    }


    useEffect(()=>{
        getListAddresses();
        
    },[])

    // Dialog for Delete Address
    const [btnLoadingDelete, setBtnLoadingDelete] = useState(false);
    const [openCloseDialog, setOpenCloseDialog] = useState(false);
    const [idAddresDeleted, setIdAddressDelete] = useState()


    const handleOpenCloseDialog = ()=>{
        setOpenCloseDialog(!openCloseDialog);
    }

    const handleDeleteAddress = ()=>{
        setBtnLoadingDelete(true);
        deleteAddres(idAddresDeleted,token).then(res=>{
            const msg = res?.data?.message || "Address successfully removed.";
            setOpen(msg); 
        }).catch(err=>{
            if (err.response.status === 401) {
                setLogout();
            }
            const msg = err?.response?.data?.message || 'Error Server';
            setOpen(msg,'error');
        }).finally(()=>{
            setBtnLoadingDelete(false);
            setOpenCloseDialog(false);
            getListAddresses();
        })
    }

  return (
    <ProfileBase>
        <Box sx={{my:2}}>
            <Grid sx={{my:2}} container justifyContent='space-between'>
                <Grid item md={10} sm={9} xs={12}>
                    <Stack direction='row' alignItems='center' gap={1}>
                        <LocationOnIcon sx={{fontSize:'28px'}} color="primary"/>
                        <Typography variant="h4">Address</Typography>
                    </Stack>
                </Grid>
                <Grid item md={2} sm={3} xs={6}>
                    <Link className='link' to='/account/profile/address-new'>
                    <Button variant='outlined' fullWidth sx={{bgcolor:'primary.50',textTransform:'capitalize', fontWeight:'bold'}}>
                        Add New Address
                    </Button>
                    </Link> 
                </Grid>
            </Grid>
            {btnLoading ? 
                <Box sx={{display:'flex', flexDirection:'column', alignItems:'center'}}>
                    <CircularProgress color='lightBlue' size={24}  />
                </Box>
            : 
            Boolean(addresses) ? 
                addresses.map((values)=>{
                    return (
                        <Paper  sx={{p:'2px',my:2, borderRadius: '10px'}} key={values.id}>
                            <Grid container alignItems='center' justifyContent='space-between'>
                            <Grid item xs={6} sm={3} md={3} textAlign='center'>
                                <Typography variant='body1'>{values.nombre}</Typography>
                            </Grid>
                            <Grid item xs={6} sm={3} md={3} textAlign='center'>
                                <Typography variant='body1'>{values.direccion} {values.zip_code}</Typography>
                            </Grid>
                            <Grid item xs={6} sm={3} md={3} textAlign='center'>
                                <Typography variant='body1'>{values.telefono}</Typography>
                            </Grid>
                            <Grid item xs={6} sm={3} md={3}>
                                <Stack direction='row' justifyContent='center'>
                                    <Link className='link' to={`/account/profile/address-edit/${values.id}`}>
                                        <IconButton aria-label='Edit'>
                                            <EditIcon />
                                        </IconButton>
                                    </Link>
                                    <IconButton disabled={btnLoadingDelete} aria-label='Delete' onClick={handleOpenCloseDialog} onMouseEnter={()=>setIdAddressDelete(values.id)}>
                                        {btnLoadingDelete ? <CircularProgress color='lightBlue' size={24}/> : <DeleteIcon />}
                                    </IconButton>

                                </Stack>
                            </Grid>
                            
                            </Grid>
                        </Paper>
                    )
                    })
                :
            <Typography variant='h5' textAlign='center'>You don't have saved addresses</Typography>
            }
            
        </Box>
        <CustomDialog isOpen={openCloseDialog} onClose={handleOpenCloseDialog}
        title={'Confirm deletion!'}
        description={'Are you sure you want to permanently delete this address?.'}
        isAcept={handleDeleteAddress}
        />
    </ProfileBase>
  )
}
