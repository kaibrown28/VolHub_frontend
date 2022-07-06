// import  React, { Fragment } from "react";
import React from 'react';
import "./index.css";


//componenets
import NewProject from "./components/newProject";

import ShowProject from './components/showProject';

import NewVolunteer from './components/addVol';
import ShowVolunteer from './components/showVol';
// import editProject from "./components/editProject";
// import showroject from "./components/showProject";


function App() {
  return ( 
    <>
    <h1> Volunteer Hub</h1>
    <h3> Connecting Organizations and Volunteers</h3>
      <div className='container'>
        <NewProject />
        <ShowProject />
        {/* <EditProject /> */}
      </div>
      <div className="container">
        <NewVolunteer />
        <ShowVolunteer />
      </div>
    </>
    
  );
}

export default App;
