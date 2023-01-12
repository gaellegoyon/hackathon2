import React from "react";
import bike from "@assets/bike.svg";

function BikeFilter() {
  return (
    <div>
      <button
        type="button"
        className="filter-card flex justify-center items-center w-[100%] h-[6vh]"
      >
        <img src={bike} alt="" className="w-8 h-8" />
      </button>
    </div>
  );
}

export default BikeFilter;
