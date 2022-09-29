import "./App.css";
import styled from "styled-components";
import { Route, Routes, BrowserRouter } from "react-router-dom";

import NavBar from "./components/NavBar";
import SignUp from "./pages/Signup";

const Title = styled.h1`
  color: palevioletred;
  font-size: 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/sign-up" element={<SignUp />} />
        <Route />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
