import React from "react";

const Space = () => {
  return (
    <div>
      <div className="rounded-sm pb-4 my-12">
        <h1 className="mx-auto text-3xl text-center text-primary">
          Some Interior Space
        </h1>
        <p className="text-xl text-center">
          Plenty of Services to Assure Your Relaxation and Comfortable.
        </p>
        <div className="grid lg:grid-cols-4 pt-12 gap-x-2 gap-y-2  mx-auto lg:w-[1280px]">
          <div
            data-aos="fade-up"
            data-aos-duration="500"
            className="gallery-image"
          >
            <div className="img-box">
              <img
                src="https://i.ibb.co/Z2Ny3PB/room3.png"
                alt="interior space"
              />
              <div className="transparent-box">
                <div className="caption flex justify-evenly items-end w-full">
                  <div>
                    <h1 className="text-2xl">Natural View </h1>
                    <p className="text-xl"></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            data-aos="fade-down"
            data-aos-duration="1000"
            className="gallery-image"
          >
            <div className="img-box">
              <img
                src="https://i.ibb.co/WFR6dhm/coridor2.png"
                alt="interior space"
              />
              <div className="transparent-box">
                <div className="caption flex justify-evenly items-end w-full">
                  <div>
                    <h1 className="text-2xl">Interior Space </h1>
                    <p className="text-xl"></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="1500"
            className="gallery-image"
          >
            <div className="img-box">
              <img
                src="https://i.ibb.co/NrnZzgM/room2.png"
                alt="interior space"
              />
              <div className="transparent-box">
                <div className="caption flex justify-evenly items-end w-full">
                  <div>
                    <h1 className="text-2xl">Luxurious Suite </h1>
                    <p className="text-xl"></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            data-aos="fade-down"
            data-aos-duration="2000"
            className="gallery-image"
          >
            <div className="img-box">
              <img
                src="https://i.ibb.co/V91JZpN/coridor.png"
                alt="interior space"
              />
              <div className="transparent-box">
                <div className="caption flex justify-evenly items-end w-full">
                  <div>
                    <h1 className="text-2xl">Corridor </h1>
                    <p className="text-xl"></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Space;
