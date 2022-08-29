import React from "react";
import { Link } from "react-router-dom";
import useSuites from "../Hooks/useSuites";
import Suite from "./Suite";
const Suites = () => {
  const [suites, setSuites] = useSuites();
  return (
    <div className="mb-6">
      <div className="flex-col justify-center items-center">
        <h1 className="text-center text-2xl ">
          STEP INTO A ROOM THAT BLURS THE LINES <br />
          <span>BETWEEN DREAMS AND REALITY</span>
        </h1>
        <h1 className="text-orange-400 text-2xl flex justify-center items-center pb-4">
          .............
        </h1>

        <p className="text-center lg:px-12">
          Step into a room that blurs the lines between dreams and reality. A
          wonderland of color, glamour, and comfort that expands the imagination
          and cradles the spirit.
        </p>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4 mt-12 px-12">
        {suites.slice(0, 3).map((suite) => (
          <Suite key={suite._id} suite={suite}></Suite>
        ))}
      </div>
      <Link to="/allSuites">
        <button className="btn bg-yellow-200 btn-primary mt-16 mx-auto flex justify-center items-center">
          View All Suites
        </button>
      </Link>
    </div>
  );
};

export default Suites;
