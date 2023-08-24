import { Link } from "react-router-dom";

const Header = (token, setToken) => {
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

          {token ? (
            <>
              <button
                onClick={() => {
                  setToken(null);
                  Cookies.remove("token");
                }}
              >
                Se déconnecter
              </button>
            </>
          ) : (
            <>
              <Link to="/signup">
                <button> S'inscrire</button>
              </Link>

              <button>Se connecter</button>
            </>
          )}
          <button>Vends tes articles</button>
        </div>
      </header>
    </>
  );
};
export default Header;
