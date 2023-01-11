/* eslint-disable camelcase */
import React, { useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useCurrentUserContext } from "../contexts/userContext";

function AddVehicle() {
  const { token } = useCurrentUserContext();
  const [name, setName] = useState("");
  const [vehicle_brand, setVehicleBrand] = useState("");
  const [autonomy, setAutonomy] = useState("");
  const [power, setPower] = useState("");
  const [localisation, setLocalisation] = useState("");
  const [vehicle_type, setVehicleType] = useState("");
  const [msg, setMsg] = useState("");

  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });

  const handleForm = (e) => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", `Bearer ${token}`);

    const body = JSON.stringify({
      name,
      vehicle_brand,
      autonomy,
      power,
      localisation,
      vehicle_type,
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body,
    };
    e.preventDefault();
    // on créé et on redirige
    fetch("http://localhost:5000/api/vehicles", requestOptions)
      .then(() => {
        setMsg("Véhicule ajoutée");
      })
      .catch(console.error);
  };

  return (
    <div className="w-full h-[100vh] bg-[#171717]">
      <ThemeProvider theme={darkTheme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography
              component="h1"
              variant="h5"
              className="text-white text-main-font"
            >
              Ajouter un véhicule
            </Typography>
            <Box
              component="form"
              onSubmit={handleForm}
              noValidate
              sx={{ mt: 1 }}
            >
              <TextField
                onChange={(e) => setName(e.target.value)}
                margin="normal"
                required
                fullWidth
                id="name"
                label="name"
                name="name"
                autoComplete="name"
                autoFocus
              />
              <TextField
                onChange={(e) => setVehicleBrand(e.target.value)}
                margin="normal"
                required
                fullWidth
                name="vehicle_brand"
                label="vehicle_brand"
                type="vehicle_brand"
                id="vehicle_brand"
                autoComplete="current-vehicle_brand"
              />
              <TextField
                onChange={(e) => setAutonomy(e.target.value)}
                margin="normal"
                required
                fullWidth
                name="autonomy"
                label="autonomy"
                type="autonomy"
                id="autonomy"
                autoComplete="current-autonomy"
              />
              <TextField
                onChange={(e) => setPower(e.target.value)}
                margin="normal"
                required
                fullWidth
                name="power"
                label="power"
                type="power"
                id="power"
                autoComplete="current-power"
              />
              <TextField
                onChange={(e) => setLocalisation(e.target.value)}
                margin="normal"
                required
                fullWidth
                name="localisation"
                label="localisation"
                type="localisation"
                id="localisation"
                autoComplete="current-localisation"
              />
              <TextField
                onChange={(e) => setVehicleType(e.target.value)}
                margin="normal"
                required
                fullWidth
                name="vehicletype"
                label="vehicletype"
                type="vehicletype"
                id="vehicletype"
                autoComplete="current-vehicletype"
              />

              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2, background: "#890000", color: "white" }}
              >
                Ajouter
              </Button>
            </Box>
          </Box>
        </Container>
        {msg}
      </ThemeProvider>
    </div>
  );
}

export default AddVehicle;
