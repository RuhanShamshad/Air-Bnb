import React from "react";
import "../Components/Navbar.css";
import airbnb from "../images/airbnb.png";

function Navbar() {
  
  return (
      <nav>   
      <img src={airbnb} alt="airbnb"/>
      </nav>
  );
}
export default Navbar;
