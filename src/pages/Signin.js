import { useEffect, useState } from "react";
import { InputWithIcon as Input } from "../components/Input";
import { Button } from "../components/Button";
import { Form } from "../components/Form";
import { Background } from "../components/CentrifyBackground";
import { Paper } from "../components/Paper";
import ErrorWrapper from "../components/ErrorWrapper";
import { Validator } from "../utils/validator";
import ModalError from "../components/ModalError";
import SuccessModal from "../components/SuccessModal";
import { useLoginUserMutation } from "../api/apiSlice";
import Cookies from 'js-cookie'

const validator = new Validator();

const SignIn = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setError] = useState({
    email: "",
    password: "",
  });

  const [loginUser, { data, isLoading, error, isSuccess, isError }] =
    useLoginUserMutation();

  useEffect(() => {
    if (isError) {
      handleError();
    }
  }, [isError]);

  const handleError = () => {
    setIsOpen(true);
  };

  const handleSignIn = (e) => {
    e.preventDefault();
    setError({ email: "", password: "" });
    const user = {
      username: "",
      password: "",
    };
    const errorObj = { email: "", password: "" };
    errorObj.email = validator.validateEmail(email);
    errorObj.password = validator.validateMinLenght(password, 6);

    if (errorObj.email === "" && errorObj.password === "") {
      setError({ email: "", password: "" });
      user.username = email;
      user.password = password;
      loginUser(user).unwrap();
    } else {
      setError(errorObj);
    }
  };

  return (
    <Background>
      {isOpen && <ModalError setIsOpen={setIsOpen} error={error} />}
      {isSuccess && (
        <SuccessModal
          message="Pomyślnie zapisane. Powrot do strony głownej"
          redirect="/"
        />
      )}
      <Paper>
        <h1>Logowanie</h1>
        <Form>
          <ErrorWrapper error={errors.email}>
            <Input
              setValue={setEmail}
              value={email}
              autocomplete="mail"
              type="email"
              placeholder="Please enter your email"
              label="E-mail"
            />
          </ErrorWrapper>
          <ErrorWrapper error={errors.password}>
            <Input
              setValue={setPassword}
              value={password}
              autocomplete="current-password"
              type="password"
              placeholder="Minimum 8 znaków"
              label="Hasło"
            />
          </ErrorWrapper>
          <Button
            fullWidth
            style={{ marginTop: "3rem" }}
            onClick={handleSignIn}
            disabled={isLoading ? true : false}
          >
            {isLoading ? "Poczekaj" : "Zaloguj się"}
          </Button>
        </Form>
      </Paper>
    </Background>
  );
};

export default SignIn;
