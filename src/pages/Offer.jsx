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
    <body>
      <main className="offer">
        <Link to="/">
          <button className="button-back">Retournez sur les offres 😉</button>
        </Link>

        <div className="offer-Container">
          <div className="offer-Img">
            <img src={data.product_image.secure_url} alt="" />
          </div>
          <div className="offer-Details">
            <span className="offer-Price">{data.product_price} €</span>
            <p>{data.product_name}</p>
            <p>{data.product_description} </p>
            {/* <p>{data.owner.account.username}</p> */}

            {data.product_details.map(
              ({ MARQUE, ÉTAT, COULEUR, EMPLACEMENT }) => {
                // console.log(details);
                return (
                  <div>
                    <p>{MARQUE}</p>
                    <p>{ÉTAT}</p>
                    <p>{COULEUR}</p>
                    <p>{EMPLACEMENT}</p>
                  </div>
                );
              }
            )}
          </div>
        </div>
      </main>
    </body>
  );
};

export default Offers;
