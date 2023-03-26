import {Container} from '@mui/material';
import FormSignIn from '../../components/Form/Login/FormSignIn';
import BaseLogin from '../../components/Login/BaseLogin';

export default function SignIn() {

  return (
    <Container>
        <BaseLogin>
            <FormSignIn />
        </BaseLogin>        
    </Container>
  )
}
