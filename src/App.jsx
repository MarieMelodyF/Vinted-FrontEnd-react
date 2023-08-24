import { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "./pages/Home";
import Offer from "./pages/Offer";
import Signup from "./pages/Signup";
import Cookies from "js-cookie";

function App() {
  const [token, setToken] = useState(Cookies.get("token"));

  // import du cookies dans app
  useEffect(() => {
    if (token) {
      Cookies.set("token", token, { expires: 7 });
    } else {
      Cookies.remove("token");
    }
  }, [token]);

  return (
    <Router>
      <Header token={token} setToken={setToken} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/offers/:id" element={<Offer />} />
        <Route
          path="/signup"
          element={<Signup token={token} setToken={setToken} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
