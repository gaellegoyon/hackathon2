import * as React from "react";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import CarFilter from "./CarFilter";
import ScooterFilter from "./ScooterFilter";
import BikeFilter from "./BikeFilter";
import Filter from "./Filter";

function FilterMap() {
  const [category, setCategory] = React.useState("");

  const handleChange = (event) => {
    setCategory(event.target.value);
  };

  return (
    <div className="absolute bottom-[43.9rem] ml-4">
      <Select
        value={category}
        onChange={handleChange}
        displayEmpty
        IconComponent=""
      >
        <MenuItem value="">
          <Filter />
        </MenuItem>
        <MenuItem value={10}>
          <CarFilter />
        </MenuItem>
        <MenuItem value={20}>
          <ScooterFilter />
        </MenuItem>
        <MenuItem value={30}>
          <BikeFilter />
        </MenuItem>
      </Select>
    </div>
  );
}

export default FilterMap;
