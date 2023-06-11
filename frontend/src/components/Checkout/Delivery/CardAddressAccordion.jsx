import {useState,useContext} from 'react';
import {Link} from 'react-router-dom';
import {Box,Stack, Typography, IconButton} from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PushPinIcon from '@mui/icons-material/PushPin';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EditIcon from '@mui/icons-material/Edit';
import {CheckoutContext} from '../../../context/Checkout/checkoutPayment'
import { userState } from '../../../store/userState';
import { useSnackBar } from '../../../store/snackbarState';
import { deleteAddres } from '../../../api/fetchUser';
import CustomDialog from '../../Dialog/Dialog';

function useAddressStyle(select) {
    const borderColor = select ? '#03a9f4' : 'transparent';
    const borderColorHover = !select ? 'rgb(210, 63, 87)' : borderColor;
    let BoxContainer = {
        // minWidth: '210px',
        // maxWidth: '210px',
        bgcolor:'rgb(246, 249, 252)',
        p:'8px',
        borderRadius:'8px',
        borderStyle:'solid',
        borderWidth: '1px',
        borderColor,
        cursor:'pointer',
        zIndex:0,
        '&:hover':{
            borderColor:borderColorHover
        }
    }
      return BoxContainer
  };
  



export default function CardAddressAccordion({values, setAddress}) {
    const {setValuesCheckout} = useContext(CheckoutContext);
    const {token, setLogout} = userState();
    const {setOpen} = useSnackBar();

    // Dialog for Delete Address
    const [btnLoadingDelete, setBtnLoadingDelete] = useState(false);
    const [openCloseDialog, setOpenCloseDialog] = useState(false);

    const handleSelect = ()=>{
        //insert values in context CheckoutContext
        const {nombre:NameDelivery,direccion:addressLine,zip_code,telefono:phone} = values;
        setValuesCheckout(prev=>({...prev,NameDelivery,addressLine,zip_code,phone}))
        // change status selected component
        setAddress(prev=>{
            const changeSelected = prev.map(v=>{
                if(v.id === values.id){
                    return {...v, selected:true}
                }
                return {...v, selected:false}
            })
            return changeSelected;
        })
    }

    const deleteAddresCallback = ()=>{
        deleteAddres(values.id,token).then(res=>{
            const msg = res?.data?.message || "Address successfully removed.";
            setOpen(msg);
            // remove value deleted if is response is Ok
            setAddress(prev=> prev.filter(item=> item.id !== values.id));
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

    const handleDeleteAddress = (e, id)=>{
        e.stopPropagation() // this not change state context and styles card
        setOpenCloseDialog(true);
    }
  return (
    <Box sx={useAddressStyle(values.selected)} onClick={handleSelect}>
        <Stack direction='row' justifyContent='space-between' alignItems='center' sx={{p:0}}>
            <Typography variant='subtitle1'>{values.nombre}</Typography>
            <Stack direction='row' spacing={0}>
                <Link to={`/account/profile/address-edit/${values.id}`}>
                    <IconButton sx={{zIndex:1}}      >
                        <EditIcon  fontSize='small' />
                    </IconButton>
                </Link>
                <IconButton sx={{zIndex:1}} onClick={(e)=>handleDeleteAddress(e, values.id)} >
                    <DeleteIcon  fontSize='small'  sx={{color:'#e94560'}}/>
                </IconButton>    
            </Stack>
        </Stack>
        <Stack direction='row' alignItems='center' spacing={1}>
            <LocationOnIcon fontSize='small' sx={{color:'grey.600'}}/>
            <Typography variant='subtitle1' sx={{color:'grey.600'}}>{values.direccion}</Typography>
        </Stack>
        <Stack direction='row' alignItems='center' spacing={1}>
            <PushPinIcon  fontSize='small' sx={{color:'grey.600'}}/>
            <Typography variant='subtitle1' sx={{color:'grey.600'}}>{values.zip_code}</Typography>
        </Stack>
        <Stack direction='row' alignItems='center' spacing={1}>
            <LocalPhoneIcon  fontSize='small' sx={{color:'grey.600'}}/>
            <Typography variant='subtitle1' sx={{color:'grey.600'}}>{values.telefono}</Typography>
        </Stack>
        <CustomDialog isOpen={openCloseDialog} onClose={setOpenCloseDialog}
        title={'Confirm deletion!'}
        description={'Are you sure you want to permanently delete this address?.'}
        isAcept={deleteAddresCallback}
        loadingBtn={btnLoadingDelete}
        />

        
    </Box>
  )
}
