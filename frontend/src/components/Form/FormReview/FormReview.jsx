import {useState } from 'react';
import {useParams, useNavigate} from 'react-router-dom'
import { Box, Container, Typography, TextField, Rating } from '@mui/material'
import LoadingButton from "@mui/lab/LoadingButton/LoadingButton";

import { addReviews } from '../../../api/fetchReviews';
import { userState } from '../../../store/userState';
import { useSnackBar } from '../../../store/snackbarState';

export default function FormReview({addValue}) {
    const { token,setLogout } = userState();
    const { id}  = useParams();
    const { setOpen } = useSnackBar();
    const [valuesForm, setValues] = useState({id,rate:3.0,body:''});
    const [ loadingButton, setLoadiingButton ] = useState(false);
    const navigate = useNavigate();


    const handleRange = (event, newValue) => {
        setValues(v=>({...v, rate:newValue}))
    }

    const handleReview = (event)=>{
        const body = event.target.value;
        setValues(v=>({ ...v,body }));
    }

    const handleSubmit = (event) =>{
        setLoadiingButton(true);
        event.preventDefault();
        if(!token){
            setOpen('You must login or create an account to post the review.','info')
            setLoadiingButton(false);

            return
        }
        // console.log(valuesForm)
        addReviews(valuesForm, token).then(res=> {
            setValues(prev=> ({...prev, rate: 3.0, body:''}))
            console.log(res.data)
            addValue(prev=> ([...prev, res.data.data]))
            setOpen('Review added successfully');
        }).catch(err=>{
            if (err.response.status === 401) {
                setLogout();
                navigate('/login')
            }
            const msg = err?.response?.data?.message || 'Error Server';
            setOpen(msg, 'error')
        }).finally(()=>{
            setLoadiingButton(false);
        })
        
    }


  return (
    <Container>
        <Typography variant='h4'>Write a Review for this product</Typography>
        <Box component='form' my={2} onSubmit={handleSubmit}>
            <Typography variant='h6'>Your Rating:</Typography>
            <Rating 
                name="rate" 
                sx={{mx:1}}  
                precision={0.5} 
                value={valuesForm.rate} 
                onChange={handleRange}
              />
            <Typography variant='h6' sx={{my:1}}>Your Review:</Typography>
            <TextField 
                sx={{mx:1}}
                placeholder='Write a review here...'
                fullWidth
                multiline
                rows={6}
                required
                name='textReview'
                variant='outlined'
                onChange={handleReview}
                value={valuesForm.body} 

            />
            <LoadingButton loading={loadingButton} type='submit' variant='contained' sx={{my:2}} disabled={!valuesForm.body.length} >Submit</LoadingButton>
        </Box>

    </Container>
  )
}
