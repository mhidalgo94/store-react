import {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import {Accordion,AccordionDetails,AccordionSummary,Typography,Stack, Button, Box} from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CircularProgress from '@mui/material/CircularProgress';

import { getAllPaymentMethods } from '../../../api/fetchPaymentMethods';
import PaymentCardAccordion from './PaymentCardAccordion';
import { userState } from '../../../store/userState';

export default function AccordionPayment() {
    const {token} = userState();
    const [ loadingCardPayment,setLoadingAddress] = useState(false);
    const [paymentsCard, setPaymentCard] = useState([])


    const getPaymentList=(tok)=>{
        setLoadingAddress(true)
        getAllPaymentMethods(tok).then(res=>{
            const newListPaymentMethod = res?.data.map(values => ({...values, selected:false}))
            setPaymentCard(newListPaymentMethod)
        }).finally(()=>{
            setLoadingAddress(false)
        })
    }

    useEffect(()=>{
        getPaymentList(token)
    },[token,])

  return (
    <>
        <Accordion>
        <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
        >
        <Typography>You Saved Cards</Typography>
        </AccordionSummary>
        <AccordionDetails>
            {loadingCardPayment ? 
                <Box sx={{display:'flex', justifyContent:'center'}}>
                    <CircularProgress size={24} color='lightBlue' />
                </Box>
            :
            ( paymentsCard.length > 0) ?
            <Stack direction='row' spacing={1}>
                {paymentsCard.map((values,index)=>{
                    return <PaymentCardAccordion key={values.id} setPaymentCard={setPaymentCard} values={values} selected={values.selected} />
                })}
            </Stack>
            : <Stack direction='row' spacing={1} alignItems='center' justifyContent='space-between'>
                <Typography variant='body1'>No payment method saved</Typography>
                <Link to='/account/profile/pay-methods-add' className='link'>
                    <Button variant='outlined' size='small' color='info'>
                        New Payment Methods
                    </Button>
                </Link>
            </Stack>
            }
        </AccordionDetails>
        </Accordion>
  </>

  )
}
