import React from "react";

const Banner = () => {
  return (
    <div className="bg-yellow-100 ">
      <div
        class="hero min-h-screen  "
        style={{ backgroundImage: "url(https://i.ibb.co/1XSs988/room6.png)" }}
      >
        <div class="hero-overlay bg-opacity-10"></div>
        <div class="text-center text-white ">
          <div class="max-w-md">
            <h1 class="mb-5 text-3xl font-bold ">
              Expect Nothing But The Best
            </h1>
            <p class="mb-5 ">
              Hotel for the elite passionate about luxury & comfort. Luxury
              suites is a lavish and comfortable hotels and residences in Dhaka,
              Bangladesh.
            </p>
            <button class="btn btn-primary font-bold border-0 bg-yellow-100 text-primary">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
