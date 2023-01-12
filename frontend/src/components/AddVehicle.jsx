/* eslint-disable camelcase */
import React, { useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { InputLabel, NativeSelect } from "@mui/material";
import { useCurrentUserContext } from "../contexts/userContext";
import ManageVehicle from "./ManageVehicle";

function AddVehicle() {
  // const vehicleRef = useRef(null);
  const { token } = useCurrentUserContext();
  const [name, setName] = useState("");
  const [vehicle_brand, setVehicleBrand] = useState("");
  const [autonomy, setAutonomy] = useState("");
  const [power, setPower] = useState("");
  const [localisation, setLocalisation] = useState("");
  const [vehicle_type, setVehicleType] = useState("");
  const [seat, setSeat] = useState("");
  const [msg, setMsg] = useState("Aucun upload effectué");
  const [image, setImage] = useState("");

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   if (vehicleRef.current.files[0]) {
  //     // recupération des articles.
  //     const myHeader = new Headers();
  //     myHeader.append("Authorization", `Bearer ${token}`);

  //     const formData = new FormData();
  //     formData.append("vehicle", vehicleRef.current.files[0]);

  //     const requestOptions = {
  //       method: "POST",
  //       headers: myHeader,
  //       body: formData,
  //     };
  //     // on appelle le back
  //     fetch("http://localhost:5000/api/vehicles/image", requestOptions)
  //       .then((response) => response.json())
  //       .then((results) => {
  //         // maj avatar
  //         setImage(results.image);
  //         console.warn(results);
  //         setMsg("Upload réussi !");
  //       })
  //       .catch((error) => {
  //         console.error(error);
  //         setMsg("Upload échoué !");
  //       });
  //   } else {
  //     setMsg(
  //       "Vous auriez pas oublié un truc ? Le fichier à uploader, par exemple ?"
  //     );
  //   }
  // };

  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });

  const handleForm = (e) => {
    e.preventDefault();
    // handleSubmit(e); // On appelle handleSubmit avant de créer le véhicule
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
      seat,
      image,
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
              encType="multipart/form-data"
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
                <option>Selectionner un véhicule</option>
                <option value="backend/public/uploads_vehicle/08ed068a-c573-4a2b-80a6-9d6566a63f96-Renault_Twingo_E-Tech.png">
                  renault twingo e-tech
                </option>
                <option value="backend/public/uploads_vehicle/9378d415-0804-4aba-81fa-dae7ff9a8727-LYON2.jpeg">
                  toyota prius
                </option>
              </NativeSelect>

              {/* <input
                type="file"
                ref={vehicleRef}
                onChange={(e) => setImage(e.target.value)}
              /> */}

              <Button
                onSubmit={handleForm}
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
      <ManageVehicle />
    </div>
  );
}

export default AddVehicle;
