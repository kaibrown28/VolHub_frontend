import React, { useState } from "react";

const NewVolunteer = () => {
  const [firstname, setfirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [skills, setSkills] = useState("");
  const [interests, setInterests] = useState("");


  const onSubmitForm = async event => {
    event.preventDefault();
    try {
      const body = { firstname, lastname, skills, interests, };
      const response = await fetch("http://localhost:5000/volunteers", {
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
        <input className="form-control" placeholder="First Name" value={firstname}onChange={event => setfirstName(event.target.value)}/>
        <input className="form-control" placeholder="Last Name" value={lastname}onChange={event => setLastName(event.target.value)}/>
        <input className="form-control" placeholder="What skills do you have?"value={skills}onChange={event => setSkills(event.target.value)}/>
        <textarea className="form-control" placeholder="What volunteer projects are you looking for?" value={interests}onChange={event => setInterests(event.target.value)}/>
        <br />
        <button className="btn btn-success">Add</button>
      </form>
    </>
  );
};

export default NewVolunteer;