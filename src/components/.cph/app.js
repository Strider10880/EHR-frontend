import React, { Component } from 'react'
import "../../style.css";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";


import QR from "./qr"
class Employee extends Component{
  constructor(props){
    super(props);
    this.state={
      cam:false,
    }
  }
  
  
  render(){
    return(
      <>
  <button className="btn btn-success btn-block" onClick={()=>{this.setState({cam:!this.state.cam})}}>{this.state.cam?"Close QR code Scanner":"Open QR code Scanner"}</button>
     
     {this.state.cam?<QR />:"Click on button to read Qr data"}
     
      </>
  
    );
  }
  }
export default Employee;


