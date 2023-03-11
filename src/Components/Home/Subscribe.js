import React from "react";
import Button from "../Button/Button";

const Subscribe = () => {
  return (
    <div
      data-aos="zoom-in-up"
      data-aos-duration="800"
      className="px-6 text-center bg-gray-300 py-6 my-12 mx-12 rounded-md shadow-lg"
    >
      <p className="text-3xl mb-4 text-primary">
        Subscribe To Our NewsLetter !
      </p>
      <div className="form-control lg:w-96  mx-auto">
        <label className="label">
          <span className="label-text mb-2">Enter your email address</span>
        </label>
        <div className="relative">
          <input
            type="text"
            placeholder="abc@abc.com"
            className="input input-bordered w-full pr-16"
          />
          <Button className=" absolute top-0 right-0 rounded-l-none">
            Subscribe
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
