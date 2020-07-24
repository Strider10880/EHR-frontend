import React from "react";
import { Link } from "react-router-dom";
import "../style.css";
import logo from "../../src/Logo.png"
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Employee from "./.cph/app";
class loginDoctor extends React.Component {
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
        <div className="container-fluid">
        <div className="row">
          <div className="col-md-12 wrapper">
            <div id="formContent" style={{ padding: "5%" }}>
              <h3>DOCTOR'S LOGIN:</h3>
              <hr />
              <div>
                <button className="btn btn-success btn-sm">
                  UPLOAD REPORT FILE
                </button>
                <br />
                <br />
                <Employee />
              </div>
            </div>
          </div>
          
          <div className="col-md-12 ml-auto mr-5 my-5 wrapper">
            <table class="table">
              <thead class="thead-dark">
                <tr>
                  <th>Patient Name</th>
                  <th>Patient Address</th>
                  <th>Timestamp</th>
                  <th>IPFS link </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Bilbo Baggins</td>
                  <td>2uy1cz</td>
                  <td>02:06</td>
                  <td>4JWKXl5YYOTxifB</td>
                </tr>
                <tr>
                  <td>Bilbo Baggins</td>
                  <td>2uy1cz</td>
                  <td>02:06</td>
                  <td>4JWKXl5YYOTxifB</td>
                </tr>
                <tr>
                  <td>Bilbo Baggins</td>
                  <td>2uy1cz</td>
                  <td>02:06</td>
                  <td>4JWKXl5YYOTxifB</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div></div>
    );
  }
}

export default loginDoctor;
