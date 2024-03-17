import { useState } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Hamburger } from "../Assets/img/hamburger.svg";
import Logo from "../Assets/img/logo-full.png";
import "./Navbar.css";
import { useMenu } from "../../MenuContext"; // Update the path accordingly

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  const { menu, updateMenu } = useMenu();

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">
          <a href="/">
            <img src={Logo} alt="logo" />
          </a>
        </div>
        <div className="menu-icon" onClick={handleShowNavbar}>
          <Hamburger />
        </div>
        <div className={`nav-elements  ${showNavbar && "active"}`}>
          <ul>
            <li
              onClick={() => {
                updateMenu("home");
              }}
            >
              <Link to="/">Home</Link>
              {menu === "home" ? <hr /> : <></>}
            </li>
            <li
              onClick={() => {
                updateMenu("product");
              }}
            >
              <Link to="/product">Product</Link>
              {menu === "product" ? <hr /> : <></>}
            </li>

            <li
              onClick={() => {
                updateMenu("aboutus");
              }}
            >
              <Link to="/about_us">About</Link>
              {menu === "aboutus" ? <hr /> : <></>}
            </li>
            <li
              onClick={() => {
                updateMenu("contactus");
              }}
            >
              <Link to="/contact_us">Contact</Link>
              {menu === "contactus" ? <hr /> : <></>}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
