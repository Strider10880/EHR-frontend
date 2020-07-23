import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, Link, BrowserRouter } from "react-router-dom";
import { Switch } from "react-router";
import "./style.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import loginDoctor from "./components/loginDoctor.js";
import addPatient from "./components/addPatient.js";
import addReception from "./components/addReception.js";
import addLab from "./components/addLab.js";
import addDoctor from "./components/addDoctor.js";
import Admin from "./components/Admin.js";
import superAdmin from "./components/superAdmin.js";
import loginTechnician from "./components/loginTechnician.js";
import revoke from "./components/revoke.js";
import permit from "./components/permit.js";
import loginPatient from "./components/loginPatient.js";

class application extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="=container-fluid bg-light text-dark">
          <nav className="navbar navbar-expand-sm bg-success navbar-light">
            <div
              className="nav-item active"
              style={{ color: "black", fontWeight: "bolder" }}
            >
              SIH_2020
            </div>
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to="/">
                  <a className="nav-link" style={{ color: "white !important" }}>
                    HOME
                  </a>
                </Link>
              </li>
            </ul>
          </nav>
          <div>
            <header className="text-center" style={{ padding: "5%" }}>
              <h1 className="text-success">ELECTRONIC HEALTH RECORD</h1>
              <h4>A blockchain based decentralised healthcare application</h4>
            </header>
            <br />
            <hr className="line" />
            <br />
            <br />
            <br />
          </div>
          <div
            className="row text-center my-5 "
            style={{ paddingBottom: "1%" }}
          >
            <div className="col-md-4">
              <Link to="/doctor">
                <button type="button" className="btn btn-success">
                  DOCTOR PROFILE
                </button>
              </Link>
            </div>
            <div className="col-md-4">
              <Link to="/patient">
                <button type="button" className="btn btn-success">
                  PATIENT
                </button>
              </Link>
            </div>
            <div className="col-md-4">
              <Link to="/technician">
                <button type="button" className="btn btn-success">
                  LAB PROFILE
                </button>
              </Link>
            </div>
          </div>

          <div
            className="row text-center my-5 "
            style={{ paddingBottom: "10%" }}
          >
            <div className="col-md-4">
              <Link to="/superadmin">
                <button type="button" className="btn btn-success">
                  SUPERADMIN
                </button>
              </Link>
            </div>
            <div className="col-md-4">
              <Link to="/admin">
                <button type="button" className="btn btn-success">
                  ADMIN
                </button>
              </Link>
            </div>
            <div className="col-md-4">
              <Link to="/reception/addpatient">
                <button type="button" className="btn btn-success">
                  RECEPTIONIST
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default application;

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={application} />
      <Route exact path="/doctor" component={loginDoctor} />
      <Route exact path="/patient" component={loginPatient} />
      <Route exact path="/revoke" component={revoke} />
      <Route exact path="/permit" component={permit} />
      <Route exact path="/technician" component={loginTechnician} />
      <Route exact path="/superadmin" component={superAdmin} />
      <Route exact path="/admin" component={Admin} />
      <Route exact path="/admin/adddoctor" component={addDoctor} />
      <Route exact path="/admin/addlab" component={addLab} />
      <Route exact path="/admin/addreception" component={addReception} />
      <Route exact path="/reception/addpatient" component={addPatient} />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
