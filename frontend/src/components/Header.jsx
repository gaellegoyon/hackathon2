/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/jsx-props-no-spreading */
import { Link, useNavigate } from "react-router-dom";
import DefaultAvatar from "./DefaultAvatar";
import { useCurrentUserContext } from "../contexts/userContext";

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

  const avatarOption =
    "w-[45px] h-[45px] rounded-full bg-[#890000] flex justify-center items-center border-[2px] border-black ";

  const avatarTextOption = "text-white font-main-font text-xl font-medium";
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
                  <DefaultAvatar
                    avatarOption={avatarOption}
                    avatarTextOption={avatarTextOption}
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
