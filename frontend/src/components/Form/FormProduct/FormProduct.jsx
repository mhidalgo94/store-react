import { useState, useRef } from 'react';
import {useNavigate} from 'react-router-dom';
import { TextField, Box,Button,Switch, Grid, Typography } from "@mui/material"
import LoadingButton from "@mui/lab/LoadingButton/LoadingButton";
import SelectCategory from './InputSelectCategory';
import {styleForm} from './styleFormProduct';

import { addProduct, updateProduct } from '../../../api/fetchProducts.js';
import { userState } from '../../../store/userState';
import { useSnackBar } from '../../../store/snackbarState';


export default function FormProduct({data={}, id=false}) {
    const [formData, setFormData] = useState(data);
    const [availableStock, setAvailableStock] = useState(false);
    const [prevImages, setPrevImages] = useState(data?.images || []);
    const {token,setLogout} = userState();
    const [loadingBtn, setLoadingBtn] = useState(false)
    const {setOpen} = useSnackBar();
    const navigate = useNavigate()

    const fileInputRef = useRef(null);

    const handleClearFile = () => {
        fileInputRef.current.value = null; 
        setPrevImages([])

    };

    const onSubmit = (e)=>{
        e.preventDefault();
        setLoadingBtn(true);
        const form = new FormData(e.target)
        form.set('categories', form.get('categories').split(','));
        form.set('available', availableStock);
        if(!id){
            addProduct(form,token).then(res=>{
                const msg = res?.data?.message;
                setOpen(msg);
                navigate('/manage/list-products')
            }).catch(err=>{
                if (err.response.status === 401) {
                    setLogout();
                }
                const msg = err?.response?.data?.message || 'Error Server';
                setOpen(msg, 'error');
            }).finally(()=>{
                setLoadingBtn(false);
            })
        }else{
            updateProduct(id,form,token).then(res=>{
                setOpen(res?.data?.message);
                navigate('/manage/list-products')
            }
            ).catch(err=>{
                if (err.response.status === 401) {
                    setLogout();
                }
                const msg = err?.response?.data?.message || 'Error Server';
                setOpen(msg, 'error');
            }).finally(()=>{
                setLoadingBtn(false);

            })
        }

    }

    function handleFilesChange(event) {
        setPrevImages([])
        const listfiles = Array.from(fileInputRef.current.files);
        listfiles.map((values)=>
            setPrevImages((v)=>([...v,URL.createObjectURL(values)]))
        )
    }

    const onChangeSwitch = (e)=>{
        setAvailableStock(e.target.checked);
        setFormData({...formData, [e.target.name]:e.target.checked});
    }

  return (
    <Box component='form'  onSubmit={onSubmit}>
        <Grid container spacing={1} alignItems='center'>
            <Grid item xs={12} sm={12} md={6} lg={6}>
                <TextField 
                    type='text'
                    required
                    size='small'
                    label='Name Product'
                    name='name'
                    value={formData?.name || ''}
                    onChange={(e)=>setFormData((values)=>({...values, [e.target.name]:e.target.value}))}
                    fullWidth
                />
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6}>
                <SelectCategory />
            </Grid>
        </Grid>
        <Box sx={styleForm.BoxInputFile}>
            <Button variant="outlined" color='info' component="label">
                Select Images
                <input hidden name='images' ref={fileInputRef} accept="image/*" multiple type="file" onChange={handleFilesChange}/>
            </Button>
            { prevImages.length > 0 && (
                <Button size='small' onClick={handleClearFile}> 
                    clear images
                </Button>
            )}
            <Typography sx={{mt:3}} variant="caption" color='grey'>Upload one or multiple images.</Typography>
        </Box>
        <Grid container>
        { prevImages && prevImages.map((values,index)=>{    
                return (
                    <Grid item  key={index}>
                        <img  src={values} alt={`images upload ${index}`} width={100} height={100}/>
                    </Grid>
                )
            }) 
        }
                    </Grid>
        <Box sx={{width:'100%'}}>
            <TextField required label='Description' multiline fullWidth name='description' value={formData?.description || ''} onChange={(e)=>setFormData((values)=>({...values, [e.target.name]:e.target.value}))}  rows={5}></TextField>
        </Box>
        <Box sx={{width:'100%',mt:3}}>
            <TextField label='Specification' multiline fullWidth name='specification' value={formData?.specification || ''} onChange={(e)=>setFormData((values)=>({...values, [e.target.name]:e.target.value}))} rows={5}></TextField>
        </Box>
        <Grid container sx={{mt:2}} spacing={1}>
            <Grid item xs={12} sm={6} md={6}>
                <TextField required label='Price' value={formData?.price || 0} onChange={(e)=>setFormData((values)=>({...values, [e.target.name]:e.target.value}))}  name='price' fullWidth size="small" type='number' color="primary" />
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
                <TextField required label='Old Price' value={formData?.old_price || 0} onChange={(e)=>setFormData((values)=>({...values, [e.target.name]:e.target.value}))}  name='old_price' fullWidth size="small" type='number' color="primary" />
            </Grid>
        </Grid>
        <Box sx={{mt:1, p:1,width:'100%', display:'flex', alignItems:'center'}}>
            <Typography variant="body1">Stock Available</Typography>
            <Switch checked={formData?.available || false} inputProps={{name:'available'}} onChange={(e)=>onChangeSwitch(e)}  />
        </Box>
        <LoadingButton loading={loadingBtn} variant='contained' color='primary' sx={{mt:2,minWidth:'150px',textTransform:'capitalize'}} type='submit'>
                Save Product
        </LoadingButton>
    </Box>
  )
}
