// import  React, { Fragment } from "react";
import React from 'react';


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
