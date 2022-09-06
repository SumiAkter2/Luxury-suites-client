import React from "react";

const Feature = () => {
  return (
    <div>
      <div
        className="hero h-56"
        style={{ backgroundImage: "url(https://i.ibb.co/LhpgD4N/room10.png)" }}
      >
        <div className="hero-overlay bg-opacity-50"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md text-white">
            <h1 className="mb-5 text-4xl font-serif">
              Features Of Luxury Suites
            </h1>
            <p>We provide the best services for our clients</p>
          </div>
        </div>
      </div>
      <div className="bg-yellow-200 py-12 px-12">
        <h1 className=" text-4xl font-serif text-center">
          Features Of Luxury Suites
        </h1>
        <p className="text-center">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam
          itaque aliquid hic neque voluptas ipsum quis non nulla, veniam
          molestiae voluptate praesentium maxime perferendis culpa alias cum
          obcaecati dolore. Culpa?
        </p>
      </div>
      <div className="my-6">
        <h1>DROPCAPS STYLES</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div>
            <h1 className="bg-yellow-200">A</h1>
          </div>
          <div>
            <h1 className="bg-yellow-200">A</h1>
          </div>
          <div>
            <h1 className="bg-yellow-200">A</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
