import { useEffect,useState } from 'react';
import {Accordion,AccordionDetails,AccordionSummary, Typography,Checkbox, FormControlLabel, Box} from '@mui/material/';
import {getAllCategories} from '../../api/fetchCategory.js'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CircularProgress from '@mui/material/CircularProgress';
import { useSnackBar } from '../../store/snackbarState.js';

export default function CheckedCatergory({changeFilter}) {
    const [categories,setCategories] = useState([])
    const [loading, setLoading] = useState(false);
    const {setOpen} = useSnackBar();


    useEffect(()=>{
        setLoading(true)
        getAllCategories().then(res=>{
            const  resData = res?.data;
            const allCategories= resData.map(cate=>cate.nombre);
            setCategories(allCategories);
            changeFilter(preValues=> ({...preValues, category:[...allCategories]}))
        }).catch(err=>{
            const msg = err?.response?.data?.message || 'Error Server';
            setOpen(msg,'error');
        }).finally(()=>{
            setLoading(false)
        })
    // eslint-disable-next-line
    },[])

    const changeChecked = (e)=>{
        const value = e.target.name;
        changeFilter(preValues=>{
            const index = preValues.category.indexOf(value);
            if(index > -1) {
                const newCategories = preValues.category;
                newCategories.splice(index,1);
                return ({...preValues, category: newCategories})
            } else{ 
                return ({...preValues, category:[...preValues.category, value]})
            }

        })   
    }

  return (
    <>
        <Accordion sx={{mt:2,boxShadow:'none'}}>
            <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            >
            <Typography variant="subtitle1">Filter By Catergories</Typography>
            </AccordionSummary>
            <AccordionDetails sx={{paddingTop:0}}>
            {!loading ?
                categories.length && categories.map((cat,index)=> {
                    return (
                        <FormControlLabel  key={index} control={<Checkbox defaultChecked name={cat} onChange={changeChecked}/>} label={cat} />
                    )
                })
            :
            <Box sx={{width:'100%', display:'flex', justifyContent:'center'}}>
                <CircularProgress />
            </Box>
    }
        </AccordionDetails>
      </Accordion>
      
    </>
  )
}
