import React from "react";

const BayView = () => {
  return (
    <div className="bg-base-100">
      <div className="hero min-h-screen ">
        <div className="hero-content flex-col lg:flex-row">
          <div className="">
            <img
              style={{ height: "400px" }}
              src="https://i.ibb.co/tP8z73j/hotel2.jpg"
              className="lg:pl-6 lg:w-screen rounded-lg shadow-2xl"
              alt="hotel-img"
            />
          </div>
          <div className="lg:pl-8 pb-6 ">
            <div className="divider w-60 mx-auto mt-2 opacity-100 bg-opacity-100  text-orange-500 text-xl">
              ......
            </div>
            <p className="pb-6 text-xs"> Hotel Bayview</p>
            <h1 className="text-5xl ">
              Relax in our <br />
              <span>Hotel Resort</span>
            </h1>
            <p className="py-4 text-sm">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi. Lorem ipsum dolor sit, amet consectetur adipisicing
              elit. Asperiores doloremque non sed excepturi rem. Aspernatur iste
              dolorum expedita minima blanditiis incidunt recusandae, in hic
              aliquid impedit reprehenderit quia accusamus nihil?
            </p>
            <div className="flex pt-6">
              <div className="avatar">
                <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                  <img
                    src="https://i.ibb.co/rHHJGXH/women2.jpg"
                    alt="Girl-img"
                  />
                </div>
              </div>
              <div className="pl-4">
                <h1>Alisha Zaman</h1>
                <p className="text-xs">Hotel Manager</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BayView;
