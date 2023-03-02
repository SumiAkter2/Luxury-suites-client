import React from "react";
import Suites from "../Suites/Suites";
import ShowOff2 from "../Welcome/ShowOff2";
import Welcome from "../Welcome/Welcome";
import Banner from "./Banner";
import BayView from "./BayView";
import CheckAvailability from "./CheckAvailability";
import ShowReview from "./ShowReview";
import Subscribe from "./Subscribe";

const Home = () => {
  return (
    <div className="bg-white">
      <Banner />
      <CheckAvailability />
      <Suites />
      <Welcome />
      <BayView />
      <ShowOff2 />
      <ShowReview />
      <Subscribe />
    </div>
  );
};

export default Home;
