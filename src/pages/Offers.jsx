import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

const Offers = ({ data, setData }) => {
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://lereacteur-vinted-api.herokuapp.com/offer/${id}`
        );
        console.log("response.data =>", response.data);
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

      <div className="infoToCard">
        <img src={data.product_image.secure_url} alt="" />
        <div className="details">
          <p>{data.product_name}</p>
          <p>{data.product_price} €</p>
          <p>{data.product_description} </p>
          <p>{data.owner.account.username}</p>
        </div>
        {data.product_details.map(({ MARQUE, ÉTAT, COULEUR, EMPLACEMENT }) => {
          // console.log(details);
          return (
            <div className="details">
              <p>{MARQUE}</p>
              <p>{ÉTAT}</p>
              <p>{COULEUR}</p>
              <p>{EMPLACEMENT}</p>
            </div>
          );
        })}
      </div>
    </main>
  );
};

export default Offers;
