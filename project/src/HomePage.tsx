import React from 'react';
import { Link } from 'react-router-dom';
import LogoImage from './Logo1.jpg';
import './HomePage.css';
import { color } from '@mui/system';
import Navbar from './components/Navbar';

function HomePage() {
  return (
    <>
   <Navbar></Navbar>

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
