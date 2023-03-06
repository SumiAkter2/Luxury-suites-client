import React from "react";
import Suites from "../Suites/Suites";
import Weather from "../Weather/Weather";
import ShowOff2 from "../Welcome/ShowOff2";
import Welcome from "../Welcome/Welcome";
import Banner from "./Banner";
import Banner2 from "./Banner2";
import BayView from "./BayView";
import Brand from "./Brand";
import ExtraServices from "./ExtraServices";
import HomeFeature from "./HomeFeature";
import ShowReview from "./ShowReview";
import Space from "./Space";
import Subscribe from "./Subscribe";

const Home = () => {
  return (
    <div>
      <Banner />
      <Space />
      <Welcome />
      <BayView />
      <Suites />
      <ShowOff2 />
      <ExtraServices />
      <HomeFeature />
      {/* <ShowReview /> */}
      {/* <Brand /> */}
      <Subscribe />
    </div>
  );
};

export default Home;
