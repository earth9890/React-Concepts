import React from "react";

function HigherOrderComponents(props) {
  return (
    <>
      <h1>Higher Order Components Starts... </h1>

      <div>{props.text}</div>

      <h1>Higher Order Components Ends... </h1>
    </>
  );
}

const withUpperCase = (WrappedComponent) => {
  return function WithUpperCase(props) {
    const modifiedProps = {
      ...props,
      text: props.text.toUpperCase(),
    };

    return <WrappedComponent {...modifiedProps} />;
  };
};

export { HigherOrderComponents, withUpperCase };
