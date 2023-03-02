import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { AiFillCaretDown } from "react-icons/ai";
import { NavLink, Link } from "react-router-dom";
import auth from "../../firebase.init";

const Header = () => {
  const [user] = useAuthState(auth);
  const handleSignOut = () => {
    signOut(auth);
  };
  return (
    <div className="relative">
      <div className="navbar text-black bg-white ">
        <div className="navbar-start">
          <Link to="/">
            <img
              style={{ width: "80px" }}
              src="https://i.ibb.co/cgPn1sK/logo-for-hotel-removebg-preview.png"
              alt="logo"
            />
          </Link>
          <Link to="/" className="font-bold text-2xl  pr-12">
            Luxury Suites.
          </Link>
        </div>
        <div className="navbar-center hidden lg:block">
          <ul className="menu menu-horizontal gap-x-2">
            <li>
              <NavLink to="/allSuites" className=" font-bold rounded-lg  ">
                Suites
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className=" font-bold rounded-lg  ">
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashBoard" className="font-bold rounded-lg  ">
                DashBoard
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className="font-bold rounded-lg  ">
                Contact
              </NavLink>
            </li>
            {user ? (
              <li className="font-bold rounded-lg  mt-3">{user.displayName}</li>
            ) : (
              ""
            )}
            {user ? (
              <li>
                <NavLink
                  onClick={handleSignOut}
                  to="/login"
                  className="font-bold rounded-lg  "
                >
                  Sign Out
                </NavLink>
              </li>
            ) : (
              <li>
                <NavLink to="/login" className="font-bold rounded-lg  ">
                  Log In
                </NavLink>
              </li>
            )}

            <li className="dropdown dropdown-hover dropdown-end ">
              <label
                tabIndex="0"
                className="  border-0 hover:btn-secondary bg-secondary font-bold rounded-lg "
              >
                More Info <AiFillCaretDown size="20px" />
              </label>

              <ul
                tabIndex="0"
                className="dropdown-content menu p-2 shadow text-white rounded-box w-52"
              >
                <li>
                  <a href="/teams">Our Teams</a>
                </li>
                <li>
                  <a href="/feature">Feature</a>
                </li>
                <li>
                  <a href="/faq">FAQ</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="navbar-end absolute right-4 lg:hidden block">
          <div className="dropdown dropdown-left">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu text-white menu-compact dropdown-content  mt-3 p-2 shadow  rounded-box w-52 gap-y-4 "
            >
              <li>
                <NavLink to="/allSuites" className=" font-bold rounded-lg  ">
                  Suites
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" className=" font-bold rounded-lg  ">
                  About
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashBoard" className="font-bold rounded-lg  ">
                  DashBoard
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" className="font-bold rounded-lg  ">
                  Contact
                </NavLink>
              </li>
              {user ? (
                <li className="font-bold rounded-lg  mt-3">
                  {user.displayName}
                </li>
              ) : (
                ""
              )}
              {user ? (
                <li>
                  <NavLink
                    onClick={handleSignOut}
                    to="/login"
                    className="font-bold rounded-lg  "
                  >
                    Sign Out
                  </NavLink>
                </li>
              ) : (
                <li>
                  <NavLink to="/login" className="font-bold rounded-lg  ">
                    Log In
                  </NavLink>
                </li>
              )}
              <li>
                <NavLink to="/teams" className="font-bold rounded-lg  ">
                  Our Team
                </NavLink>
              </li>
              <li>
                <NavLink to="/feature" className="font-bold rounded-lg  ">
                  Features
                </NavLink>
              </li>
              <li>
                <NavLink to="/faq" className="font-bold rounded-lg  ">
                  FAQ
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
