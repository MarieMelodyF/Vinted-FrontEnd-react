import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Home = ({ data, setData, isLoading, setIsLoading }) => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://lereacteur-vinted-api.herokuapp.com/offers"
        );
        // console.log("response.data =>", response.data);
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
      <div className="card-list">
        {data.offers.map((offerlist, id) => {
          // console.log(offerlist);
          return (
            <div
              className="card-container"
              key={id}
              //   onClick={<Link to={`/offers/${id}`}></Link>}
            >
              <div className="card-username">
                <p>{offerlist.owner.account.username}</p>
              </div>
              <div>
                <img src={offerlist.product_image.secure_url} alt="" />
              </div>
              <div className="card-price">
                <span>{offerlist.product_price} €</span>
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
};

export default Home;
