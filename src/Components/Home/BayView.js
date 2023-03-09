import React from "react";
import img from "../../img/colombo_30.jpg";
const BayView = () => {
  return (
    <div className="bg-white">
      <div className="hero min-h-screen ">
        <div className="hero-content flex-col lg:flex-row">
          <div
            className="lg:w-1/2 w-full  mx-auto"
            // data-aos="fade-right"
            // data-aos-duration="700"
          >
            <img
              src={img}
              className="lg:pl-6 lg:h-screen w-80 h-80 lg:w-screen mx-auto"
              alt="hotel-img"
            />
          </div>
          <div
            className="lg:pl-8 p-6 lg:w-1/2"
            // data-aos="fade-left"
            // data-aos-duration="800"
           
          >
            <p className="pb-6 text-sm tracking-[5px]"> Hotel BayView</p>
            <h1 className="lg:text-5xl text-3xl pb-6 text-primary">
              Relax in our Hotel Resort
            </h1>
            <p className="py-4 leading-6">
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
                <h1 className="font-bold text-primary">Alisha Zaman</h1>
                <p className="text-xs">CEO</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BayView;
