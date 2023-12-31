import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckOut from "../components/Checkout";
import { useLocation } from "react-router-dom";

// je me connecte à mon compte stripe en front, en utilisant ma clef publique
const stripePromise = loadStripe(
  "pk_test_51HCObyDVswqktOkX6VVcoA7V2sjOJCUB4FBt3EOiAdSz5vWudpWxwcSY8z2feWXBq6lwMgAb5IVZZ1p84ntLq03H00LDVc2RwP"
);
const Payment = () => {
  const location = useLocation();
  const { title } = location.state;
  const { price } = location.state;
  const { name } = location.state;

  // Elements  va devoir englober toute la logique de paiement. Je lui donne en props stripePromise pour lui montrer que je suis bien connecté à mon compte
  return (
    <Elements stripe={stripePromise}>
      <CheckOut title={title} price={price} name={name} />
    </Elements>
  );
};

export default Payment;
