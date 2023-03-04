import{create} from 'zustand';


const AUTOHIDE = 2000;
const VERTICAL = 'bottom';
const HORIZONTAL = 'center'

export const useSnackBar = create((set)=>({
    open:false,
    message:'',
    handleClose: ()=>set(state=>({...state, open:false})),
    autoHideDuration: AUTOHIDE,
    vertical:VERTICAL,
    horizontal:HORIZONTAL,
    setAutoHideDuration:(time)=> set(state=>({...state, autoHideDuration:time})),
    setOpen: (message, severity='success',variant='standard')=>{
        set(state=>({...state,open:false}))
        set(state=> ({...state, open:true,message,severity,variant}))
    },
}))