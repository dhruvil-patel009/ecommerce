import React from "react";
import "./Css/About.css";
import about_img from "../Components/Assets/img/About.jpg";

const About = () => {
  return (
    <div className="about-container">
      <div className="about-section">
        <h1>About Us</h1>
        <div className="about-banner">
          <div className="about-img">
            <img src={about_img} alt="about-img" />
          </div>
          <div className="about-desc">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam unde
              natus fugiat iusto veniam minima, doloribus excepturi nesciunt
              repellendus voluptatibus reiciendis ex distinctio sequi
              repudiandae?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
