import React, { useState } from "react";

const NewProject = () => {
  const [organization, setOrganization] = useState("");
  const [projectlead, setProjectLead] = useState("");
  const [description, setDescription] = useState("");

  const onSubmitForm = async event => {
    event.preventDefault();
    try {
      const body = { organization, description, projectlead, };
      const response = await fetch("http://localhost:3003/projects", {
        method: "POST",
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
      <h1 className="text-center mt-5">Create a Project</h1>
      <form className="d-flex mt-5" onSubmit={onSubmitForm}> 
        <input className="form-control" value={organization}onChange={event => setOrganization(event.target.value)}/>
        <input className="form-control" value={projectlead}onChange={event => setProjectLead(event.target.value)}/>
        <textarea className="form-control" value={description}onChange={event => setDescription(event.target.value)}/>
        <button className="btn btn-success">Add</button>
      </form>
    </>
  );
};

export default NewProject;