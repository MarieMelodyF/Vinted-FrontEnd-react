import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Hero from "../components/Hero";

const Home = ({ search, priceMini, priceMax, sort }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://lereacteur-vinted-api.herokuapp.com/offers?title=${search}&priceMin=${priceMini}&priceMax=${priceMax}&sort=${sort}`
        );
        console.log("response.data =>", response.data);
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchData();
  }, [search, sort, priceMini, priceMax]);

  return isLoading ? (
    <span>En cours de chargement... </span>
  ) : (
    <main className="container">
      <Hero />

      <div className="card-list">
        {data.offers.map((offerList, index) => {
          // console.log(offerList);
          return (
            <Link to={`/offers/${offerList._id}`} key={index}>
              <div className="card-container">
                <div className="card-username">
                  <p>{offerList.owner.account.username}</p>
                  {offerList.owner.account.avatar && (
                    <img
                      className="avatar"
                      src={offerList.owner.account.avatar.secure_url}
                      alt={offerList.owner.account.username}
                    />
                  )}
                </div>
                <div>
                  <img src={offerList.product_image.secure_url} alt="" />
                </div>
                <div className="card-price">
                  <span>{offerList.product_price} €</span>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </main>
  );
};

export default Home;
