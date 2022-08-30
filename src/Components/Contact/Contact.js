import React from "react";

const Contact = () => {
  return (
    <div>
      <div
        className="hero h-56"
        style={{ backgroundImage: "url(https://i.ibb.co/7gJMvks/room.png)" }}
      >
        <div className="hero-overlay bg-opacity-50"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md text-white">
            <h1 className="mb-5 text-5xl font-serif">Contact Us</h1>
            <p className="mb-5 text-xl font-serif">Get In Touch</p>
          </div>
        </div>
      </div>
      {/* detail contact */}
      <div className="lg:flex justify-around items-center">
        <div className="my-6 bg-yellow-200 p-4 rounded-md ">
          <h1 className="flex justify-start items-center ">
            {phoneIcon} <span className="text-3xl pl-2">Phone </span>
          </h1>
          <p>099999765534</p>
          <h1 className="flex justify-start items-center ">
            {emailIcon} <span className="text-3xl pl-2">Email </span>
          </h1>
          <p>luxurySuites@gmail.com</p>
          <div>
            <h1 className="flex justify-start items-center ">
              {location} <span className="text-3xl pl-2">Location </span>
            </h1>
            <p className=" text-sm">
              4 apt. Flawing Street. The Grand <br />
              <span>Avenue. Liverpool, UK 33342</span>
            </p>
          </div>
        </div>
        <div>
          <h1>kjdsfhadf</h1>
        </div>
      </div>
    </div>
  );
};

export default Contact;
const phoneIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="30px">
    <path d="M0 96v320c0 35.35 28.65 64 64 64h320c35.35 0 64-28.65 64-64V96c0-35.35-28.65-64-64-64H64C28.65 32 0 60.65 0 96zM105.5 303.6l54.24-23.25c6.391-2.766 13.9-.9062 18.24 4.484l22.02 26.91c34.63-17 62.77-45.14 79.77-79.75l-26.91-22.05c-5.375-4.391-7.211-11.83-4.492-18.22l23.27-54.28c3.047-6.953 10.59-10.77 17.93-9.062l50.38 11.63c7.125 1.625 12.11 7.891 12.11 15.22c0 126.1-102.6 228.8-228.7 228.8c-7.336 0-13.6-4.984-15.24-12.11l-11.62-50.39C94.71 314.2 98.5 306.6 105.5 303.6z" />
  </svg>
);
const emailIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="30px">
    <path d="M464 64C490.5 64 512 85.49 512 112C512 127.1 504.9 141.3 492.8 150.4L275.2 313.6C263.8 322.1 248.2 322.1 236.8 313.6L19.2 150.4C7.113 141.3 0 127.1 0 112C0 85.49 21.49 64 48 64H464zM217.6 339.2C240.4 356.3 271.6 356.3 294.4 339.2L512 176V384C512 419.3 483.3 448 448 448H64C28.65 448 0 419.3 0 384V176L217.6 339.2z" />
  </svg>
);
const location = (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" width="30px">
    <path d="M168.3 499.2C116.1 435 0 279.4 0 192C0 85.96 85.96 0 192 0C298 0 384 85.96 384 192C384 279.4 267 435 215.7 499.2C203.4 514.5 180.6 514.5 168.3 499.2H168.3zM192 256C227.3 256 256 227.3 256 192C256 156.7 227.3 128 192 128C156.7 128 128 156.7 128 192C128 227.3 156.7 256 192 256z" />
  </svg>
);
