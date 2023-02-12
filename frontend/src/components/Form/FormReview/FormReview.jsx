import {useState } from 'react'
import { Box, Container, Typography, TextField, Rating, Button } from '@mui/material'

export default function FormReview() {

    const [values, setValues] = useState({rate:3.0,review:''})
    const [activeSubmit, setActiveSubmit] = useState(true)

    const handleRange = (event, newValue) => {
        setValues(v=>({...v, rate:newValue}))
    }

    const handleReview = (event)=>{
        const review = event.target.value;
        setActiveSubmit(!Boolean(review.length));
        setValues(v=>({...v,'review':review}));
    }

    const handleSubmit = (event) =>{
        event.preventDefault();
        // send data to Api metho post
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
                value={values.rate} 
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

            />
            <Button type='submit' variant='contained' sx={{my:2}} disabled={activeSubmit} >Submit</Button>
        </Box>

    </Container>
  )
}
