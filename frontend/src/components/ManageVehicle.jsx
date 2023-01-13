/* eslint-disable camelcase */
import React, { useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import CurrentUserContext from "../contexts/userContext";

function ManageVehicle({ count, setCount, addCount }) {
  const [vehicles, setVehicles] = useState([]);

  const { token } = useContext(CurrentUserContext);

  const myHeaders = new Headers({
    Authorization: `Bearer ${token}`,
  });

  const DELETErequestOptions = {
    method: "DELETE",
    headers: myHeaders,
  };

  const deleteVehicle = (id) => {
    setCount(count + 1);
    fetch(`http://localhost:5000/api/vehicles/${id}`, DELETErequestOptions);
  };

  useEffect(() => {
    fetch("http://localhost:5000/api/vehicles")
      .then((res) => res.json())
      .then((vehiclesList) => setVehicles(vehiclesList));
  }, [count, addCount]);
  return (
    <div>
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
              Annuler
            </button>
            <button type="button">Modifier</button>
          </ul>
        ))}
      </div>
    </div>
  );
}
ManageVehicle.propTypes = {
  count: PropTypes.number.isRequired,
  addCount: PropTypes.number.isRequired,
  setCount: PropTypes.func.isRequired,
};
export default ManageVehicle;
