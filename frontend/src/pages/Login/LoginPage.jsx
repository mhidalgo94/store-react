import {Container} from '@mui/material';
import FormLogin from '../../components/Form/Login/FormLogin';
import BaseLogin from '../../components/Login/BaseLogin';

export default function LoginPage() {

  return (
    <Container>
        <BaseLogin>
            <FormLogin />
        </BaseLogin>        
    </Container>
  )
}
