import React from "react";
import CarFilter from "@components/CarFilter";
import BikeFilter from "@components/BikeFilter";
import ScooterFilter from "@components/ScooterFilter";
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

        <div className="overflow-auto h-[80vh]">
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
