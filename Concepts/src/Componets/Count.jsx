import React from "react";

function Count(props) {
  return (
    <>
      <h1>
        {props.text} = {props.value}
      </h1>
    </>
  );
}

export default Count;
