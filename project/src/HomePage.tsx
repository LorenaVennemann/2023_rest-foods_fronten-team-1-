import "./HomePage.css";
function HomePage(){
   return (
   
  <>
   <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM" crossOrigin="anonymous"></link>

<nav className="navbar fixed-top bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#"></a>
    <a href="index.html"><img src="Logo.jpg"  alt="Bootstrap" width="30" height="24" /></a>
    <button type="button" className="btn btn-outline-dark">Dark</button>
  </div>

</nav>
    <header>
      <div className="logo">
        
    </div>
    </header>
    <div className="container">
      <h1 className="title">REST-Food</h1>
      <a href="#" className="button">Reservation</a>
    </div>
  </>
);

}
export default HomePage;