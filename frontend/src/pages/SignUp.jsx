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
    <form onSubmit={handleForm}>
      <div>
        <label htmlFor="firstname">First Name</label>
        <input
          onChange={(e) => setFirstname(e.target.value)}
          type="firstname"
          id="firstname"
        />
      </div>
      <div>
        <label htmlFor="lastname">Lastname</label>
        <input
          onChange={(e) => setLastname(e.target.value)}
          type="lastname"
          id="lastname"
        />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          id="email"
        />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          id="password"
        />
      </div>
      <button type="submit">Inscription</button>
    </form>
  );
}

export default SignUp;
