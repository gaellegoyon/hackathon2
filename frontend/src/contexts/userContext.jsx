/* eslint-disable react/jsx-no-constructed-context-values */
import { createContext, useContext, useState } from "react";
import PropTypes from "prop-types";
import useLocalStorage from "../hooks/useLocalStorage";

const CurrentUserContext = createContext();

export default CurrentUserContext;

export function CurrentUserContextProvider({ children }) {
  // on utilise un hook personnalisé
  const [user, setUser] = useLocalStorage("user", {});
  const [token, setToken] = useLocalStorage("token", "");
  const [geoUser, setGeoUser] = useState([]);
  const [active, setActive] = useState(false);
  const [open, setOpen] = useState(false);
  const [dist, setDist] = useState();

  const handleClickOpen = () => {
    setOpen(true);
  };

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
        setActive,
        active,
        open,
        setOpen,
        handleClickOpen,
        dist,
        setDist,
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
