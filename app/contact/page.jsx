import "../../styles/contact.scss";

import ScrollToTopBtn from "../../components/ScrollToTopBtn";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faLocationDot } from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  return (
    <div className="contact-container">
      <section className="contact-section-container">
        <div className="contact-info">
          <h1 className="title">
            Nous <span>Contacter</span>
          </h1>
          <div className="info-container">
            <div className="contact">
              <p className="sub-title">Contact</p>
              <div className="info">
                <FontAwesomeIcon icon={faLocationDot} className="icon" />
                <p>35 RUE FONTAINE 95300 PONTOISE</p>
              </div>
              <div className="info">
                <FontAwesomeIcon icon={faPhone} className="icon" />
                <a href="tel:09-85-16-60-60">09.85.16.60.60</a>
              </div>
              <div className="info">
                <FontAwesomeIcon icon={faPhone} className="icon" />
                <a href="tel:07-69-86-98-75">07.69.86.98.75</a>
              </div>
            </div>
            <div className="opening-hours">
              <p className="sub-title">Horaires</p>
              <div className="day-hour-container">
                <p className="day">Du lundi au samedi</p>
                <p className="hours">09h00 - 22h00</p>
              </div>
              <div className="day-hour-container">
                <p className="day">Dimanche</p>
                <p className="hours">Fermeture</p>
              </div>
            </div>
          </div>
        </div>

        <div className="delivery-info">Livraison à partir de 20€</div>
      </section>

      <div className="map-container">
        <h1 className="title">
          Où <span>Nous Trouver</span>
        </h1>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2614.469797926254!2d2.0915803761401683!3d49.05870398658938!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e6f5a9618d7fd1%3A0xa21bb1e7bd1f6073!2sFait%20Maison!5e0!3m2!1sen!2sfr!4v1700766790264!5m2!1sen!2sfr"
          className="map"
          loading="lazy"
        ></iframe>
      </div>
      <ScrollToTopBtn />
    </div>
  );
};

export default Contact;
