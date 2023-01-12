/* eslint-disable import/no-unresolved */
import React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import ChatIcon from "@mui/icons-material/Chat";
import DirectionsCarFilledIcon from "@mui/icons-material/DirectionsCarFilled";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const [value, setValue] = React.useState(0);
  const navigate = useNavigate();
  return (
    <div>
      <div className="w-full absolute bottom-0">
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction
            icon={<LocationOnIcon fontSize="large" />}
            onClick={() => navigate("/map")}
          />

          <BottomNavigationAction
            icon={<DirectionsCarFilledIcon fontSize="large" value={0} />}
            onClick={() => navigate("/")}
          />
          <BottomNavigationAction
            icon={<ChatIcon fontSize="large" />}
            onClick={() => navigate("/reception")}
          />
        </BottomNavigation>
      </div>
    </div>
  );
}
export default Navbar;
