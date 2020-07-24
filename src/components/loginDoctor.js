import React from "react";
import { Link } from "react-router-dom";
import "../style.css";
import logo from "../../src/Logo.png"
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Employee from "./.cph/app";

//change data variable

let data=[
  {
    patientName: 'Bilbo Baggins',
    patientAddress: '2uy1cz',
    timestamp: '16:29',
    ipfsLink: '4JWKXl5YYOTxifB',
  },
  {
    patientName: 'Frodo Baggins',
    patientAddress: 'laj5d5',
    timestamp: '18:30',
    ipfsLink: '4JGKDl5GYOTxfefG',
  },
  {
    patientName: 'Gollum',
    patientAddress: '4fs65d',
    timestamp: '19:30',
    ipfsLink: 'dasgs5d4f6sfd56a',
  },
]
class loginDoctor extends React.Component {
  render() {
    const detail=data.map(x =>
      <tr>
        <td>{x.patientName}</td>
        <td>{x.patientAddress}</td>
        <td>{x.timestamp}</td>
        <td>{x.ipfsLink}</td>
      </tr>
      );
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
                <button type='file' className="btn btn-success btn-sm" onClick={null}>
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
                {detail}
              </tbody>
            </table>
          </div>
        </div>
      </div></div>
    );
  }
}

export default loginDoctor;
