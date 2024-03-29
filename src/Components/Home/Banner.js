import React from "react";
import { Link } from "react-router-dom";
import banner from "../../img/banner1.jpg";
import Button from "../Button/Button";
import CheckAvailability from "./CheckAvailability";

const Banner = () => {
  return (
    <div>
      <div
        className="hero lg:h-screen shrink-0 mx-auto "
        style={{ backgroundImage: `url(${banner})`, backgroundSize: "cover" }}
      >
        <div className="hero-overlay bg-black bg-opacity-40"></div>

        <div className=" text-white lg:flex justify-center items-start">
          <div
            data-aos="fade-down-right"
            data-aos-duration="1000"
            className="lg:w-2/3 mt-6 mb-4 p-6"
          >
            <p className=" lg:text-5xl text-3xl my-6">
              Luxury suites for the elite passionate about luxury & comfort.
            </p>
            <p className="text-2xl mt-6">
              Book Your Suites & Enjoy Your Luxury Experience.
            </p>

            <Button className=" text-white font-bold border-0 mt-12">
              <Link to="/about">Explore More</Link>
            </Button>
          </div>
          <CheckAvailability />
        </div>
      </div>
    </div>
  );
};

export default Banner;
