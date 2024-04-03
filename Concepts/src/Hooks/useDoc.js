import React, { useEffect } from "react";

function useDoc(count) {
  useEffect(() => {
    document.title = `Count ${count}`;
    return () => {};
  }, [count]);
}

export default useDoc;
