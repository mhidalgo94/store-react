import { useState } from "react";
import { Box } from "@mui/material"
import { DataGrid,GridActionsCellItem } from '@mui/x-data-grid';
import DeleteIcon from '@mui/icons-material/Delete';
import { userState } from "../../store/userState.js";
import { useSnackBar } from "../../store/snackbarState.js";
import {deleteCategory} from '../../api/fetchCategory.js';
import CustomDialog from "../Dialog/Dialog.jsx";


export default function DataGridDCatergory({loading,data=[],setData}) {
    const {setOpen}  = useSnackBar();
    const {token,setLogout} = userState();

    // Dialog for Delete Catergory
    const [btnLoadingDelete, setBtnLoadingDelete] = useState(false);
    const [openCloseDialog, setOpenCloseDialog] = useState(false);
    const [idDeleteCategory, setIdCategory] = useState(null)



    const handleDeleteCategory = (event, params)=>{
        const {id} = params;
        setIdCategory(id);
        setOpenCloseDialog(true);
    }

    const confirmDeleteCategory = ()=>{
        setBtnLoadingDelete(true);
        deleteCategory(idDeleteCategory,token).then(res=>{
            setOpen(res.data.message);
            setData(data.filter(values => values.id !== idDeleteCategory))
        }).catch(err=>{
            if (err.response.status === 401) {
                setLogout();
            }
            const msg = err?.response?.data?.message || 'Error Server.';
            setOpen(msg, 'error');
        }).finally(()=>{
            setOpenCloseDialog(false);
            setBtnLoadingDelete(false);

        })
    }


    const columns = [
        { field: "id", hide: true },
        { field: 'name', headerName: 'Name', flex:1 },
        { field: 'dateCreate', headerName: 'Date Create', flex:1 },
        { field: "actions",type: "actions", headerName: "Options", minWidth: 100, getActions: (params)=>{
        return [
            <GridActionsCellItem sx={{color:'primary.600'}} icon={<DeleteIcon sx={{color:'primary.600'}}/>} label="Delete" onClick={(event)=>handleDeleteCategory(event,params)}/>
            ]
        },felx:1}
    ]

    const rows = data?.map((obj) =>({
        id: obj.id,
        name: obj.nombre,
        dateCreate: (new Date(obj.createdAt)).toISOString().slice(0, 19).replace(/-/g, "/").replace("T", " ")
      }));


  return (
    <Box sx={{ height: 350, width: '100%', mb: 1 }}>
        <DataGrid rows={rows} columns={columns} pageSize={30} rowsPerPageOptions={[30]} loading={loading}/>
        
        <CustomDialog 
            isOpen={openCloseDialog} 
            onClose={setOpenCloseDialog}
            title={'Confirm deletion!'}
            description={'Are you sure you want to permanently delete this catergory?.'}
            isAcept={confirmDeleteCategory}
            loadingBtn={btnLoadingDelete}
        />
    </Box>
  )
}
