import React from "react";
import { NavLink, Link } from "react-router-dom";

const Header = ({ children }) => {
  return (
    <div>
      <div className="drawer drawer-end">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          {/* <!-- Navbar --> */}
          <div className="w-full navbar bg-yellow-100 lg:px-12 ">
            <div className="flex-1 ">
              <Link to="/">
                <img
                  style={{ width: "80px" }}
                  src="https://i.ibb.co/cgPn1sK/logo-for-hotel-removebg-preview.png"
                  alt="logo"
                />
              </Link>
              <Link to="/" className="font-bold text-xl text-violet-500 pr-12">
                Luxury Suites
              </Link>
            </div>
            <div className="flex-none lg:hidden">
              <label for="my-drawer-3" className="btn btn-circle btn-ghost">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block w-6 h-6 stroke-current"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </label>
            </div>

            <div className="flex-none hidden lg:block">
              <ul className="menu menu-horizontal gap-x-2">
                {/* <!-- Navbar menu content here --> */}
                <li>
                  <NavLink to="/living" className="font-bold rounded-lg py-0 ">
                    Living
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/contact" className="font-bold rounded-lg ">
                    Contact
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/about" className=" font-bold rounded-lg ">
                    About
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/login" className="font-bold rounded-lg ">
                    Log In
                  </NavLink>
                </li>
                <li className="dropdown dropdown-hover dropdown-end ">
                  <label
                    tabindex="0"
                    className="btn btn-outline btn-primary font-bold rounded-lg"
                  >
                    Book
                  </label>
                  <ul
                    tabindex="0"
                    className="dropdown-content menu p-2 shadow bg-slate-300 rounded-box w-52"
                  >
                    <li>
                      <a href="/">Item 1</a>
                    </li>
                    <li>
                      <a href="/">Item 2</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
          {/* <!-- Page content here --> */}
          {children}
        </div>
        <div className="drawer-side">
          <label for="my-drawer-3" className="drawer-overlay"></label>
          <ul className="menu p-4 overflow-y-auto w-56 bg-slate-200 gap-y-2">
            {/* <!-- Sidebar content here --> */}
            <li>
              <NavLink to="/living" className="font-bold rounded-lg ">
                Living
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className="font-bold rounded-lg ">
                Contact
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className=" font-bold rounded-lg ">
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/login" className="font-bold rounded-lg ">
                Log In
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
