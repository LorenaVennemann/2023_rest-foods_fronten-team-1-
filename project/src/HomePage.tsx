import { Link } from "react-router-dom";
import "./HomePage.css";

function HomePage() {
  return (
    <>
      <header>
        <div className="logo"></div>
      </header>

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
