import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Offers = (token) => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState();
  const navigate = useNavigate();

  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://lereacteur-vinted-api.herokuapp.com/offer/${id}`
        );
        // console.log("response.data =>", response.data);
        setData(response.data);
        // console.log("respon.data", response.data);
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
          <p>{data.owner.user}</p>
          {data.product_details.map((detail, index) => {
            // console.log(detail);
            const keys = Object.keys(detail);
            // console.log(keys);
            const key = keys[0];
            // console.log(key);
            return (
              <p key={index}>
                {key} : {detail[key]}
              </p>
            );
          })}
          {data.owner.account.avatar && (
            <img
              className="avatar"
              src={data.owner.account.avatar.secure_url}
              alt={data.owner.account.username}
            />
          )}

          <div>
            <button
              className="button-buy"
              onClick={() => {
                token
                  ? navigate("/payment", {
                      state: {
                        title: data.product_name,
                        price: data.product_price,
                        name: data.owner.account._id,
                      },
                    })
                  : navigate("/login");
              }}
            >
              Acheter
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Offers;
