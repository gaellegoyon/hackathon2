/* eslint-disable react/jsx-no-constructed-context-values */
import { createContext, useContext, useState } from "react";
import PropTypes from "prop-types";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useLocalStorage from "../hooks/useLocalStorage";

const CurrentUserContext = createContext();

export default CurrentUserContext;

export function CurrentUserContextProvider({ children }) {
  // on utilise un hook personnalisé
  const [user, setUser] = useLocalStorage("user", {});
  const [token, setToken] = useLocalStorage("token", "");
  const [geoUser, setGeoUser] = useState([]);

  const imgSrc = `http://localhost:5000/api/avatars/${user.avatar}`;

  const validUploadToast = () =>
    toast.success("Upload réussi !", {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <CurrentUserContext.Provider
      value={{
        user,
        setUser,
        token,
        setToken,
        geoUser,
        setGeoUser,
        imgSrc,
        validUploadToast,
      }}
    >
      {children}
    </CurrentUserContext.Provider>
  );
}

CurrentUserContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useCurrentUserContext = () => useContext(CurrentUserContext);
