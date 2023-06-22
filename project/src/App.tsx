import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import ReservationPage from "./components/Reservation";
import HomePage from "./HomePage";
import MenuPage from "./MenuPage";
import AboutPage from "./components/About";

import KontaktPage from "./KontaktPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/reservation" element={<ReservationPage />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/kontakt" element={<KontaktPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
