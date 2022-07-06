import React, { useState } from "react";

const NewVolunteer = () => {
  const [firstName, setfirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [skills, setSkills] = useState("");
  const [interests, setInterests] = useState("");


  const onSubmitForm = async event => {
    event.preventDefault();
    try {
      const body = { firstName, lastName, skills, interests, };
      const response = await fetch("localhost:5000/projects", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body)
      });

    
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <>
      <h1 className="text-center mt-5">Add Your Profile</h1>
      <form className="d-flex mt-5" onSubmit={onSubmitForm}> 
        <input className="form-control" value={firstName}onChange={event => setfirstName(event.target.value)}/>
        <input className="form-control" value={lastName}onChange={event => setLastName(event.target.value)}/>
        <input className="form-control" value={skills}onChange={event => setSkills(event.target.value)}/>
        <textarea className="form-control" value={interests}onChange={event => setInterests(event.target.value)}/>
        <button className="btn btn-success">Add</button>
      </form>
    </>
  );
};

export default NewVolunteer;