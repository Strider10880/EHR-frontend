
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
      <div style={{ marginLeft : "30%" }}>
          {this.state.parab?<QrReader
          delay={300}
          onError={this.handleError}
          onScan={this.handleScan}
          style={{width: '50%'
          
        }}
        />:"Address has been registered successfully/Data has been pushed to the address succeefully"}
        
      <input className="form-control" value={this.state.result} style={{width:'100%',height:'100%'}}></input>
      <button onClick={()=>{this.setState({parab:!this.state.parab})}}>Submit</button>
      </div>
    )
  }
}
export default Test;


