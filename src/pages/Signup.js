import styled from "styled-components";
import Input from "../components/Input";
import { Button } from "../components/Button"
import { Form } from "../components/Form";

const Background = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 2em;
  padding-bottom: 5em;
`;

const Paper = styled.div`
  background-color: white;
  border-radius: 2%;
  text-align: center;
  padding-bottom: 3rem;
`

const SignUp = () => {
  return (
    <Background>
      <Paper>
        <h1>Zaczynamy!</h1>
        <Form style={{ }}>
          <Input type='email' placeholder='Please enter your email' label='E-mail' />
          <Input type='password' placeholder='Minimum 8 znaków' label='Hasło' />
          <Input type='password' placeholder='Minimum 8 znaków' label='Powtórz hasło' />
          <Button style={{ marginTop: '3rem'}}>Zarejestruj się</Button>
        </Form>
      </Paper>
    </Background>
  );
};

export default SignUp;
