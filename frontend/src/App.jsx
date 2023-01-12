import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./styles/App.css";

import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Articles from "./pages/Articles";
import Avatar from "./pages/Avatar";
import Profil from "./pages/Profil";

import { CurrentUserContextProvider } from "./contexts/userContext";

function App() {
  return (
    <BrowserRouter>
      <CurrentUserContextProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/avatar" element={<Avatar />} />
          <Route path="/profil" element={<Profil />} />
        </Routes>
      </CurrentUserContextProvider>
    </BrowserRouter>
  );
}

export default App;
