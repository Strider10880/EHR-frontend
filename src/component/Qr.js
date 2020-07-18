//isn't linked anywhere yet. needs modification


//Qr.js
import React, { Component } from 'react'
import QrReader from 'react-qr-reader'
 
class Test extends Component {
  state = {
    result: 'No result',
    parab:true,
  }
 
  handleScan = data => {
    if (data) {
      this.setState({
        result: data
      })
    }
  }
  handleError = err => {
    console.error(err)
  }
  render() {
    return (
      <div>
          {this.state.parab?<QrReader
          delay={300}
          onError={this.handleError}
          onScan={this.handleScan}
          style={{ width: '100%' }}
        />:"Address has been registered successfully/Data has been pushed to the address succeefully"}
        
      <input type="text" value={this.state.result} style={{width:'70%',height:'40%'}}></input>
      <button onClick={()=>{this.setState({parab:!this.state.parab})}}>Submit</button>
      </div>
    )
  }
}
export default Test;



//App.js
import React, { Component } from 'react'

import QR from "./Qr"
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
  <button onClick={()=>{this.setState({cam:!this.state.cam})}}>{this.state.cam?"Close QR code Scanner":"Open QR code Scanner"}</button>
     
     {this.state.cam?<QR/>:"Click on button to read Qr data"}
     
      </>
  
    );
  }
  }
export default Employee;


