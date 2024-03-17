import React from "react";
import "./Footer.css";
import instagram from "../Assets/img/instagram.png";
import twitter from "../Assets/img/twitter.png";
import facebook from "../Assets/img/Facebook.png";
import Discord from "../Assets/img/Discord.png";
import logo from "../Assets/img/logo-full.png";

const Footer = () => {
  return (
    <footer className="footer-distributed">
      <div className="footer-left">
        <h3>
          <img src={logo} alt="logo" />
        </h3>

        {/* <p className="footer-links">
          <Link to="/">
            <a href="/" className="link-1" onClick={() => updateMenu("home")}>
              Home
            </a>
          </Link>

          <Link to="/product">
            <a href="/" onClick={() => updateMenu("product")}>
              Product
            </a>
          </Link>

          <Link to="/about_us">
            <a href="/" onClick={() => updateMenu("aboutus")}>
              About Us
            </a>
          </Link>

          <Link to="/contact_us">
            <a href="/" onClick={() => updateMenu("contactus")}>
              Contact Us
            </a>
          </Link>
        </p> */}

        <p className="footer-company-name">
          CopyRight © 2024 All Rights Reserved
        </p>
      </div>

      <div className="footer-center">
        <div>
          <i className="fa fa-map-marker"></i>
          <p>
            <span>Nilkanth Embroidery Parts</span>
            Nilkanth Embroidery Parts 47 Sahjanand park Near Krushna Kunj New 80
            Feet Road, Nikol Gam Rd, Ahmedabad, Gujarat 382350
          </p>
        </div>

        <div>
          <i className="fa fa-phone"></i>
          <p>+91 156 458 5789</p>
        </div>

        <div>
          <i className="fa fa-envelope"></i>
          <p>
            <a href="mailto:support@company.com">support@company.com</a>
          </p>
        </div>
      </div>

      <div className="footer-right">
        <p className="footer-company-about">
          <span>About the company</span>
          Lorem ipsum dolor sit amet, consectateur adispicing elit. Fusce
          euismod convallis velit, eu auctor lacus vehicula sit amet.
        </p>

        <div className="footer-icons">
          <a href="#/">
            <img src={facebook} alt="facebbok" />
          </a>
          <a href="#/">
            <img src={twitter} alt="twitter" />
          </a>
          <a href="#/">
            <img src={instagram} alt="instagram" />
          </a>
          <a href="#/">
            <img src={Discord} alt="Discord" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
