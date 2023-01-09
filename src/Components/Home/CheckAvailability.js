import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBed, faCalendar, faUsers } from "@fortawesome/free-solid-svg-icons";

const CheckAvailability = () => {
  return (
    <div>
      <h1 className="text-4xl text-center  pt-6">Check Availability</h1>
      <div className="mx-12 bg-base-100 mt-6 p-12 drop-shadow-md hover:drop-shadow-xl">
        <div className="lg:flex   justify-evenly items-center ">
          <div className="text-center   mb-4 ">
            <h1 className="text-xl mb-1 ">
              <FontAwesomeIcon icon={faCalendar} className="me-2" /> Check In
            </h1>

            <input
              type="date"
              className="bg-yellow-200 rounded-md w-42 p-1 mt-2"
            />
          </div>
          <div className="text-center   mb-4 ">
            <h1 className="text-xl mb-1">
              <FontAwesomeIcon icon={faCalendar} className="me-2" /> Check Out
            </h1>
            <input
              type="date"
              className="bg-yellow-200 w-42 rounded-md p-1 mt-2"
            />
          </div>
          <div className="text-center  mb-4 ">
            <h1 className="text-xl mb-2">
              <FontAwesomeIcon icon={faUsers} className="me-2" /> Person
            </h1>

            <select class="form-control lg:w-24 w-36 rounded-md p-1 bg-yellow-200  mx-auto">
              <option selected>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
              <option>6</option>
            </select>
          </div>
          <div className="text-center  mb-4 ">
            <h1 className="text-xl mb-2">
              <FontAwesomeIcon icon={faBed} className="me-2" /> Bed
            </h1>
            <select class="form-control lg:w-28 w-36 rounded-md p-1 bg-yellow-200 mx-auto">
              <option selected>1 King Bed</option>
              <option>2 Single Bed</option>
              <option>2 King Bed</option>
              <option>1 Double Bed</option>
              <option>1 Single Bed</option>
            </select>
          </div>
          <button className="btn btn-primary bg-yellow-200 mt-8">
            Check Available
          </button>
        </div>
      </div>
    </div>
  );
};

export default CheckAvailability;
