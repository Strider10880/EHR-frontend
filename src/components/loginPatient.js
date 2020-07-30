import React from "react";
import {  Link } from "react-router-dom";
import "../style.css";
import logo from "../../src/Logo.png"
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

//change data variable
let data=[
  {
    records: '0xb292019A5B13972b110a56A5773288DDd6D51842',
    address: '0x6BE4F4658d8c27b253C59797a791FE39d64Cf78A',
    name: 'Steven Sylvester',
    roll: 'doctor',
    timestamp: '30-07-2020'
  },
  {
    records: 'x0gjhad55',
    address: '5sadf5',
    name: 'Burke Hedges',
    roll: 'Patient',
    timestamp: '15:06'
  }
]

class loginPatient extends React.Component {
  render() {
    const detail=data.map(x => 
      <tr>
        <td><a href={"https://ipfs.infura.io/ipfs/" + x.record} target='_blank'>{x.records}</a></td>
        <td>{x.address}</td>
        <td>{x.name}</td>
        <td>{x.roll}</td>
        <td>{x.timestamp}</td>
        <td>
          <Link to={{
            pathname: '/revoke',
            state: {recRevoke: x.records}
          }}>
            <button type="button" class="btn btn-danger btn-sm" onClick={null}>
              REVOKE
            </button>
          </Link>
        </td>
        <td>
        <Link to={{
            pathname: '/permit',
            state: {recPermit: x.records}
          }}>
            <button
              type="button"
              class="btn btn-success btn-sm"
              data-toggle="modal"
              data-target="#permitModal"
              onClick={null}
            >
              PERMIT
            </button>
        </Link>
        </td>
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
        <div className="container">
          <br />
          <br />
          {/*below line is changed, style is added. */}
          <table class="table" style={{tableLayout: 'fixed', overflow: 'hidden', wordWrap: 'break-word'}}>
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
              {detail}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default loginPatient;