import React from "react";
import { Snackbar } from "@mui/material";
import Alert from '@mui/material/Alert';
import Slide from '@mui/material/Slide';
import { useSnackBar } from '../../store/snackbarState';


function SlideTransition(props) {
    return <Slide {...props} direction="up" />;
  }

export default function SnackBarAlert() {

    const {autoHideDuration, handleClose,open,message,severity,variant,vertical,horizontal} = useSnackBar();


  return (
      <Snackbar anchorOrigin={{ vertical, horizontal }} open={open} autoHideDuration={autoHideDuration} onClose={handleClose} TransitionComponent={SlideTransition}>
        <Alert 
            variant={variant} 
            onClose={handleClose} 
            severity={severity} 
            sx={{ width: '100%',bgcolor:`white` }}
        >
            {message}
        </Alert>
      </Snackbar>

  )
}
