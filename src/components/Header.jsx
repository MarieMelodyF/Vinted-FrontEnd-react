import Cookies from "js-cookie";

import { Link } from "react-router-dom";

const Header = ({ token, setToken }) => {
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
          {/* Si le cookies est existant alors faire disparaitre les boutons s'inscre et se connecter */}
          {/* Afficher le bouton se deconnecter. Au clic sur "se deconnecter. Faire apparaitre à nouveau 
           les boutons supprimés" */}
          {token ? (
            <>
              <button
                onClick={() => {
                  setToken("");
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
