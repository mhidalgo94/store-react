import {useEffect, useState} from 'react';
import { Box } from '@mui/material';
import Review from './Reviews';
import { getReviews } from '../../api/fetchReviews.js'
import { useSnackBar } from '../../store/snackbarState';
import CircularProgress from '@mui/material/CircularProgress';

export default function Comment({id,reviews, setReviews}) {
    const {setOpen} = useSnackBar();
    const [loadingComment, setLoadingComment] = useState(false);
    useEffect(()=>{
        setLoadingComment(true);
        getReviews(id).then(res=>{
            setReviews(res.data);
        }).catch(err=>{
            const msg = err?.response?.data?.message || 'Error Server';
            setOpen(msg, 'error')
        }).finally(()=>{
            setLoadingComment(false)
        })
    },[id,setOpen,setReviews])

  return (
    <>
    {loadingComment ?
        <Box sx={{width:'100%',display:'flex', justifyContent:'center', mb:2}}>
            <CircularProgress />
        </Box>
        :
        reviews.length > 0 
            ? reviews.map((values,index)=>{
                return <Review values={values} key={index} setReviews={setReviews} />
            })
        :
        null
        

    }

    </>
  )
}
