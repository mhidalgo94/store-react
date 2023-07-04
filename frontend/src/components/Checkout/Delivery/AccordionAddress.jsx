import { useEffect,useState } from 'react';
import {Link} from 'react-router-dom';
import {Accordion,AccordionDetails,AccordionSummary,Typography,Stack, Button, Box,Grid} from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CardAddressAccordion from './CardAddressAccordion';
import CircularProgress from '@mui/material/CircularProgress';
import {getAddresses} from '../../../api/fetchUser.js'
import { userState } from '../../../store/userState';
import { useSnackBar } from '../../../store/snackbarState';
export default function AccordionAddress() {
    const {token, setLogout} = userState();
    const {setOpen}  = useSnackBar();
    const [address, setAddress] = useState([])
    const [loadingAddress, setLoadingAddress] = useState(false); 


    const getListAddresses = (tok)=>{
        setLoadingAddress(true)
        getAddresses(tok).then(res=>{
            const newAddresses = res?.data?.addresses.map(address=>({...address, selected:false}))
            setAddress(newAddresses);  
        }).catch((err)=>{
          if (err.response.status === 401) {
            setLogout();
        }
        const msg = err?.response?.data?.message || 'Error Server.';
        setOpen(msg, 'error');
        }).finally(()=>{
            setLoadingAddress(false)
        })
    }

    useEffect(()=>{
        getListAddresses(token);
        // eslint-disable-next-line
    },[token])

  return (

    <Accordion sx={{boxShadow:'none'}}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography>You Delivery Address</Typography>
      </AccordionSummary>
      <AccordionDetails sx={{p:'5px'}}>
          {loadingAddress ? 
              <Box sx={{display:'flex', justifyContent:'center'}}>
                  <CircularProgress size={24} color='lightBlue' />
              </Box>
          :
          ( address.length > 0) ?
          <Grid container spacing={1}>
              {address.map((values)=>{
                  return (
                    <Grid item  sm={6} md={4} xs={12}>
                        <CardAddressAccordion key={values.id} setAddress={setAddress} values={values} selected={values.selected} />
                    </Grid>
                  ) 
              })}
          </Grid>
          : <Stack direction='row' spacing={1} alignItems='center' justifyContent='space-between'>
              <Typography variant='body1'>No addresses saved</Typography>
              <Link to='/account/profile/address-new' className='link'>
                  <Button variant='outlined' size='small' color='info'>
                      New Address
                  </Button>
              </Link>
              </Stack>
            }
      </AccordionDetails>
    </Accordion>

  );
}