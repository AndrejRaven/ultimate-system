import { InputWithIcon as Input } from "../components/Input";
import { Button } from "../components/Button"
import { Form } from "../components/Form";
import { Background } from "../components/CentrifyBackground";
import { Paper } from '../components/Paper';



const SignIn = () => {
  return (
    <Background>
      <Paper>
        <h1>Logowanie</h1>
        <Form>
          <Input type='email' placeholder='Please enter your email' label='E-mail' />
          <Input type='password' placeholder='Minimum 8 znaków' label='Hasło' />
          <Button style={{ marginTop: '3rem'}}>Zaloguj się</Button>
        </Form>
      </Paper>
    </Background>
  );
};

export default SignIn;