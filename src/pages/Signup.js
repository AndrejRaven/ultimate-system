import styled from "styled-components";
import Input from "../components/Input";
import email from '../icons/email.svg'
import password from '../icons/password.svg'

const Background = styled.div`
  min-height: calc(100vh - 3.5rem);
  display: flex;
  justify-content: center;
  padding-top: 2em;
  padding-bottom: 5em;
`;

const Paper = styled.div`
  background-color: white;
  border-radius: 2%;
  text-align: center;
`

const SignUp = () => {
  return (
    <Background>
      <Paper>
        <h1>Zaczynamy!</h1>
        <form style={{ display: 'flex', flexDirection: 'column'}}>
          <Input type='email' placeholder='Please enter your email' label='E-mail' />
          <Input type='password' placeholder='Minimum 8 znaków' label='Hasło' />
          <Input type='password' placeholder='Minimum 8 znaków' label='Powtórz hasło' />
        </form>
      </Paper>
    </Background>
  );
};

export default SignUp;
