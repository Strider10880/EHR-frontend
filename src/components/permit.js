import React from "react";
import {  Link } from "react-router-dom";
import "../style.css";
import logo from "../../src/Logo.png"
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Employee from "./.cph/app";

class permit extends React.Component {
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
            <h3 className="text-center">Permit</h3>
            <br />
            <form action='/'>
            <button type='file' className="btn btn-success btn-sm" onClick={null}>UPLOAD REPORT FILE</button>
            <br />
            <br />
            <Employee />
            </form>
          </div>
        </div>
      );
    }
  }

  export default permit;