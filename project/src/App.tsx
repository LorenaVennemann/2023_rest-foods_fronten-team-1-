import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import ReservationPage from "./components/Reservation";

function HomePage() {
  return (
    <div>
      <h1>Home</h1>
      <p>Willkommen auf meiner Homepage!</p>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/reservation" element={<ReservationPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;