import React from "react";
import {  Link } from "react-router-dom";
import "../style.css";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

class loginPatient extends React.Component {
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
        <div className="container">
          <br />
          <br />
          <table class="table">
            <thead class="thead-dark">
              <tr>
                <th>Records</th>
                <th>Address</th>
                <th>Name</th>
                <th>Role</th>
                <th>Timestamp</th>
                <th>Revoke</th>
                <th>Permit</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>x0jdnac16</td>
                <td>2uy1cz</td>
                <td>Voldemort</td>
                <td>Patient</td>
                <td>02:06</td>
                <td>
                  <Link to="/revoke">
                    <button type="button" class="btn btn-danger btn-sm">
                      REVOKE
                    </button>
                  </Link>
                </td>
                <td>
                  <Link to="/permit">
                    <button
                      type="button"
                      class="btn btn-success btn-sm"
                      data-toggle="modal"
                      data-target="#permitModal"
                    >
                      PERMIT
                    </button>
                  </Link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default loginPatient;