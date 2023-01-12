import React, { useContext, useEffect, useState } from "react";
import CurrentUserContext from "../contexts/userContext";

function ManageVehicle() {
  const [vehicles, setVehicles] = useState([]);
  const { token } = useContext(CurrentUserContext);
  const [modifyVehicle, setModifyVehicle] = useState(false);

  const myHeaders = new Headers({
    Authorization: `Bearer ${token}`,
  });
  myHeaders.append("Content-Type", "application/json");

  //   const PUTrequestOptions = {
  //     method: "PUT",
  //     headers: myHeaders,
  //   };

  const DELETErequestOptions = {
    method: "DELETE",
    headers: myHeaders,
  };

  const deleteVehicle = (id) => {
    fetch(`http://localhost:5000/api/vehicles/${id}`, DELETErequestOptions);
    // const indexFound = vehicles.find((vehicle) => vehicle.id === id);
    // vehicles.slice(indexFound, 1);
    // setVehicles([...vehicles]);
  };
  //   const changeUserStatus = (id) => {
  //     fetch(`http://localhost:5000/api/users/${id}`, PUTrequestOptions);
  //   };

  //   const addVehicule = (vehicle) => {
  //     setVehicles([...vehicles, vehicle]);
  //   };

  useEffect(() => {
    fetch("http://localhost:5000/api/vehicles")
      .then((res) => res.json())
      .then((vehiclesList) => setVehicles(vehiclesList));
  }, []);
  return (
    <div>
      {modifyVehicle ? (
        <form className="vehicles-list">
          <label htmlFor="name" name="firstname">
            Nom
          </label>
          <input type="text" name="name" />
          <label htmlFor="name" name="firstname">
            Model
          </label>
          <input type="text" name="model" />
          <label htmlFor="model" name="model">
            Autonomie
          </label>
          <input type="text" name="Autonomie" />
          <label htmlFor="Autonomie" name="Autonomie">
            Nom
          </label>
          <input type="text" name="name" />
        </form>
      ) : (
        <div>
          {vehicles.map((vehicle) => (
            <ul key={vehicle.id} className="vehicles-list flex">
              <li>{vehicle.name}</li>
              <li>{vehicle.vehicle_brand}</li>
              <li>{vehicle.autonomy}</li>
              <li>{vehicle.power}</li>
              <li>{vehicle.localisation}</li>
              <li>{vehicle.vehicle_type}</li>
              <li>{vehicle.seat}</li>
              <img src={vehicle.image} alt="vehicle" />
              <button type="submit" onClick={() => deleteVehicle(vehicle.id)}>
                X
              </button>
              <button type="submit" onClick={() => setModifyVehicle(true)}>
                Modify
              </button>
            </ul>
          ))}
        </div>
      )}
    </div>
  );
}

export default ManageVehicle;
