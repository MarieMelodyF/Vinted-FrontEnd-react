import { Link } from "react-router-dom";

const Header = ({ token, setToken, search, setSearch }) => {
  return (
    <>
      <header className="head">
        <div className="headerContainer">
          <Link to="/">
            <img src="/src/images/logo-vinted.png" alt="" />
          </Link>
          {/* barre de recherche */}
          <input
            type="text"
            value={search}
            placeholder="search a article..."
            onChange={(event) => {
              setSearch(event.target.value);
            }}
          />

          {token ? (
            <>
              <button
                className="signOut"
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

              <Link to="/login">
                <button>Se connecter</button>
              </Link>
            </>
          )}

          <Link to="/publish">
            <button>Vends tes articles</button>
          </Link>
        </div>
      </header>
    </>
  );
};
export default Header;
