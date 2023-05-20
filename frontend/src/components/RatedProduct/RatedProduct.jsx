import { useEffect, useState } from "react";
import { Stack, Rating, Typography } from "@mui/material"
import { getReviewSummary } from "../../api/fetchReviews";
export default function RatedProduct({id}) {
  const [rate, setRate] = useState(0);
    
  useEffect(()=>{ 
    getReviewSummary(id).then(res=>{
      console.log(res)
      setRate(res.data)
    }).catch(err=>{
      console.log(err)
    })

  },[id])
  
  return (
    <>
      <Typography variant='subtitle1' fontWeight='bold' sx={{mt:3}}>Rated:</Typography>
      <Stack direction='row' spacing={1}>
          <Rating name='rating' value={rate?.avg || 3} readOnly/> 
          <Typography variant="subtitle2">({rate?.mount || 10})</Typography>
      </Stack>
    </>

  )
}
