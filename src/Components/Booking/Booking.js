import React from "react";
import "./Booking.css";
const Booking = ({ bookingSuite, booked }) => {
  const {
    bookingName,
    bookingBed,
    bookingGuest,
    bookingSqr,
    bookingDis,
    bookingImage,
    bookingBalance,
  } = booked;
  return (
    <div>
      <h1 className="text-3xl font-bold my-6 px-6"> Your Reservation</h1>

      <div className="flex justify-around gap-x-4 my-6">
        <div>
          <div className="flex justify-between items-center">
            <p> {bookingName} </p> <p> {bookingBalance}</p>
          </div>
          <div className="flex justify-between items-start">
            <p> Subtotal </p> <p> {bookingBalance}</p>
          </div>
          <div className="flex justify-between items-start">
            <p> Discount (0%) </p> <p> {bookingBalance}</p>
          </div>
          <div className="flex justify-between items-start">
            <p> Services Charge (10%) </p> <p> {bookingBalance}</p>
          </div>
          <div className="flex justify-between items-start">
            <p> VAT(10%) </p> <p> {bookingBalance}</p>
          </div>
          <div className="flex justify-between items-start">
            <p> TAX(5%) </p> <p> {bookingBalance}</p>
          </div>
          <div className="flex justify-between items-start">
            <p> Total (BDT) </p> <p> {bookingBalance}</p>
          </div>
        </div>
        <div>
          <h1>Payment System</h1>
        </div>
      </div>
    </div>
  );
};

export default Booking;
