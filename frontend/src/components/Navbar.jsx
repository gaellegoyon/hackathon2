import React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import ChatIcon from "@mui/icons-material/Chat";
import DirectionsCarFilledIcon from "@mui/icons-material/DirectionsCarFilled";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const [value, setValue] = React.useState(0);
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
            icon={
              <LocationOnIcon
                fontSize="large"
                sx={{
                  color: "#6e6e6e",
                  "&:hover": { color: "#890000" },
                  "&:focus": { color: "#890000" },
                  "&:active": { color: "#890000" },
                }}
              />
            }
            sx={{
              color: "#6e6e6e",
              "&:hover": { color: "#890000" },
              "&:focus": { color: "#890000" },
              "&:active": { color: "#890000" },
            }}
            onClick={() => navigate("/Map")}
          />
          <BottomNavigationAction
            icon={
              <DirectionsCarFilledIcon
                fontSize="large"
                sx={{
                  color: "#6e6e6e",
                  "&:hover": { color: "#890000" },
                  "&:focus": { color: "#890000" },
                  "&:active": { color: "#890000" },
                }}
              />
            }
            sx={{
              color: "#890000",
              "&:hover": { color: "#890000" },
              "&:focus": { color: "#890000" },
              "&:active": { color: "#890000" },
            }}
            onClick={() => navigate("/")}
          />
          <BottomNavigationAction
            icon={<ChatIcon fontSize="large" />}
            sx={{
              "&:hover": { color: "#890000" },
              "&:focus": { color: "#890000" },
              "&:active": { color: "#890000" },
            }}
            onClick={() => navigate("/reception")}
          />
        </BottomNavigation>
      </div>
    </div>
  );
}
export default Navbar;
