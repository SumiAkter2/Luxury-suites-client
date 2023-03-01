import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";
import "./Suite.css";
const suite = ({ suite }) => {
  return (
    <div>
      <div class="gallery-image">
        <div class="img-box">
          <img src={suite.picture} alt="" />
          <div class="transparent-box">
            <div class="caption flex justify-evenly items-end w-full">
              <div>
                <h1 className="text-2xl">{suite.name} </h1>
                <p className="text-xl">{suite.bed}</p>
              </div>
              <Link to='/allSuites'>
                <p class=" p-2 flex justify-start items-center cursor-pointer">
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
