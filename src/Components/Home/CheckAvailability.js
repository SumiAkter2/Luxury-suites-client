import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar, faUsers } from "@fortawesome/free-solid-svg-icons";

const CheckAvailability = () => {
  return (
    <div
      data-aos="fade-left"
      data-aos-anchor="#example-anchor"
      data-aos-offset="300"
      data-aos-duration="900"
      className="bg-white rounded-lg p-6 text-black w-72 mx-auto mb-6"
    >
      <h1 className="text-3xl text-center text-black mb-4">
        Check Availability
      </h1>
      <div className="gap-y-4 grid">
        <div>
          <h1 className="text-sm mb-1">
            <FontAwesomeIcon icon={faCalendar} className="me-2" /> Check In
          </h1>
          <input
            placeholder="Check In"
            className="input border-0 bg-gray-200 w-full max-w-xs mx-auto"
          />
        </div>
        <div>
          <h1 className="text-sm mb-1">
            <FontAwesomeIcon icon={faCalendar} className="me-2" /> Check Out
          </h1>
          <input
            placeholder="Check Out"
            className="input border-0 max-w-xs w-full mx-auto bg-gray-200"
          />
        </div>
        <div>
          <h1 className="text-sm mb-1">
            <FontAwesomeIcon icon={faUsers} className="me-2" /> Person
          </h1>
          <select className="input border-0 max-w-xs w-full mx-auto bg-gray-200">
            <option defaultValue={1}>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            <option>6</option>
          </select>
        </div>

        <button className="btn btn-primary  ">Check Available</button>
      </div>
    </div>
  );
};

export default CheckAvailability;
