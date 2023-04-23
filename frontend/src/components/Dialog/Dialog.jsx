import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';

import LoadingButton from '@mui/lab/LoadingButton/LoadingButton';


const CustomDialog = ({
  isOpen,
  onClose,
  title,
  description,
  children,
  isAcept,
  loadingBtn=false,
}) => {

  
  return (
    <Dialog open={isOpen} onClose={()=> onClose(false)} fullWidth={true} maxWidth={'sm'}>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        {description && <p>{description}</p>}
        {children}
      </DialogContent>
      <DialogActions>
        <LoadingButton onClick={()=>onClose(false)} color="info">
          Cancel
        </LoadingButton>
        <LoadingButton loading={loadingBtn} onClick={isAcept}>
          Ok
        </LoadingButton>
      </DialogActions>
    </Dialog>
  );
};

export default CustomDialog;
