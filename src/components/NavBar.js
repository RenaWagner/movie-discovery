import React from "react";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <div>
      <NavLink
        exact
        to="/discover"
        activeStyle={{ fontWeight: "bold", fontSize: "italic" }}
      >
        Discover Movies
      </NavLink>
      <NavLink
        exact
        to="/about"
        activeStyle={{ fontWeight: "bold", fontSize: "italic" }}
      >
        About this website
      </NavLink>
      <NavLink
        exact
        to="/"
        activeStyle={{ fontWeight: "bold", fontSize: "italic" }}
      >
        Home
      </NavLink>
    </div>
  );
}
