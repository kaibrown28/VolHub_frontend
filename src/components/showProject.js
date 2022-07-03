import React, { useState, useEffect } from "react";
import EditProject from "./editProject";


const ShowProject = () => {
//useState
    const [projects, setProjects] = useState([]);
//Asks the browser to fetch data, but wait until load to do so
    const getProjects = async () => {
    try{
        const response = await fetch(process.env.PG_HOST);
        const jsonData = await response.json()
        setProjects(jsonData);
    } catch (err) {
        console.error(err.message);
    }
  }
//fetches the project data
    useEffect(() => {
        getProjects();
  }, [])

//Delete Project function
const deleteProject = async (id) => {
    try{
        const deleteProject = await fetch(`https://volhub-backend.herokuapp.com/projects/${id}`, {
            method:"DELETE"
        });
        setProjects(projects.filter(project => project.project_id !== id ))
    } catch (err) {
        console.error(err.message)
    }
}

//Here we map our projects
  return (
    <>
      <h1 className="text-center mt-5">Project List</h1>
      {projects.map( project => (
      <div className="projectsList" key={project.project_id}> 
      <h4>Organization</h4>
      <p>{project.organization}</p>
      <h4>Project Lead</h4>
      <p>{project.projectlead}</p>
      <h4>Project Description</h4>
      <p>{project.description}</p>
      <br />

     
        <EditProject project = {project} />
      <button className="btn btn-danger"  onClick={() => deleteProject(project.project_id)}>Delete Project</button>
      <hr />
      </div>
      ))}
    </>
  );
};

export default ShowProject;