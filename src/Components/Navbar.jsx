import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            <NavLink className="navbar-brand" to="/">
              <i className="fa-solid fa-newspaper text-warning me-1"></i> The
              <span className="text-warning"> News</span>
            </NavLink>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li>
                  <NavLink className="nav-link" aria-current="page" to="/">
                    General
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="nav-link "
                    aria-current="page"
                    to="/business"
                  >
                    Business
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="nav-link "
                    aria-current="page"
                    to="/entertainment"
                  >
                    Entertainment
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    className="nav-link "
                    aria-current="page"
                    to="/health"
                  >
                    Health
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="nav-link "
                    aria-current="page"
                    to="/science"
                  >
                    Science
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="nav-link "
                    aria-current="page"
                    to="/sports"
                  >
                    Sports
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="nav-link "
                    aria-current="page"
                    to="/technology"
                  >
                    Technology
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
