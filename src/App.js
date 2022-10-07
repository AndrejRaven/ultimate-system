import "./App.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import store from './store/store';

import NavBar from "./components/NavBar";
import SignUp from "./pages/Signup";
import SignIn from "./pages/Signin";
import Main from "./pages/MainPage";



const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
