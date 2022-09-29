import styled from "styled-components";

const Title = styled.h1`
  color: palevioletred;
  font-size: 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

const Background = styled.div`
  background: grey;
`

const App = () => {
  return (
    <Background>
      <Title>React</Title>
    </Background>
  );
};

export default App;
