import { useEffect, useState } from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import { getAllCategories } from '../../../api/fetchCategory';
import {userState} from '../../../store/userState.js';
import {useSnackBar} from '../../../store/snackbarState';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: '50%',
      },
    },
  };

function SelectCategory() {
    const [categories, setCategories] = useState([])
    const [valueCategory, setValueCategory] = useState([])
    const {setOpen} = useSnackBar();
    const {token, setLogout} = userState();

    useEffect(()=>{
        getAllCategories(token).then(res=>{
            const allCategory = res.data?.map(values => ({ id:values.id,nombre:values.nombre}));
            setCategories(allCategory);
        }).catch(err=>{
            if (err.response.status === 401) {
                setLogout();
            }
            const msg = err?.response?.data?.message || 'Error Server.';
            setOpen(msg, 'error');
            setCategories([]);
        })
    },[token,setLogout,setOpen])


    const handleChange = (event) => {
        const {target} = event;
        setValueCategory(target.value);
      };

  return (
    <FormControl sx={{width:'100%'}}>
        <InputLabel id="demo-multiple-checkbox-label">Categories</InputLabel>
        <Select
          required
          size='small'
          name='categories'
          multiple
          autoWidth
          value={valueCategory}
          onChange={handleChange}
          input={<OutlinedInput label="Categories" sx={{p:0, m:1}} />}
          // renderValue={(selected) => {
          //   return selected.map(item=> item.nombre).join(', ')}}
          MenuProps={MenuProps}
        >
          {categories.map((values,index) => { 
            return (
                <MenuItem sx={{width:'100%'}}  key={index} value={values.id}>
                  {values.nombre}
                </MenuItem>
            )}
          )}
        </Select>
    </FormControl>
  )
}

export default SelectCategory;