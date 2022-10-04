import styled from "styled-components";
import check from '../icons/check-mark-black-outline-svgrepo-com.svg';

const StyledCheckbox = styled.div`
  display: flex;
  align-items: center;
  font-size: 0.7rem;
  input {
    position: relative;
    z-index: 0;
    &::before {
      position: absolute;
      top: -4px;
      left: -4px;
      display: inline-block;
      content: "";
      width: 16px;
      height: 16px;
      z-index: 1;
      border: 1px solid #676767;
      background-color: white;
      border-radius: 0.4rem;
      /* Anything you want */
    }
    &:checked {
      &::before {
        background-image: url(${check});
        background-size: 12px;
        background-repeat: no-repeat;
        background-position: center;
      }
    }
  }
`;
const Checkbox = ({ label, isChecked }) => {
  return (
    <StyledCheckbox>
      <input type="checkbox" />
      <label>{label}</label>
    </StyledCheckbox>
  );
};

export default Checkbox;
