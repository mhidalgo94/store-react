import { Navigate } from 'react-router-dom';
import {Box, Paper} from '@mui/material';
import styleLogin from './styleLogin';

import { userState } from '../../store/userState';


export default function BaseLogin({children}) {

  const {isAuth} = userState();

  if(isAuth){
    return <Navigate to={'/account/profile'} />

  }

  return (
    <Box sx={styleLogin.boxContainer}>
          <Paper elevation={1} sx={styleLogin.boxPaper}>
              {children}
          </Paper>
      </Box>
  )
}
