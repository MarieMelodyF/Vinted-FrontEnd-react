import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import axios from "axios";
import { useState } from "react";

const Payment = ({ token, setToken, username }) => {
  const [isLoading, setIsLoading] = useState(false); // State pour etat de la requete
  const [paymentCompleted, setPaymentCompleted] = useState(false); // State etat paiement

  const stripe = useStripe(); // Permet la requete vers stripe
  const elements = useElements(); // Permet la récupétation des données bancaires d'utilisateur

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      setIsLoading(true);
      // Récupération du contenu du cardElement
      const CardElement = elements.getElement(CardElement);
      // Envoie des infos à strip, pour valider la carte(existante ou non)
      const stripeReponse = await stripe.createToken(CardElement, {
        name: { username },
      });
      console.log("log stripeResponse", stripeReponse);
      const stripeToken = stripeToken.token.id;
      // Requete au back et envoie du stripeToken
      const response = await axios.post(
        "https://lereacteur-vinted-api.herokuapp.com/payment",
        { stripeToken: stripeToken }
      );
      console.log("log resp.data", response.data);
      setIsLoading(false);
      if (response.data.status === "succeeded");
      setPaymentCompleted(true);
    } catch (error) {
      console.log(error.message);
    }
    return (
      <form onSubmit={handleSubmit}>
        <h1>Formulaire de paiement 💳 !</h1>
        <CardElement />
        {paymentCompleted === true ? (
          <p>Payement Completed</p>
        ) : (
          <input type="submit" disabled={isLoading} />
        )}
      </form>
    );
  };
};

export default Payment;
