/* eslint-disable import/no-unresolved */
import React from "react";
import { Box } from "@mui/material";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import ChatIcon from "@mui/icons-material/Chat";
import DirectionsCarFilledIcon from "@mui/icons-material/DirectionsCarFilled";
import LocationOnIcon from "@mui/icons-material/LocationOn";

function Navbar() {
  const [value, setValue] = React.useState(0);
  return (
    <div>
      <Box sx={{ width: "100vw", position: "absolute", bottom: 0 }}>
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction
            icon={<LocationOnIcon fontSize="large" />}
            sx={{
              "&:hover": { color: "#890000" },
              "&:focus": { color: "#890000" },
            }}
          />
          <BottomNavigationAction
            icon={<DirectionsCarFilledIcon fontSize="large" />}
            sx={{
              "&:hover": { color: "#890000" },
              "&:focus": { color: "#890000" },
            }}
          />
          <BottomNavigationAction
            icon={<ChatIcon fontSize="large" />}
            sx={{
              "&:hover": { color: "#890000" },
              "&:focus": { color: "#890000" },
            }}
          />
        </BottomNavigation>
      </Box>
    </div>
  );
}
export default Navbar;
