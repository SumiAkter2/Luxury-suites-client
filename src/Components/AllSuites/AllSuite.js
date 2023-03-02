import React from "react";
import { AiFillStar } from "react-icons/ai";
import { IoIosBed } from "react-icons/io";
import { IoIosPeople } from "react-icons/io";
import { BsFillSquareFill } from "react-icons/bs";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const AllSuite = ({ suite, setBooked, bookingSuite }) => {
  const navigate = useNavigate();
  const handleBookingNow = () => {
    navigate("/booking");
    const bookings = {
      bookingName: suite.name,
      bookingBed: suite.bed,
      bookingGuest: suite.guest,
      bookingSqr: suite.sqr,
      bookingDis: suite.dis,
      bookingImage: suite.picture,
      bookingBalance: suite.balance,
      startDate: bookingSuite.startDate,
      endDate: bookingSuite.endDate,
      adult: bookingSuite.adult,
      children: bookingSuite.children,
    };
    setBooked(bookings);
    console.log("added booking", bookings);
  };
  return (
    <div className="lg:flex grid gap-x-4 items-center mx-auto px-6 lg:p-0  ">
      <img
        className="lg:h-96 lg:w-80 w-80 rounded-md"
        src={suite.picture}
        alt="Suite-pictures"
      />
      <div className="text-start w-80  px-6   ">
        <h1 className="text-3xl font-bold mt-6">{suite.name} </h1>
        <p className="flex items-center mr-2 mb-4">
          <AiFillStar fill="orange" />
          <AiFillStar fill="orange" />
          <AiFillStar fill="orange" />
          <AiFillStar fill="orange" />
          <AiFillStar fill="orange" />

          <span className="pl-2">{suite.review} </span>
        </p>
        <div className="flex lg:justify-between justify-center items-center">
          <p className="flex mr-2">
            <IoIosBed fill="orange" size="20px" />
            <span className="pl-2">{suite.bed} </span>
          </p>
          <p className="flex mr-2">
            <IoIosPeople fill="orange" size="20px" />
            <span className="pl-2">{suite.guest} </span>
          </p>
          <p className="flex mr-2">
            <BsFillSquareFill fill="orange" size="20px" />
            <span className="pl-2">{suite.sqr} </span>
          </p>
        </div>
        <p className="text-sm my-2">{suite.dis} </p>
        <p className="font-bold">
          {suite.balance}/ <span className="text-xs">Night</span>
        </p>
        <div className="flex items-center mt-2">
          <div>
            <h1 className="font-bold"> Check In</h1>
            <p>{bookingSuite.startDate} </p>
          </div>
          <div className="ml-4">
            <h1 className="font-bold">Check Out</h1>
            <p>{bookingSuite.endDate} </p>
          </div>
        </div>
        <div className="flex items-center mt-2">
          <div>
            <h1 className="font-bold"> Adult</h1>
            <p>{bookingSuite.adult} </p>
          </div>
          <div className="ml-4">
            <h1 className="font-bold">Children</h1>
            <p>{bookingSuite.children} </p>
          </div>
        </div>

        <div
          className="card-actions justify-start mt-4"
          onClick={handleBookingNow}
        >
          <label
            htmlFor="booking-suites-modal"
            className="btn btn-primary bg-secondary"
          >
            Confirm Booking
          </label>
        </div>

        <div className="divider"> </div>
      </div>
    </div>
  );
};

export default AllSuite;
