import {useContext} from 'react';
import { Box, Typography, TextField, Stack } from "@mui/material";
import { FilterContext } from '../../context/Product/filterProducts';


export default function FilterMinPrice() {
    const {setFilters} = useContext(FilterContext);
    const changeMinPrice = (event)=>{
        const minPrice = event.target.value;
        setFilters(prevValues=> ({...prevValues, minPrice}))
    
      }
  return (
    <Box>
        <Typography variant="subtitle1" sx={{paddingLeft:1}}>Filter By Min Price</Typography>
        <Stack direction="row" spacing={2} sx={{alignItems:'center'}}>
            <TextField type="number" fullWidth inputProps={{min:0}}  size='small' defaultValue={0} onChange={changeMinPrice} placeholder="Min Price"/>
        </Stack>
    </Box>
  )
}
