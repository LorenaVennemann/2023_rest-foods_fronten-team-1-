import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import ReservationPage from "./components/Reservation";
import HomePage from "./HomePage";

function App() {
  return (
    <><>
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM"
        crossOrigin="anonymous" />

      <nav className="navbar fixed-top bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#"></a>
          <a href="/">
            <img src="Logo.jpg" alt="Bootstrap" width="30" height="24" />
          </a>
          <button type="button" className="btn btn-outline-dark">
            Menu
          </button>
        </div>
      </nav>
    </><BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/reservation" element={<ReservationPage />} />
        </Routes>
      </BrowserRouter></>
  );
}

export default App;