import React from "react";

const BayView = () => {
  return (
    <div className="bg-yellow-100 ">
      <div class="divider ">HOTEL BAYVIEW</div>
      <div class="hero min-h-screen ">
        <div class="hero-content flex-col lg:flex-row">
          <img
            className="w-96 shrink-0 lg:ml-12"
            src="https://i.ibb.co/tP8z73j/hotel2.jpg"
            class="max-w-sm rounded-lg shadow-2xl"
            alt="hotel-dining-img"
          />
          <div className="lg:px-20 p-6">
            <h1 class="text-5xl ">
              Relax in our
              <br />
              <span> Hotel Resort</span>
            </h1>
            <p class="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi. Lorem ipsum, dolor sit amet consectetur adipisicing
              elit. Aspernatur voluptate, minus suscipit eius voluptatibus
              aliquid ad ullam molestias ut veritatis excepturi obcaecati itaque
              quisquam dolores ipsum corrupti temporibus officiis est, nobis ex,
              et explicabo cumque saepe repudiandae! Veniam laboriosam itaque
              eius. Amet quam expedita,
            </p>
            <button class="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BayView;
