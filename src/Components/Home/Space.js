import React from "react";

const Space = () => {
  return (
    <div>
      <div className="rounded-sm pb-4 my-12">
        <h1 className="mx-auto text-3xl text-center ">Some Interior Space</h1>
        <p className="text-xl text-center">
          {" "}
          Plenty of Services to Assure Your Relaxation and Comfortable.
        </p>
        <div className="grid lg:grid-cols-4 gap-x-4 lg:px-12 pt-12 gap-y-2 w-full mx-auto px-6">
          <div className="gallery-image">
            <div className="img-box">
              <img src="https://i.ibb.co/Z2Ny3PB/room3.png" alt="" />
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
          <div className="gallery-image">
            <div className="img-box">
              <img src="https://i.ibb.co/WFR6dhm/coridor2.png" alt="" />
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
          <div className="gallery-image">
            <div className="img-box">
              <img src="https://i.ibb.co/NrnZzgM/room2.png" alt="" />
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
          <div className="gallery-image">
            <div className="img-box">
              <img src="https://i.ibb.co/V91JZpN/coridor.png" alt="" />
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
