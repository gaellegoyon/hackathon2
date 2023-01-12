import React from "react";
import scooter from "@assets/scooter.svg";

function ScooterFilter() {
  return (
    <div>
      <button
        type="button"
        className="filter-card flex justify-center items-center w-[100%] h-[6vh]"
      >
        <img src={scooter} alt="" className="w-8 h-8" />
      </button>
    </div>
  );
}

export default ScooterFilter;
