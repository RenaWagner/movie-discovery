import React from "react";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <div>
      <NavLink
        className="btn btn-outline-info mr-2"
        exact
        to="/discover"
        activeStyle={{ fontWeight: "bold", fontSize: "italic" }}
      >
        Discover Movies
      </NavLink>
      <NavLink
        className="btn btn-outline-info mr-2"
        exact
        to="/about"
        activeStyle={{ fontWeight: "bold", fontSize: "italic" }}
      >
        About this website
      </NavLink>
      <NavLink
        className="btn btn-outline-info mr-2"
        exact
        to="/"
        activeStyle={{ fontWeight: "bold", fontSize: "italic" }}
      >
        Home
      </NavLink>
    </div>
  );
}
