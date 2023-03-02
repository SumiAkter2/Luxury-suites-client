import React from "react";
import { Link } from "react-router-dom";
import banner from "../../img/banner1.jpg";
import Header from "../Header/Header";
import CheckAvailability from "./CheckAvailability";

const Banner = () => {
  return (
    <div>
      <div
        className="hero lg:h-screen shrink-0 "
        style={{ backgroundImage: `url(${banner})` }}
      >
        <div className="hero-overlay bg-black bg-opacity-40"></div>
        {/* <div></div> */}
        <div className="p-6  text-white lg:flex justify-center items-start">
          <div className="lg:w-2/3 mt-6 mb-4 ">
            <p className=" lg:text-5xl text-3xl my-6">
              Luxury suites for the elite passionate about luxury & comfort.
            </p>
            <p className="text-2xl mt-6">Book Your Suites & Enjoy Your Luxury Experience.</p>
            <button className="btn btn-accent text-white font-bold border-0 mt-12">
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
