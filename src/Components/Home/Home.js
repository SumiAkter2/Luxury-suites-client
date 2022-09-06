import React from "react";
import Suites from "../Suites/Suites";
import ShowOff2 from "../Welcome/ShowOff2";
import Welcome from "../Welcome/Welcome";
import Banner from "./Banner";
import BayView from "./BayView";
import CheckAvailability from "./CheckAvailability";
import Subscribe from "./Subscribe";

const Home = () => {
  return (
    <div className="bg-yellow-100">
      <Banner />
      <CheckAvailability />
      <Welcome />
      <Suites />
      <BayView />
      <ShowOff2 />
      <Subscribe />
    </div>
  );
};

export default Home;
