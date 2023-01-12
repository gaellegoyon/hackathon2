import React from "react";
import CarFilter from "@components/CarFilter";
import BikeFilter from "@components/BikeFilter";
import ScooterFilter from "@components/ScooterFilter";
import Rayon from "@components/Rayon";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import CardVehicle from "../components/CardVehicle";

function Home() {
  return (
    <div>
      <Header />
      <div>
        <div className="flex justify-around w-full pt-[5rem] mb-4">
          <CarFilter />
          <ScooterFilter />
          <BikeFilter />
        </div>
        <div className=" flex justify-center item-center h-[7vh]">
          <div className="flex flex-col justify-center items-center">
            <div className="text-white font-main-font pt-12">Rayon :</div>
            <div className="w-full">
              <Rayon />
            </div>
          </div>
        </div>
        <div className="overflow-auto h-[70vh]">
          <CardVehicle />
          <CardVehicle />
          <CardVehicle />
          <CardVehicle />
          <CardVehicle />
        </div>
      </div>
      <Navbar />
    </div>
  );
}

export default Home;
