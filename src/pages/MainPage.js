import styled from "styled-components";
import { Container } from "../components/Container";
import { InputWithButton as Input } from "../components/Input";
import { Paper } from "../components/Paper";
import { Table } from "../components/Table"
import { SecondaryButton as Button } from "../components/Button";
import { Pagination } from "../components/Pagination";
import ModalOverlay from '../components/Modal'

const Bar = styled.nav`
  display: flex;
  justify-content: space-between;
  gap: 8px;
`;

const Main = () => {
  return (
    <Container>
      <ModalOverlay>
        <h2>Heell</h2>
      </ModalOverlay>
      <Paper style={{ marginTop: '5rem'}}>
        <Bar style={{ marginLeft: '2rem'}}>
          <div>
            <Input placeholder="Filtruj po imię, nazwisko" type="text" buttonText="Szukaj"/>
          </div>
          <Bar style={{margin: '0.5rem', marginRight: '5rem'}}>
            <Button>Wszyscy</Button>
            <Button>Aktywni</Button>
            <Button>Nieaktywni</Button>
          </Bar>
        </Bar>
      </Paper>
      <div style={{ display: 'flex', justifyContent: 'right', marginTop: '30px'}}>
        <Button>Edytuj swoje konto</Button>
      </div>
      <Table>
        <thead>
          <tr>
            <td></td>
            <td>
              <h5>Imię</h5>
            </td>
            <td>
              <h5>Nazwisko</h5>
            </td>
            <td>
              <h5>E-mail</h5>
            </td>
            <td>
              <h5>Data urodzenia</h5>
            </td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><p className="icon">RW</p></td>
            <td>Roman</td>
            <td>Wasio</td>
            <td>romanwasio@mail.pl</td>
            <td>17.04.1994</td>
          </tr>
          <tr>
            <td>Icon</td>
            <td>Roman Wasio</td>
            <td>Roman Wasio</td>
            <td>Roman Wasio</td>
            <td>Roman Wasio</td>
          </tr>
          <tr>
            <td>Icon</td>
            <td>Roman Wasio</td>
            <td>Roman Wasio</td>
            <td>Roman Wasio</td>
            <td>Roman Wasio</td>
          </tr>
          <tr>
            <td>Icon</td>
            <td>Roman Wasio</td>
            <td>Roman Wasio</td>
            <td>Roman Wasio</td>
            <td>Roman Wasio</td>
          </tr>
          <tr>
            <td>Icon</td>
            <td>Roman Wasio</td>
            <td>Roman Wasio</td>
            <td>Roman Wasio</td>
            <td>Roman Wasio</td>
          </tr>
        </tbody>
      </Table>
      <Pagination>
        <div className="active">1</div>
        <div>2</div>
        <div>3</div>
        <div>...</div>
        <div>12</div>
      </Pagination>
    </Container>
  );
};

export default Main;
