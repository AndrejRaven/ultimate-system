import styled from "styled-components";
import { FilledButton, SecondaryButton as Button } from "./Button";
import { Form } from "./Form";
import Checkbox from "./Checkbox";
import { InputModal, DatePicker } from "./Input";
import ErrorWrapper from "./ErrorWrapper";
import { Paper } from "./Paper";

const Underline = styled.div`
  width: 100%;
  height: 1px;
  background-color: #bfbfbf;
`;

const Grid = styled.div`
  display: flex;
  width: 100%;
  margin: 30px 0;
  flex-wrap: wrap;
  flex-grow: 1;
  gap: 10%;
  justify-content: ${({ spaceBetween }) => spaceBetween && "space-between"};
  div {
    &.sx-1 {
      flex: 1;
    }
    &.sx-2 {
      flex: 2;
    }
    &.sx-3 {
      flex: 3;
    }
    &.sx-4 {
      flex: 4;
    }
    &.sx-5 {
      flex: 5;
    }
  }
`;

const ModalEditProfile = ({ setIsOpen }) => {
  const closeModal = (e) => {
    e.preventDefault();
    setIsOpen(false);
  };

  return (
    <Paper>
      <Form>
        <button onClick={closeModal} className="close-icon">
          X
        </button>
        <div>
          <h4>Edycja dannnych</h4>
          <Underline />
        </div>
        <Grid>
          <div className="sx-1">
            <ErrorWrapper error="e-mail jest obowiązkowy">
              <InputModal label="*E-mail" />
            </ErrorWrapper>
          </div>
          <div className="sx-1">
            <ErrorWrapper>
              <InputModal label="*Imie" />
            </ErrorWrapper>
          </div>
          <div className="sx-1">
            <ErrorWrapper>
              <InputModal label="*Nazwisko" />
            </ErrorWrapper>
          </div>
        </Grid>
        <Grid>
          <div className="sx-1">
            <ErrorWrapper>
              <DatePicker label="*Data urodzenia" />
            </ErrorWrapper>
          </div>
          <div className="sx-1">
            <ErrorWrapper>
              <InputModal twoInputs label="*Telefon" defVal="+48" />
            </ErrorWrapper>
          </div>
          <div className="sx-1"></div>
        </Grid>
        <Grid>
          <div className="sx-1">
            <ErrorWrapper>
              <Checkbox label="*Polityka prywatności" />
            </ErrorWrapper>
          </div>
          <div className="sx-1">
            <Checkbox label="Zgody marketingowe" />
          </div>
          <div className="sx-1">
            <ErrorWrapper>
              <Checkbox label="*Regulamin sprzedaży" />
            </ErrorWrapper>
          </div>
        </Grid>
        <Grid spaceBetween style={{ marginTop: "50px" }}>
          <div className="sx-1">
            <p>*Pola obowiązkowe</p>
          </div>
          <div style={{ display: "flex", gap: "10px" }}>
            <Button onClick={closeModal} variant="outlined">
              Anuluj
            </Button>
            <FilledButton onClick={closeModal} type="submit">
              Zapisz
            </FilledButton>
          </div>
        </Grid>
      </Form>
    </Paper>
  );
};

export default ModalEditProfile;
