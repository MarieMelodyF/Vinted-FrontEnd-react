import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import Cookies from "js-cookie";
// import des components
import Header from "./components/Header";
// import des pages
import Home from "./pages/Home";
import Offer from "./pages/Offer";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Publish from "./pages/Publish.jsx";
import Payment from "./pages/Payment";

function App() {
  const [token, setToken] = useState(Cookies.get("token"));
  const [search, setSearch] = useState("");
  const [priceMax, setPriceMax] = useState("");
  const [priceMini, setPriceMini] = useState("");
  const [sort, setSort] = useState("");

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
      <Header
        token={token}
        setToken={setToken}
        search={search}
        setSearch={setSearch}
        priceMin={priceMini}
        setPriceMini={setPriceMini}
        priceMax={priceMax}
        setPriceMax={setPriceMax}
        sort={sort}
        setSort={setSort}
      />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              search={search}
              setSearch={setSearch}
              priceMini={priceMini}
              setPriceMin={setPriceMini}
              priceMax={priceMax}
              setPriceMax={setPriceMax}
              sort={sort}
              setSort={setSort}
            />
          }
        />
        <Route path="/offers/:id" element={<Offer />} />
        <Route
          path="/signup"
          element={<Signup token={token} setToken={setToken} />}
        />
        <Route
          path="/login"
          element={<Login token={token} setToken={setToken} />}
        />
        <Route
          path="/publish"
          element={<Publish token={token} setToken={setToken} />}
        />

        <Route
          path="/payment"
          element={<Payment token={token} setToken={setToken} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
