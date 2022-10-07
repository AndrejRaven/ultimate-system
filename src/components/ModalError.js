import { useEffect, useState } from "react";
import ModalOverlay from "../components/Modal";
import { Button } from "./Button";
import { Paper } from "./Paper";
import { Card } from "./Card";

const ModalError = ({ error, setIsOpen }) => {
  const [message, setMessage] = useState("");
  useEffect(() => {
    if (error?.status === 400) {
      setMessage("Użytkownik już zarejestrowany");
    }
    if (error?.status === 401) {
      setMessage("Błędne dane");
    }
    if (error?.status >= 500) {
      setMessage("Problem z serwerem. Spróbuj pózniej");
    }
  }, []);
  return (
    <ModalOverlay>
      <Paper>
        <Card>
          <h1>{message}</h1>
          <Button onClick={() => setIsOpen(false)}>Rozumiem</Button>
        </Card>
      </Paper>
    </ModalOverlay>
  );
};

export default ModalError;
