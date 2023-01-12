import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./styles/App.css";

import Profil from "@pages/Profil";
import Map from "@pages/Map";
import InCome from "@pages/InCome";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Message from "./pages/Message";
import Avatar from "./pages/Avatar";
import UserManage from "./components/UserManage";

import { CurrentUserContextProvider } from "./contexts/userContext";

function App() {
  return (
    <BrowserRouter>
      <CurrentUserContextProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/message" element={<Message />} />
          <Route path="/avatar" element={<Avatar />} />
          <Route path="/manageUser" element={<UserManage />} />
          <Route path="/profil" element={<Profil />} />
          <Route path="/map" element={<Map />} />
          <Route path="/reception" element={<InCome />} />
        </Routes>
      </CurrentUserContextProvider>
    </BrowserRouter>
  );
}

export default App;
