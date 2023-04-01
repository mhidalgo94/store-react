import { useEffect } from 'react';
import {Container} from '@mui/material';
import FormSignIn from '../../components/Form/Login/FormSignIn';
import BaseLogin from '../../components/Login/BaseLogin';
import { userState } from '../../store/userState';
import { useNavigate } from 'react-router-dom';


export default function SignIn() {

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
            <FormSignIn />
        </BaseLogin>        
    </Container>
  )
}
