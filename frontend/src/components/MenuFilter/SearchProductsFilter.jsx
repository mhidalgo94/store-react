import LoadingButton from "@mui/lab/LoadingButton/LoadingButton";
import { Box,TextField } from "@mui/material";

export default function SearchProductsFilter({changeSearch,loading}) {

    const handleSubmit= (e)=>{
        e.preventDefault();
        const formData = new FormData(e.target);
        const {search} = Object.fromEntries(formData);
        changeSearch(search);
    
    }
  return (  
    <Box component='form' sx={{pt:1,display:'flex',gap:1}} onSubmit={handleSubmit}>
      <TextField type="text" name='search' fullWidth  size='small'  placeholder="Search..."/>
      <LoadingButton loading={loading} type='submit'  variant="contained" sx={{textTransform:'capitalize'}}>Search</LoadingButton>
    </Box>
  )
}
