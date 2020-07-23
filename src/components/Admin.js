import React from "react";
import {  Link } from "react-router-dom";
import "../style.css";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

class Admin extends React.Component {
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
          <div className="container" style={{ padding: "12%" }}>
            <Link to="/admin/addDoctor">
              <button className="btn btn-success mx-5">ADD A DOCTOR</button>
            </Link>
            <Link to="/admin/addLab">
              <button className="btn btn-success mx-4">
                ADD A LAB TECHNICIAN
              </button>
            </Link>
            <Link to="/admin/addReception">
              <button className="btn btn-success mx-5">ADD A RECEPTIONIST</button>
            </Link>
          </div>
        </div>
      );
    }
  }

export default Admin;