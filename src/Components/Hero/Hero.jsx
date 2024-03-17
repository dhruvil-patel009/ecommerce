import React from "react";
import "./Hero.css";
import banner_img from "../Assets/img/banner-girl.png";
import { Link } from "react-router-dom";
import { Slide, Zoom, Flip } from "react-awesome-reveal";
import { useMenu } from "../../MenuContext"; // Update the path accordingly

function Hero() {
  const { updateMenu } = useMenu();
  return (
    <div className="hero">
      <div className="hero-left">
        <div className="banner-desc">
          <Slide direction="down" triggerOnce>
            <h1 className="text-thin ">
              <strong>See</strong>
              &nbsp;everything with &nbsp;
              <strong>Clarity</strong>
            </h1>
          </Slide>
          <Flip triggerOnce>
            <p>
              Buying eyewear should leave you happy and good-looking, with money
              in your pocket. Glasses, sunglasses, and contacts—we’ve got your
              eyes covered.
            </p>
          </Flip>
          <br />

          <Link style={{ textDecoration: "none" }} to="/product">
            <a
              className="button"
              href="#/"
              onClick={() => updateMenu("product")}
            >
              View Product &nbsp;
              <span
                role="img"
                aria-label="arrow-right"
                class="anticon anticon-arrow-right"
              >
                <svg
                  viewBox="64 64 896 896"
                  focusable="false"
                  data-icon="arrow-right"
                  width="1em"
                  height="1em"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M869 487.8L491.2 159.9c-2.9-2.5-6.6-3.9-10.5-3.9h-88.5c-7.4 0-10.8 9.2-5.2 14l350.2 304H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h585.1L386.9 854c-5.6 4.9-2.2 14 5.2 14h91.5c1.9 0 3.8-.7 5.2-2L869 536.2a32.07 32.07 0 000-48.4z"></path>
                </svg>
              </span>
            </a>
          </Link>
        </div>
      </div>
      <div className="hero-right">
        <Zoom triggerOnce>
          <img src={banner_img} alt="" className="hero-img" />
        </Zoom>
      </div>
    </div>
  );
}

export default Hero;
