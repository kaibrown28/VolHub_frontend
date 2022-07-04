// import  React, { Fragment } from "react";
import React from 'react';


//componenets
import NewProject from "./components/newProject";

import Login from "./components/login";
import EditProject from './components/editProject';
import ShowProject from "./components/showProject";


function App() {
  return ( 
    <>
      <div className='container'>
        <Login />
        
        <NewProject />
        <ShowProject />
      </div>
    </>
    
  );
}

export default App;
