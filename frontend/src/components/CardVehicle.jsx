/* eslint-disable import/order */
import React from "react";
// eslint-disable-next-line import/no-unresolved
import ModalConfirm from "@components/ModalConfirm";
import { useCurrentUserContext } from "../contexts/userContext";
import { useNavigate } from "react-router-dom";

function CardVehicle() {
  const navigate = useNavigate();
  const { handleClickOpen } = useCurrentUserContext();
  return (
    <div className="flex justify-center mt-[1rem]">
      <div className="w-[95%] h-[20vh] card">
        <div className="flex">
          <h2 className="pl-6 pt-6 text-main-font text-black text-xl">
            nom du vehicule
          </h2>
          <div className="relative bottom-5 left-5 bg-vehicle1 w-[55%] h-[15vh] bg-cover" />
        </div>
        <h3 className="relative bottom-14 ml-4">100 km | 6 sièges</h3>
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
          onClick={() => navigate("/vehicleDetail")}
        >
          Détails
        </button>
      </div>
      <ModalConfirm />
    </div>
  );
}

export default CardVehicle;
