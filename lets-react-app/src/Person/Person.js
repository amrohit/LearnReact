import React from "react";
import "./Person.css";
const person = props => {
  return (
    <div className="Person">
      <h3 onClick={props.click}>
        I am {props.name} and I am {props.age} year old!
        {Math.floor(Math.random() * 30)}
      </h3>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} value={props.name} />
    </div>
  );
};

export default person;
