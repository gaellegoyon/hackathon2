import React from "react";
import ModalConfirm from "@components/ModalConfirm";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

import { useCurrentUserContext } from "../contexts/userContext";

function VehicleDetail() {
  const navigate = useNavigate();
  const { handleClickOpen } = useCurrentUserContext();

  return (
    <div>
      <div className="w-[60%] h-[100vh] bg-[#171717] flex flex-col items-center justify-center absolute left-20">
        <div className="flex flex-col">
          <h2 className=" text-main-font text-white text-2xl">GLA 250 SUV</h2>
          {/* {car.vehicle_img} */}
          <div className="bg-vehicle1 h-[20vh] bg-no-repeat bg-contain" />
        </div>
        <h3 className="  text-white">Autonomie : 400 km</h3>
        <br />
        <h3 className=" text-white">Nombre de place : 5 sièges</h3>
        <br />
        <h3 className="  text-white">Puissance : 200 kwh</h3>
        <br />
        <h3 className="  text-white">Km au compteur : 47 280 kms</h3>
        <br />
        <br />
        <br />
        <div>
          <button
            type="button"
            className=" button-card1 m-5"
            onClick={handleClickOpen}
          >
            Réserver
          </button>
          <button
            type="button"
            className=" button-card2 m-2"
            onClick={() => navigate("/")}
          >
            Annuler
          </button>
        </div>
      </div>
      <Navbar />
      <ModalConfirm />
    </div>
  );
}

export default VehicleDetail;
