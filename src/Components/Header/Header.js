import React from "react";
import { NavLink } from "react-router-dom";
import { useEffect } from "react";
import { themeChange } from "theme-change";
const Header = ({ children }) => {
  useEffect(() => {
    themeChange(false);
  }, []);
  return (
    <div>
      <div class="drawer drawer-end">
        <input id="my-drawer-3" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content flex flex-col">
          {/* <!-- Navbar --> */}
          <div class="w-full navbar bg-base-300 lg:px-20 ">
            <div class="flex-1 font-bold text-xl">Luxury Suites</div>
            <div class="flex-none lg:hidden">
              <label for="my-drawer-3" class="btn btn-circle btn-ghost">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  class="inline-block w-6 h-6 stroke-current"
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

            <div class="flex-none hidden lg:block">
              <ul class="menu menu-horizontal gap-x-2">
                {/* <!-- Navbar menu content here --> */}
                <li>
                  <NavLink to="/living" className="rounded-lg py-0 ">
                    Living
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/contact" className="rounded-lg ">
                    Contact
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/about" className="rounded-lg ">
                    About
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/login" className="rounded-lg ">
                    Log In
                  </NavLink>
                </li>
                <li>
                  <button data-toggle-theme="dark,light" onClick={themeChange}>
                    Theme
                  </button>
                </li>
                <li class="dropdown dropdown-hover dropdown-end ">
                  <label
                    tabindex="0"
                    class="btn btn-outline btn-primary rounded-lg"
                  >
                    Book
                  </label>
                  <ul
                    tabindex="0"
                    class="dropdown-content menu p-2 shadow bg-slate-300 rounded-box w-52"
                  >
                    <li>
                      <a>Item 1</a>
                    </li>
                    <li>
                      <a>Item 2</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
          {/* <!-- Page content here --> */}
          {children}
        </div>
        <div class="drawer-side">
          <label for="my-drawer-3" class="drawer-overlay"></label>
          <ul class="menu p-4 overflow-y-auto w-56 bg-slate-200 gap-y-2">
            {/* <!-- Sidebar content here --> */}
            <li>
              <NavLink to="/living" className="rounded-lg ">
                Living
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className="rounded-lg ">
                Contact
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className="rounded-lg ">
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/login" className="rounded-lg ">
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
