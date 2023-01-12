import React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import ChatIcon from "@mui/icons-material/Chat";
import DirectionsCarFilledIcon from "@mui/icons-material/DirectionsCarFilled";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { useNavigate } from "react-router-dom";
import { Box } from "@mui/material";

function Navbar() {
  const navigate = useNavigate();
  const [value, setValue] = React.useState(0);
  return (
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
          onClick={() => navigate("/Map")}
        />
        <BottomNavigationAction
          icon={<DirectionsCarFilledIcon fontSize="large" />}
          sx={{
            "&:hover": { color: "#890000" },
            "&:focus": { color: "#890000" },
          }}
          onClick={() => navigate("/")}
        />
        <BottomNavigationAction
          icon={<ChatIcon fontSize="large" />}
          sx={{
            "&:hover": { color: "#890000" },
            "&:focus": { color: "#890000" },
          }}
          onClick={() => navigate("/Message")}
        />
      </BottomNavigation>
    </Box>
  );
}
export default Navbar;
