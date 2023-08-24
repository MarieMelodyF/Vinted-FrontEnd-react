import { Link } from "react-router-dom";
import Signup from "../pages/Signup";

const Header = () => {
  return (
    <>
      <header className="head">
        <div className="headerContainer">
          <Link to="/">
            <img src="/src/images/logo-vinted.png" alt="" />
          </Link>
          <input
            id="search"
            type="text"
            className="input"
            placeholder="search..."
          />

          <Link to="/signup">
            <button> S'inscre</button>
          </Link>

          <button>Se conencter</button>
          <button>Vends tes articles</button>
        </div>
      </header>
    </>
  );
};
export default Header;
