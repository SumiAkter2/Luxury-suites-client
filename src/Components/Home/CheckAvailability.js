import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBed, faCalendar, faUsers } from "@fortawesome/free-solid-svg-icons";
const CheckAvailability = () => {
  return (
    <div>
      <div className="mx-12 bg-slate-100 mt-6">
        <h1 className="text-4xl text-center  p-6">Check Availability</h1>
        <div className="flex justify-evenly items-center shadow-lg">
          <h1>shadow-lg Check In</h1>
          <h1>
            <FontAwesomeIcon icon={faCalendar} className="me-2" /> Check Out
          </h1>
          <h1>
            <FontAwesomeIcon icon={faUsers} className="me-2" /> Person
          </h1>
          <h1>
            <FontAwesomeIcon icon={faBed} className="me-2" /> Bed
          </h1>
          <h1>Check Available</h1>
        </div>
      </div>
    </div>
  );
};

export default CheckAvailability;
