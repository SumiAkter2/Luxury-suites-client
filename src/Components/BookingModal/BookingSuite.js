import React from "react";
import { IoIosBed } from "react-icons/io";
import { IoIosPeople } from "react-icons/io";
import { BsFillSquareFill } from "react-icons/bs";
const BookingSuite = ({ booked }) => {
  const {
    bookingName,
    bookingBed,
    bookingGuest,
    bookingSqr,
    bookingDis,
    bookingImage,
    bookingBalance,
  } = booked;
  console.log(booked);
  return (
    <div>
      <input
        type="checkbox"
        id="booking-suites-modal"
        className="modal-toggle"
      />
      <div className="modal modal-bottom sm:modal-middle m-2">
        <div className="modal-box">
          <div className="lg:flex grid gap-x-4 items-center mx-auto px-6 lg:p-0">
            <img
              className="h-48  lg:w-48 w-24 rounded-md"
              src={bookingImage}
              alt="Suite-pictures"
            />
            <div className="text-start w-80 mt-6 px-6 lg:p-0  ">
              <h1 className="text-3xl font-bold mb-4">{bookingName} </h1>

              <div className="flex lg:justify-between justify-center items-center">
                <p className="flex mr-2">
                  <IoIosBed fill="orange" size="20px" />{" "}
                  <span className="pl-2">{bookingBed} </span>
                </p>
                <p className="flex mr-2">
                  <IoIosPeople fill="orange" size="20px" />{" "}
                  <span className="pl-2">{bookingGuest} </span>
                </p>
                <p className="flex mr-2">
                  <BsFillSquareFill fill="orange" size="20px" />{" "}
                  <span className="pl-2">{bookingSqr} </span>
                </p>
              </div>
              {/* <p className="text-sm mt-6">{bookingBalance} </p> */}

              <div className="flex justify-between items-center">
                <p>
                  {bookingBalance}/ <span className="text-xs">Night</span>
                </p>
              </div>
            </div>
          </div>
          {/* <div className="flex justify-center items-center gap-4">
            <img src={bookingImage} alt="suite-img" className="rounded-lg lg:w-24" />
            <h3 className="font-bold text-lg">{bookingName}</h3>
          </div> */}
          {/* <form className="mt-4 ">
            <div className="flex justify-center items-center gap-4">
              <input
                type="text"
                value={bookingBed}
                disabled
                className="input input-bordered mt-2  input-warning w-full max-w-xs"
              />
              <input
                type="text"
                disabled
                value={bookingGuest}
                className="input input-bordered mt-2  input-warning w-full max-w-xs"
              />
              <input
                type="text"
                disabled
                value={bookingSqr}
                className="input input-bordered mt-2  input-warning w-full max-w-xs"
              />
            </div>
            <div className="flex justify-center items-center gap-4">
              <input
                type="text"
                disabled
                value={bookingBalance}
                className="input input-bordered mt-2 font-bold input-warning w-full max-w-xs"
              />
              <input
                type="text"
                disabled
                value={bookingBed}
                className="input input-bordered mt-2  input-warning w-full max-w-xs"
              />
            </div>
          </form> */}

          <div className="modal-action">
            <label htmlFor="booking-suites-modal" className="btn">
              Yay!
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingSuite;
