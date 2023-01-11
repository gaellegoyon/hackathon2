import { Link, useNavigate } from "react-router-dom";
import { useCurrentUserContext } from "../contexts/userContext";

const BACK_END_URL = import.meta.env.VITE_BACKEND_URL;

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
    <nav className="w-full h-16 bg-red-800 bottom-0">
      <div>
        <Link to="/">Home</Link>

        <div>
          <ul className="flex absolute  w-screen text-xl ">
            {user.email ? (
              <>
                <li>
                  <Link to="/articles">Articles</Link>
                </li>
                <li>
                  <button type="button" onClick={handleDisconnection}>
                    Disconnect
                  </button>
                </li>
                <li>
                  <Link to="/avatar">
                    {/* TODO lien vers le profil */}
                    <img
                      src={`${BACK_END_URL}/api/avatars/${user.avatar}`}
                      alt="Avatar"
                      width={24}
                      height={24}
                    />
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link to="/login">Login</Link>
                </li>
                <li>
                  <Link to="/signUp">SignUp</Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
