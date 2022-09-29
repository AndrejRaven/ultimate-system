import { Link } from "react-router-dom";
import styled from "styled-components";
import Container from "./Container";

const Nav = styled.div`
  background-color: grey;
  padding: 1em 0;
`;
const Bar = styled.nav`
  display: flex;
  justify-content: space-between;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  margin: 0 0.5rem;
`

const NavBar = ({ loggedIn }) => {
  return (
    <Nav>
      <Container>
        <Bar>
          <div>
            <StyledLink to='/'>Główna strona</StyledLink>
          </div>
          <div>
            <StyledLink to="/sign-up">Rejestracja</StyledLink>
            <StyledLink to="/sign-in">Logowanie</StyledLink>
          </div>
        </Bar>
      </Container>
    </Nav>
  );
};

export default NavBar;
