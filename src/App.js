import "./App.css";
import styled from "styled-components";
import { Route, Routes, BrowserRouter } from "react-router-dom";

import NavBar from "./components/NavBar";
import SignUp from "./pages/Signup";
import SignIn from "./pages/Signin";
import Main from "./pages/MainPage";

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
        <Route path="/" element={<Main />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
