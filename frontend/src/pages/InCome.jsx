import React from "react";
import Header from "@components/Header";
import Navbar from "@components/Navbar";
import Mail from "@components/Mail";

function InCome() {
  return (
    <div>
      <Header />
      <div className="overflow-auto h-[100vh] pt-[4rem]">
        <Mail />
        <Mail />
        <Mail />
        <Mail />
        <Mail />
        <Mail />
      </div>
      <Navbar />
    </div>
  );
}

export default InCome;
