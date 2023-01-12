import React, { useContext, useState } from "react";

import { useNavigate } from "react-router-dom";
import CurrentUserContext from "../contexts/userContext";

function ModifProfil() {
  const navigate = useNavigate();
  const { user, setUser, token } = useContext(CurrentUserContext);

  const [modifyInfos, setModifyInfos] = useState(false);

  // Nouvelles infos modifiés par le user
  const [newUserInfos, setNewUserInfos] = useState({
    firstname: user.firstname,
    lastname: user.lastname,
    email: user.email,
  });

  const body = JSON.stringify(newUserInfos);

  const myHeaders = new Headers({
    Authorization: `Bearer ${token}`,
  });
  myHeaders.append("Content-Type", "application/json");

  const PUTrequestOptions = {
    method: "PUT",
    headers: myHeaders,
    body,
  };

  const changeUserStatus = (id) => {
    fetch(`http://localhost:5000/api/users/${id}`, PUTrequestOptions);
    setUser({
      ...user,
      firstname: newUserInfos.firstname,
      lastname: newUserInfos.lastname,
      email: newUserInfos.email,
    });
  };

  const handleDisconnection = () => {
    console.warn(user);
    // gestion de la deconnexion
    localStorage.clear();
    setUser({});
    navigate("/");
  };

  return (
    <div className="profil-container">
      <div className="profil-info">
        <p>
          {user.lastname}.{user.firstname}
        </p>
        {modifyInfos ? (
          <button
            type="button"
            onClick={() => {
              setModifyInfos(false);
              changeUserStatus(user.id);
            }}
          >
            Enregistrer
          </button>
        ) : (
          <button
            type="button"
            onClick={() => {
              setModifyInfos(true);
            }}
          >
            Modifier mes informations
          </button>
        )}

        {modifyInfos ? (
          <form>
            <label htmlFor="lastname" name="lastname">
              Nom
            </label>
            <input
              type="text"
              onChange={(e) =>
                setNewUserInfos({
                  ...newUserInfos,
                  lastname: e.target.value,
                })
              }
            />

            <label htmlFor="firstname" name="firstname">
              Prénom
            </label>
            <input
              type="text"
              onChange={(e) =>
                setNewUserInfos({
                  ...newUserInfos,
                  firstname: e.target.value,
                })
              }
            />

            <label htmlFor="mail" name="email">
              Email
            </label>
            <input
              type="text"
              onChange={(e) =>
                setNewUserInfos({
                  ...newUserInfos,
                  email: e.target.value,
                })
              }
            />
          </form>
        ) : (
          ""
        )}

        <button type="button" onClick={() => navigate("/manageUser")}>
          Gestion des Utilisateurs
        </button>

        <button
          onClick={() => {
            handleDisconnection();
          }}
          type="button"
        >
          Se déconnecter
        </button>
      </div>
    </div>
  );
}

export default ModifProfil;
