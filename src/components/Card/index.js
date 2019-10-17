import React from "react";
import "./style.css";
//import "../../App";



function Card(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img alt={props.name} src={props.image} onClick={() => props.shuffleCard(props.id)} className="shuffle" />
      </div>
    </div>
  );
}

export default Card;
