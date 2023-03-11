import React from "react";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
const NotFound = () => {
  return (
    <div>
      <div
        className="hero h-96"
        style={{ backgroundImage: " url(https://i.ibb.co/tP8z73j/hotel2.jpg)" }}
      >
        <div className="hero-overlay bg-black bg-opacity-50"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md text-white">
            <h1 className="mb-5 text-5xl  text-white font-serif">404</h1>
            <p className="mb-5 font-serif text-5xl">
              That page can not be found
            </p>
            <Button className="">
              <Link
                to="/"
                className="pl-4 font-serif text-3xl flex justify-center items-center "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  width="20px"
                  fill="white"
                >
                  <path d="M9.375 233.4l128-128c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L109.3 224H480c17.69 0 32 14.31 32 32s-14.31 32-32 32H109.3l73.38 73.38c12.5 12.5 12.5 32.75 0 45.25c-12.49 12.49-32.74 12.51-45.25 0l-128-128C-3.125 266.1-3.125 245.9 9.375 233.4z" />
                </svg>
                <span className="ml-4"> Go Home</span>
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
