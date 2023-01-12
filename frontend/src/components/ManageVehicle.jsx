/* eslint-disable camelcase */
import React, { useContext, useEffect, useState } from "react";
import CurrentUserContext from "../contexts/userContext";

function ManageVehicle() {
  const [vehicles, setVehicles] = useState([]);
  // const [name, setName] = useState();
  // const [vehicle_brand, setVehicleBrand] = useState();
  // const [vehicle_type, setType] = useState();
  // const [seat, setSeat] = useState();
  const { token } = useContext(CurrentUserContext);
  const [modifyVehicle, setModifyVehicle] = useState(false);

  // const body = JSON.stringify({
  //   name,
  //   vehicle_brand,
  //   vehicle_type,
  //   seat,
  // });

  const myHeaders = new Headers({
    Authorization: `Bearer ${token}`,
  });
  myHeaders.append("Content-Type", "application/json");

  // const PUTrequestOptions = {
  //   method: "PUT",
  //   headers: myHeaders,
  //   body,
  // };

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
  // const updateVehicle = (id) => {
  //   fetch(`http://localhost:5000/api/vehicles/${id}`, PUTrequestOptions);
  // };

  //   const addVehicule = (vehicle) => {
  //     setVehicles([...vehicles, vehicle]);
  //   };

  useEffect(() => {
    fetch("http://localhost:5000/api/vehicles")
      .then((res) => res.json())
      .then((vehiclesList) => setVehicles(vehiclesList));
  }, [modifyVehicle]);
  return (
    <div>
      {modifyVehicle ? (
        <div className="mt-8">
          <ul className="vehicles-list flex">
            <li>Nom</li>
            <li>Model</li>
            <li>Type</li>
            <li>Siège</li>
          </ul>
          {vehicles.map((vehicle) => (
            <ul key={vehicle.id} className="vehicles-list flex">
              <li>{vehicle.name}</li>
              <li>{vehicle.vehicle_brand}</li>
              <li>{vehicle.vehicle_type}</li>
              <li>{vehicle.seat}</li>
              <button type="submit" onClick={() => deleteVehicle(vehicle.id)}>
                X
              </button>
              <button type="button" onClick={() => setModifyVehicle(false)}>
                Modify
              </button>
            </ul>
          ))}
        </div>
      ) : (
        <form className="vehicles-list">
          <div className="modify-input">
            <label htmlFor="name" name="firstname">
              Nom
            </label>
            <input
              type="text"
              name="name"
              // onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="modify-input">
            <label htmlFor="model" name="model">
              Model
            </label>
            <input
              type="text"
              name="model"
              // onChange={(e) => setVehicleBrand(e.target.value)}
            />
          </div>
          <div className="modify-input">
            <label htmlFor="type" name="type">
              Type
            </label>
            <input
              type="text"
              name="type"
              // onChange={(e) => setType(e.target.value)}
            />
          </div>
          <div className="modify-input">
            <label htmlFor="seat" name="seat">
              Siège
            </label>
            <input
              type="text"
              name="seat"
              // onChange={(e) => setSeat(e.target.value)}
            />
          </div>
          <div className="pt-6 flex items-center justify-center">
            <button type="submit" onClick={() => setModifyVehicle(true)}>
              Valider
            </button>
          </div>
        </form>
      )}
    </div>
  );
}

export default ManageVehicle;
