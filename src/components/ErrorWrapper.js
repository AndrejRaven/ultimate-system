import styled from "styled-components";

const Error = styled.span`
  color: red;
  font-size: 0.6rem;
  text-align: left;
`;
const ErrorWrapper = ({ children, error }) => {
  return (
    <div style={{textAlign: 'left'}}>
      {children}
      <Error>{error}</Error>
    </div>
  );
};

export default ErrorWrapper;