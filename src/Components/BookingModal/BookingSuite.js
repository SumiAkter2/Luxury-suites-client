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
          <div className="lg:flex grid gap-x-4  mx-auto px-6 lg:p-0">
            <img
              className="h-48  lg:w-48 w-24 rounded-md"
              src={bookingImage}
              alt="Suite-pictures"
            />
            <div className="text-start w-80 px-6 lg:p-0  ">
              <h1 className="text-xl font-bold">{bookingName} </h1>
              <p className="text-sm my-2">{bookingDis} </p>
              <div className=" lg:justify-between justify-center items-center">
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

              <div className="flex justify-between items-center">
                <p className="text-xl font-bold">
                  {bookingBalance}/{" "}
                  <span className="text-xs font-bold">Night</span>
                </p>
              </div>
            </div>
          </div>
          <div>
            <h1> Check In :</h1>
          </div>
          <div className="modal-action">
            <label htmlFor="booking-suites-modal" className="btn btn-primary">
              Confirm Booking
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingSuite;
