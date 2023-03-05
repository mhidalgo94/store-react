import {Box, Paper} from '@mui/material';
import styleLogin from './styleLogin';


export default function BaseLogin({children}) {
  return (
    <Box sx={styleLogin.boxContainer}>
            <Paper elevation={1} sx={styleLogin.boxPaper}>
                {children}
            </Paper>
        </Box>
  )
}
