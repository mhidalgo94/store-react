import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import {Chip, Typography, Box} from '@mui/material'
import { DataGrid,GridActionsCellItem } from '@mui/x-data-grid';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import CustomDialog from "../Dialog/Dialog.jsx";

import {getAllProducts, removeProduct} from '../../api/fetchProducts.js'
import { useSnackBar } from "../../store/snackbarState.js";
import { userState } from "../../store/userState.js";


function DetailNameProduct(cellValues){
    const { values} = cellValues.row
    return (
        <Box sx={{display:'flex', alignItems:'center', padding:0 , gap:1}}>
            {values.images && 
            <img  src={values?.images[0]} width={50} height={50} alt={values?.name} />
            }
            <Typography>{values?.name}</Typography>
        </Box>
    )
}


function StatusStock(cellValues){
    const {available} = cellValues.row;
    
    return <Chip size='small' sx={{color:'white'}} color={available ? 'lightBlue' : 'warning'} label={available ? "In Stock" : 'Disabled'}/>
}



export default function DataGridProducts() {
    const [data,setData] = useState([]);
    const [loadingTable, setLoadingTable] = useState(false);
    const {setLogout, token} = userState();
    const {setOpen} = useSnackBar()
    const navigate = useNavigate()

    const handleEdit = (event, params)=>{
        const {id} = params;
        navigate(`/manage/edit-product/${id}`)

    }

    // Dialog for Delete Address
    const [btnLoadingDelete, setBtnLoadingDelete] = useState(false);
    const [openDialog, setOpenDialog] = useState(false);
    const [idDeleteProduct, setIdProduct] = useState(null)


    const confirmDeleteCategory = ()=>{
        setBtnLoadingDelete(true);
        const id = idDeleteProduct;
        removeProduct(id, token).then(res=>{
            const filterData = data.filter(item => item.id !== id);
            setData(filterData);
        }).catch(err=>{
            if (err.response.status === 401) {
                setLogout();
            }
            const msg = err?.response?.data?.message || 'Error Server.'
            setOpen(msg, 'error');
        }).finally(()=>{
            setBtnLoadingDelete(false);
            setOpenDialog(false);
            
        });
    }

    const handleDelete = (params)=>{
        const {id} = params;
        setIdProduct(id);
        setOpenDialog(true);
        
    }

    useEffect(()=>{
        setLoadingTable(true);
        getAllProducts(token).then(res=>{
            setData(res?.data)
        }).catch(err=>{
            if (err.response.status === 401) {
                setLogout();
            }
            const msg = err?.response?.data?.message || 'Error Server.'
            setOpen(msg, 'error');
        }).finally(()=>{
            setLoadingTable(false);
            
        })
    },[setLogout, setOpen,token])


    const columns = [
        { field: "id", hide: true },
        { field: 'values', minWidth: 200, headerName: 'Name', description:'Name Product', renderCell:DetailNameProduct,flex:1 },
        { field: 'price', headerName: 'Price', flex:1 },
        { field: 'oldPrice', headerName: 'Old Price', flex:1 },
        { field: 'user', headerName: 'User Create', flex:1 },
        { field: 'available',maxWidth:100, headerName: 'Available', description:'Product in Stock', renderCell:StatusStock,flex:1 },
        { field: 'dateCreate', headerName: 'Date Create', flex:1 },
        { field: "actions",type: "actions", headerName: "Options", minWidth: 100, getActions: (params)=>[
            <GridActionsCellItem style={{color:'#0288d1'}} icon={<EditIcon color='info' />} label="Edit" onClick={(event)=>handleEdit(event,params)}  showInMenu/>,
            <GridActionsCellItem sx={{color:'primary.600'}} icon={<DeleteIcon sx={{color:'primary.600'}}/>} label="Delete" onClick={()=>handleDelete(params)} showInMenu/>
            ],felx:1}
    ]

    const rows = data?.map((obj) =>({
        id: obj.id,
        values: obj,
        price: obj.price,
        oldPrice: obj.old_price,
        user: obj.user.firstName,
        available : obj.available,
        dateCreate: (new Date(obj.createdAt)).toISOString().slice(0, 19).replace(/-/g, "/").replace("T", " "),
    
      }));


  return (
    <Box sx={{ height: 500, width: '100%', mb: 1 }}>
        <DataGrid rows={rows} columns={columns} loading={loadingTable} pageSize={30} rowsPerPageOptions={[30]}/>
        <CustomDialog 
            isOpen={openDialog}
            onClose={setOpenDialog}
            title={'Confirm deletion!'}
            description={'Are you sure you want to permanently delete this product?.'}
            isAcept={confirmDeleteCategory}
            loadingBtn={btnLoadingDelete}
        />
    </Box>
  )
}
