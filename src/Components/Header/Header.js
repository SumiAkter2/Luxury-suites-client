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
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <Link to="/">
            <img
              style={{ width: "80px" }}
              src="https://i.ibb.co/cgPn1sK/logo-for-hotel-removebg-preview.png"
              alt="logo"
            />
          </Link>
          <Link to="/" className="font-bold text-xl text-black pr-12">
            Luxury Suites
          </Link>
        </div>
        <div className="navbar-center">
          <ul className="menu menu-horizontal gap-x-2">
            <li>
              <NavLink
                to="/allSuites"
                className=" font-bold rounded-lg text-black "
              >
                Suites
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className=" font-bold rounded-lg text-black "
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/dashBoard"
                className="font-bold rounded-lg text-black "
              >
                DashBoard
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className="font-bold rounded-lg text-black "
              >
                Contact
              </NavLink>
            </li>
            {user ? (
              <li className="font-bold rounded-lg text-black mt-3">
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
                  className="font-bold rounded-lg text-black "
                >
                  Sign Out
                </NavLink>
              </li>
            ) : (
              <li>
                <NavLink
                  to="/login"
                  className="font-bold rounded-lg text-black "
                >
                  Log In
                </NavLink>
              </li>
            )}

            <li className="dropdown dropdown-hover dropdown-end text-black">
              <label
                tabIndex="0"
                className="  border-0 hover:btn-secondary bg-secondary font-bold rounded-lg "
              >
                More Info <AiFillCaretDown size="20px" />
              </label>

              <ul
                tabIndex="0"
                className="dropdown-content menu p-2 shadow  rounded-box w-52"
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
        <div className="navbar-end">
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
              className="menu menu-compact dropdown-content  mt-3 p-2 shadow bg-base-100 rounded-box w-52 "
            >
              <li>
                <NavLink
                  to="/allSuites"
                  className=" font-bold rounded-lg text-black "
                >
                  Suites
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className=" font-bold rounded-lg text-black "
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashBoard"
                  className="font-bold rounded-lg text-black "
                >
                  DashBoard
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className="font-bold rounded-lg text-black "
                >
                  Contact
                </NavLink>
              </li>
              {user ? (
                <li className="font-bold rounded-lg text-black mt-3">
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
                    className="font-bold rounded-lg text-black "
                  >
                    Sign Out
                  </NavLink>
                </li>
              ) : (
                <li>
                  <NavLink
                    to="/login"
                    className="font-bold rounded-lg text-black "
                  >
                    Log In
                  </NavLink>
                </li>
              )}
              <li>
                <NavLink
                  to="/teams"
                  className="font-bold rounded-lg text-black "
                >
                  Our Team
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/feature"
                  className="font-bold rounded-lg text-black "
                >
                  Features
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/faq"
                  className="font-bold rounded-lg text-black "
                >
                  FAQ
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* <div className="drawer drawer-end">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          <div className="w-full navbar bg-yellow-200 lg:px-12 ">
            <div className="flex-1 ">
              <Link to="/">
                <img
                  style={{ width: "80px" }}
                  src="https://i.ibb.co/cgPn1sK/logo-for-hotel-removebg-preview.png"
                  alt="logo"
                />
              </Link>
              <Link to="/" className="font-bold text-xl text-black pr-12">
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
                <li>
                  <NavLink
                    to="/allSuites"
                    className=" font-bold rounded-lg text-black "
                  >
                    Suites
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/about"
                    className=" font-bold rounded-lg text-black "
                  >
                    About
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/dashBoard"
                    className="font-bold rounded-lg text-black "
                  >
                    DashBoard
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/contact"
                    className="font-bold rounded-lg text-black "
                  >
                    Contact
                  </NavLink>
                </li>
                {user ? (
                  <li className="font-bold rounded-lg text-black mt-3">
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
                      className="font-bold rounded-lg text-black "
                    >
                      Sign Out
                    </NavLink>
                  </li>
                ) : (
                  <li>
                    <NavLink
                      to="/login"
                      className="font-bold rounded-lg text-black "
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

          {children}
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
          <ul className="menu p-4 overflow-y-auto w-56 bg-transparent gap-y-2">
            <li>
              <NavLink
                to="/about"
                className=" font-bold rounded-lg text-black "
              >
                About
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/dashBoard"
                className="font-bold rounded-lg text-black "
              >
                DashBoard
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/contact"
                className="font-bold rounded-lg text-black "
              >
                Contact
              </NavLink>
            </li>
            {user ? (
              <li>
                <NavLink
                  onClick={handleSignOut}
                  to="/login"
                  className="font-bold rounded-lg text-black "
                >
                  Sign Out
                </NavLink>
              </li>
            ) : (
              <li>
                <NavLink
                  to="/login"
                  className="font-bold rounded-lg text-black "
                >
                  Log In
                </NavLink>
              </li>
            )}
          </ul>
        </div>
      </div> */}
    </div>

    // <ul className="menu menu-horizontal gap-x-2">
    //             {/* <!-- Navbar menu content here --> */}
    //             <li>
    //               <NavLink
    //                 to="/allSuites"
    //                 className=" font-bold rounded-lg text-black "
    //               >
    //                 Suites
    //               </NavLink>
    //             </li>
    //             <li>
    //               <NavLink
    //                 to="/about"
    //                 className=" font-bold rounded-lg text-black "
    //               >
    //                 About
    //               </NavLink>
    //             </li>
    //             <li>
    //               <NavLink
    //                 to="/dashBoard"
    //                 className="font-bold rounded-lg text-black "
    //               >
    //                 DashBoard
    //               </NavLink>
    //             </li>
    //             <li>
    //               <NavLink
    //                 to="/contact"
    //                 className="font-bold rounded-lg text-black "
    //               >
    //                 Contact
    //               </NavLink>
    //             </li>
    //             {user ? (
    //               <li className="font-bold rounded-lg text-black mt-3">
    //                 {user.displayName}
    //               </li>
    //             ) : (
    //               ""
    //             )}
    //             {user ? (
    //               <li>
    //                 <NavLink
    //                   onClick={handleSignOut}
    //                   to="/login"
    //                   className="font-bold rounded-lg text-black "
    //                 >
    //                   Sign Out
    //                 </NavLink>
    //               </li>
    //             ) : (
    //               <li>
    //                 <NavLink
    //                   to="/login"
    //                   className="font-bold rounded-lg text-black "
    //                 >
    //                   Log In
    //                 </NavLink>
    //               </li>
    //             )}

    //             <li className="dropdown dropdown-hover dropdown-end text-orange-500">
    //               <label
    //                 tabIndex="0"
    //                 className="  border-0 hover:btn-secondary bg-secondary font-bold rounded-lg "
    //               >
    //                 More Info <AiFillCaretDown size="20px" />
    //               </label>

    //               <ul
    //                 tabIndex="0"
    //                 className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
    //               >
    //                 <li>
    //                   <a href="/teams">Our Teams</a>
    //                 </li>
    //                 <li>
    //                   <a href="/feature">Feature</a>
    //                 </li>
    //                 <li>
    //                   <a href="/faq">FAQ</a>
    //                 </li>
    //               </ul>
    //             </li>
    //           </ul>
  );
};

export default Header;
