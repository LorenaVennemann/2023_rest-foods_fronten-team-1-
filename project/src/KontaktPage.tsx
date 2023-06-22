import "./Kontakt.css";
import Navbar from "./components/Navbar";

function KontaktPage() {
  return (
    <>
    <div className="Kontakt">
      <Navbar></Navbar>
     <h1>Kontakt</h1>

<div className="contact-info">
  <span className="contact-label">Name:</span> REST-Food
</div>

<div className="contact-info">
  <span className="contact-label">Email:</span> rest.food@mail.com
</div>

<div className="contact-info">
  <span className="contact-label">Telephone:</span> +1 123-456-7890
</div>

<div className="contact-info">
  <span className="contact-label">Address:</span> 123 Main Street, City, Country
</div>
      </div>
    </>
  );
}

export default KontaktPage;
