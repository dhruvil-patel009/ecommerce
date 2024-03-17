import React from "react";
import Hero from "../Components/Hero/Hero";
import Popular from "../Components/Popular/popular";
import Contact from "./Contact";
import "./Css/Home.css";
import About from "./About";
function Home() {
  return (
    <div className="content">
      <Hero />
      <br />
      <Popular />
      <br />
      <About />
      <br />
      <Contact />
    </div>
  );
}

export default Home;
