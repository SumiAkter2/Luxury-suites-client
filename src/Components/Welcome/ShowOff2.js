import React from "react";
import servant from "../../img/servent2.jpg";
import servant2 from "../../img/servent3.jpg";
import servant3 from "../../img/servent4.jpg";
import { Link } from "react-router-dom";
import Button from "../Button/Button";

const ShowOff2 = () => {
  return (
    <div>
      <div>
        <div className="hero min-h-screen bg-base-100 my-0">
          <div className="hero-content flex-col lg:flex-row-reverse justify-center items-center p-6">
            <div className="lg:w-1/2 mx-auto flex justify-center items-center lg:p-16 gap-x-2 ">
              <img
                data-aos="fade-down"
                data-aos-duration="2000"
                src={servant2}
                className=" h-80 w-24 lg:w-full lg:h-[400px]  mx-auto "
                alt="servant-img"
              />
              <img
                data-aos="fade-up"
                data-aos-duration="2200"
                // src="https://i.ibb.co/r61dkX4/servent.jpg"
                src={servant3}
                className="
               lg:w-48 w-32 h-[400px] lg:h-[500px]
                  mx-auto"
                alt="servant-img"
              />
              <img
                data-aos="fade-down"
                data-aos-duration="2000"
                src={servant}
                className=" h-80 w-24 lg:w-full lg:h-[400px]  mx-auto "
                alt="servant-img"
              />
            </div>
            <div
              className="lg:w-1/2 p-12"
              data-aos="zoom-in"
              data-aos-duration="1000"
            >
              <h1 className="lg:text-3xl text-2xl mb-4">
                {/* OFFERING A SERIES OF */}
                COMFORTABLE AND LAVISH HOTELS & RESIDENCES
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
                <Button className="btn  btn-primary  mt-6">
                  Learn More ...
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowOff2;
