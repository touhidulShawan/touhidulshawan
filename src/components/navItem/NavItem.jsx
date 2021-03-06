import React from "react";
import { NavLink } from "react-router-dom";

const NavItem = (props) => {
  return (
    <li className="list-none">
      <NavLink
        to={props.link}
        exact
        activeStyle={{ color: "#0EA5E9" }}
        className="text-sm  uppercase tracking-wide text-purple-600 hover:text-purple-300 focus:outline-none focus:ring-2 ring-purple-600 ring-offset-2 active:text-purple-800 transform transition duration-300 ease-in-out md:text-base  md:tracking-wider dark:text-gray-300 dark:hover:text-yellow-500"
      >
        {props.linkName}
      </NavLink>
    </li>
  );
};

export default NavItem;
