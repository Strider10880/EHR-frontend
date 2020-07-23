import React from "react";
import {  Link } from "react-router-dom";
import "../style.css";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

class revoke extends React.Component {
    render() {
      return (
        <div>
          <nav className="navbar navbar-expand-sm bg-success navbar-light">
            <div
              className="nav-item active"
              style={{ color: "white", fontWeight: "bolder" }}
            >
              SIH_2020
            </div>
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to="/">
                  <a className="nav-link">
                    <div style={{ color: "white" }}>HOME</div>
                  </a>
                </Link>
              </li>
            </ul>
          </nav>
          <div className=" container" style={{ padding: "12%" }}>
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