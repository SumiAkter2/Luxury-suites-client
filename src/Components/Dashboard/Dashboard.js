import {
  faComment,
  faHouse,
  faIdBadge,
  faPlusMinus,
  faSquarePlus,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";
import { IoIosListBox } from "react-icons/io";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div>
      <div className="drawer drawer-mobile bg-yellow-50">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col  justify-start">
          {/* <!-- Page content here --> */}
          <Outlet />

          <label
            htmlFor="my-drawer-2"
            className="button drawer-button lg:hidden mx-auto"
          >
            Open drawer
          </label>
        </div>
        <div className="drawer-side bg-gray-200 rounded-lg">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-60  overflow-y-auto  text-base-content">
            {/* <!-- Sidebar content here --> */}
            <li>
              <Link to="/">
                <FontAwesomeIcon color="#a87932" icon={faHouse} /> Back Home
              </Link>
            </li>
            <li className="mt-1">
              <Link to="/dashboard">
                <IoIosListBox color="#a87932" />
                Booking List
              </Link>
            </li>
            <li className="mt-1">
              <Link to="/dashboard/profile">
                <FontAwesomeIcon color="#a87932" icon={faIdBadge} /> Profile
              </Link>
            </li>
            <li className="mt-1">
              <Link to="/dashboard/review">
                <FontAwesomeIcon color="#a87932" icon={faComment} /> Review
              </Link>
            </li>
            <li className="mt-1">
              <Link to="/dashboard/addSuites">
                <FontAwesomeIcon color="#a87932" icon={faSquarePlus} />
                Add Suites
              </Link>
            </li>
            <li className="mt-1">
              <Link to="/dashboard/manageSuites">
                <FontAwesomeIcon color="#a87932" icon={faPlusMinus} /> Manage
                Suites
              </Link>
            </li>
            <li className="mt-1">
              <Link to="/dashboard/admin">
                <FontAwesomeIcon color="#a87932" icon={faUserPlus} /> Make Admin
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
