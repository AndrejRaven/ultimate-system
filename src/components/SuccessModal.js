import { Link } from "react-router-dom"
import ModalOverlay from "../components/Modal";
import { Button } from "./Button";
import { Paper } from "./Paper";
import { Card } from "./Card";

const SuccessModal = ({ message, redirect }) => {
  return (
    <ModalOverlay>
    <Paper>
      <Card>
        <h1>{message}</h1>
        <Button as={Link} to={redirect}>Rozumiem</Button>
      </Card>
    </Paper>
  </ModalOverlay>
  )
}

export default SuccessModal;