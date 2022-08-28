import React from "react";

const Banner = () => {
  return (
    <div className="z-5">
      <div
        class="hero h-screen shrink-0 "
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
      <div className="bg-yellow-100 z-6 mx-12 p-4 mt-[-40px] rounded-lg">
        <h1 className="mx-auto text-center pb-4"> </h1>
        <div className="grid lg:grid-cols-5 gap-x-4 ">
          <div>
            <img
              className=" lg:h-40  rounded-lg shrink-0"
              src="https://i.ibb.co/qMWdGV1/swimingpool2.png"
              alt="hotel-img"
            />
            <p className="text-center">Swimming pool</p>
          </div>
          <div>
            <img
              className=" lg:h-40  rounded-lg shrink-0"
              src="https://i.ibb.co/Z2Ny3PB/room3.png"
              alt="hotel-img"
            />
            <p className="text-center">Natural View</p>
          </div>
          <div>
            <img
              className=" lg:h-40  rounded-lg shrink-0"
              src="https://i.ibb.co/WFR6dhm/coridor2.png"
              alt="hotel-img"
            />
            <p className="text-center">Interior space</p>
          </div>
          <div>
            <img
              className=" lg:h-40  rounded-lg shrink-0"
              src="https://i.ibb.co/NrnZzgM/room2.png"
              alt="hotel-img"
            />
            <p className="text-center">Luxurious suites</p>
          </div>

          <div>
            <img
              className=" lg:h-40  rounded-lg shrink-0"
              src="https://i.ibb.co/V91JZpN/coridor.png"
              alt="hotel-img"
            />
            <p className="text-center">Corridor</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
