import React from 'react';
import './navbar.css';
import {Link} from 'react-router-dom';


function Navbar() {
    /* edit active class effect as well */
    return(
      <div className="navbar">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/patientmainpage">Patient Main Page</Link></li>
          <li><Link to="/labprofile">Lab Profile</Link></li>
          <li><Link to="/doctorprofile">Doctor's Profile</Link></li>
        </ul>
      </div>
    );
  }

  export default Navbar;