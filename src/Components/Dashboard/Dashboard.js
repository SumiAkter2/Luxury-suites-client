import {
  faComment,
  faHouse,
  faIdBadge,
  faPlusMinus,
  faReorder,
  faSquarePlus,
  faUser,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div>
      <div className="drawer drawer-mobile bg-base-100">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col  justify-start">
          {/* <!-- Page content here --> */}
          <Outlet />

          <label
            htmlFor="my-drawer-2"
            className="button drawer-button lg:hidden"
          >
            Open drawer
          </label>
        </div>
        <div className="drawer-side bg-yellow-100">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-60  overflow-y-auto  bg-yellow-200 text-base-content">
            {/* <!-- Sidebar content here --> */}
            <li>
              <Link to="/">
                <FontAwesomeIcon icon={faHouse} /> Back Home
              </Link>
            </li>
            <li className="mt-1">
              <Link to="/dashboard">
                <FontAwesomeIcon icon={faReorder} />
                Booking List
              </Link>
            </li>
            <li className="mt-1">
              <Link to="/dashboard/profile">
                <FontAwesomeIcon icon={faIdBadge} /> Profile
              </Link>
            </li>
            <li className="mt-1">
              <Link to="/dashboard/review">
                <FontAwesomeIcon icon={faComment} /> Review
              </Link>
            </li>
            <li className="mt-1">
              <Link to="/dashboard/addSuites">
                <FontAwesomeIcon icon={faSquarePlus} />
                Add Suites
              </Link>
            </li>
            <li className="mt-1">
              <Link to="/dashboard/manageSuites">
                <FontAwesomeIcon icon={faPlusMinus} /> Manage Suites
              </Link>
            </li>
            <li className="mt-1">
              <Link to="/dashboard/admin">
                <FontAwesomeIcon icon={faUserPlus} /> Make Admin
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
