import React from "react";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 px-4 md:px-8">
      {/* Left Section */}
      <div className="navbar-start">
        {/* Mobile Menu */}
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>

          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-3 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>FAQ</a>
            </li>
            <li>
              <a>Changelog</a>
            </li>
            <li>
              <a>Blog</a>
            </li>
            <li>
              <a>Download</a>
            </li>
            <li>
              <a>Contact</a>
            </li>
          </ul>
        </div>

        {/* Logo */}
        <a className="text-lg md:text-xl font-bold">CS — Ticket System</a>
      </div>

      {/* Desktop Menu */}

      {/* Right Section */}
      <div className="navbar-end">
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-1">
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>FAQ</a>
            </li>
            <li>
              <a>Changelog</a>
            </li>
            <li>
              <a>Blog</a>
            </li>
            <li>
              <a>Download</a>
            </li>
            <li>
              <a>Contact</a>
            </li>
          </ul>
        </div>
        <button
          className="btn border-none text-white font-semibold text-sm md:text-lg px-4 md:px-6
          bg-gradient-to-r from-[#7C3AED] to-[#A855F7]
          hover:from-[#6D28D9] hover:to-[#9333EA]
          shadow-md transition-all"
        >
          <span className="text-xl mr-1">+</span>
          New Ticket
        </button>
      </div>
    </div>
  );
};

export default Navbar;
