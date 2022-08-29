import React from "react";

const Welcome = () => {
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
    <div className="bg-yellow-100">
      <div className="hero min-h-screen mt-0">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <p className="lg:flex grid gap-y-2">
            <img
              src="https://i.ibb.co/yFCwYQM/welcome2.jpg"
              className="max-w-sm w-60 z-30 mt-24 mr-[-40px] rounded-lg shadow-2xl"
              alt=""
            />
            <img
              src="https://i.ibb.co/JqJZGbH/welcome.jpg"
              className="max-w-sm w-60 h-48  z-40 rounded-lg shadow-2xl"
              alt=""
            />
          </p>
          <div>
            <div className="divider w-60 mx-auto mt-12 opacity-100">
              {icon} {icon}
              {icon}
            </div>
            <p className="text-xs">Grand Welcome</p>
            <h1 className="text-5xl ">Luxury Suites</h1>
            <p className="py-6 text-sm">
              Imagine a charming and picturesque Heritage village in the north
              part of the countryside, surrounded by the spectacular natural
              beauty. Experience a relaxing, exciting, comfortable stay in
              <span className="font-bold"> Luxury Suites</span> with its
              glamorous hospitality and its unique atmosphere.
            </p>
            <div className="divider w-60 mx-auto mt-12 opacity-100 bg-opacity-100">
              {icon} {icon}
              {icon}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
