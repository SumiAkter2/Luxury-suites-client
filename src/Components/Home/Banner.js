import React from "react";

const Banner = () => {
  return (
    <div className="bg-blend-darken bg-opacity-30">
      <div
        class="hero min-h-screen bg-blend-lighten "
        style={{ backgroundImage: "url(https://i.ibb.co/1XSs988/room6.png)" }}
      >
        <div class="hero-overlay bg-opacity-20"></div>
        <div class="   text-center  text-neutral-content">
          <div class="max-w-md">
            <h1 class="mb-5 text-5xl font-bold ">Hello there</h1>
            <p class="mb-5 ">
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

export default Banner;
