import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Signup = ({ setToken }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newsletter, setNewsletter] = useState(false);

  const navigate = useNavigate();

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
    console.log(event.target.value);
  };
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    console.log(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    console.log(event.target.value);
  };
  const handleNewslettersChange = (event) => {
    setNewsletter(!newsletter);
    console.log(!newsletter);
  };

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      const data = {
        username: username,
        email: email,
        password: password,
        newsletter: newsletter,
      };
      const response = await axios.post(
        "https://lereacteur-vinted-api.herokuapp.com/user/signup",
        {
          username: username,
          password: password,
          email: email,
          newsletter: newsletter,
        }
      );

      alert("Votre inscription a été effectuée !");
      console.log("response.data =>", response.data);
      console.log("Submit ==> ", data);

      const token = response.data.token;
      //   console.log("token ==>", token);
      setToken(token);
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <main className="container">
      <div className="signup">
        <h1>S'inscrire</h1>
        <form id="contactForm" onSubmit={handleSubmit}>
          <input
            onChange={handleUsernameChange}
            type="text"
            name="username"
            id="Nom d'utilisateur"
            value={username}
            placeholder="Nom d'utilisateur"
          />
          <br />
          <input
            onChange={handleEmailChange}
            type="email"
            name="email"
            value={email}
            placeholder="john.doe@gmail.com"
          />
          <br />
          <input
            onChange={handlePasswordChange}
            type="password"
            name="password"
            value={password}
            placeholder="Votre mot de passe"
          />
          <br />
          <div className="checkbox">
            <input
              onChange={handleNewslettersChange}
              className="check-input"
              type="checkbox"
              value={newsletter}
              name="newsletter"
            />
            <span>S'incre à notre newsletters</span>
          </div>
          <div className="politique">
            <p>
              en m'inscrivant je confirme avoir lu et accepté les Termes &
              Conditions <br />
              et Politique de Confidentialité de Vinted. Je confirme avoir au
              moins 18 ans.
            </p>
          </div>
          <br />
          <button type="submit">S'inscrire</button>
        </form>
      </div>
    </main>
  );
};

export default Signup;
