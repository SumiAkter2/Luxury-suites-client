import React from "react";

const ShowOff1 = () => {
  const icon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 496 512"
      width="20px"
      fill="orange"
    >
      <path d="M248 8C111.1 8 0 119.1 0 256s111.1 248 248 248 248-111.1 248-248S384.9 8 248 8zm114.6 226.4l-113 152.7-112.7-152.7c-8.7-11.9-19.1-50.4 13.6-72 28.1-18.1 54.6-4.2 68.5 11.9 15.9 17.9 46.6 16.9 61.7 0 13.9-16.1 40.4-30 68.1-11.9 32.9 21.6 22.6 60 13.8 72z" />
    </svg>
  );
  return (
    <div>
      <div className="hero min-h-screen bg-yellow-100 my-0">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className=" flex ">
            <div className="flex gap-x-4 z-20">
              <img
                src="https://i.ibb.co/YNVPKmj/servent3.jpg"
                className="max-w-sm  lg:w-48 mt-12 mr-[-40px] w-32 h-48 rounded-lg shadow-2xl"
                alt="servant-img"
              />
            </div>
            <div className="z-30">
              <img
                src="https://i.ibb.co/s2rtCq9/food2.jpg"
                className="max-w-sm mt-[-50px] lg:w-48 w-32 h-48 rounded-lg shadow-2xl"
                alt="servant-img"
              />
            </div>
          </div>
          <div className="mb-24 pb-24">
            <div className="divider w-60 mx-auto mb-24 opacity-100 bg-opacity-100 ">
              {icon} {icon} {icon}
            </div>
            <h1 className="text-xl font-bold">
              We give all the fresh food for our clients.
            </h1>
            <p className="py-6">
              All our suites are fabulous, they are destinations unto
              themselves. We have crossed the globe to bring you only the best.
              <div className="divider w-60 mx-auto mt-24 opacity-100 bg-opacity-100 ">
                {icon} {icon} {icon}
              </div>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowOff1;
