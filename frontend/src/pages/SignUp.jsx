import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const [email, setEmail] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleForm = (e) => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const body = JSON.stringify({
      email,
      firstname,
      lastname,
      password,
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body,
    };
    e.preventDefault();
    // on créé et on redirige
    fetch("http://localhost:5000/api/register", requestOptions)
      .then(() => {
        navigate("/login");
      })
      .catch(console.error);
  };

  return (
    <form onSubmit={handleForm} className="register-form">
      <div className="absolute top-0 right-1">
        <button
          type="button"
          className="back mt-8 mr-4"
          onClick={() => navigate("/")}
        >
          <svg
            height="25"
            width="25"
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            viewBox="0 0 1024 1024"
            fill="white"
          >
            <path d="M874.690416 495.52477c0 11.2973-9.168824 20.466124-20.466124 20.466124l-604.773963 0 188.083679 188.083679c7.992021 7.992021 7.992021 20.947078 0 28.939099-4.001127 3.990894-9.240455 5.996574-14.46955 5.996574-5.239328 0-10.478655-1.995447-14.479783-5.996574l-223.00912-223.00912c-3.837398-3.837398-5.996574-9.046027-5.996574-14.46955 0-5.433756 2.159176-10.632151 5.996574-14.46955l223.019353-223.029586c7.992021-7.992021 20.957311-7.992021 28.949332 0 7.992021 8.002254 7.992021 20.957311 0 28.949332l-188.073446 188.073446 604.753497 0C865.521592 475.058646 874.690416 484.217237 874.690416 495.52477z" />
          </svg>
        </button>
      </div>
      <p>Ajouter un utilisateur</p>
      <div className="register-div">
        <label className="register-label" htmlFor="firstname">
          Prenom
        </label>
        <input
          lassName="register-input"
          onChange={(e) => setFirstname(e.target.value)}
          type="firstname"
          id="firstname"
        />
      </div>
      <div className="register-div">
        <label className="register-label" htmlFor="lastname">
          Nom
        </label>
        <input
          className="register-input"
          onChange={(e) => setLastname(e.target.value)}
          type="lastname"
          id="lastname"
        />
      </div>
      <div className="register-div">
        <label className="register-label" htmlFor="email">
          Email
        </label>
        <input
          className="register-input"
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          id="email"
        />
      </div>
      <div className="register-div">
        <label className="register-label" htmlFor="password">
          Mot de pass
        </label>
        <input
          className="register-input"
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          id="password"
        />
      </div>
      <button type="submit" className="button3">
        Inscription
      </button>
    </form>
  );
}

export default SignUp;
