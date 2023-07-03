import React from "react";
import "../App.css";
import { Button } from "./Button";
import "./HeroSection.css";
import NavbarSlider from "./NavbarSlider/NavbarSlider";

function HeroSection() {
  return (
    <div className="hero-container">
      <NavbarSlider />
      <h1>Astar Holidays</h1>
      <p>What are you waiting for?</p>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          GET STARTED
        </Button>
        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
          onClick={console.log("hey")}
        >
          LEARN MORE <i className="far fa-play-circle" />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
