import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

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
          </a>
          <button type="button" className="btn btn-outline-dark">
           <a href="/menu"><div className="navigation-text">Menu</div></a>
          </button>
        </div>
      </nav>

      <div className="container">
        <h1 className="title" style={{color: 'white'}}>Rest-Foods</h1>
        <h3 className="subtitle" style={{color: 'white'}}>Wo jeder Bissen ein Erlebnis ist</h3>
        <Link to="/reservation" className="button">
          Tischreservierung
        </Link>
      </div>
    </>
  );
}

export default HomePage;
