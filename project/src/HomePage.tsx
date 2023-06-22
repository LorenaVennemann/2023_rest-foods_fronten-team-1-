import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./HomePage.css";
import Navbar from "./components/Navbar";

function HomePage() {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const toggleNavbar = () => {
    setNavbarOpen(!navbarOpen);
  };

  return (
    <>
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM"
        crossOrigin="anonymous"
      />

      <Navbar></Navbar>
      <div className="container">
        <h1 className="title" style={{ color: "white" }}>
          Rest-Foods
        </h1>
        <h3 className="subtitle" style={{ color: "white" }}>
          Wo jeder Bissen ein Erlebnis ist
        </h3>
        <Link to="/reservation" className="button">
          Tischreservierung
        </Link>
      </div>
    </>
  );
}

export default HomePage;
