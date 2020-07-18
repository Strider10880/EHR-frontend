import React from 'react';
import './patientmainpage.css';
import Navbar from './navbar.js';
/*
Enable option to just display 20-50 data at a time, navigate among the pages. 
Put sort by name, address, timestamp features. 
Put search by name feature
While sharing, share CSS file as well
*/

/*below is a dummy data set. We have to remove it for the actual data*/

let dat=[
  {
    record: 'abracadabra',
    address: '2uy1cz',
    name: 'Voldemort',
    role: 'patient',
    timestamp: '02:06',
  }
]

function PatientMainPage() {
  const details=dat.map(x=>
      <tr>
        <td>{x.record}</td>
        <td>{x.address}</td>
        <td>{x.name}</td>
        <td>{x.role}</td>
        <td>{x.timestamp}</td>
        <td><button>revoke</button></td>
        <td><button>permit</button></td>
      </tr>);
  return (
    <div>
        <div className="rect">Patient's main page</div>
        <Navbar/>
        <div className="main">
          <table>
          <tr>
              <th>Records</th>
              <th>Address</th>
              <th>Name</th>
              <th>Role</th>
              <th>Timestamp</th>
              <th>Revoke</th> {/*Revoke and permit will be a button which will lead to revoke or permit dialog box. Convert the corresponding page to a dialog box.
              */}
              <th>Permit</th>
          </tr>
          {details}
          </table>
        </div>
    </div>
  );
}

export default PatientMainPage;
