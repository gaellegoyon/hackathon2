import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./styles/App.css";

import Profil from "./pages/Profil";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Articles from "./pages/Articles";
import Avatar from "./pages/Avatar";
import UserManage from "./components/UserManage";

import { CurrentUserContextProvider } from "./contexts/userContext";
import AddVehicle from "./components/AddVehicle";

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
          <Route path="/manageUser" element={<UserManage />} />
          <Route path="/profil" element={<Profil />} />
          <Route path="/addVehicle" element={<AddVehicle />} />
        </Routes>
      </CurrentUserContextProvider>
    </BrowserRouter>
  );
}

export default App;
