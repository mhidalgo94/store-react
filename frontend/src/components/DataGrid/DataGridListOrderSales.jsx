import {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import { Box } from "@mui/material"
import MenuItem from '@mui/material/MenuItem';
import InsertLinkIcon from '@mui/icons-material/InsertLink';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import CustomDialog from "../Dialog/Dialog"
import { userState } from '../../store/userState';
import { DataGrid,GridActionsCellItem } from '@mui/x-data-grid';
import { getOderSalesManager, updateStatusOrder } from '../../api/fetchOrderSales';
import { useSnackBar } from '../../store/snackbarState';


const StateSelect=(cellValues)=>{
    const [status, setStatus] = useState(cellValues.row.status);
    const id = cellValues.row.id;
    const {token,setLogout} = userState();
    const [newStatus, setNewStatus] = useState(null);
    const {setOpen} = useSnackBar();

    // Dialog for Delete Address
    const [btnLoadingDelete, setBtnLoading] = useState(false);
    const [openDialog, setOpenDialog] = useState(false);

    const confirmUpdateOrder = ()=>{
        setBtnLoading(true);
        updateStatusOrder(token,{status:newStatus,id}).then(res=>{
            setOpen(res?.data?.message || 'Order updated successfully.')
            setStatus(newStatus);
        }).catch(err=>{
            if (err.response.status === 401) {
                setLogout();
            }
            const msg = err?.response?.data?.message || 'Error update order.Try later please';
            setOpen(msg,'error')
        }).finally(()=>{
            setOpenDialog(false);
            setBtnLoading(false);
        })
    }

    const statusSelect = ['Processing','In transit','Delivered','Cancelled','Refunded','Returned']
    const handleChange = (event) => {
        setOpenDialog(true)
        setNewStatus(event.target.value);
    };

    return(
        <FormControl fullWidth size='small'>
            <Select value={status} onChange={handleChange}>
                {statusSelect.map((status)=><MenuItem value={status}>{status}</MenuItem>)}
            </Select>
            <CustomDialog 
            isOpen={openDialog}
            onClose={setOpenDialog}
            title={'Confirm update!'}
            description={'Are you sure you want to updated this order?.'}
            isAcept={confirmUpdateOrder}
            loadingBtn={btnLoadingDelete}
        />
        </FormControl>
    )
}


export default function DataGridListOrderSales(){
    const [loadingTable, setLoadingTable] = useState(true);
    const [rowsData, setRowsData]= useState([]);
    const {setOpen} = useSnackBar();
    const {token, setLogout} = userState();
    const navigate = useNavigate();

    useEffect(()=>{
        getOderSalesManager(token).then(res=>{
            setRowsData(res?.data);
        }).catch((err)=>{
            if (err.response.status === 401) {
                setLogout();
            }
            const msg = err?.response?.data?.message || 'Error loading data.Try later';
            setOpen(msg,'error')
        }).finally(()=>{
            setLoadingTable(false);
        })
    },[token,setLogout, setOpen])

    const columns = [
        { field: "UUID", hide: true,flex:1},
        { field: "id", hide: false ,headerName:'ID',flex:1},
        { field: 'userName', headerName: 'User Buyer', flex:1},
        // { field: 'address', headerName: 'Address',flex:1},
        { field: 'amount', headerName: 'Amount',flex:0.5},
        { field: 'idPayment', headerName: 'Id Payment',flex:1},
        { field: 'phone', headerName: 'Phone',flex:1},
        { field: 'date', headerName: 'Date',flex:1},
        { field: 'status', headerName: 'Status', renderCell : StateSelect,flex:1},
        { field: "actions",type: "actions", headerName: "Options", getActions: (params)=>[
            <GridActionsCellItem style={{color:'#0288d1'}} icon={<InsertLinkIcon color='info' />} label="Edit" onClick={(event)=>navigate(`/order-sales/${params.row.UUID}`)}/>,
            ],}
    ]

    const rows = rowsData?.map(obj=>({
        UUID:obj.UUID,
        id:obj.UUID.split('-')[4],
        quantity: obj.quantity,
        address: obj.address,
        amount: `$${obj.amount}`,
        status: obj.status,
        idPayment: obj.client_secret.split('_secret')[0],
        phone: obj.phone,
        date: obj.createdAt,
        userName: obj?.user ? `${obj.user.firstName} ${obj.user.lastName}`: 'Anonimus',
    }))
  return (
    <Box sx={{ height: 500, width: '100%', mb: 1,overflowX: 'auto' }}>
        <DataGrid rows={rows} columns={columns} loading={loadingTable} pageSize={30} rowsPerPageOptions={[30]}
        disableSelectionOnClick
        />
    </Box>
  )
}
