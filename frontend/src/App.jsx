import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles/App.css";
import Profil from "./pages/Profil";
import Map from "./pages/Map";
import InCome from "./pages/InCome";
import BigMail from "./pages/BigMail";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Message from "./pages/Message";
import Avatar from "./pages/Avatar";
import UserManage from "./components/UserManage";
import UserInfo from "./pages/UserInfo";
import Supplier from "./pages/Supplier";
import VehicleDetail from "./pages/VehicleDetail";
import { CurrentUserContextProvider } from "./contexts/userContext";
// eslint-disable-next-line import/no-named-as-default
import AddVehicle from "./components/AddVehicle";
import UsersTable from "./pages/UsersTable";

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
          <Route path="/userInfo" element={<UserInfo />} />
          <Route path="/profil" element={<Profil />} />
          <Route path="/addVehicle" element={<AddVehicle />} />
          <Route path="/vehicleDetail" element={<VehicleDetail />} />
          <Route path="/map" element={<Map />} />
          <Route path="/Supplier" element={<Supplier />} />
          <Route path="/reception" element={<InCome />} />
          <Route path="/usersTable" element={<UsersTable />} />
          <Route path="/mail" element={<BigMail />} />
        </Routes>
      </CurrentUserContextProvider>
    </BrowserRouter>
  );
}

export default App;
