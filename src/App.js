import React from 'react';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import DoctorProfile from './component/doctorprofile.js';
import LabProfile from './component/labprofile.js';
import PatientMainPage from './component/patientmainpage.js';
import Navbar from './component/navbar.js';
import Home from './component/home.js'

class App extends React.Component{
  render(){
    return(
      <Router>
        <Navbar/>
        <Switch>
          <Route exact path='/' component={Home}></Route> 
          <Route exact path='/labprofile' component={LabProfile}></Route> 
          <Route exact path='/doctorprofile' component={DoctorProfile}></Route>
          <Route exact path='/patientmainpage' component={PatientMainPage}></Route> 
        </Switch>
      </Router>
    );
  }
}

export default App;
