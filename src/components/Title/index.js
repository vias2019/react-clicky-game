import React from "react";
import "./style.css";
import "../../App";

function Title(props) {
  return (<div><h1 className="title">{props.children}</h1>
  <span>Your Score: </span><span id ="myScore" >{props.score}</span></div>);
}

export default Title;
