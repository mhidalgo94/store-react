import { useEffect } from 'react';
import {Container} from '@mui/material';
import FormLogin from '../../components/Form/Login/FormLogin';
import BaseLogin from '../../components/Login/BaseLogin';

import { userState } from '../../store/userState';
import { useNavigate } from 'react-router-dom';

export default function LoginPage() {

  const {isAuth} = userState();
  const navigate = useNavigate();
  
  
  
  useEffect(()=>{
    if(isAuth){
      navigate('/account/profile')
    }
  },[isAuth,navigate])

  return (
    <Container>
        <BaseLogin>
            <FormLogin />
        </BaseLogin>        
    </Container>
  )
}
