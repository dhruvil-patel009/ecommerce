import React from "react";
import "./Css/Contact.css";
import {
  faLocationDot,
  faPhoneAlt,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// npm i @emailjs/browser

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-section">
        <h1>Contact Us</h1>
        <div className="contact-banner">
          <div className="contact-info">
            <div className="info">
              <div className="box">
                <div className="icon">
                  {" "}
                  <FontAwesomeIcon icon={faLocationDot} />
                </div>
                <div className="text">
                  <h3>Address</h3>
                  <p>
                    Nilkanth Embroidery Parts 47 Sahjanand park Near Krushna
                    Kunj New 80 Feet Road, Nikol Gam Rd, Ahmedabad, Gujarat
                    382350
                  </p>
                </div>
              </div>
              <div className="box">
                <div className="icon">
                  <FontAwesomeIcon icon={faPhoneAlt} />
                </div>
                <div className="phone_email">
                  <h3>Phone</h3>
                  <p>+91-235-695-4789</p>
                </div>
              </div>
              <div className="box">
                <div className="icon">
                  <FontAwesomeIcon icon={faEnvelope} />
                </div>
                <div className="phone_email">
                  <h3>Email</h3>
                  <p>Demo@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
          <div className="contact-map">
            <iframe
              title="map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d229.4797480034539!2d72.64863067667098!3d23.035666794176088!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e871ec2eaaa95%3A0xd6a2708c8d5f390!2sNilkanth%20Embroidery%20Parts!5e0!3m2!1sen!2sin!4v1705063204630!5m2!1sen!2sin"
              style={{ border: 0 }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              className="iframemap"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
