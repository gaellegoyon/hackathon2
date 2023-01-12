import * as React from "react";
import Slider from "@mui/material/Slider";

function Rayon() {
  return (
    <div className="w-full z-50 h-[10vh] ">
      <Slider
        defaultValue={50}
        aria-label="Default"
        valueLabelDisplay="auto"
        sx={{ color: "#890000" }}
      />
    </div>
  );
}

export default Rayon;
