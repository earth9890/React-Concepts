import React from "react";

function RenderAList() {
  const items = [
    "Hari",
    "Neeraj",
    "Om",
    "Preeti",
    "Priyanka",
    "Pratik",
    "Deepali",
  ];
  return (
    <>
      <h1>Render a List Start</h1>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <h1>Rendering a List ends</h1>
    </>
  );
}

export default RenderAList;
