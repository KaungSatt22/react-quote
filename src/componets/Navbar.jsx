import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-teal-500">
      <nav className="container mx-auto flex justify-between items-center h-[10vh] text-white p-3">
        <h2 className="text-lg lg:text-2xl font-bold">React Quotes</h2>
        <div className="flex items-center lg:space-x-5">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "bg-blue-500 rounded-lg" : ""
            }
          >
            <h2 className="text-md lg:text-xl p-3 ">Home</h2>
          </NavLink>
          <NavLink
            to="allquotes"
            className={({ isActive }) =>
              isActive ? "bg-blue-500 rounded-lg" : ""
            }
          >
            <h2 className="text-md lg:text-xl p-3">All Quotes</h2>
          </NavLink>
          <NavLink
            to="addquote"
            className={({ isActive }) =>
              isActive ? "bg-blue-500 rounded-lg" : ""
            }
          >
            <h2 className="text-md lg:text-xl p-3">Add Quote</h2>
          </NavLink>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
