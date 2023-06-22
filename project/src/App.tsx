import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import ReservationPage from "./components/Reservation";
import HomePage from "./HomePage";
import MenuPage from "./MenuPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/reservation" element={<ReservationPage />} />
          <Route path="/menu" element={<MenuPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
