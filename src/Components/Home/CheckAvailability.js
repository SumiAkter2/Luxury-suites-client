import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBed, faCalendar, faUsers } from "@fortawesome/free-solid-svg-icons";

const CheckAvailability = () => {
  return (
    <div className="bg-yellow-100 rounded-lg p-6 text-black">
      <div className=""></div>
      <h1 className="text-4xl text-center text-black ">Check Availability</h1>
      <div className="mx-12 bg-base-100  drop-shadow-md hover:drop-shadow-xl">
        <div className="grid  ">
          <div className="text-center   mb-4 ">
            <h1 className="text-xl mb-1 ">
              <FontAwesomeIcon icon={faCalendar} className="me-2" /> Check In
            </h1>

            <input
              type="date"
              className="bg-secondary rounded-md w-42 p-1 mt-2"
            />
          </div>
          <div className="text-center   mb-4 ">
            <h1 className="text-xl mb-1">
              <FontAwesomeIcon icon={faCalendar} className="me-2" /> Check Out
            </h1>
            <input
              type="date"
              className="bg-secondary w-42 rounded-md p-1 mt-2"
            />
          </div>
          <div className="text-center  mb-4 ">
            <h1 className="text-xl mb-2">
              <FontAwesomeIcon icon={faUsers} className="me-2" /> Person
            </h1>

            <select className="form-control lg:w-24 w-36 rounded-md p-1 bg-secondary  mx-auto">
              <option defaultValue={1}>1</option>
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
            <select className="form-control lg:w-28 w-36 rounded-md p-1 bg-secondary mx-auto">
              <option defaultValue={"1 King Bed"}>1 King Bed</option>
              <option>2 Single Bed</option>
              <option>2 King Bed</option>
              <option>1 Double Bed</option>
              <option>1 Single Bed</option>
            </select>
          </div>
          <button className="btn btn-primary bg-secondary mt-8">
            Check Available
          </button>
        </div>
      </div>
    </div>
  );
};

export default CheckAvailability;
