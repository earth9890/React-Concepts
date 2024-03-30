// memo lets you skip re-rendering a component when its props are unchanged.

import React from "react";

function Memo(props) {
  return (
    <>
      <h1>Memo Starts</h1>
      <div>
        <h1>{props.name}</h1>
      </div>
      <h1>Memo Ends</h1>
    </>
  );
}

const MemoizedComponent = React.memo(Memo);

export default Memo;
