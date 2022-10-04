import styled from "styled-components";
import { Container } from "../components/Container";
import { InputWithButton as Input } from "../components/Input";
import { Paper } from "../components/Paper";
import { Table, Row, Col } from "../components/Table";
import { SecondaryButton as Button } from "../components/Button";
import { Pagination } from "../components/Pagination";
import ModalOverlay from "../components/Modal";
import ModalEditProfile from "../components/ModalEditProfile";
import { useState } from "react";

const Bar = styled.nav`
  display: flex;
  justify-content: space-between;
  gap: 8px;
`;

const Main = () => {
  const [isOpen, setIsOpen ] = useState(false)

  const handleOpenModal = (e) => {
    e.preventDefault()
    setIsOpen(true)
  }


  return (
    <Container>
      {isOpen &&<ModalOverlay>
        <ModalEditProfile setIsOpen={setIsOpen} />
      </ModalOverlay>}
      <Paper style={{ marginTop: "5rem" }}>
        <Bar style={{ marginLeft: "2rem" }}>
          <div>
            <Input
              placeholder="Filtruj po imię, nazwisko"
              type="text"
              buttonText="Szukaj"
            />
          </div>
          <Bar style={{ margin: "0.5rem", marginRight: "5rem" }}>
            <Button>Wszyscy</Button>
            <Button>Aktywni</Button>
            <Button>Nieaktywni</Button>
          </Bar>
        </Bar>
      </Paper>
      <div
        style={{ display: "flex", justifyContent: "right", marginTop: "30px" }}
      >
        <Button style={{ maxWidth: "250px" }} onClick={handleOpenModal}>Edytuj swoje konto</Button>
      </div>
      <Table>
        <thead>
          <tr>
            <Col></Col>
            <Col>Imię</Col>
            <Col>Nazwisko</Col>
            <Col>E-mail</Col>
            <Col>Data urodzenia</Col>
          </tr>
        </thead>
        <tbody>
          <Row>
            <Col>
              <div className="icon">
                <p>RW</p>
              </div>
            </Col>
            <Col>Roman</Col>
            <Col>Wasio</Col>
            <Col>romanwasio@mail.pl</Col>
            <Col>17.04.1994</Col>
          </Row>
          <Row>
            <Col>Icon</Col>
            <Col>Roman Wasio</Col>
            <Col>Roman Wasio</Col>
            <Col>Roman Wasio</Col>
            <Col>Roman Wasio</Col>
          </Row>
          <Row>
            <Col>Icon</Col>
            <Col>Roman Wasio</Col>
            <Col>Roman Wasio</Col>
            <Col>Roman Wasio</Col>
            <Col>Roman Wasio</Col>
          </Row>
          <Row>
            <Col>Icon</Col>
            <Col>Roman Wasio</Col>
            <Col>Roman Wasio</Col>
            <Col>Roman Wasio</Col>
            <Col>Roman Wasio</Col>
          </Row>
          <Row>
            <Col>Icon</Col>
            <Col>Roman Wasio</Col>
            <Col>Roman Wasio</Col>
            <Col>Roman Wasio</Col>
            <Col>Roman Wasio</Col>
          </Row>
        </tbody>
      </Table>
      <Pagination>
        <div className="active"><p>1</p></div>
        <div><p>2</p></div>
        <div><p>3</p></div>
        <div><p>...</p></div>
        <div><p>12</p></div>
      </Pagination>
    </Container>
  );
};

export default Main;
