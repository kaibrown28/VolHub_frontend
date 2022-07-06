import React, { useState, useEffect } from "react";



const ShowVolunteer = () => {
//useState
    const [volunteers, setVolunteers] = useState([]);
//Asks the browser to fetch data, but wait until load to do so
    const getVolunteers = async () => {
    try{
        const response = await fetch("http://localhost:5000/volunteers");
        const jsonData = await response.json()
        setVolunteers(jsonData);
    } catch (err) {
        console.error(err.message);
    }
  }
//fetches the project data
    useEffect(() => {
        getVolunteers();
  }, [])

//Delete Project function
const deleteVolunteer = async (id) => {
    try{
        const deleteVolunteer= await fetch(`localhost:5000/volunteers/${id}`, {
            method:"DELETE"
        });
        setVolunteers(volunteers.filter(volunteer => volunteer.volunteer_id !== id ))
    } catch (err) {
        console.error(err.message)
    }
}

//Here we map our projects
  return (
    <>
      <h1 className="text-center mt-5">Volunteer Pool</h1>
      {volunteers.map( volunteer => (
      <div className="volunteerList" key={volunteer.volunteer_id}> 
      <img className="volImg"></img>
      <h4>First Name</h4>
      <p>{volunteer.firstname}</p>
      <h4>Last Name</h4>
      <p>{volunteer.lastname}</p>
      <h4>Your Skills</h4>
      <p>{volunteer.skills}</p>
      <h4>Your Interests</h4>
      <p>{volunteer.interest}</p>
      <br />

      <button className="btn btn-danger"  onClick={() => deleteVolunteer(volunteer.volunteer_id)}>Remove Profile</button>
      <hr />
      </div>
      ))}
    </>
  );
};

export default ShowVolunteer;