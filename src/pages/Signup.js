import { InputWithIcon as Input } from "../components/Input";
import { Button } from "../components/Button"
import { Form } from "../components/Form";
import { Background } from "../components/CentrifyBackground";
import { Paper } from '../components/Paper';

const SignUp = () => {
  return (
    <Background>
      <Paper>
        <h1>Zaczynamy!</h1>
        <Form>
          <Input type='email' placeholder='Please enter your email' label='E-mail' />
          <Input autocomplete="new-password" type='password' placeholder='Minimum 8 znaków' label='Hasło' />
          <Input autocomplete="new-password" type='password' placeholder='Minimum 8 znaków' label='Powtórz hasło' />
          <Button fullWidth variant='primary' style={{ marginTop: '3rem'}}>Zarejestruj się</Button>
        </Form>
      </Paper>
    </Background>
  );
};

export default SignUp;
