/* eslint-disable import/order */
import React, { useState, useEffect } from "react";
// eslint-disable-next-line import/no-unresolved
import ModalConfirm from "@components/ModalConfirm";
import { useCurrentUserContext } from "../contexts/userContext";
import { useNavigate } from "react-router-dom";

function CardVehicle() {
  const [vehicles, setVehicles] = useState([]);
  const navigate = useNavigate();
  const { handleClickOpen } = useCurrentUserContext();

  useEffect(() => {
    const fetchVehicles = async () => {
      const res = await fetch("http://localhost:5000/api/vehicles/all");
      const data = await res.json();
      console.warn(data);
      setVehicles(data);
    };
    fetchVehicles();
  }, []);

  return (
    <div className="flex flex-col justify-center mt-[1rem]">
      {vehicles.map((vehicle) => (
        <div key={vehicle.id} className="w-[95%] h-[20vh] card">
          <div className="flex">
            <h2 className="pl-6 pt-6 text-main-font text-black text-xl">
              {vehicle.name}
            </h2>
            <div className="relative bottom-5 left-5 bg-vehicle1 w-[55%] h-[15vh] " />
          </div>
          <h3 className="relative bottom-14 ml-4">
            {vehicle.autonomy} km | {vehicle.seat} sièges
          </h3>
          <div className="relative bottom-5 left-5  w-[55%] h-[15vh]">
            <img
              src={`${vehicle.image}`}
              alt={vehicle.name}
              className="w-full h-full object-cover"
            />
          </div>
          <button
            type="button"
            className="relative bottom-10 button-card1 m-2"
            onClick={handleClickOpen}
          >
            Réserver
          </button>
          <button
            type="button"
            className="relative bottom-10 button-card2 m-2"
            onClick={() => navigate(`/vehicleDetail/${vehicle.id}`)}
          >
            Détails
          </button>
        </div>
      ))}
      <ModalConfirm />
    </div>
  );
}

export default CardVehicle;
