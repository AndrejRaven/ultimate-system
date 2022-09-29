import styled from "styled-components";

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
      fill: black;
      transition: 0.3s;
    }
  }
`;

const InputField = styled.input`
  height: 50px;
  font-size: 0.8rem;
  width: 100%;
  border: 2px solid #aaa;
  border-radius: 4px;
  margin: 8px 0;
  outline: none;
  padding: 4px;
  box-sizing: border-box;
  transition: 0.3s;
  padding-left: 50px;

  &:focus {
    border-color: dodgerBlue;
    box-shadow: 0 0 8px 0 dodgerBlue;
  }

  :focus + .left-icon {
    svg {
      fill: dodgerBlue;
    }
  }
`;

const Input = ({ type, label, placeholder }) => {
  return (
    <StyledInput className="inputWithIcon">
      <label>{label}</label>
      <InputField type={type} placeholder={placeholder} />
      <div className="left-icon">
        <svg
          class="svg-icon"
          width="2rem"
          height="2rem"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M100.412944 163.922397l0.720408 0 822.455751 0c18.73469 0 34.573423 15.343453 34.573423 34.326806l0 0.719384 0 626.783233c0 18.957771-15.83771 34.326806-34.573423 34.326806l-0.967024 0L100.412944 860.078627c-18.489096 0-34.574447-15.370059-34.574447-34.326806l0-0.740874L65.838497 198.249203C65.838497 179.26585 81.923848 163.922397 100.412944 163.922397L100.412944 163.922397zM889.506866 262.499529 889.506866 262.499529 526.354939 624.933095c-7.795547 8.019651-20.937868 8.019651-28.733415 0L134.469598 262.499529l0 528.676821 755.037269 0L889.506866 262.499529 889.506866 262.499529zM860.796988 232.801137 860.796988 232.801137 163.1805 232.801137l348.796988 348.57186L860.796988 232.801137 860.796988 232.801137z" />
        </svg>
      </div>
    </StyledInput>
  );
};

export default Input;
