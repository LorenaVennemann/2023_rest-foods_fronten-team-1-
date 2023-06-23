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
       {/* <div>
       <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2701.413413423156!2d8.528573975892478!3d47.38436610329818!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47900b9899a091c5%3A0x906525b05015723e!2sBurgermeister%20Limmatplatz!5e0!3m2!1sde!2sch!4v1687502623476!5m2!1sde!2sch" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
       </div> */}
    </>
  );
}

export default KontaktPage;
