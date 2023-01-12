import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import { MenuItem } from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import logo from "../assets/logo.svg";
import { useCurrentUserContext } from "../contexts/userContext";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

function Contact() {
  const { setUser, setToken } = useCurrentUserContext();
  const [email, setEmail] = useState("");

  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const body = JSON.stringify({
      email,
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body,
    };

    if (email) {
      // on appelle le back
      fetch("http://localhost:5000/api/message", requestOptions)
        .then((response) => response.json())
        .then((result) => {
          setUser(result.user);
          setToken(result.token);
          navigate("/message");
        })
        .catch(console.error);
    } else {
      setErrorMessage("Please specify email");
    }
  };

  const [messageType, setMessageType] = useState("");

  const handleChange = (event) => {
    setMessageType(event.target.value);
  };

  const typeOfRequest = [
    {
      value: "message",
      label: "Message",
    },
    {
      value: "modification",
      label: "Modification compte",
    },
  ];

  return (
    <div className="w-full h-[90vh] bg-[#171717] relative bottom-16">
      <div className=" flex justify-center pt-6">
        <img src={logo} alt="logo" className="w-[60%]" />
      </div>
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
              Contact
            </Typography>
            <Box
              component="form"
              onSubmit={handleSubmit}
              noValidate
              sx={{ mt: 1 }}
            >
              <TextField
                onChange={(e) => setEmail(e.target.value)}
                margin="normal"
                required
                fullWidth
                id="email"
                label="Adresse email"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="object"
                label="Objet"
                id="object"
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="message-type"
                label="Type de message"
                id="message-type"
                select
                value={messageType}
                onChange={handleChange}
                helperText="Choisir le type de demande"
                variant="filled"
              >
                {typeOfRequest.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
              <TextField
                margin="normal"
                required
                fullWidth
                name="textarea"
                label="Message"
                id="textarea"
                multiline
                rows={4}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2, background: "#890000", color: "white" }}
                submit={handleSubmit}
              >
                Envoyer
              </Button>
            </Box>
          </Box>
        </Container>
        <div>{errorMessage}</div>
      </ThemeProvider>
    </div>
  );
}

export default Contact;
