const Header = () => {
  return (
    <>
      <header className="head">
        <div className="container">
          <img src="/src/images/logo-vinted.png" alt="" />
          <input
            id="search"
            type="text"
            className="input"
            placeholder="search..."
          />
          <button> S'inscre</button>
          <button>Se conencter</button>
          <button>Vends tes articles</button>
        </div>
      </header>
      <main className="inner">
        <div className="inner-text">
          <p>Prêts à faire du tri dans vos placards ?</p>
          <button>Commencez à vendre</button>
        </div>
      </main>
    </>
  );
};
export default Header;
