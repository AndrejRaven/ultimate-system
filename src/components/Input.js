import ReactDatePicker from "react-datepicker";
import styled from "styled-components/macro";
import { SecondaryButton as Button } from "./Button";
import "react-datepicker/dist/react-datepicker.css";

const StyledInput = styled.div`
  display: flex;
  flex-direction: column;
  label {
    text-align: left;
    font-size: 0.7rem;
    font-weight: 700;
  }
  &.inputWithIcon {
    position: relative;
  }

  .left-icon {
    position: absolute;
    left: 5px;
    top: 60%;
    transform: translateY(-50%);
    svg {
      fill: #a4a4a4;
      background-color: transparent;
      transition: 0.3s;
    }
  }
`;

const InputField = styled.input`
  height: 50px;
  font-size: 0.8rem;
  width: 100%;
  border: 2px solid #a4a4a4;
  border-radius: 4px;
  margin: 8px 0;
  outline: none;
  padding: 4px;
  box-sizing: border-box;
  transition: 0.3s;
  padding-left: 50px;

  &:focus {
    border-color: #293672;
    box-shadow: 0 0 8px 0 #293672;
  }

  :focus + .left-icon {
    svg {
      fill: #293672;
    }
  }
`;

const InputFieldTwo = styled.input`
  width: 100%;
  min-width: 200px;
  border: 2px solid #a4a4a4;
  border-radius: 4px;
  margin: 8px 0;
  outline: none;
  padding: 0.7rem;
  box-sizing: border-box;
  transition: 0.3s;
  &:focus {
    border-color: #293672;
    box-shadow: 0 0 8px 0 #293672;
  }
`;

export const InputWithIcon = ({ type, label, placeholder, autocomplete }) => {
  return (
    <StyledInput className="inputWithIcon">
      <label>{label}</label>
      <InputField autoComplete={autocomplete} type={type} placeholder={placeholder} />
      <div className="left-icon">
        {type !== "password" ? (
          <svg
            width="2rem"
            height="2rem"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path  d="M100.412944 163.922397l0.720408 0 822.455751 0c18.73469 0 34.573423 15.343453 34.573423 34.326806l0 0.719384 0 626.783233c0 18.957771-15.83771 34.326806-34.573423 34.326806l-0.967024 0L100.412944 860.078627c-18.489096 0-34.574447-15.370059-34.574447-34.326806l0-0.740874L65.838497 198.249203C65.838497 179.26585 81.923848 163.922397 100.412944 163.922397L100.412944 163.922397zM889.506866 262.499529 889.506866 262.499529 526.354939 624.933095c-7.795547 8.019651-20.937868 8.019651-28.733415 0L134.469598 262.499529l0 528.676821 755.037269 0L889.506866 262.499529 889.506866 262.499529zM860.796988 232.801137 860.796988 232.801137 163.1805 232.801137l348.796988 348.57186L860.796988 232.801137 860.796988 232.801137z" />
          </svg>
        ) : (
          <svg
            height="2rem"
            viewBox="0 0 30 30"
            width="2rem"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M14.5 0C10.364 0 7 3.364 7 7.5v3c0 .657 1 .668 1 0v-3C8 3.904 10.904 1 14.5 1S21 3.904 21 7.5v3c0 .676 1 .644 1 0v-3C22 3.364 18.636 0 14.5 0zm0 17c-1.375 0-2.5 1.125-2.5 2.5 0 .77.406 1.445 1 1.914V23.5c0 .822.678 1.5 1.5 1.5s1.5-.678 1.5-1.5v-2.088c.594-.47 1-1.143 1-1.912 0-1.375-1.125-2.5-2.5-2.5zm0 1c.834 0 1.5.666 1.5 1.5 0 .536-.286 1.027-.75 1.295-.155.09-.25.255-.25.434v2.27c0 .286-.214.5-.5.5-.286 0-.5-.214-.5-.5v-2.27c0-.178-.095-.344-.25-.433-.464-.268-.75-.76-.75-1.297 0-.834.666-1.5 1.5-1.5zm-9-6c-.822 0-1.5.678-1.5 1.5v15c0 .822.678 1.5 1.5 1.5h18c.822 0 1.5-.678 1.5-1.5v-15c0-.822-.678-1.5-1.5-1.5zm0 1h18c.286 0 .5.214.5.5v15c0 .286-.214.5-.5.5h-18c-.286 0-.5-.214-.5-.5v-15c0-.286.214-.5.5-.5z" />
          </svg>
        )}
      </div>
    </StyledInput>
  );
};

export const InputWithButton = ({ type, placeholder, buttonText }) => {
  return (
    <StyledInput style={{ flexDirection: "row" }}>
      <InputFieldTwo type={type} placeholder={placeholder} />
      <Button style={{ margin: "0.5rem 0 0.5rem -1rem" }}>{buttonText}</Button>
    </StyledInput>
  );
};

const ModalInput = styled.input`
  width: 100%;
  border: none;
  border-bottom: 1px solid #bfbfbf;
  outline: none;
  padding: 5px 5px;
  box-sizing: border-box;
`;

const StyledDatePicker = styled(ReactDatePicker)`
  width: 100%;
  border: none;
  border-bottom: 1px solid #bfbfbf;
  outline: none;
  padding: 5px 5px;
  box-sizing: border-box;
`;

export const DatePicker = ({ label, ...props }) => {
  return (
    <div>
      <label>{label}</label>
      <StyledDatePicker />
    </div>
  );
};

export const InputModal = ({ label, twoInputs, defVal }) => {
  return (
    <div>
      <label>{label}</label>
      {!twoInputs && <ModalInput type="text" />}
      {twoInputs && (
        <div style={{ display: "flex", gap: "10px" }}>
          <ModalInput
            defaultValue={defVal}
            style={{ maxWidth: "35px" }}
            type="text"
            autoComplete="new-password"
          />
          <ModalInput type="tel" />
        </div>
      )}
    </div>
  );
};
