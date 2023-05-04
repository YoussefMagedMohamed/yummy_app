import React from "react";
import "../Navbar/Navbar.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <nav className="navbar navbar-expand-lg bg-body-tertiary w-100 navbar-dark">
        <div className="container">
          <button
            className="navbar-toggler text-white ms-auto navicon"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon " />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav m-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink
                  className="nav-link px-5 "
                  aria-current="page"
                  to="/home"
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link px-5 "
                  aria-current="page"
                  to="/category"
                >
                  Category
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link px-5 "
                  aria-current="page"
                  to="/area"
                >
                  Area
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link px-5 "
                  aria-current="page"
                  to="/ingredients"
                >
                  Ingredients
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link px-5 "
                  aria-current="page"
                  to="/search"
                >
                  Search
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
