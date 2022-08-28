import React from "react";
import Welcome from "../Welcome/Welcome";
import Banner from "./Banner";
import BayView from "./BayView";

const Home = () => {
  return (
    <div className="bg-yellow-100">
      <Banner />

      <Welcome />
      <BayView />
    </div>
  );
};

export default Home;
