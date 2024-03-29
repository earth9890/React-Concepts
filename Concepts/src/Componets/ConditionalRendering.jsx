import React, { useState } from "react";

function ConditionalRendering() {
  const [isLoggedIn, setIsLoggedIn] = useState(0);
  const [input, setInput] = useState("");

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = () => {
    if (input === "1") {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  };
  return (
    <>
      <h1>Conditional Rendering Start</h1>
      <input
        type="text"
        onChange={handleInputChange}
        placeholder="1 to Login"
      />
      <button onClick={handleSubmit}> Check Conditional Rendering </button>

      <div>
        {isLoggedIn ? (
          <div>
            <h1>Welcome Neeraj</h1>
            <button onClick={() => setIsLoggedIn(false)}>Logout</button>
          </div>
        ) : (
          <div>
            <h1>Please log in</h1>
            <button onClick={() => setIsLoggedIn(true)}>Login</button>
          </div>
        )}
      </div>
      <h1>Conditional Rendering End</h1>
    </>
  );
}

export default ConditionalRendering;
