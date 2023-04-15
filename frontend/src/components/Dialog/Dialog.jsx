import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';

// import DialogActions from '@mui/material/DialogActions';
// import DialogContentText from '@mui/material/DialogContentText';



import Button from '@mui/material/Button';

const CustomDialog = ({
  isOpen,
  onClose,
  title,
  description,
  children,
  isAcept
}) => {



  return (
    <Dialog open={isOpen} onClose={onClose} fullWidth={true}
        maxWidth={'sm'}>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        {description && <p>{description}</p>}
        {children}
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="info">
          Cancel
        </Button>
        <Button onClick={isAcept}>
          Ok
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default CustomDialog;
