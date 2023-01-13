import React, { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import CurrentUserContext from "../contexts/userContext";

export default function UsersTable() {
  const navigate = useNavigate();
  const goBack = () => navigate(-1);

  const [userList, setUserList] = useState([]);
  const [isAdmin, setIsAdmin] = useState(false);
  const { token } = useContext(CurrentUserContext);

  const body = JSON.stringify({ is_admin: isAdmin });

  const myHeaders = new Headers({
    Authorization: `Bearer ${token}`,
  });
  myHeaders.append("Content-Type", "application/json");

  // Request options pour la mise à jour de la bdd
  const PUTrequestOptions = {
    method: "PUT",
    headers: myHeaders,
    body,
  };
  const DELETErequestOptions = {
    method: "DELETE",
    headers: myHeaders,
  };

  // fonction qui met à jour le status de l'utilisateur avec les PUT options ci-dessus
  const changeUserStatus = (id) => {
    fetch(`http://localhost:5000/api/users/${id}`, PUTrequestOptions);
  };
  const deleteUser = (id) => {
    fetch(`http://localhost:5000/api/users/${id}`, DELETErequestOptions);
  };

  useEffect(() => {
    fetch(`http://localhost:5000/api/users/`)
      .then((res) => res.json())
      .then((user) => setUserList(user));
  }, []);
  return (
    <>
      <div className="flex justify-end">
        <button type="button" className="back mt-8 mr-4 z-50" onClick={goBack}>
          <svg
            height="25"
            width="25"
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            viewBox="0 0 1024 1024"
            fill="white"
          >
            <path d="M874.690416 495.52477c0 11.2973-9.168824 20.466124-20.466124 20.466124l-604.773963 0 188.083679 188.083679c7.992021 7.992021 7.992021 20.947078 0 28.939099-4.001127 3.990894-9.240455 5.996574-14.46955 5.996574-5.239328 0-10.478655-1.995447-14.479783-5.996574l-223.00912-223.00912c-3.837398-3.837398-5.996574-9.046027-5.996574-14.46955 0-5.433756 2.159176-10.632151 5.996574-14.46955l223.019353-223.029586c7.992021-7.992021 20.957311-7.992021 28.949332 0 7.992021 8.002254 7.992021 20.957311 0 28.949332l-188.073446 188.073446 604.753497 0C865.521592 475.058646 874.690416 484.217237 874.690416 495.52477z" />
          </svg>
        </button>
      </div>
      <div className="text-gray-900 bg-gray-200 mt-10">
        <div className="p-4 flex">
          <h1 className="text-3xl">Gestion des utilisateurs</h1>
        </div>
        <div className="px-3 py-4 flex justify-center">
          <table className="w-full text-md bg-white shadow-md rounded mb-4">
            <tbody>
              <tr className="border-b">
                <th className="text-left p-3 px-5">Prénom</th>
                <th className="text-left p-3 px-5">Nom</th>
                <th className="text-left p-3 px-5">Email</th>
                <th className="text-left p-3 px-5">Role</th>
                <th> </th>
              </tr>
              {userList.map((user) => {
                return (
                  <tr className="border-b hover:bg-orange-100">
                    <td td className="p-3 px-5">
                      <input
                        type="text"
                        value={user.firstname}
                        className="bg-transparent"
                      />
                    </td>
                    <td td className="p-3 px-5">
                      <input
                        type="text"
                        value={user.lastname}
                        className="bg-transparent"
                      />
                    </td>
                    <td td className="p-3 px-5">
                      <input
                        type="text"
                        value={user.email}
                        className="bg-transparent"
                      />
                    </td>
                    <td className="p-3 px-5">
                      <button
                        className={
                          user.is_admin
                            ? "text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
                            : "mr-3 text-sm bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
                        }
                        type="button"
                        onClick={() => {
                          setIsAdmin(!isAdmin);
                          changeUserStatus(user.id);
                        }}
                      >
                        {user.is_admin ? "Admin" : "Utilisateur"}
                      </button>
                    </td>

                    {!user.is_admin ? (
                      <td className="p-3 px-5 flex justify-end">
                        <button
                          type="button"
                          className="mr-3 text-sm bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
                        >
                          Sauvegarder
                        </button>
                        <button
                          type="button"
                          className="text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
                          onClick={() => {
                            deleteUser(user.id);
                          }}
                        >
                          Supprimer
                        </button>
                      </td>
                    ) : null}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
