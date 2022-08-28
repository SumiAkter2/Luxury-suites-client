import React from "react";

const BayView = () => {
  return (
    <div className="bg-yellow-100">
      <div class="divider bg-yellow-50">Hotel Bayview</div>
      <div class="hero min-h-screen ">
        <div class="hero-content flex-col lg:flex-row">
          <img
            src="https://i.ibb.co/tP8z73j/hotel2.jpg"
            class="max-w-sm h-full  rounded-lg shadow-2xl"
            alt="hotel-img"
          />
          <div className="lg:pl-8">
            <h1 class="text-5xl ">
              Relax in our <br />
              <span>Hotel Resort</span>
            </h1>
            <p class="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button class="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BayView;
