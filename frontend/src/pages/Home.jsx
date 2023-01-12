import React from "react";
import CardVehicle from "../components/CardVehicle";
import Header from "../components/Header";
import NavBar from "../components/Navbar";

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
      <NavBar />
    </div>
  );
}

export default Home;
