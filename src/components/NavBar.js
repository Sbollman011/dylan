import React, { Component } from 'react';
import './NavBar.css'

class NavBar extends Component {

  render() {
      return(

        <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
        <a className="navbar-brand" href="/">Dylan's Map</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav w-100">
            <li className="nav-item">
              <a className="nav-link" href="#">Food & Drink<span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Parks</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Camping</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Activities</a>
            </li>
          </ul>
        </div>
      </nav>
        );
    }
}

export default NavBar;