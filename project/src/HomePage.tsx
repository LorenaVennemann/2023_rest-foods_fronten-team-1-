import { Link } from 'react-router-dom';
import LogoImage from './Logo1.jpg';
import './HomePage.css';
import "./HomePage.css";


function HomePage() {
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
          <a className="navbar-brand" href="#">
          <img src={LogoImage} alt="Logo" className="logo" />
          </a>
          <button type="button" className="btn btn-outline-dark">
            Dark
          </button>
        </div>
      </nav>

    

      <div className="container">
        <h1 className="title">REST-Food</h1>
        <Link to="/reservation" className="button">
          Reservation
        </Link>
      </div>
    </>
  );
}

export default HomePage;
