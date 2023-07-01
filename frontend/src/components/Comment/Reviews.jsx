import { Avatar,Box , Container, Stack , Rating, Typography, IconButton,Tooltip } from '@mui/material';
import { useState } from 'react';
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import DeleteIcon from '@mui/icons-material/Delete';
import { userState } from '../../store/userState';
import CustomDialog from '../Dialog/Dialog';
import { deleteReview } from '../../api/fetchReviews';
import { useSnackBar } from '../../store/snackbarState';


export default function Reviews({values,setReviews}) {
    const {user,token,setLogout} = userState();
    const {setOpen} = useSnackBar();
    // Dialog for Delete Catergory
    const [btnLoadingDelete, setBtnLoadingDelete] = useState(false);
    const [openCloseDialog, setOpenCloseDialog] = useState(false);

    const confirmDeleteReview =()=>{
        setBtnLoadingDelete(true);

        deleteReview(values.id,token).then(res=>{
            const msg = res?.data?.message || 'Review deleted successfully'
            setReviews(prevReviews=> prevReviews.filter(reviews => reviews.id !== values.id))
            setOpen(msg)
        }).catch(err=>{
            if (err.response.status === 401) {
                setLogout();
                const msg = 'Authentication expired. Login again please'
                setOpen(msg, 'warning')
            }
        }).finally(()=>{
            setBtnLoadingDelete(false);
        })
    }

    const handleConfirmDeleteReview= ()=>{
        setBtnLoadingDelete(false)
        setOpenCloseDialog(true)
    }

  return (
      <Container sx={{p:1,mt:1}}>
            <Stack direction='row' spacing={1} alignItems='center'>
            {values?.user?.image ?
                <Avatar
                alt="Remy Sharp"
                src={values?.user?.image}
                sx={{ width: 56, height: 56 }}
                /> 
                :
                <Avatar>
                    <AccountCircleIcon />
                </Avatar>
            }
                <Stack sx={{width:'100%'}}>
                    <Stack direction='row' justifyContent='space-between' alignItems='center'>
                        <Typography variant='h6'>{values.user.firstName} {values.user.lastName}</Typography>
                        {user?.email === values.user.email &&
                            <Box>
                                <Tooltip title='Remove' arrow>
                                    <IconButton size='small' onClick={handleConfirmDeleteReview}>
                                        <DeleteIcon  sx={{fontSize:'20px'}} color="grey"/>
                                    </IconButton>
                                </Tooltip>
                            </Box>
                        }
                    </Stack>
                    <Stack direction='row' spacing={1} alignItems='center' gap={1}>
                        <Rating name="rate" value={parseFloat(values.rate)} precision={0.5} readOnly />
                        <Typography variant='body2' color="grey">{values.createdAt}</Typography>
                    </Stack>
                </Stack>
            </Stack>
            <Typography variant='body1' pl={4} mt={2}>{values.body}</Typography>
            <CustomDialog 
            isOpen={openCloseDialog} 
            onClose={setOpenCloseDialog}
            title={'Confirm deletion!'}
            description={'Are you sure you want to permanently delete this review?.'}
            isAcept={confirmDeleteReview}
            loadingBtn={btnLoadingDelete}
        />
    </Container>
  )
}
