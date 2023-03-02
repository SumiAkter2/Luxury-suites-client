import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";
import "./Suite.css";
const suite = ({ suite }) => {
  return (
    <div>
      <div className="gallery-image">
        <div className="img-box">
          <img src={suite.picture} alt="" />
          <div className="transparent-box">
            <div className="caption flex justify-evenly items-end w-full">
              <div>
                <h1 className="text-2xl">{suite.name} </h1>
                <p className="text-xl">{suite.bed}</p>
              </div>
              <Link to="/allSuites">
                <p className=" p-2 flex justify-start items-center cursor-pointer">
                  <BsArrowRight size="25px" />
                  <span className="text-xl"> Booking</span>
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
