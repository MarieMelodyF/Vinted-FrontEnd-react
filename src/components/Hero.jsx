import { Link } from "react-router-dom";

const Hero = ({ token, setToken }) => {
  return (
    <>
      <main className="inner">
        <div className="inner-text">
          <p>Prêts à faire du tri dans vos placards ?</p>
          <Link to={token ? "/publish" : "/login"}>
            <button className="hero-button">Commencez à vendre</button>
          </Link>
        </div>
      </main>
    </>
  );
};
export default Hero;
