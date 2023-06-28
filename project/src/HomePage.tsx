import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./HomePage.css";
import Navbar from "./components/Navbar";
import { defaultAxiosInstance } from "./components/service/Api";

interface MenuItem {
  id: number;
  name: string;
  description: string;
}

function HomePage(): JSX.Element {
  const [navbarOpen, setNavbarOpen] = useState<boolean>(false);
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);

  const toggleNavbar = (): void => {
    setNavbarOpen(!navbarOpen);
  };

  useEffect(() => {
    defaultAxiosInstance
      .get<MenuItem[]>("/menu")
      .then((response) => {
        setMenuItems(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

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
          <div className="navigation-text" onClick={toggleNavbar}>
            Menu
          </div>
          {navbarOpen && (
            <ul className="navbar-nav flex-row ms-auto align-items-center">
              <li className="nav-item">
                <a className="nav-link mx-3" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link mx-3" href="/menu">
                  Menukarte
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link mx-3" href="/about">
                  Über uns
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link mx-3" href="/kontakt">
                  Kontakt
                </a>
              </li>
            </ul>
          )}
        </div>
      </nav>
      <Navbar />
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
        <div>
          {menuItems.map((item: MenuItem) => (
            <div key={item.id}>
              <h4>{item.name}</h4>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default HomePage;