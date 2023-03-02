import React from "react";
import { Link } from "react-router-dom";
import banner from "../../img/banner1.jpg";
import Header from "../Header/Header";
import CheckAvailability from "./CheckAvailability";

const Banner = () => {
  return (
    <div>
      <div
        className="hero h-screen shrink-0 "
        style={{ backgroundImage: `url(${banner})` }}
      >
        <div className="hero-overlay bg-black bg-opacity-40"></div>
        {/* <div></div> */}
        <div className="  text-white flex justify-center items-center">
          <div className="w-1/2">
            <p className=" lg:text-5xl text-3xl ">
              Hotel for the elite passionate about luxury & comfort. Luxury
              suites is a lavish and comfortable hotels and residences in Dhaka,
              Bangladesh.
            </p>
            <button className="btn btn-primary font-bold border-0 mt-4">
              <Link to="/about">About More</Link>
            </button>
          </div>
          <CheckAvailability />
        </div>
      </div>
    </div>
  );
};

export default Banner;
