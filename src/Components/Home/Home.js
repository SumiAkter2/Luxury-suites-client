import React from "react";
import Suites from "../Suites/Suites";
import ShowOff2 from "../Welcome/ShowOff2";
import Welcome from "../Welcome/Welcome";
import Banner from "./Banner";
import BayView from "./BayView";
import ShowOff1 from "./ShowOff1";

const Home = () => {
  return (
    <div className="bg-yellow-100">
      <Banner />

      <Welcome />
      <Suites />
      <BayView />

      <ShowOff2 />
      <ShowOff1 />
    </div>
  );
};

export default Home;
