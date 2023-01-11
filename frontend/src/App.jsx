import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./styles/App.css";

import Header from "./components/Header";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Avatar from "./pages/Avatar";

import { CurrentUserContextProvider } from "./contexts/userContext";

function App() {
  return (
    <BrowserRouter>
      <CurrentUserContextProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/avatar" element={<Avatar />} />
        </Routes>
      </CurrentUserContextProvider>
    </BrowserRouter>
  );
}

export default App;
