import React from "react";

const ShowOff2 = () => {
  return (
    <div>
      <div>
        <div className="hero min-h-screen bg-base-100 my-0">
          <div className="hero-content flex-col lg:flex-row-reverse justify-between items-start">
            <div className="lg:w-1/2 mx-auto">
              <img
                src="https://i.ibb.co/r61dkX4/servent.jpg"
                className="w-60 lg:w-2/3 h-60 rounded-lg shadow-2xl mb-4 mx-auto"
                alt="servant-img"
              />
              <img
                src="https://i.ibb.co/YRFXvTK/servent.jpg"
                className=" lg:w-2/3 w-60 h-60 rounded-lg shadow-2xl mx-auto"
                alt="servant-img"
              />
            </div>
            <div className="lg:w-1/2">
              <div className="divider w-60 mx-auto mb-12 opacity-100 bg-opacity-100  text-orange-500 text-xl ">
                ......
              </div>
              <h1 className="text-3xl mb-4">
                OFFERING A SERIES OF COMFORTABLE AND
                <span> LAVISH HOTELS & RESIDENCES</span>
              </h1>
              <p className="py-6 leading-6">
                All our suites are fabulous, they are destinations unto
                themselves. We have crossed the globe to bring you only the
                best. Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Eos, minima. Dolores nihil nemo id! Est quae expedita nobis
                velit minima accusamus labore debitis dolore fugit amet! Enim
                exercitationem hic pariatur!
              </p>
              <button className="btn  btn-primary text-orange-500 mt-6">
                {" "}
                Learn More ...
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowOff2;
