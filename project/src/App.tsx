import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import ReservationPage from "./components/Reservation";
import HomePage from "./HomePage";
import MenuPage from "./MenuPage";
<<<<<<< Updated upstream
import AboutPage from "./components/About";
=======
import KontaktPage from "./KontaktPage";
>>>>>>> Stashed changes

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/reservation" element={<ReservationPage />} />
          <Route path="/menu" element={<MenuPage />} />
<<<<<<< Updated upstream
          <Route path="/about" element={<AboutPage />} />
=======
          <Route path="/kontakt" element={<KontaktPage />} />
>>>>>>> Stashed changes
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
