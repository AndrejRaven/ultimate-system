import { InputWithIcon as Input } from "../components/Input";
import { Button } from "../components/Button";
import { Form } from "../components/Form";
import { Background } from "../components/CentrifyBackground";
import { Paper } from "../components/Paper";
import { useEffect, useState } from "react";
import ErrorWrapper from "../components/ErrorWrapper";
import { useRegisterNewMutation } from "../api/apiSlice.js";
import ModalError from "../components/ModalError";
import SuccessModal from "../components/SuccessModal";
import { Validator } from "../utils/validator";

const validator = new Validator();

const SignUp = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [errors, setError] = useState({ email: "", password: "" });
  const [registerNew, { isLoading, error, isSuccess, isError  }] = useRegisterNewMutation();

  useEffect(() => {
    if(isError) {
      handleError()
    }
  }, [isError])


  const handleError = () => {
    setIsOpen(true)
  }

  const handleRegistration = (e) => {
    e.preventDefault();
    const user = { email: "", plainPassword: "" };

    const errorObj = { email: "", password: "" };
    errorObj.email = validator.validateEmail(email);
    errorObj.password = validator.validateMinLenght(password, 6);
    errorObj.password =
      errorObj.password +
      validator.validatePasswordDiference(password, repeatPassword);

    if (errorObj.email === "" && errorObj.password === "") {
      user.email = email;
      user.plainPassword = password;
      registerNew(user).unwrap();
      setError({ email: "", password: "", repeatPassword: "" });
    } else {
      setError(errorObj);
    }
  };

  return (
    <Background>
      {isOpen && <ModalError setIsOpen={setIsOpen} error={error} />}
      {isSuccess && 
      <SuccessModal message="Pomyślnie zapisane. Teraz możesz się zalogować" redirect="/sign-in" />}
      <Paper>
        <h1>Zaczynamy!</h1>
        <Form>
          <ErrorWrapper error={errors.email}>
            <Input
              setValue={setEmail}
              value={email}
              type="email"
              placeholder="Please enter your email"
              label="E-mail"
            />
          </ErrorWrapper>
          <ErrorWrapper error={errors.password}>
            <Input
              setValue={setPassword}
              value={password}
              autocomplete="new-password"
              type="password"
              placeholder="Minimum 8 znaków"
              label="Hasło"
            />
          </ErrorWrapper>
          <ErrorWrapper error={errors.password}>
            <Input
              setValue={setRepeatPassword}
              value={repeatPassword}
              autocomplete="new-password"
              type="password"
              placeholder="Minimum 8 znaków"
              label="Powtórz hasło"
            />
          </ErrorWrapper>
          <Button
            onClick={handleRegistration}
            fullWidth
            variant="primary"
            style={{ marginTop: "3rem" }}
            disabled={isLoading ? true : false}
          >
            {isLoading ? "Poczekaj" : "Zarejestruj się"}
          </Button>
        </Form>
      </Paper>
    </Background>
  );
};

export default SignUp;
