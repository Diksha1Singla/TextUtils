// import React, { useState } from 'react'
import PropTypes from 'prop-types'
import {Link} from "react-router-dom";

export default function Navbar(props) {

  return (
    <nav
      className={`navbar navbar-expand-lg bg-${props.mode} navbar-${props.mode}`}
    >
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          {props.title}
        </Link>
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
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/">
                {props.Link}
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                {props.about}
              </Link>
            </li>
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                to="/"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Dropdown
              </Link>
              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" to="/">
                    Action
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/">
                    Another action
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <Link className="dropdown-item" to="/">
                    Something else here
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
          <form className="d-flex mx-2" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>

          <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
            <input
              className="form-check-input"
              onClick={props.toggleMode}
              type="checkbox"
              id="flexSwitchCheckChecked"
            />
            <label
              className="form-check-label"
              htmlFor="flexSwitchCheckChecked"
            >
              Dark Mode
            </label>
          </div>

{/* For mutltiple Theme setting */}

          <div class="dropdown">
            <button class="btn btn-secondary dropdown-toggle mx-2" type="button" data-bs-toggle="dropdown" aria-expanded="false">
              Change Theme
            </button>
            <ul class="dropdown-menu dropdown-menu-dark">
              <li><a class="dropdown-item" href="#" onClick={()=>{props.ChangesetMode('info')}}>Info</a></li>
              <li><a class="dropdown-item" href="#" onClick={()=>{props.ChangesetMode('dark')}}>Dark</a></li>
              <li><a class="dropdown-item" href="#" onClick={()=>{props.ChangesetMode('light')}}>Light</a></li>
              <li><a class="dropdown-item" href="#" onClick={()=>{props.ChangesetMode('warning')}}>Warning</a></li>
              <li><a class="dropdown-item" href="#" onClick={()=>{props.ChangesetMode('secondary')}}>Secondary</a></li>
              <li><a class="dropdown-item" href="#" onClick={()=>{props.ChangesetMode('success')}}>Success</a></li>
              <li><a class="dropdown-item" href="#" onClick={()=>{props.ChangesetMode('danger')}}>Danger</a></li>
              <li><a class="dropdown-item" href="#" onClick={()=>{props.ChangesetMode('primary')}}>Primary</a></li>
            </ul> 
          </div>
        </div>
      </div>
    </nav>
  );
}

/* specifying type of props
    .isRequired : error if undefined --> value either passed or or set by-default value
*/
Navbar.prototype={
    title:PropTypes.string.isRequired,
    Link:PropTypes.string,
    about:PropTypes.string
}
// specifying defalut values of prop
Navbar.defaultProps={
    title:'set title here ',
    about:'About text here'
};