import React from "react";
import CardVehicle from "../components/CardVehicle";
import Header from "../components/Header";

function Home() {
  return (
    <div className=" overflow-auto h-[94vh]">
      <Header />
      <div className="mt-20">
        <CardVehicle />
        <CardVehicle />
        <CardVehicle />
        <CardVehicle />
        <CardVehicle />
      </div>
    </div>
  );
}

export default Home;
