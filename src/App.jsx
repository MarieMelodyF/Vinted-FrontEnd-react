import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import axios from "axios";
import "./App.css";
import Header from "./components/Header";
import Home from "./pages/Home";
import Offer from "./pages/Offer";

function App() {
  const [data, setData] = useState();

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home data={data} setData={setData} />} />

        <Route
          path="/offers/:id"
          element={<Offer data={data} setData={setData} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
