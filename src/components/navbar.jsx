import React, { Component } from "react";
//stateless functinal Component
const Navbar = ({ totalCounters }) => {
  return (
    <nav className="navbar navbra-light bg-light">
      <a className="navbar-brand" href="#">
        Navbar{""}
        <span className="badge badge-pill badge-secondary">
          {totalCounters}
        </span>
      </a>
    </nav>
  );
};

export default Navbar;
