import React from "react";
import {  Link } from "react-router-dom";
import "../style.css";
import logo from "../../src/Logo.png"
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Employee from "./.cph/app"
//import ScrollContainer from 'react-indiana-drag-scroll'
class addDoctor extends React.Component {
    render() {
      return (
        <div>
         <nav className="navbar navbar-expand-sm bg-dark navbar-light">
            <div
              className="nav-item active"
              style={{ color: "black", fontWeight: "bolder" }}
            >
              <img src={logo} width="50px" height="50px" />
            </div>
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to="/">
                  <a className="nav-link" style={{ color: "white" }}>
                    HOME
                  </a>
                </Link>
              </li>
            </ul>
          </nav>
          <div className="container" style={{ padding: "10%" }}>
          
            <h3 className="text-center">ADD A DOCTOR</h3>
            <br />
            <input className="form-control" placeholder="Enter Name..." />
            <br />
            <Employee />
          </div>
        </div>
      );
    }
  }

export default addDoctor;