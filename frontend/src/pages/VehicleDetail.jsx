import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

function VehicleDetail() {
  const navigate = useNavigate();

  return (
    <div className="flex justify-center mt-[1rem]">
      <div className="w-[100%] h-[90vh] bg-[#171717] flex flex-col items-center justify-center">
        <div className="flex flex-col">
          <h2 className="pl-6 pt-6 text-main-font text-white text-2xl">
            GLA 250 SUV
          </h2>
          {/* {car.vehicle_img} */}
          <div className=" bottom-5 bg-vehicle1 w-[150%] h-[20vh] bg-no-repeat bg-contain" />
        </div>
        <h3 className=" bottom-104 ml-4 text-white">Autonomie : 400 km</h3>
        <br />
        <h3 className=" bottom-104 ml-4 text-white">
          Nombre de place : 5 sièges
        </h3>
        <br />
        <h3 className=" bottom-104 ml-4 text-white">Puissance : 200 kwh</h3>
        <br />
        <h3 className=" bottom-104 ml-4 text-white">
          Km au compteur : 47 280 kms
        </h3>
        <br />
        <br />
        <br />
        <div>
          <button type="button" className=" bottom-500 button-card1 m-5">
            Réserver
          </button>
          <button
            type="button"
            className=" bottom-10 button-card2 m-2"
            onClick={() => navigate("/")}
          >
            Annuler
          </button>
        </div>
      </div>
      <Navbar />
    </div>
  );
}

export default VehicleDetail;
