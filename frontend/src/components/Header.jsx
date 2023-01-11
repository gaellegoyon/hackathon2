/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/jsx-props-no-spreading */
import { Link, useNavigate } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import { useCurrentUserContext } from "../contexts/userContext";

function stringAvatar(name) {
  return {
    sx: {
      bgcolor: "#890000",
    },
    children: `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`,
  };
}

// const BACK_END_URL = import.meta.env.VITE_BACKEND_URL;

function Header() {
  const { user, setUser } = useCurrentUserContext();

  const navigate = useNavigate();

  const handleDisconnection = () => {
    // gestion de la deconnexion
    localStorage.clear();
    setUser({});
    navigate("/");
  };

  return (
    <nav className="w-full h-[7vh] bg-white fixed z-50 navbar">
      <div>
        <div>
          <ul className="flex h-[7vh] justify-between items-center">
            {user.email ? (
              <>
                <li>
                  <div
                    onClick={handleDisconnection}
                    className="bg-disconnect bg-cover w-8 h-8 ml-4"
                  />
                </li>
                <li className="mr-4">
                  {/* TODO lien vers le profil */}
                  <Avatar
                    {...stringAvatar(`${user.firstname} ${user.lastname}`)}
                  />
                </li>
              </>
            ) : (
              <li>
                <Link to="/login">Login</Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
