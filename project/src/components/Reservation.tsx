import { Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";

interface Reservation {
  name: string;
  date: Date;
  time: string;
  partySize: number;
}

const ReservationPage: React.FC = () => {
  const [reservation, setReservation] = useState<Reservation>({
    name: "",
    date: new Date(),
    time: "",
    partySize: 0,
  });

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setReservation((prevState) => ({
      ...prevState,
      name: event.target.value,
    }));
  };

  const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setReservation((prevState) => ({
      ...prevState,
      date: new Date(event.target.value),
    }));
  };

  const handleTimeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setReservation((prevState) => ({
      ...prevState,
      time: event.target.value,
    }));
  };

  const handlePartySizeChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setReservation((prevState) => ({
      ...prevState,
      partySize: parseInt(event.target.value),
    }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(reservation);
    // Hier können Sie Ihre Reservierungsanfrage an den Server senden und den Benutzer auf eine Bestätigungsseite weiterleiten.
  };

  return (
    <div
      style={{
        backgroundColor: "#222",
        padding: "20px",
        width: "100%",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          backgroundColor: "#fff",
          padding: "50px",
          borderRadius: "10px",
          boxShadow: "0px 0px 20px -5px rgba(0,0,0,0.2)",
          maxWidth: "600px",
          width: "100%",
        }}
      >
        <Typography variant="h4" style={{ textAlign: "center", marginBottom: "40px", color: "#222" }}>
          Reservierung
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Name"
            value={reservation.name}
            onChange={handleNameChange}
            fullWidth
            required
            style={{ marginBottom: "20px" }}
            InputProps={{ style: { color: "#222" } }}
            InputLabelProps={{ style: { color: "#222" } }}
          />
          <TextField
            label="Datum"
            type="date"
            defaultValue={new Date().toISOString().substr(0, 10)}
            onChange={handleDateChange}
            fullWidth
            required
            style={{ marginBottom: "20px" }}
            InputProps={{ style: { color: "#222" } }}
            InputLabelProps={{ style: { color: "#222" } }}
          />
          <TextField
            label="Uhrzeit"
            type="time"
            defaultValue="12:00"
            onChange={handleTimeChange}
            fullWidth
            required
            style={{ marginBottom: "20px" }}
            InputProps={{ style: { color: "#222" } }}
            InputLabelProps={{ style: { color: "#222" } }}
          />
          <TextField
            label="Personenzahl"
            type="number"
            value={reservation.partySize}
            onChange={handlePartySizeChange}
            fullWidth
            required
            style={{ marginBottom: "20px" }}
            InputProps={{ style: { color: "#222" } }}
            InputLabelProps={{ style: { color: "#222" } }}
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            style={{ marginTop: "20px", backgroundColor: "#222" }}
          >
            Reservieren
          </Button>
        </form>
      </div>
    </div>
  );
};

export default ReservationPage;