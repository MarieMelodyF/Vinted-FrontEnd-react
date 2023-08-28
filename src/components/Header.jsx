import { Link } from "react-router-dom";
const Header = ({ token, setToken, search, setSearch, sort, setSort }) => {
  return (
    <>
      <header>
        <div className="header-container">
          <Link to="/">
            <img src="/src/images/logo-vinted.png" alt="" />
          </Link>
          <div className="search-container">
            {/* barre de recherche */}
            <input
              className="search-input"
              type="text"
              value={search}
              placeholder="search a article..."
              onChange={(event) => {
                setSearch(event.target.value);
              }}
            />
            <div className="sortPrice">
              {/* prix asc/dsc */}
              <p>trier par prix</p>
              <input
                className="sortPrice-check"
                type="checkbox"
                span="+"
                onClick={() => {
                  if (sort === "price-desc") {
                    setSort("price-asc");
                  } else {
                    setSort("price-desc");
                  }
                  console.log("log", setSort);
                }}
              />
            </div>
          </div>

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
              <div className="header-button">
                <Link to="/signup">
                  <button> S'inscrire</button>
                </Link>

                <Link to="/login">
                  <button>Se connecter</button>
                </Link>
              </div>
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
