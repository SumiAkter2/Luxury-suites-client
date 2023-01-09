import React from "react";

const ShowOff2 = () => {
  return (
    <div>
      <div>
        <div className="hero min-h-screen bg-base-100 my-0">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <p className="flex gap-x-4">
              <img
                src="https://i.ibb.co/r61dkX4/servent.jpg"
                className="w-32 lg:w-48   h-48 rounded-lg shadow-2xl"
                alt="servant-img"
              />
              <img
                src="https://i.ibb.co/YRFXvTK/servent.jpg"
                className=" lg:w-48 w-32 h-48 rounded-lg shadow-2xl"
                alt="servant-img"
              />
            </p>
            <div>
              <div className="divider w-60 mx-auto mb-12 opacity-100 bg-opacity-100  text-orange-500 text-xl">
                ......
              </div>
              <h1 className="text-3xl mb-4">
                OFFERING A SERIES OF COMFORTABLE AND
                <br />
                <span> LAVISH HOTELS & RESIDENCES</span>
              </h1>
              <p className="py-6">
                All our suites are fabulous, they are destinations unto
                themselves. We have crossed the globe to bring you only the
                best.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowOff2;
