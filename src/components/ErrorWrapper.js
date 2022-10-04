import styled from "styled-components";

const Error = styled.span`
  color: red;
  font-size: 0.6rem;
`;
const ErrorWrapper = ({ children, error }) => {
  return (
    <div>
      {children}
      <Error>{error}</Error>
    </div>
  );
};

export default ErrorWrapper;