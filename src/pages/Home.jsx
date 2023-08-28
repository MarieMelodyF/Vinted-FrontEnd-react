import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Hero from "../components/Hero";

const Home = ({ search }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://lereacteur-vinted-api.herokuapp.com/offers?title=${search}`
        );
        console.log("response.data =>", response.data);
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchData();
  }, [search]);

  return isLoading ? (
    <span>En cours de chargement... </span>
  ) : (
    <main>
      <Hero />

      <div className="card-list">
        {data.offers.map((offerList, index) => {
          // console.log(offerList);
          return (
            <Link to={`/offers/${offerList._id}`} key={index}>
              <div className="card-container">
                <div className="card-username">
                  <p>{offerList.owner.account.username}</p>
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
