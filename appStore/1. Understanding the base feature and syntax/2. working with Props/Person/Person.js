import React from "react";
const person = props => {
  return (
    <h3>
      I am {props.name} and I am {props.age} year old!
      {Math.floor(Math.random() * 30)}
    </h3>
  );
};

export default person;
