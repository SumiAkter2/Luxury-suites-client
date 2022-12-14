import React from "react";

const Subscribe = () => {
  return (
    <div className="px-6 text-center bg-base-100 py-6 my-12 mx-12 rounded-md shadow-lg">
      <p className="text-3xl mb-4">Subscribe To Our NewsLetter !</p>
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
          <button className="btn btn-primary bg-yellow-200 absolute top-0 right-0 rounded-l-none">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
