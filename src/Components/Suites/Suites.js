import React from "react";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import useSuites from "../Hooks/useSuites";
import Suite from "./Suite";
const Suites = () => {
  const [suites] = useSuites();
  return (
    <div className="my-6">
      <div className="flex-col justify-center items-center">
        <h1 className="text-center lg:text-3xl text-2xl mt-12">
          STEP INTO A ROOM THAT BLURS THE LINES BETWEEN DREAMS AND REALITY
        </h1>
        <h1 className="text-primary text-2xl flex justify-center items-center pb-4 ">
          .............
        </h1>

        <p className="text-center lg:px-12 px-6 ">
          Step into a room that blurs the lines between dreams and reality. A
          wonderland of color, glamour, and comfort that expands the imagination
          and cradles the spirit.
        </p>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-y-6 mt-12 px-12 mx-auto">
        {suites.slice(2, 8).map((suite) => (
          <Suite key={suite._id} suite={suite}></Suite>
        ))}
      </div>
      <Link
        to="/allSuites"
        className=" mt-16 mx-auto flex justify-center items-center"
      >
        <Button>View All Suites</Button>
      </Link>
    </div>
  );
};

export default Suites;
