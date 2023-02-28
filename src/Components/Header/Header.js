import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { AiFillCaretDown } from "react-icons/ai";
import { NavLink, Link } from "react-router-dom";
import auth from "../../firebase.init";

const Header = ({ children }) => {
  const [user] = useAuthState(auth);
  const handleSignOut = () => {
    signOut(auth);
  };
  return (
    <div>
      <div className="drawer drawer-end">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          {/* <!-- Navbar --> */}
          <div className="w-full navbar bg-yellow-200 lg:px-12 ">
            <div className="flex-1 ">
              <Link to="/">
                <img
                  style={{ width: "80px" }}
                  src="https://i.ibb.co/cgPn1sK/logo-for-hotel-removebg-preview.png"
                  alt="logo"
                />
              </Link>
              <Link to="/" className="font-bold text-xl text-amber-500 pr-12">
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
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </label>
            </div>

            <div className="flex-none hidden lg:block">
              <ul className="menu menu-horizontal gap-x-2">
                {/* <!-- Navbar menu content here --> */}

                <li>
                  <NavLink
                    to="/about"
                    className=" font-bold rounded-lg text-amber-500 "
                  >
                    About
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/dashBoard"
                    className="font-bold rounded-lg text-amber-500 "
                  >
                    DashBoard
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/contact"
                    className="font-bold rounded-lg text-amber-500 "
                  >
                    Contact
                  </NavLink>
                </li>
                {user ? (
                  <li className="font-bold rounded-lg text-amber-500 mt-3">
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
                      className="font-bold rounded-lg text-amber-500 "
                    >
                      Sign Out
                    </NavLink>
                  </li>
                ) : (
                  <li>
                    <NavLink
                      to="/login"
                      className="font-bold rounded-lg text-amber-500 "
                    >
                      Log In
                    </NavLink>
                  </li>
                )}

                <li className="dropdown dropdown-hover dropdown-end text-orange-500">
                  <label
                    tabIndex="0"
                    className="  border-0 hover:btn-secondary bg-secondary font-bold rounded-lg "
                  >
                    More Info <AiFillCaretDown size="20px" />
                  </label>

                  <ul
                    tabIndex="0"
                    className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
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
          </div>
          {/* <!-- Page content here --> */}
          {children}
        </div>
        <div className="drawer-side">
          <label for="my-drawer-3" className="drawer-overlay"></label>
          <ul className="menu p-4 overflow-y-auto w-56 bg-slate-200 gap-y-2">
            {/* <!-- Sidebar content here --> */}

            <li>
              <NavLink
                to="/about"
                className=" font-bold rounded-lg text-amber-500 "
              >
                About
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/dashBoard"
                className="font-bold rounded-lg text-amber-500 "
              >
                DashBoard
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/contact"
                className="font-bold rounded-lg text-amber-500 "
              >
                Contact
              </NavLink>
            </li>
            {user ? (
              <li>
                <NavLink
                  onClick={handleSignOut}
                  to="/login"
                  className="font-bold rounded-lg text-amber-500 "
                >
                  Sign Out
                </NavLink>
              </li>
            ) : (
              <li>
                <NavLink
                  to="/login"
                  className="font-bold rounded-lg text-amber-500 "
                >
                  Log In
                </NavLink>
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
