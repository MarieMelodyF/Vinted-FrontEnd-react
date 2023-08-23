import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Offers = ({ data, setData, isLoading, setIsLoading }) => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://lereacteur-vinted-api.herokuapp.com/offers"
        );
        // console.log("response.data =>", response.data.offers);
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchData();
  }, []);

  return isLoading ? (
    <span>En cours de chargement... </span>
  ) : (
    <main>
      <Link to="/">lien page home</Link>

      <div>
        <p>{offerList._id.product_name}</p>
      </div>
    </main>
  );
};

export default Offers;
