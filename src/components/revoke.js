import React from "react";
import {  Link } from "react-router-dom";
import "../style.css";
import logo from "../../src/Logo.png"
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

class revoke extends React.Component {
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
          <div className=" container" style={{ padding: "10%" }}>
            <h3 className="text-center">Revoke</h3>
            <br />
            <button className="btn btn-success btn-sm">UPLOAD REPORT FILE</button>
            <br />
            <br />
            <input className="form-control" placeholder="Enter Address" />
            <br />
            <button type="submit" className="btn btn-success">
              Submit
            </button>
            <br />
            <br />
            <p className="text-center">OR</p>
            <button className="btn btn-success btn-block">Scan QR CODE</button>
          </div>
        </div>
      );
    }
  }

export default revoke;