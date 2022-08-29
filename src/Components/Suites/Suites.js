import React from "react";
import useSuites from "../Hooks/useSuites";
import Suite from "./Suite";
const Suites = () => {
  const [suites, setSuites] = useSuites();
  return (
    <div>
      <h1>STEP INTO A ROOM THAT BLURS THE LINES BETWEEN DREAMS AND REALITY</h1>
      <p>
        Step into a room that blurs the lines between dreams and reality. A
        wonderland of color, glamour, and comfort that expands the imagination
        and cradles the spirit.
      </p>

      {suites.map((suite) => (
        <Suite key={suite._id} suite={suite}></Suite>
      ))}
    </div>
  );
};

export default Suites;
