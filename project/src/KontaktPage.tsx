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
<iframe

title="Google Maps"

width="98%"

height="500"

src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2759.4447840632564!2d8.49104171540901!3d47.38905834315797!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47900b7633e62067%3A0x8cb41bce7dd8480e!2sHerostrasse%2012%2C%208050%20Z%C3%BCrich!5e0!3m2!1sen!2sch!4v1664729725120!5m2!1sen!2sch"

style={{

  border: 0,

  marginLeft: "17px",

  marginBottom: "100px",

  marginTop: "100px",

  borderRadius: "20px",

}}

loading="lazy"

></iframe>
      </div>
      
    </>
  );
}

export default KontaktPage;
