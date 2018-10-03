import React from "react";
const person = props => {
  return (
    <div>
      <h3 onClick={props.click}>
        I am {props.name} and I am {props.age} year old!
        {Math.floor(Math.random() * 30)}
      </h3>
      <p>{props.children}</p>
    </div>
  );
};

export default person;
