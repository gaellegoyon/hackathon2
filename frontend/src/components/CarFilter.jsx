import React from "react";
import car from "@assets/car.svg";

function CarFilter() {
  return (
    <div>
      <button
        type="button"
        className="filter-card flex justify-center items-center w-[100%] h-[6vh]"
      >
        <img src={car} alt="" className="w-8 h-8" />
      </button>
    </div>
  );
}

export default CarFilter;
