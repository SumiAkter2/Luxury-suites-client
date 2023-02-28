import React from "react";
import { AiFillStar } from "react-icons/ai";
import { IoIosBed } from "react-icons/io";
import { IoIosPeople } from "react-icons/io";
import { BsFillSquareFill } from "react-icons/bs";
import Swal from "sweetalert2";

const AllSuite = ({ suite, setBooked }) => {
  const handleToBooking = () => {
    const bookings = {
      bookingName: suite.name,
      bookingBed: suite.bed,
      bookingGuest: suite.guest,
      bookingSqr: suite.sqr,
      bookingDis: suite.dis,
      bookingImage: suite.picture,
      bookingBalance: suite.balance,
    };
    setBooked(bookings);
   
    console.log("added booking", bookings);
    // fetch(`http://localhost:5000/bookings`, {
    //   method: "POST",
    //   headers: {
    //     "content-type": "application/json",
    //   },
    //   body: JSON.stringify(bookings),
    // })
    //   .then((res) => res.json())
    //   .then((data) => {
    //     console.log(data);
    //     Swal.fire({
    //       text: "Successfully added a review",
    //       icon: "success",
    //     });
    //   });
  };
  return (
    <div className="lg:flex grid gap-x-4 items-center mx-auto px-6 lg:p-0">
      <img
        className="h-60  lg:w-60 w-80 rounded-md"
        src={suite.picture}
        alt="Suite-pictures"
      />
      <div className="text-start w-80 mt-6 px-6 lg:p-0  ">
        <h1 className="text-3xl font-bold mb-4">{suite.name} </h1>

        <div className="flex lg:justify-between justify-center items-center">
          <p className="flex mr-2">
            <IoIosBed fill="orange" size="20px" />{" "}
            <span className="pl-2">{suite.bed} </span>
          </p>
          <p className="flex mr-2">
            <IoIosPeople fill="orange" size="20px" />{" "}
            <span className="pl-2">{suite.guest} </span>
          </p>
          <p className="flex mr-2">
            <BsFillSquareFill fill="orange" size="20px" />{" "}
            <span className="pl-2">{suite.sqr} </span>
          </p>
        </div>
        <p className="text-sm mt-6">{suite.dis} </p>

        <p className="flex items-center mr-2 mt-6">
          <AiFillStar fill="orange" />
          <AiFillStar fill="orange" />
          <AiFillStar fill="orange" />
          <AiFillStar fill="orange" />
          <AiFillStar fill="orange" />

          <span className="pl-2">{suite.review} </span>
        </p>
        <div className="flex justify-between items-center">
          <p>
            {suite.balance}/ <span className="text-xs">Night</span>
          </p>

          <div className="card-actions justify-end" onClick={handleToBooking}>
            <label
              htmlFor="booking-suites-modal"
              className="btn btn-primary bg-yellow-200"
            >
              Book Now
            </label>
          </div>
        </div>

        <div className="divider"> </div>
      </div>
    </div>
  );
};

export default AllSuite;
