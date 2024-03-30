import React, { useRef } from "react";

function UseRef() {
  const focusPoint = useRef(null);
  const onClickHandler = () => {
    focusPoint.current.value = "Hellow Neeraj";
    focusPoint.current.focus();
  };
  return (
    <>
      <div>
        <button onClick={onClickHandler}>ACTION</button>
      </div>
      <label>Click on the action button to focus and set the text.</label>
      <br />
      <textarea ref={focusPoint} />
    </>
  );
}

export default UseRef;
