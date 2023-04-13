import React from "react";
import "./card.css";
import images from '../images/images.png';
function Card(props) {
  
  return (
    <div className="card">
      <img src={props.img} alt="katie" className="card--img"/>
      <div className="card--stat">
        <img src={images} alt="star" className="card--star" />
        <span>{props.rating}</span>
        <span className="gray">({props.reviewCount}) .</span>
        <span className="gray" >{props.country}</span>
      </div>
      <p>{props.title} </p>
      <p> <span className="bold">From ${props.price}</span>/ person </p>
    </div>
  );
}
export default Card;
