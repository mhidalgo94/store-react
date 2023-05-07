import { Box } from "@mui/material";
import Pagination from '@mui/material/Pagination';


export default function PaginatorProducts({currentPage,setCurrentPage,totalPages }) {

  return (
    <Box sx={{width:'100%', display:'flex',alignItems:'center', justifyContent:'center', mt:4}} >
        <Pagination count={totalPages} page={parseInt(currentPage)} color='info' onChange={(e,v) => setCurrentPage(v)}/>
    </Box>
  )
}
