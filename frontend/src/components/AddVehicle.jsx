/* eslint-disable camelcase */
import React, { useEffect, useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { InputLabel, NativeSelect } from "@mui/material";
import { useCurrentUserContext } from "../contexts/userContext";
// eslint-disable-next-line import/no-named-as-default
import ManageVehicle from "./ManageVehicle";

function AddVehicle() {
  const { token } = useCurrentUserContext();
  const [name, setName] = useState("");
  const [vehicle_brand, setVehicleBrand] = useState("");
  const [autonomy, setAutonomy] = useState("");
  const [power, setPower] = useState("");
  const [numero, setNumero] = useState("");
  const [rue, setRue] = useState("");
  const [cp, setCp] = useState("");
  const [ville, setVille] = useState("");
  const [vehicle_type, setVehicleType] = useState("");
  const [seat, setSeat] = useState("");
  const [msg, setMsg] = useState("");
  const [image, setImage] = useState("");
  const [count, setCount] = useState(0);
  const [addCount, setAddCount] = useState(0);

  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", `Bearer ${token}`);

    const body = JSON.stringify({
      name,
      vehicle_brand,
      autonomy,
      power,
      numero,
      rue,
      cp,
      ville,
      vehicle_type,
      seat,
      image,
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body,
    };

    useEffect(() => {
      fetch("http://localhost:5000/api/vehicles", requestOptions)
        .then(() => {
          setMsg("Véhicule ajoutée");
        })
        .catch(console.error);
    }, [addCount]);
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
              onSubmit={() => handleSubmit()}
              noValidate
              sx={{ mt: 1 }}
              encType="multipart/form-data"
            >
              <TextField
                onChange={(e) => setName(e.target.value)}
                margin="normal"
                required
                fullWidth
                id="name"
                label="Marque"
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
                label="Model"
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
                label="Autonomie"
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
                label="Puissance"
                type="power"
                id="power"
                autoComplete="current-power"
              />
              <TextField
                onChange={(e) => setNumero(e.target.value)}
                margin="normal"
                required
                fullWidth
                name="numero"
                label="numero"
                type="numero"
                id="numero"
                autoComplete="current-numero"
              />
              <TextField
                onChange={(e) => setRue(e.target.value)}
                margin="normal"
                required
                fullWidth
                name="rue"
                label="rue"
                type="rue"
                id="rue"
                autoComplete="current-rue"
              />
              <TextField
                onChange={(e) => setCp(e.target.value)}
                margin="normal"
                required
                fullWidth
                name="cp"
                label="cp"
                type="cp"
                id="cp"
                autoComplete="current-cp"
              />
              <TextField
                onChange={(e) => setVille(e.target.value)}
                margin="normal"
                required
                fullWidth
                name="ville"
                label="ville"
                type="ville"
                id="ville"
                autoComplete="current-ville"
              />

              <InputLabel htmlFor="seat">Siège</InputLabel>
              <NativeSelect id="seat" onChange={(e) => setSeat(e.target.value)}>
                <option>Select</option>
                <option value="5">5</option>
                <option value="2">2</option>
              </NativeSelect>
              <InputLabel htmlFor="vehicletype">Type</InputLabel>
              <NativeSelect
                id="vehicletype"
                onChange={(e) => setVehicleType(e.target.value)}
              >
                <option>Select</option>
                <option value="Voiture">Voiture</option>
                <option value="Scooter">Scooter</option>
                <option value="Vélo">Vélo</option>
              </NativeSelect>
              <InputLabel htmlFor="catalogue véhicule">
                catalogue véhicule
              </InputLabel>
              <NativeSelect
                id="image"
                onChange={(e) => setImage(e.target.value)}
              >
                <option value="">Selectionner un véhicule</option>
                {vehicle_type === "Voiture" && (
                  <>
                    <option
                      type="Voiture"
                      value="frontend/src/assets/car/Renault Twingo E-Tech.png"
                    >
                      Renault twingo e-tech
                    </option>
                    <option
                      type="Voiture"
                      value="frontend/src/assets/car/citroenEBerlingo.png"
                    >
                      Citroen EBerlingo
                    </option>
                    <option
                      type="Voiture"
                      value="frontend/src/assets/car/peugeot-e-208.png"
                    >
                      Peugeot e-208
                    </option>
                    <option
                      type="Voiture"
                      value="frontend/src/assets/car/Renault Master E-Tech.png"
                    >
                      Renault Master E-Tech
                    </option>
                    <option
                      type="Voiture"
                      value="frontend/src/assets/car/renault_zoe.png"
                    >
                      Renault zoe
                    </option>
                    <option
                      type="Voiture"
                      value="frontend/src/assets/car/renaultKangooVanETech.png"
                    >
                      Renault Kangoo VanETech
                    </option>
                  </>
                )}
                {vehicle_type === "Scooter" && (
                  <>
                    <option
                      type="Scooter"
                      value="frontend/src/assets/scooter/eludix.png"
                    >
                      eludix
                    </option>
                    <option
                      type="Scooter"
                      value="frontend/src/assets/scooter/RIDER3000W.png"
                    >
                      RIDER 3000W
                    </option>
                    <option
                      type="Scooter"
                      value="frontend/src/assets/scooter/Segway E125S.png"
                    >
                      Segway E125S
                    </option>
                  </>
                )}
                {vehicle_type === "Vélo" && (
                  <>
                    <option
                      type="Vélo"
                      value="frontend/src/assets/bike/ELOPS 120 E.png"
                    >
                      ELOPS 120 E
                    </option>
                    <option
                      type="Vélo"
                      value="frontend/src/assets/bike/NEOMOUV ALLEGRIA 2 HYDRAULIQUE.png"
                    >
                      ALLEGRIA 2 HYDRAULIQUE
                    </option>
                    <option
                      type="Vélo"
                      value="frontend/src/assets/bike/NEOMOUV SINAPIA N7.png"
                    >
                      NEOMOUV SINAPIA N7
                    </option>
                    <option
                      type="Vélo"
                      value="frontend/src/assets/bike/VTCriverside540 .png"
                    >
                      VTC riverside 540
                    </option>
                  </>
                )}
              </NativeSelect>
              <Button
                onSubmit={handleSubmit}
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
      <ManageVehicle
        count={count}
        setCount={setCount}
        addCount={addCount}
        setAddCount={setAddCount}
      />
    </div>
  );
}

export default AddVehicle;
