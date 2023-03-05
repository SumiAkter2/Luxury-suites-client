import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";
import "./Suite.css";
const suite = ({ suite }) => {
  return (
    <div>
      <div className="gallery-image">
        <div className="img-box mx-auto">
          <img src={suite.picture} alt="suites-img" />
          <div className="transparent-box">
            <div className="caption flex lg:justify-between justify-start p-2  items-end w-full ">
              <div className="pl-2">
                <h1 className="text-2xl ">{suite.name} </h1>
                <p className="text-xl">{suite.bed}</p>
              </div>
              <Link to="/allSuites">
                <p className="  flex justify-end items-center cursor-pointer">
                  <BsArrowRight size="25px" />
                  <span className="text-xl "> Booking</span>
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default suite;
