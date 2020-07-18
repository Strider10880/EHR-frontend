import React from 'react';
import './doctorprofile.css';
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
    patientName: 'Voldemort',
    patientAddress: '2uy1cz',
    timestamp: '02:06',
    ipfsLink: '4JWKXl5YYOTxifB'
  },
  {
    patientName: 'Aragorn',
    patientAddress: 'he4t3t',
    timestamp: '02:56',
    ipfsLink: '9X5LZSn5MBIz08K'
  },  {
    patientName: 'Eleanor Oliphant',
    patientAddress: 'var0te',
    timestamp: '05:06',
    ipfsLink: '0AAOxE7Bcl3rx3I'
  },  {
    patientName: 'Hazel Grace Lancaster',
    patientAddress: 'ttvyda',
    timestamp: '12:06',
    ipfsLink: 'sQfuUyE1GQ8dcre'
  },  {
    patientName: 'Howard Wolowitz',
    patientAddress: 'vcuud7',
    timestamp: '04:06',
    ipfsLink: 'urVJXwDrEO8J7v5'
  },
]
function DoctorProfile() {
    /*test.com is a dummy link given to resemble anchor tags.*/
  const details=dat.map(x=>
      <tr>
        <td>{x.patientName}</td>
        <td>{x.patientAddress}</td>
        <td>{x.timestamp}</td>
        <td><a href='test.com' target='_blank'>{x.ipfsLink}</a></td>
      </tr>);

  return (
    <div>
        <div className="rect">Doctor's Profile</div>
        <Navbar />
        <div className="main">
          <table>
          <tr>
              <th>Patient Name</th>
              <th>Patient Address</th>
              <th>Timestamp</th>
              <th>IPFS link </th>
          </tr>
          {details}
          </table>
        </div>
    </div>
  );
}

export default DoctorProfile;
