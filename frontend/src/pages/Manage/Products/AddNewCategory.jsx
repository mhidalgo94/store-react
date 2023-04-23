import { useState, useEffect} from 'react';
import { Link } from "react-router-dom";
import { Box, TextField, Stack, Button } from "@mui/material";
import LoadingButton from '@mui/lab/LoadingButton';
import DataGridDCatergory from "../../../components/DataGrid/DataGridCategory";
import AddIcon from '@mui/icons-material/Add';

import BasePage from "./BasePage"
import { addCategory, getAllCategories } from "../../../api/fetchCategory";
import {userState} from '../../../store/userState.js';
import {useSnackBar} from '../../../store/snackbarState.js'

const BtnHead = ()=>{
    return (
        <Link className="link" to="/manage/list-products">
            <Button variant="outlined" color="info">Back Products</Button>
        </Link>
    )
}


function AddNewCategory() {
    const [btnLoading, setBtnLoading] = useState(false)
    const {token, setLogout} =userState();
    const {setOpen} = useSnackBar();
    const [formData, setFormData] = useState({});


    // Fetch data for Table
    const [loadingDataGrid, setLoadingDataGrid] = useState(false)
    const [valuesDataGrid, setValuesDataGrid] = useState([]);

    useEffect(()=>{
        setLoadingDataGrid(true);
        getAllCategories(token).then(res=>{
            setValuesDataGrid(res.data);
        }).catch(err=>{
            if (err.response.status === 401) {
                setLogout();
            }
            const msg = err?.response?.data?.message || 'Error Server.';
            setOpen(msg, 'error');
            setValuesDataGrid([]);
        }).finally(()=>{
            setLoadingDataGrid(false);
        })
    },[token,setOpen, setLogout])

    // Submit form category
    const handleSubmit = (e)=>{
        e.preventDefault();
        setBtnLoading(true);
        
        addCategory(formData, token).then(res=>{
            setValuesDataGrid((values)=>([...values,res.data])); 
            e.target.reset();
            setOpen('Added new category.');
        }).catch(err=>{
            if (err.response.status === 401) {
                setLogout();
            }
            const msg = err?.response?.data?.message || 'Error Server.';
            setOpen(msg, 'error');
        }).finally(()=>{
            setBtnLoading(false)
        })

    }

  return (
    <BasePage title={'Add New Category'} BtnHead={<BtnHead />}>
        <Box component='form' sx={{marginBottom:'10px'}} onSubmit={handleSubmit}>
            <Stack direction='row' gap={1}>
            <TextField 
                    type='text'
                    required
                    size='small'
                    label='New Category'
                    name='nombre'
                    onChange={(e)=> setFormData({[e.target.name]:e.target.value})}
                    />
                <LoadingButton
                    loading={btnLoading}
                    loadingPosition="start"
                    startIcon={<AddIcon />}
                    variant="contained"
                 type='submit' color='primary' sx={{textTransform:'capitalize'}}>Create</LoadingButton>

            </Stack>
        </Box>
        <DataGridDCatergory loading={loadingDataGrid} data={valuesDataGrid} setData={setValuesDataGrid} />
    </BasePage>
  )

}

export default AddNewCategory;
