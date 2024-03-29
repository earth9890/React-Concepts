import React, { useState } from "react";

function FormHandling() {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [submittedFirstName, setSubmittedFirstName] = useState("");
  const [submittedLastName, setSubmittedLastName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedFirstName(fname);
    setSubmittedLastName(lname);
    // Reset the form
    setFname("");
    setLname("");
  };

  return (
    <>
      <div>
        <h1>Form Handling Start</h1>
        <form onSubmit={handleSubmit}>
          <label>
            First Name :
            <input
              type="text"
              value={fname}
              onChange={(e) => setFname(e.target.value)}
            ></input>
          </label>
          <label>
            Last Name :
            <input
              type="text"
              value={lname}
              onChange={(e) => setLname(e.target.value)}
            ></input>
          </label>
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
      {/* Display submitted names */}
      {submittedFirstName && submittedLastName && (
        <div>
          <h2>Submitted Names:</h2>
          <p>First Name: {submittedFirstName}</p>
          <p>Last Name: {submittedLastName}</p>
        </div>
      )}
      <h1>Form Handling Ends</h1>
    </>
  );
}

export default FormHandling;
