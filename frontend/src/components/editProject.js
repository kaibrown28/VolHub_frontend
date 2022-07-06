import React, { useState } from "react";

const EditProject = ({ project }) => {
  const [organization, setOrganization] = useState(project.organization);
  const [projectlead, setProjectLead] = useState(project.projectlead);
  const [description, setDescription] = useState(project.description);

  
  const onEditForm = async event => {
    event.preventDefault();
    try {
      const body = { organization, description, projectlead, };
      const response = await fetch(`http://localhost:5000/projects/${project.project_id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body)
      });

      window.location = "/";
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <>
    <h1>Edit Project</h1>
      <form className="d-flex mt-5" onSubmit={onEditForm}> 
        <input className="form-control" value={organization}onChange={event => setOrganization(event.target.value)}/>
        <input className="form-control" value={projectlead}onChange={event => setProjectLead(event.target.value)}/>
        <textarea className="form-control" value={description}onChange={event => setDescription(event.target.value)}/>
        <br />
        <button className="btn btn-warning"  onClick={() => EditProject(project.project_id)}>Edit Project</button>
      </form>
    </>
  );
};

export default EditProject;