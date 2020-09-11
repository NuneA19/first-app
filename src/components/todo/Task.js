import React from "react";

function Task(props) {
  return (
    <div>
      {props.tasks.map((el, index) => <li key={index + el}>{el}</li>)}
    </div>
  );
}

export default Task;
