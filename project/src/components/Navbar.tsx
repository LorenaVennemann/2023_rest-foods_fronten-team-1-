const Navbar = () => {
  return (
    <>
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM"
        crossOrigin="anonymous"
      />

      <nav className="navbar fixed-top bg-body-tertiary smaller-navbar">
        <div className="container-fluid">
          <a className="navbar-brand" href="#"></a>
          <button type="button" className="btn btn-outline-dark">
            Menu
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
