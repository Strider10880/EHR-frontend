import React, { Component } from "react";
import "../../style.css";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";

import QR from "./qr";
class Employee extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cam: false,
    };
  }

  render() {
    return (
      <>
        <input
          className="form-control"
          value={this.state.value}
          onChange={(e) => {
            this.setState({ value: e.target.value });
          }}
          style={{
            width: "100%",
            height: "100%",
            marginTop: "5%",
            marginBottom: "5%",
          }}
          placeholder="Enter Public Address"></input>
        <p className="text-center">OR</p>
        <button
          className="btn btn-success btn-block my-2"
          onClick={() => {
            this.setState({ cam: !this.state.cam });
          }}
        >
          {this.state.cam ? "Close QR code Scanner" : "Open QR code Scanner"}
        </button>

        <p className="my-2 text-dark">
          {" "}
          {this.state.cam ? <QR /> : "Click on button to read Qr data"}{" "}
        </p>

        <button
          onClick={() => {
            this.setState({ parab: !this.state.parab });
          }}
          className="btn btn-success my-2"
        >
          Submit
        </button>
      </>
    );
  }
}
export default Employee;
