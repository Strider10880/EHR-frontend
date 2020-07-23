import React from "react";
import {  Link } from "react-router-dom";
import "../style.css";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

class loginDoctor extends React.Component {
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
          <div className="row">
            <div className="col-md-3 wrapper">
              <div id="formContent" style={{ padding: "5%" }}>
                <h3>DOCTOR'S LOGIN:</h3>
                <hr />
                <div>
                  <button className="btn btn-success btn-sm">
                    UPLOAD REPORT FILE
                  </button>
                  <br />
                  <br />
                  <input
                    className="form-control"
                    placeholder="Patient's Public Address"
                  />
                  <br />
                  <button type="submit" className="btn btn-success">
                    Submit
                  </button>
                  <br />
                  <br />
                  <p className="text-center">OR</p>
                  <button className="btn btn-success">Scan QR CODE</button>
                </div>
              </div>
            </div>
  
            <div className="col-md-7 ml-auto mr-5 wrapper">
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
        </div>
      );
    }
  }
  
export default loginDoctor;