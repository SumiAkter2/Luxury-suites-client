import React from "react";
import servent from "../../img/servent.jpg";
import { Link } from "react-router-dom";

const ShowOff2 = () => {
  return (
    <div>
      <div>
        <div className="hero min-h-screen bg-base-100 my-0">
          <div className="hero-content flex-col lg:flex-row-reverse justify-center items-start">
            <div className="lg:w-1/2 mx-auto flex gap-x-2 px-6 ">
              <img
                src="https://i.ibb.co/r61dkX4/servent.jpg"
                className="lg:w-60 w-80 h-80 lg:h-[400px] rounded-sm shadow-2xl mb-2 mx-auto"
                alt="servant-img"
              />
              <img
                src={servent}
                className=" lg:w-48 w-32  h-80 lg:h-[400px] rounded-sm shadow-2xl mx-auto hidden lg:block"
                alt="servant-img"
              />
            </div>
            <div className="lg:w-1/2 p-6">
              <h1 className="lg:text-3xl text-2xl mb-4">
                OFFERING A SERIES OF COMFORTABLE 
                AND LAVISH HOTELS & RESIDENCES
              </h1>
              <p className="py-6 leading-6">
                All our suites are fabulous, they are destinations unto
                themselves. We have crossed the globe to bring you only the
                best. Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Eos, minima. Dolores nihil nemo id! Est quae expedita nobis
                velit minima accusamus labore debitis dolore fugit amet! Enim
                exercitationem hic pariatur!
              </p>
              <Link to="/about">
                <button className="btn  btn-primary  mt-6">
                  Learn More ...
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowOff2;
