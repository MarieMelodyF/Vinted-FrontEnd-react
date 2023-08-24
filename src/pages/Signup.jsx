import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState({});
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newsletter, setNewsletter] = useState(false);
  const [showResults, setShowResults] = useState(false);

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
      console.log("response.data =>", response.data);

      setShowResults(true);
      console.log("Submit ==> ", data);
    } catch (error) {
      console.log(error.message);
    }
  };

  //   useEffect(() => {
  //     // console.log(data);
  //     const fetchData = async () => {
  //       try {
  //         const response = await axios.get(
  //           "https://lereacteur-vinted-api.herokuapp.com/user/signup",
  //           { username: username, password: password, email: email }
  //         );
  //         console.log("response.data =>", response.data);
  //         setData(response.data);
  //         setIsLoading(false);
  //       } catch (error) {
  //         console.log(error.message);
  //       }
  //     };

  //     fetchData();
  //   }, []);
  return (
    username,
    (
      <main className="container">
        <div className="signup">
          <h1>S'inscrire</h1>
          <form id="contactForm" onSubmit={handleSubmit}>
            <input
              onChange={handleUsernameChange}
              type="text"
              name="username"
              id="Nom d'utilisateur"
              state={username}
              placeholder="Nom d'utilisateur"
            />
            <br />
            <input
              onChange={handleEmailChange}
              type="email"
              name="email"
              state={email}
              placeholder="john.doe@gmail.com"
            />
            <br />
            <input
              onChange={handlePasswordChange}
              type="password"
              name="password"
              state={password}
              placeholder="Votre mot de passe"
            />
            <br />
            <div className="checkbox">
              <input
                onChange={handleNewslettersChange}
                className="check-input"
                type="checkbox"
                state={newsletter}
                name="newsletter"
              />
              <span>S'incre à notre newsletters</span>
            </div>
            <div className="politique">
              <p>
                en m'inscrivant je confirme avoir lu et accepté les Termes &
                Conditions <br />
                et Politique de Confidentialité de Vinted. Je confirme avoir au
                moins 18 ans.{" "}
              </p>
            </div>
            <br />
            <button type="submit">S'inscrire</button>
          </form>
        </div>
      </main>
    )
  );
};

export default Signup;
