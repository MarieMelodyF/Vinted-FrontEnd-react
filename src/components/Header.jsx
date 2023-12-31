import { Link } from "react-router-dom";
import Slider from "./Slider";
import React, { Component } from "react";
import Switch from "react-switch";
import logo from "../images/logo-vinted.png";

const Header = ({ token, setToken, search, setSearch, sort, setSort }) => {
  return (
    <>
      <header>
        <div className="header-container">
          <Link to="/">
            <img src={logo} alt="logo vinted" />
          </Link>

          {token ? (
            <>
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
                  {/* <Switch */}
                  <input
                    className="sortPrice-check"
                    type="checkbox"
                    onClick={() => {
                      if (sort === "price-desc") {
                        setSort("price-asc");
                      } else {
                        setSort("price-desc");
                      }
                      console.log("log", setSort);
                    }}
                  />
                  {/* slide price */}
                  <Slider />
                </div>
              </div>

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

          <Link to={token ? "/publish" : "/login"}>
            <button>Vends tes articles</button>
          </Link>
        </div>
      </header>
    </>
  );
};
export default Header;
