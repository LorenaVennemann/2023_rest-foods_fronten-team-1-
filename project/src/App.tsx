import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import ReservationPage from "./components/Reservation";
import HomePage from "./HomePage";
import MenuPage from "./MenuPage";
<<<<<<< HEAD
import AboutPage from "./components/About";

=======
import AboutPage from "./About";
>>>>>>> 9aff64035081cbd27b82dac43be9c22e32780fff
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
