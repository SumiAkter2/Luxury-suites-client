import React from "react";
import { Link } from "react-router-dom";
const NotFound = () => {
  return (
    <div>
      <div
        className="hero h-96"
        style={{ backgroundImage: " url(https://i.ibb.co/tP8z73j/hotel2.jpg)" }}
      >
        <div className="hero-overlay bg-opacity-70"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md text-white">
            <h1 className="mb-5 text-5xl  text-white">404</h1>
            <p className="mb-5 font-sans">That page can not be found</p>
            <div className="flex justify-start items-center pl-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                width="20px"
                fill="white"
              >
                <path d="M9.375 233.4l128-128c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L109.3 224H480c17.69 0 32 14.31 32 32s-14.31 32-32 32H109.3l73.38 73.38c12.5 12.5 12.5 32.75 0 45.25c-12.49 12.49-32.74 12.51-45.25 0l-128-128C-3.125 266.1-3.125 245.9 9.375 233.4z" />
              </svg>
              <Link to="/" className="pl-4">
                Go Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
