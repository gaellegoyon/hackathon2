import React from "react";
import filter from "@assets/filter.svg";

function Filter() {
  return (
    <div>
      <button
        type="button"
        className="filter-card flex justify-center items-center w-[100%] h-[6vh]"
      >
        <img src={filter} alt="" className="w-8 h-8" />
      </button>
    </div>
  );
}

export default Filter;
