import React from "react";
import "../Components/Hero.css";
import gridimg from '../images/grid img.png';

function Hero() {
  return (
  <section className="hero">
    <img src={gridimg} alt="gridimg" className="hero--photo"  />
    <h1 className="hero--header">Online Experiences</h1>
    <p className="hero--text">Join unique interactive ativities led by one-of-a-kind hosts-all without leaving home. </p>
  </section>
  );
}

export default Hero;
