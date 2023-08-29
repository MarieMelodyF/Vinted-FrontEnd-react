import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const CheckOut = ({ title, price, name, token }) => {
  const [isLoading, setIsLoading] = useState(false); // State pour etat de la requete
  const [paymentCompleted, setPaymentCompleted] = useState(false); // State etat paiement
  const navigate = useNavigate();

  const stripe = useStripe(); // Permet la requete vers stripe
  const elements = useElements(); // Permet la récupétation des données bancaires d'utilisateur
  const fraisCustom = Number(1);
  const deliveryCustom = Number(2);
  const total = fraisCustom + deliveryCustom + price;
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      setIsLoading(true);
      // Récupération du contenu du cardElement
      const cardElement = elements.getElement(CardElement);
      // Envoie des infos à strip, pour valider la carte(existante ou non)
      const stripeReponse = await stripe.createToken(cardElement, {
        name: token,
      });
      console.log("log stripeResponse", stripeReponse);
      const stripeToken = stripeReponse.token.id;
      // Requete au back et envoie du stripeToken
      const response = await axios.post(
        "https://lereacteur-vinted-api.herokuapp.com/payment",
        { token: stripeToken, title: title, amount: total }
      );
      console.log("log resp.data", response.data);
      setIsLoading(false);
      if (response.data.status === "succeeded");
      setPaymentCompleted(true);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="payment-container">
      <form className="payment" onSubmit={handleSubmit}>
        <div className="payment-card">
          <div className="title-payment">
            <h1>Résumé de la commande </h1>
          </div>
          <div className="content">
            <div>
              <span> Commande</span>
              <span>{price} €</span>
            </div>
            <div>
              <span> Frais de protection acheteur</span>
              <span>{fraisCustom}</span>
            </div>
            <div>
              <span>Frais de livraison</span>
              <span>{deliveryCustom} €</span>
            </div>
          </div>
          <div className="content">
            <div>
              <span>Total</span>
              <span>{total} €</span>
            </div>
          </div>
        </div>
        <div className="payment-infos">
          <span>
            Il ne vous reste plus qu'un étape pour vous offrir {title}. Vous
            allez payer {total} € (frais de protection et frais de port inclus).
          </span>
        </div>
        <div className="payment-bar">
          <CardElement className="card-element" />
          {paymentCompleted === true ? (
            <p>Paiement Effecuté</p>
          ) : (
            <>
              <div className="buy">
                <input type="submit" value="Payer" disabled={isLoading} />
              </div>

              <Link to="/">
                <div>
                  <button className="backToVinted">Retourner sur Vinted</button>
                </div>
              </Link>
            </>
          )}
        </div>
      </form>
    </div>
  );
};

export default CheckOut;